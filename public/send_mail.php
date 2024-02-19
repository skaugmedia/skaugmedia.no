<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$callback = $_POST['callback'];

$method = 'POST';
$mime = "application/x-www-form-urlencoded";

class CodedError extends Exception {
	public $errorCode;

	public function __construct($errorCode, $message = '') {
		parent::__construct($message);
		$this->errorCode = $errorCode;
	}
}

function assertValidName($val) {
	if (!preg_match("#^[-a-zA-Z0-9éèÉÈäöæøåÄÖÆØÅ._ ]+$#", $val)) {
		throw new CodedError('invalid:name', 'Ugyldig navn');
	}
}
function assertValidEmail($val) {
	if (!preg_match("#^[-a-zA-Z0-9.@+!=()_:]+$#", $val)) {
		throw new CodedError('invalid:email', 'Ugyldig e-post');
	}
}
function assertValidPhone($val) {
	if (!preg_match("#^\+?\d+$#", $val)) {
		throw new CodedError('invalid:phone', 'Ugyldig telefonnummer');
	}
}
function assertValidMessage($val) {
	if (!is_string($val) or $val === '' or strlen($val) > 500) {
		throw new CodedError('invalid:message', 'Ugyldig melding');
	}
}

function request($method, $url, $headers, $data) {
	$ch = curl_init();

	curl_setopt_array($ch, [
		CURLOPT_HTTPHEADER => $headers,
		CURLOPT_POST => $method === 'POST',
		CURLOPT_POSTFIELDS => $data,
		CURLOPT_URL => $url,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_CONNECTTIMEOUT => 5,
	]);
	$response = curl_exec($ch);
	$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	curl_close($ch);
	if ($status < 200 || $status >= 300) {
		throw new CodedError('internal:request-failed', "Received non-OK response code on POST to $url: $status, $response");
	}

	return $response;
}

function hasCode($expected, $codes) {
	return count(array_filter($codes, function($code) {
		return $code === $expected;
	})) > 0;
}

function isTimeoutOrDuplicate($codes) {
	return hasCode('timeout-or-duplicate', $codes);
}

function isInvalidInputResponse($codes) {
	return hasCode('invalid-input-response', $codes);
}

function sendMail($vars) {
	$name = $vars['name'];
	$email = $vars['email'];
	$phone = $vars['phone'];
	$message = $vars['message'];
	$res = mail(
		"contact@skaugmedia.no",
		"Tilbakemelding fra skaugmedia.no",
		"Melding fra $name <$email><$phone>:\n\n$message",
		[
			"From" => "Tilbakemeldingsskjema <contact@skaugmedia.no>",
			"Reply-To" => "$name <$email>",
		],
	);
	if (!$res) {
		throw new CodedError('internal:email-failed', 'Failed to send Email');
	}
}

try {
	assertValidEmail($email);
	assertValidName($name);
	assertValidPhone($phone);
	assertValidMessage($message);
	sendMail([
		"name" => $name,
		"phone" => $phone,
		"email" => $email,
		"message" => $message,
	]);
	header("Location: $callback?sent");
} catch (Exception $e) {
	$url = "$callback?err&{$e->errorCode}";
	header("Location: $url");
}

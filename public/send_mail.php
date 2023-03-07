<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Should contain the secret "RECAPTCHA_KEY", which is the server-side ReCaptcha
// secret used to verify the ReCaptcha token passed from the frontend.
require_once 'secrets.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = $_POST['g-recaptcha-response'];
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

$invalidName = 'invalid:name';
$invalidEmail = 'invalid:email';
$invalidPhone = 'invalid:phone';
$invalidMessage = 'invalid:message';
$invalidToken = 'invalid:token';
$internalRequestFailed = 'internal:request-failed';
$internalTokenVerificationRequestFailed = 'internal:token-verification:request-failed';
$invalidTokenExpirationOrDuplicate = 'invalid:token-expired-or-duplicate';
$internalTokenVerificationUnknown = 'internal:token-verification:unknown';
$invalidTokenForDifferentDomain = 'invalid:token-for-different-domain';
$internalEmailFailed = 'internal:email-failed';

function assertValidName($val) {
	if (!preg_match("#^[-a-zA-Z0-9éèÉÈäöæøåÄÖÆØÅ._ ]+$#", $val)) {
		throw new CodedError($invalidName, 'Ugyldig navn');
	}
}
function assertValidEmail($val) {
	if (!preg_match("#^[-a-zA-Z0-9.@+!=()_:]+$#", $val)) {
		throw new CodedError($invalidEmail, 'Ugyldig e-post');
	}
}
function assertValidPhone($val) {
	if (!preg_match("#^+?\d+$", $val)) {
		throw new CodedError($invalidPhone, 'Ugyldig telefonnummer');
	}
}
function assertValidMessage($val) {
	if (is_string($val) && $val !== '' && strlen($val) < 500) {
		throw new CodedError($invalidMessage, 'Ugyldig melding');
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
		throw new CodedError($internalRequestFailed, "Received non-OK response code on POST to $url: $status, $response");
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

function verifyToken($RECAPTCHA_KEY, $ip, $token) {
	$body = http_build_query([
		'secret' => $RECAPTCHA_KEY,
		'response' => $token,
		'remoteip' => $ip,
	]);
	$headers = [
		'Content-Type' => 'application/x-www-form-urlencoded',
		'Content-Length' => strlen($body),
	];
	$result = request(
		'GET',
		'https://www.google.com/recaptcha/api/siteverify',
		$headers,
		$body
	);
	if (!is_string($result) || $result === '') {
		throw new CodedError($internalTokenVerificationRequestFailed, 'Request failed when verifying token');
	}
	$response = json_decode($result, true);

	if (!$response['success']) {
		$errorCodes = $response['error-codes'];
		if (isInvalidInputResponse($errorCodes)) {
			throw new CodedError($invalidToken, 'ReCaptcha token is invalid');
		}
		if (isTimeoutOrDuplicate($errorCodes)) {
			throw new CodedError($invalidTokenExpirationOrDuplicate, 'ReCaptcha token has expired or is a duplicate');
		}
		$codes = implode(", ", $response['error-codes']);
		throw new CodedError($internalTokenVerificationUnknown, "Token verification failed: $codes");
	}

	if (!str_ends_with($response['hostname'], 'skaugmedia.no')) {
		throw new CodedError($invalidTokenForDifferentDomain, "Token meant for different domain: {$response['hostname']}");
	}

	return $response;
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
		"From: Tilbakemeldingsskjema <contact@skaugmedia.no>"
	);
	if (!$res) {
		throw new CodedError($internalEmailFailed, 'Failed to send Email');
	}
}

try {
	assertValidEmail($email);
	assertValidName($name);
	assertValidPhone($phone);
	assertValidMessage($message);
	verifyToken($RECAPTCHA_KEY, $_SERVER['REMOTE_ADDR'], $token);
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

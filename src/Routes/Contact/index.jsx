import { useEffect, useRef } from "react";
import classNames from "classnames";
import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./Contact.css";
import pageName from "./PageName";

import Contact_Img from "../../Images/Contact/LO_2.jpg";
import { Input } from "../../Components/Input";

export function Contact() {
  useDocumentTitle(pageName);
  const queries = new URLSearchParams(window.location.search);
  const isSent = queries.has("sent");
  const isErr = queries.has("err");
  const isInvalidName = queries.has("invalid:name");
  const isInvalidPhone = queries.has("invalid:phone");
  const isInvalidEmail = queries.has("invalid:email");
  const isInvalidMessage = queries.has("invalid:message");
  const isInvalidToken = queries.has("invaid:token");
  const isTokenExpiredOrDuplicate = queries.has(
    "invalid:token-expired-or-duplicate",
  );
  const resultMessage = (() => {
    switch (true) {
      case isSent:
        return "Din melding har blitt sendt.";
      case isErr && isInvalidName:
        return "Ugyldig navn.";
      case isErr && isInvalidPhone:
        return "Ugyldig telefonnummer.";
      case isErr && isInvalidEmail:
        return "Ugyldig e-postadresse.";
      case isErr && isInvalidMessage:
        return "Ugyldig meldingstekst.";
      case isErr && isInvalidToken:
        return "Ugyldig ReCaptcha. Vennligst gjennomfør ReCaptcha.";
      case isErr && isTokenExpiredOrDuplicate:
        return "ReCaptcha utløp, eller har allerede blitt brukt. Vennligst gjennomfør ReCaptcha på nytt.";
      default:
        return "En ukjent feil oppstod. Meldingen ble ikke sendt.";
    }
  })();
  const showResults = isSent || isErr;

  const reCaptcha = useRef();
  useEffect(() => {
    try {
      window.grecaptcha.render(reCaptcha.current);
    } catch (e) {}
  });

  const results = showResults ? (
    <div
      className={classNames("Contact__Result", {
        "Contact__Result--Error": isErr,
      })}
    >
      {resultMessage}
    </div>
  ) : (
    ""
  );

  return (
    <PageSection>
      <div className="Contact__RowBox">
        <div className="Contact__ImgBox">
          <img
            className="Contact__Img"
            src={Contact_Img}
            alt="Bilde av et ettårig barn"
          ></img>
        </div>
        <div className="Contact__FormBox">
          <form className="Contact__Form" action="/send_mail.php" method="POST">
            <DesignHeading className="Contact__Heading">
              {pageName}
            </DesignHeading>
            <div className="Contact__Text">
              Har du spørsmål til meg eller ønsker å booke fotografering? Ta
              gjerne kontakt med meg gjennom dette skjemaet, og skriv litt om
              hva henvendelsen gjelder i meldingsfeltet.
            </div>

            <Input
              name="name"
              label="Navn"
              required
              minLength={2}
              type="text"
              placeholder="Navn Navnesen"
              title="navn"
            />

            <Input
              name="phone"
              label="Telefonnummer"
              type="tel"
              pattern="((\+|00)47)?[24689][0-9]{7}"
              placeholder="12345678"
              title="telefonnummer"
              required
            />

            <Input
              label="E-post"
              name="email"
              type="text"
              pattern="\S+@\S+\.\S+"
              title="e-post"
              required
              placeholder="navn.navnesen@epost.com"
            />

            <Input
              placeholder="Skriv din tekst her"
              name="message"
              label="Melding"
              area={true}
              minLength={3}
              required
            />

            <div
              ref={reCaptcha}
              className="g-recaptcha"
              data-sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
            />

            <input
              type="hidden"
              name="callback"
              value="https://www.ninaskaug.no/kontakt"
            />

            <Button className="Contact__SubmitButton" type="submit">
              Send
            </Button>
            {results}
          </form>
        </div>
      </div>
    </PageSection>
  );
}

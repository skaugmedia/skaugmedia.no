import { useEffect, useRef } from "react";
import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./Contact.css";
import pageName from "./PageName";

import Contact_Img from "../../Images/Contact/LO_2.jpg";

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
    "invalid:token-expired-or-duplicate"
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

  return (
    <>
      <PageSection className="container relative">
        <div className="Contact__RowBox">
          <div className="Contact__ImgBox">
            <img
              className="Contact__Img"
              src={Contact_Img}
              alt="Bilde av et ettårig barn"
            ></img>
          </div>
          <div className="Contact__FormBox">
            <form className="form" action="/send_mail.php" method="POST">
              <div className="contact">
                <div className="contact-content">
                  <DesignHeading className="contact-heading">
                    {pageName}
                  </DesignHeading>
                </div>
                <div className="contact-text">
                  Har du spørsmål til meg eller ønsker å booke fotografering? Ta
                  gjerne kontakt med meg gjennom dette skjemaet, og skriv litt
                  om hva henvendelsen gjelder i meldingsfeltet.
                </div>
              </div>
              <label htmlFor="name" className="form-titles">
                Navn
              </label>

              <input
                className="form-box name"
                placeholder="Navn Navnesen"
                type="text"
                id="name"
                name="name"
                minLength={2}
                title="navn"
                required
              />

              <label htmlFor="phone" className="form-titles">
                Telefonnummer
              </label>

              <input
                className="form-box phonenumber"
                placeholder="12345678"
                type="tel"
                id="phonenumber"
                name="phone"
                pattern="((\+|00)47)?[24689][0-9]{7}"
                title="telefonnummer"
                required
              />

              <label htmlFor="email" className="form-titles">
                E-post
              </label>

              <input
                className="form-box email"
                placeholder="navn.navnesen@epost.com"
                type="text"
                id="email"
                name="email"
                pattern="\S+@\S+\.\S+"
                title="e-post"
                required
              />

              <label htmlFor="message" className="form-titles">
                Melding
              </label>

              <textarea
                className="form-box message"
                placeholder="Skriv din tekst her"
                id="message"
                name="message"
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

              <Button className="send-button" type="submit">
                Send
              </Button>

              {showResults && (
                <div
                  className={`contact-result ${
                    isErr ? "contact-result-error" : ""
                  }`}
                >
                  {resultMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </PageSection>
    </>
  );
}

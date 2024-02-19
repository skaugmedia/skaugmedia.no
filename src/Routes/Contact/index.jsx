import classNames from "classnames";
import { useLocation } from "react-router-dom";
import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Input } from "../../Components/Input";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import Contact_Img from "../../Images/Contact/LO_2.jpg";
import "./Contact.css";
import pageName from "./PageName";

export function Contact() {
  const location = useLocation();
  const queries = new URLSearchParams(window.location.search);
  const isSent = queries.has("sent");
  const isErr = queries.has("err");
  const isInvalidName = queries.has("invalid:name");
  const isInvalidPhone = queries.has("invalid:phone");
  const isInvalidEmail = queries.has("invalid:email");
  const isInvalidMessage = queries.has("invalid:message");
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
      default:
        return "En ukjent feil oppstod. Meldingen ble ikke sendt.";
    }
  })();
  const showResults = isSent || isErr;

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
      <SkaugHelmet
        title={pageName}
        description="Kontaktskjema for å komme i kontakt med Skaug Media"
        canonical={location.pathname}
      />
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

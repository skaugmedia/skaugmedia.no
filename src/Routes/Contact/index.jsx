import "./Contact.css";
import { PageSection } from "../../Components/PageSection";
import DesignHeading from "../../Components/Headings/DesignHeading";

export const route = "kontakt";
export const pageName = "Kontakt";

export function Contact() {
  return (
    <PageSection innerClassName="contact">
      <div className="contact-content">
        <DesignHeading className="contact-heading">{pageName}</DesignHeading>
      </div>
      <div className="contact-text">
        Har du spørsmål eller ønsker å booke meg? Ta kontakt med meg gjennom
        dette skjemaet eller kontakt meg per telefon eller e-post.
      </div>
    </PageSection>
  );
}

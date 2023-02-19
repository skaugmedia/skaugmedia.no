import "./Contact.css";
import { PageSection } from "../../Components/PageSection";
import DesignHeading from "../../Components/Headings/DesignHeading";
import skaugmedia from "../../Images/skaugmedia.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import tiktok from "../../Images/tiktok.png";
import etsy from "../../Images/etsy.png";
import pageName from "./PageName";

export function Contact() {
  return (
    <>
      <PageSection innerClassName="contact">
        <div className="contact-content">
          <DesignHeading className="contact-heading">{pageName}</DesignHeading>
        </div>
        <div className="contact-text">
          Har du spørsmål eller ønsker å booke meg? Ta kontakt med meg gjennom
          dette skjemaet eller kontakt meg per telefon eller e-post.
        </div>
      </PageSection>
      <div className="contact-info-box">
        <div className="contact-info-content">
          <div className="contact-info-title">Kontaktinfo</div>
          <div className="contact-info">
            Nina Merethe Skaug
            <br />
            kontakt@skaugmedia.no
            <br />
            +47 464 18 241
          </div>
          <div className="contact-social-icon">
            <a>
              <img className="contact-icon" src={facebook} alt="Facebook"></img>
            </a>
            <a>
              <img
                className="contact-icon"
                src={instagram}
                alt="Instagram"
              ></img>
            </a>
            <a>
              <img className="contact-icon" src={tiktok} alt="Tiktok"></img>
            </a>
            <a>
              <img className="contact-icon" src={etsy} alt="Etsy"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

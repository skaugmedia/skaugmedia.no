import "./Contact.css";
import { PageSection } from "../../Components/PageSection";
import DesignHeading from "../../Components/Headings/DesignHeading";
import skaugmedia from "../../Images/skaugmedia.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import tiktok from "../../Images/tiktok.png";
import etsy from "../../Images/etsy.png";
import pageName from "./PageName";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export function Contact() {
  return (
    <>
      <PageSection className="container">
        <form className="form">
          <div className="contact">
            <div className="contact-content">
              <DesignHeading className="contact-heading">
                {pageName}
              </DesignHeading>
            </div>
            <div className="contact-text">
              Har du spørsmål eller ønsker å booke meg? Ta kontakt med meg
              gjennom dette skjemaet eller kontakt meg per telefon eller e-post.
            </div>
          </div>
          <label for="name" className="form-titles">
            Navn
          </label>

          <input
            className="form-box name"
            placeholder="Navn Navnesen"
            type="text"
            id="name"
            name="name"
          />

          <label for="phonenumber" className="form-titles">
            Telefonnummer
          </label>

          <input
            className="form-box phonenumber"
            placeholder="12345678"
            type="text"
            id="phonenumber"
            name="phonenumber"
          />

          <label for="email" className="form-titles">
            E-post
          </label>

          <input
            className="form-box email"
            placeholder="navn.navnesen@epost.com"
            type="text"
            id="email"
            name="email"
          />

          <label for="message" className="form-titles">
            Melding
          </label>

          <textarea
            className="form-box message"
            placeholder="Skriv din tekst her"
            id="message"
            name="message"
          />

          <Button className="send-button" type="submit">
            Send
          </Button>
        </form>
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
            <Link to="https://www.facebook.com/profile.php?id=100089990337611">
              <img className="contact-icon" src={facebook} alt="Facebook"></img>
            </Link>
            <Link to="https://www.instagram.com/skaugmedia/">
              <img
                className="contact-icon"
                src={instagram}
                alt="Instagram"
              ></img>
            </Link>
            <Link to="https://www.tiktok.com/@skaugmedia?_t=8a92nGlyw7N&_r=1">
              <img className="contact-icon" src={tiktok} alt="Tiktok"></img>
            </Link>
            <Link to="https://www.etsy.com/shop/SkaugMedia?ref=search_shop_redirect">
              <img className="contact-icon" src={etsy} alt="Etsy"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

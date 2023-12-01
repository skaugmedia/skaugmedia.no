import { NavLink, useLoaderData } from "react-router-dom";
import { ActionButton } from "../../Components/ActionButton";
import { ImageSection } from "../../Components/ImageSection";
import { PageSection } from "../../Components/PageSection";
import { FreePregnancyDate } from "../../Data/FreePregnancyDate";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import OneYearDiscount from "../../Images/1-year-photo.jpg";
import DiscountHeaderImg from "../../Images/Discounts/discount.png";
import cover from "../../Images/coverphoto.jpg";
import freePregnancyShoot from "../../Images/free_pregnancy_shoot.jpg";
import newbornDiscount from "../../Images/newborn_offer.jpg";
import quotepng from "../../Images/quote_icon.png";
import * as presentables from "/src/Data/presentables";
import ContactRoute from "/src/Routes/Contact/Route";
import DiscountRoute from "/src/Routes/Discounts/Route";

import "./Home.css";
import pageName from "./PageName";

export function Home() {
  useDocumentTitle(pageName);
  const { recentWorks } = useLoaderData();

  return (
    <>
      <div
        className="Home__DiscountHeader"
        style={{ backgroundImage: `url(${DiscountHeaderImg})` }}
      >
        <div className="Home__DiscountHeaderBox">
          <div className="Home__DiscountHeaderTextBox">
            <div className="Home__DiscountHeaderHeader">-30% rabatt</div>
            <div className="Home__DiscountHeaderSubHeader">
              på bryllupspakke 1 og 2 for de første 3 brudeparene som booker
            </div>
            <div className="Home__DiscountHeaderText">
              Dette gjelder bryllup i 2023 og 2024, og gjelder ikke om du har en
              kontrakt med en annen fotograf. (Kontrakt må være signert og
              reservasjonsbeløpet må være betalt for at bookingen skal være i
              orden.)
              <br />
              <br />
              Jeg trenger mer erfaring med bryllupsfotografering, og ønsker
              derfor å fylle opp min portefølje med flere bryllupsbilder. Det
              lurt å ta kontakt tidlig, da dette er et godt tilbud.
            </div>
            <NavLink
              to={`/${ContactRoute}`}
              className="Home__DiscountHeaderButton"
            >
              Book nå
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className="top-cover-img"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Familiefotografering"
      >
        <div className="top-cover-text-box">
          <div className="cover-headertext">SKAUG MEDIA</div>
          <div className="cover-text">
            Fotograf og grafisk designer på Jessheim
          </div>
        </div>
      </div>
      <PageSection outerClassName="myquote-outer" innerClassName="myquote">
        <div className="quote-section">
          <img className="quote-left-png" src={quotepng} alt="Quote icon"></img>
          <div className="quote-text">
            Jeg fokuserer på å få frem de magiske øyeblikkene og jeg er opptatt
            av at alle skal ha en fin opplevelse foran kamera.
          </div>
          <img
            className="quote-right-png"
            src={quotepng}
            alt="Quote icon"
          ></img>
        </div>
      </PageSection>
      <PageSection>
        <div className="Home__IncludedSection">
          <div className="Home__IncludesText">
            Alle fotograferinger inkluderer 3 digitale bildefiler
          </div>
          <div className="Home__IncludesSubtext">
            (med unntak av bryllupsfotografering, mitt første år-fotografering
            og gratis gravidfotografering)
          </div>
        </div>
      </PageSection>
      <PageSection outerClassName="works-outer" innerClassName="works">
        <div className="Home__WorksTitle">Nylige arbeider</div>

        <ImageSection
          images={recentWorks}
          imageClassName="Home__ImageSectionImage"
        />
      </PageSection>

      <PageSection
        outerClassName="regular-discounts-outer"
        innerClassName="regular-discounts"
      >
        <div className="free-pregnancy-row">
          <div className="free-pregnancy-textbox">
            <div className="free-pregnancy-header">HVER MÅNED</div>
            <div className="free-pregnancy-sub-header">
              GRATIS MINIFOTOGRAFERING AV GRAVIDE
            </div>
            <div className="free-pregnancy-next-date">
              Neste ledige dato: {FreePregnancyDate}
            </div>
            <div className="free-pregnancy-text">
              Hver måned setter jeg av en dato der jeg tilbyr GRATIS utendørs
              minifotografering av gravide som er i uke 30-36 av svangerskapet.
              Fotograferingen vil foregå på en utendørs lokasjon på Jessheim.
              <br />
              <br />
              Det er begrenset med kapasitet, så book tidlig!
            </div>
            <ActionButton to={DiscountRoute}>Les mer her</ActionButton>
          </div>
          <img
            className="free-pregnancy-img"
            src={freePregnancyShoot}
            alt="Gratis minifotografering av gravide"
          ></img>
        </div>

        <div className="Home__DiscountSection">
          <div className="Home__Discount_NewbornSquare">
            <img
              className="Home__Discount_NewbornImg"
              src={newbornDiscount}
              alt="50% avslag på nyfødtfotografering"
            ></img>
            <div className="Home__Discount_NewbornTextBox">
              <div className="Home__Discount_NewbornHeader">ALLTID</div>
              <div className="Home__Discount_NewbornSubHeader">50%</div>
              <div className="Home__Discount_NewbornText">
                avslag på nyfødtfotografering,
                <br /> etter ordinær gravidfotografering
              </div>
              <ActionButton to={ContactRoute}>Book her</ActionButton>
            </div>
          </div>

          <div className="Home__Discount_OneYearSquare">
            <img
              className="Home__Discount_OneYearImg"
              src={OneYearDiscount}
              alt="50% avslag på nyfødtfotografering"
            ></img>
            <div className="Home__Discount_OneYearTextBox">
              <div className="Home__Discount_OneYearHeader">ALLTID</div>
              <div className="Home__Discount_OneYearSubHeader">50%</div>
              <div className="Home__Discount_OneYearText">
                avslag på 1-års fotografering,
                <br /> etter nyfødtfotografering
              </div>
              <ActionButton to={ContactRoute}>Book her</ActionButton>
            </div>
          </div>
        </div>

        {/* 
        <div className="newborn-discount-row">
          <img
            className="newborn-discount-img"
            src={newbornDiscount}
            alt="50% avslag på nyfødtfotografering"
          ></img>
          <div className="newborn-discount-textbox">
            <div className="newborn-discount-header">ALLTID</div>
            <div className="newborn-discount-sub-header">50%</div>
            <div className="newborn-discount-text">
              avslag på nyfødtfotografering, etter ordinær gravidfotografering
            </div>
          </div>
        </div> */}
      </PageSection>

      {/* <PageSection>
        <div className="Home__NewsletterSection">
          <div className="Home__NewsletterHeader">Nyhetsbrev</div>
          <div className="Home__NewsletterText">
            Meld deg på for informasjon om fotograferinger, kampanjer og
            konkurranser.
          </div>
          <div className="Home__NewsletterSignupBox">
            <form>
              <label className="Home__NewsletterBoxHeader" for="Email">
                E-postadresse
              </label>
              <input
                className="Home__NewsletterEmail"
                placeholder="ola.nordmann@example.com"
                name="Email"
              ></input>
            </form>

            <Button className="Home__NewsletterButton" type="submit">
              Meld meg på
            </Button>
          </div>
        </div>
      </PageSection>
 */}
      <PageSection>
        <h2 className="Home__Photography">Fotografi</h2>
        <ImageSection
          images={presentables.photography}
          className="Home__PhotographyImageSection"
          imageClassName="Home__PhotographyImageSection__Image Home__ImageSectionImage"
        />
      </PageSection>
      <PageSection outerClassName="myquote-outer" innerClassName="myquote">
        <div className="quote-section">
          <img className="quote-left-png" src={quotepng} alt="Quote icon"></img>
          <div className="quote-text">
            Som designer er jeg leken og eksperimentell, samtidig som jeg
            foretrekker rette linjer og et stramt gridsystem.
          </div>
          <img
            className="quote-right-png"
            src={quotepng}
            alt="Quote icon"
          ></img>
        </div>
      </PageSection>
      <PageSection>
        <h2 className="Home__Graphical">Grafisk Design</h2>
        <ImageSection
          images={presentables.graphicalDesign}
          imageClassName="Home__GraphicalImageSection__Image Home__ImageSectionImage"
        />
      </PageSection>

      {/* <PageSection
        outerClassName="skaugmedia-outer"
        innerClassName="skaugmedia"
      >
        <div className="flex-container">
          <div className="flex-child about-image-container">
            <img
              className="round-nina"
              src={ninaforside}
              alt="Nina Merethe Skaug"
            ></img>
          </div>
          <div className="flex-child text-container">
            <div className="skaugmedia-overskrift">Skaug Media</div>
            <div className="nina-text">
              Jeg heter Nina Merethe Skaug, er mamma, fotograf og grafisk
              designer. Jeg elsker å være kreativ, og brenner for å skape flotte
              bilder og design, både til privat og bedrifter. Jeg holder til på
              Jessheim i Ullensaker kommune, men fotograferer over hele Oslo,
              Romerike og omegn.
            </div>
            <ButtonLink to={AboutRoute} className="lesmer-button">
              Les mer
            </ButtonLink>
          </div>
        </div>
      </PageSection>*/}
    </>
  );
}

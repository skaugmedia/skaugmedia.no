import classNames from "classnames";
import { NavLink, useLoaderData } from "react-router-dom";
import { Image } from "../../Components/Image";
import * as presentables from "/src/Data/presentables";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import oneDiscount from "../../Images/1-year-photo.jpg";
import cover from "../../Images/coverphoto.jpg";
import freePregnancyShoot from "../../Images/free_pregnancy_shoot.jpg";
import { ImageSection } from "../../Components/ImageSection";
import newbornDiscount from "../../Images/newborn_offer.jpg";
import quotepng from "../../Images/quote_icon.png";

import "./Home.css";
import classes from "./Home.module.css";
import pageName from "./PageName";

export function Home() {
  useDocumentTitle(pageName);
  const { recentWorks } = useLoaderData();

  return (
    <>
      {/* <MiniSession
        image={<MiniSessionImage src={siblingimg} alt="Søskenfotografering" />}
        category="Minifotografering"
        title="Søsken"
        price={kr(1000)}
        when="Kun fotograferinger i april."
        link={`${PricesRoute}#${ids.miniSessionSiblings}`}
        classNames={{
          outer: classes.miniSessionSiblingOuter,
          category: classes.miniSessionSiblingCategory,
          price: classes.miniSessionSiblingPrice,
          link: classes.miniSessionSiblingLink,
        }}
      />
      <MiniSession
        image={
          <MiniSessionImage
            src={confirmationimg}
            alt="Konfirmantfotografering"
          />
        }
        category="Minifotografering"
        title="Konfirmant"
        price={kr(1000)}
        when="Kun fotograferinger 20. mai 2023."
        link={`${PricesRoute}#${ids.miniSessionConfirmation}`}
        classNames={{
          outer: classes.miniSessionConfirmationOuter,
          category: classes.miniSessionConfirmationCategory,
          price: classes.miniSessionConfirmationPrice,
          link: classes.miniSessionConfirmationLink,
        }}/>*/}

      {/* <PageSection outerClassName="minisession-confirmation-outer">
        <div className="minisession-confirmation-whitebox">
          <img
            className="minisession-img"
            src={confirmationimg}
            alt="Konfirmantfotografering"
          ></img>

          <div className="minisession-confirmation-minisessiontext">
            Minifotografering
          </div>
          <div className="minisession-confirmation-heading">Konfirmant</div>
          <div className="minisession-confirmation-price">Kr. 1000,-</div>
          <div className="minisession-confirmation-when">
            Kun fotograferinger 20. mai 2023
          </div>
        </div>
      </PageSection> */}

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
      <PageSection outerClassName="works-outer" innerClassName="works">
        <ImageSection images={recentWorks} />
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
              Neste ledige dato: 04-09.2023
            </div>
            <div className="free-pregnancy-text">
              Hver måned setter jeg av en dato der jeg tilbyr GRATIS utendørs
              minifotografering av gravide som er i uke 30-36 av svangerskapet.
              Fotograferingen vil foregå ved Nordbytjernet på Jessheim.
              <br />
              <br />
              Det er begrenset med kapasitet, så book tidlig!
            </div>
          </div>
          <img
            className="free-pregnancy-img"
            src={freePregnancyShoot}
            alt="Gratis minifotografering av gravide"
          ></img>
        </div>

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
        </div>
        <div className="one-discount-row">
          <div className="one-discount-textbox">
            <div className="one-discount-header">ALLTID</div>
            <div className="one-discount-sub-header">50%</div>
            <div className="one-discount-text">
              avslag på 1-års fotografering, etter nyfødtfotografering
            </div>
          </div>
          <img
            className="one-discount-img"
            src={oneDiscount}
            alt="50% avslag på 1-års fotografering"
          ></img>
        </div>
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
        <h2>Fotografi</h2>
        <ImageSection images={presentables.photography} />
      </PageSection>

      <PageSection>
        <h2>Grafisk Design</h2>
        <ImageSection images={presentables.graphicalDesign} />
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

import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./Lashbrowser.css";
import pageName from "./PageName";
import giftcard from "/src/Data/Business/GraphicalDesign/LashBrowser/Images/gavekort.jpg";
import instagram from "/src/Data/Business/GraphicalDesign/LashBrowser/Images/instagram_1.jpg";
import cover from "/src/Data/Business/GraphicalDesign/LashBrowser/Images/logo_mockup.jpg";
import pricelist from "/src/Data/Business/GraphicalDesign/LashBrowser/Images/prisliste_standing.jpg";
import businesscards from "/src/Data/Business/GraphicalDesign/LashBrowser/Images/visittkort.jpg";
import ContactRoute from "/src/Routes/Contact/Route";

export function Lashbrowser() {
  const location = useLocation();
  return (
    <div className="LashBrowser">
      <SkaugHelmet
        title={pageName}
        description="En del av min portefølje, som viser arbeidet jeg har gjort for bedriften LashBrowser."
        canonical={location.pathname}
      />
      <div
        className="LashBrowser_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="LashBrowser logo"
      ></div>
      <PageSection
        outerClassName="LashBrowser__Outer"
        innerClassName="LashBrowser__Inner"
      >
        <DesignHeading h1>LashBrowser</DesignHeading>
        <div className="LashBrowser__Box">
          <div className="LashBrowser__Text">
            <p>
              LashBrowser er en bedrift som utfører Brynslaminering, Vippeløft,
              Make-up og andre ting innen vipper og bryn. Bedriften var opptatt
              av å få frem essensen av hva de jobber med, derfor var det
              naturlig å bruke vipper og bryn i logoen og designet generelt. Ved
              utvidelse til egen salong, trengte bedriften ulike forskjellige
              design knyttet til åpning av salong og å drive en bedrift.
              LashBrowser fokuserer mye av sin markedsføring gjennom sosiale
              medier, og har derfor hatt behov for flere maler og lignende til
              bruk på Instagram.
            </p>
            <p>
              Fargepaletten til LashBrowser, er inspirert av personen bak
              bedriften, men ikke helt tro til inspirasjonsfargene. Dette er en
              dame med bein i nesa, som har blått hår, blå bil og blå
              behandlingsbenk, hun elsker blått, grønt og gull- som til en viss
              grad synes gjennom bedriftens design.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="LashBrowser__DisplayBox1">
          <img
            className="LashBrowser__DisplayImage1"
            src={pricelist}
            alt="Prislisten til LashBrowser"
          ></img>
          <img
            className="LashBrowser__DisplayImage2"
            src={businesscards}
            alt="Prislisten til LashBrowser"
          ></img>
        </div>
        <div className="LashBrowser__ColorDisplayRow">
          <div className="LashBrowser__ColorDisplay1"></div>
          <div className="LashBrowser__ColorDisplay2"></div>
          <div className="LashBrowser__ColorDisplay3"></div>
          <div className="LashBrowser__ColorDisplay4"></div>
          <div className="LashBrowser__ColorDisplay5"></div>
          <div className="LashBrowser__ColorDisplay6"></div>
          <div className="LashBrowser__ColorDisplay7"></div>
        </div>
        <div className="LashBrowser__DisplayBox2">
          <img
            className="LashBrowser__DisplayImage3"
            src={instagram}
            alt="LashBrowsers Instagram"
          ></img>
          <img
            className="LashBrowser__DisplayImage4"
            src={giftcard}
            alt="Gavekort som kan kjøpes hos LashBrowser"
          ></img>
        </div>
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__BottomDivider"></div>
        <div className="PhotoPrice__BookingText">
          Trenger du ny logo, visuell identitet eller websidedesign?
        </div>
        <NavLink to={`/${ContactRoute}`} className="PhotoPrice__BookingButton">
          Ta kontakt her
        </NavLink>
      </PageSection>
    </div>
  );
}

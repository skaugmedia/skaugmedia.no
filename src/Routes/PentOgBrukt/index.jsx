import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./PentOgBrukt.css";
import cover from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/fasadeskilt.jpg";
import giftcard from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/gavekort.jpg";
import openinghours from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/openinghours.jpg";
import parkingposter from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/parkingposter.jpg";
import poster from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/poster.jpg";
import businesscards from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/visittkort.jpg";
import website from "/src/Data/Business/GraphicalDesign/PentOgBrukt/Images/webside.jpg";
import ContactRoute from "/src/Routes/Contact/Route";

export function PentOgBrukt() {
  const location = useLocation();
  return (
    <div className="PentOgBrukt">
      <SkaugHelmet
        title={pageName}
        description="En del av min portefølje, som viser arbeidet jeg har gjort for bedriften PentOgBrukt."
        canonical={location.pathname}
      />
      <div
        className="PentOgBrukt_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Fasaden til bruktbutikken Pent og Brukt AS på Kløfta i Ullensaker."
      ></div>
      <PageSection
        outerClassName="PentOgBrukt__Outer"
        innerClassName="PentOgBrukt__Inner"
      >
        <DesignHeading h1>Pent og Brukt AS</DesignHeading>
        <div className="PentOgBrukt__Box">
          <div className="PentOgBrukt__Text">
            <p>
              Pent og Brukt AS er en liten og søt bruktbutikk som ligger på
              Kløfta, i Ullensaker kommune. Jeg fikk i oppgave å lage et enkelt
              og tidløst design til deres bedrift. Da veggene ble malt i fargen
              "Minty Breeze" før jeg fikk dette oppdraget, inspirerte fargen meg
              til å bruke nettopp denne fargen i det helhetlige designet, for å
              knytte sammen alle grafiske elementer, sammen med butikkens
              innside.
            </p>
            <p>
              Pent og Brukt AS sitt design har en enkel fargepallett, to fonter
              inkludert- der den ene kun brukes i logoen, mens den andre brukes
              i forskjellige fontstiler, for å skape et typografisk hiearki.
              Designet inneholder også tre forskjellige logoer, som alle har
              flere av de samme elementene, men der de alle skiller seg litt fra
              hverandre.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="PentOgBrukt__DisplayBox1">
          <img
            className="PentOgBrukt__DisplayImage1"
            src={poster}
            alt="Plakat utenfor Pent og Brukt AS"
          ></img>
          <img
            className="PentOgBrukt__DisplayImage2"
            src={businesscards}
            alt="Prislisten til PentOgBrukt"
          ></img>
        </div>
        <div className="PentOgBrukt__ColorDisplayRow">
          <div className="PentOgBrukt__ColorDisplay1"></div>
          <div className="PentOgBrukt__ColorDisplay2"></div>
          <div className="PentOgBrukt__ColorDisplay3"></div>
          <div className="PentOgBrukt__ColorDisplay4"></div>
          <div className="PentOgBrukt__ColorDisplay5"></div>
          <div className="PentOgBrukt__ColorDisplay6"></div>
          <div className="PentOgBrukt__ColorDisplay7"></div>
        </div>
        <div className="PentOgBrukt__DisplayBox2">
          <img
            className="PentOgBrukt__DisplayImage3"
            src={giftcard}
            alt="Gavekort som kan kjøpes hos Pent og Brukt AS"
          ></img>
        </div>
        <div className="PentOgBrukt__DisplayBox3">
          <img
            className="PentOgBrukt__DisplayImage4"
            src={website}
            alt="Nettsiden til Pent og Brukt AS"
          ></img>
          <img
            className="PentOgBrukt__DisplayImage5"
            src={parkingposter}
            alt="Plakat som viser hvor man kan parkere hos Pent og Brukt AS"
          ></img>
        </div>
        <div className="PentOgBrukt__DisplayBox4">
          <img
            className="PentOgBrukt__DisplayImage6"
            src={openinghours}
            alt="Åpningstidene til Pent og Brukt AS"
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

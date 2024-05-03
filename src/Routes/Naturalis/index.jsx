import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./Naturalis.css";
import pageName from "./PageName";
import cover from "/src/Data/Business/GraphicalDesign/Naturalis/Images/brevpapir.jpg";
import desktop from "/src/Data/Business/GraphicalDesign/Naturalis/Images/desktop.jpg";
import responsive from "/src/Data/Business/GraphicalDesign/Naturalis/Images/mobil.jpg";
import paperbag from "/src/Data/Business/GraphicalDesign/Naturalis/Images/papirpose.jpg";
import postalia from "/src/Data/Business/GraphicalDesign/Naturalis/Images/postalia.jpg";
import pricetag from "/src/Data/Business/GraphicalDesign/Naturalis/Images/prislapper.jpg";
import windowsign from "/src/Data/Business/GraphicalDesign/Naturalis/Images/skiltvindu.jpg";
import thankyou from "/src/Data/Business/GraphicalDesign/Naturalis/Images/takkforhandelen.jpg";
import businesscard from "/src/Data/Business/GraphicalDesign/Naturalis/Images/visittkort_gronn.jpg";
import ContactRoute from "/src/Routes/Contact/Route";

export function Naturalis() {
  const location = useLocation();
  return (
    <div className="Naturalis">
      <SkaugHelmet
        title={pageName}
        description="Et skoleprosjekt jeg gjennomførte mitt siste år på Fagskolen Kristiania, der jeg designet en komplett visuell identitet."
        canonical={location.pathname}
      />
      <div
        className="Naturalis_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Brevpapir med logoen til Naturalis by Synne Wik."
      ></div>
      <PageSection
        outerClassName="Naturalis__Outer"
        innerClassName="Naturalis__Inner"
      >
        <DesignHeading h1>Naturalis by Synne Wik</DesignHeading>
        <div className="Naturalis__Box">
          <div className="Naturalis__Text">
            <p>
              Naturalis var et skoleprosjekt jeg laget mens jeg gikk på
              Fagskolen Kristiania. Oppgaven gikk ut på å lage en komplett
              visuell identitet inkludert en animasjon, webside både responsiv
              og for desktop, postalia, og alt annet som medfølger en slik type
              bedrift. Dette er altså en fiksjonell bedrift, for en
              interiørdesigner ved navn Synne Wik, som spesialiserer seg på
              bærekraftig interiørdesign, og bruker naturmaterialer i alle sine
              prosjekter. Hun er nå i ferd med å åpne sin egen butikk der hun
              selger interiør og dekor til bruk i hjemmet.
            </p>
            <p>
              Fargepaletten i dette designprosjektet er en hyllest til naturens
              mangfold, der hver nyanse er inspirert av de naturlige elementene
              som omgir oss. Grafiske elementer og logoen i designet er
              forankret i en dypt forankret forbindelse med naturen, noe som
              lett vises i hvert designelement. I tillegg til de varierte
              fargene, har vi innført en spesiell font med to unike stiler – én
              som utgjør selve logoen og den andre som er en nøkkelkomponent i
              det typografiske hierarkiet. Dette skaper et design som ikke bare
              feirer, men også aktivt fremmer den rike skjønnheten som naturen
              tilbyr.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Naturalis__DisplayBox1">
          <img
            className="Naturalis__DisplayImage1"
            src={paperbag}
            alt="Papirpose med designet til Naturalis."
          ></img>
          <img
            className="Naturalis__DisplayImage2"
            src={desktop}
            alt="Nettsiden til Naturalis"
          ></img>
        </div>
        <div className="Naturalis__ColorDisplayRow">
          <div className="Naturalis__ColorDisplay1"></div>
          <div className="Naturalis__ColorDisplay2"></div>
          <div className="Naturalis__ColorDisplay3"></div>
          <div className="Naturalis__ColorDisplay4"></div>
          <div className="Naturalis__ColorDisplay5"></div>
          <div className="Naturalis__ColorDisplay6"></div>
        </div>
        <div className="Naturalis__DisplayBox2">
          <img
            className="Naturalis__DisplayImage3"
            src={responsive}
            alt="Responsive nettside for Naturalis by Synne Wik"
          ></img>
        </div>
        <div className="Naturalis__DisplayBox3">
          <img
            className="Naturalis__DisplayImage4"
            src={windowsign}
            alt="Logo på butikkvindu for Naturalis by Synne Wik"
          ></img>
          <img
            className="Naturalis__DisplayImage5"
            src={pricetag}
            alt="Prislapper til produkter Naturalis by Synne Wik"
          ></img>
        </div>
        <div className="Naturalis__DisplayBox4">
          <img
            className="Naturalis__DisplayImage6"
            src={businesscard}
            alt="Visittkort for Naturalis by Synne Wik"
          ></img>
          <img
            className="Naturalis__DisplayImage7"
            src={thankyou}
            alt="Takk for handelen kort Naturalis by Synne Wik"
          ></img>
        </div>
        <div className="Naturalis__DisplayBox2">
          <img
            className="Naturalis__DisplayImage6"
            src={postalia}
            alt="Postalia Naturalis by Synne Wik"
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

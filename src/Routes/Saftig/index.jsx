import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./Saftig.css";
import cover from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_6.jpg";

import magazine6 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_1.jpg";
import magazine1 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_2.jpg";
import magazine from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_3.jpg";
import magazine2 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_4.jpg";
import magazine4 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_5.jpg";
import magazine5 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_7.jpg";
import magazine3 from "/src/Data/Business/GraphicalDesign/Saftig/Images/saftig_8.jpg";
import ContactRoute from "/src/Routes/Contact/Route";

export function Saftig() {
  const location = useLocation();
  return (
    <div className="Saftig">
      <SkaugHelmet
        title={pageName}
        description="Et skoleprosjekt jeg gjennomførte mitt siste år på Fagskolen Kristiania, der jeg skulle lage et magasindesign med flere oppslag, og reklame."
        canonical={location.pathname}
      />
      <div
        className="Saftig_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Bakside og forside av bakemagasinet Saftig."
      ></div>
      <PageSection
        outerClassName="Saftig__Outer"
        innerClassName="Saftig__Inner"
      >
        <DesignHeading h1>Bakemagasinet Saftig</DesignHeading>
        <div className="Saftig__Box">
          <div className="Saftig__Text">
            <p>
              Dette skoleprosjektet ble realisert under min tid ved Fagskolen
              Kristiania. Oppgaven krevde utvikling av en helhetlig visuell
              identitet for et fiktivt magasin, som inkluderte designelementer,
              en reportasje, reklameinnslag, og en innholdsfortegnelse.
              Magasinet, kalt Saftig Bakemagasin, der jeg laget egne
              oppskriftssider, en reportasje om en hobbybaker. Gjennom dette
              prosjektet fikk jeg utforske kreativt innhold og formgi en unik
              visuell identitet for magasinet.
            </p>
            <p>
              I dette prosjektet er kun sort og hvit som en del av
              fargepaletten, jeg har valgt å trekke ut farger fra ulike bilder
              for å skape en helhet, i stedet for å velge farger som skal gå
              igjen gjennom designet. Jeg har valgt å bruke fonten Dosis, men
              for å variere det typografiske hierakiet har jeg brukt ulike
              fontstiler.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Saftig__DisplayBox1">
          <img
            className="Saftig__DisplayImage1"
            src={magazine}
            alt="Bakemagasinet Saftig"
          ></img>
          <img
            className="Saftig__DisplayImage2"
            src={magazine1}
            alt="Et oppslag med oppskrifter i magasinet Saftig"
          ></img>
        </div>
        <div className="Saftig__ColorDisplayRow">
          <div className="Saftig__ColorDisplay1"></div>
          <div className="Saftig__ColorDisplay2"></div>
        </div>
        <div className="Saftig__DisplayBox2">
          <img
            className="Saftig__DisplayImage3"
            src={magazine2}
            alt="Et oppslag med en oppskrift i magasinet Saftig"
          ></img>
        </div>
        <div className="Saftig__DisplayBox3">
          <img
            className="Saftig__DisplayImage4"
            src={magazine3}
            alt="Et oppslag med et portrett av en baker i magasinet Saftig"
          ></img>{" "}
        </div>
        <div className="Saftig__DisplayBox4">
          <img
            className="Saftig__DisplayImage5"
            src={magazine4}
            alt="Et oppslag med innhold og forside i magasinet Saftig"
          ></img>
        </div>
        <div className="Saftig__DisplayBox5">
          <img
            className="Saftig__DisplayImage6"
            src={magazine5}
            alt="Et oppslag med reklame i magasinet Saftig"
          ></img>
        </div>
        <div className="Saftig__DisplayBox6">
          <img
            className="Saftig__DisplayImage7"
            src={magazine6}
            alt="Bakemagasinet Saftig"
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

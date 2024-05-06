import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./Plantlife.css";
import cover from "/src/Data/Business/GraphicalDesign/Plantlife/Images/plantlife_logo.jpg";

import addnew from "/src/Data/Business/GraphicalDesign/Plantlife/Images/add_new_plant.jpg";
import album from "/src/Data/Business/GraphicalDesign/Plantlife/Images/album.jpg";
import homepage from "/src/Data/Business/GraphicalDesign/Plantlife/Images/homepage.jpg";
import myplants from "/src/Data/Business/GraphicalDesign/Plantlife/Images/my_plants.jpg";
import notification from "/src/Data/Business/GraphicalDesign/Plantlife/Images/notification.jpg";
import schedule from "/src/Data/Business/GraphicalDesign/Plantlife/Images/wateringschedule.jpg";

import ContactRoute from "/src/Routes/Contact/Route";

export function Plantlife() {
  const location = useLocation();
  return (
    <div className="Plantlife">
      <SkaugHelmet
        title={pageName}
        description="Et skoleprosjekt jeg gjennomførte mitt siste år på Fagskolen Kristiania, der jeg skulle lage en komplett nettside med call-to-action, ved hjep av HTML og CSS."
        canonical={location.pathname}
      />
      <div
        className="Plantlife_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Plantlife logo."
      ></div>
      <PageSection
        outerClassName="Plantlife__Outer"
        innerClassName="Plantlife__Inner"
      >
        <DesignHeading h1>Plantlife</DesignHeading>
        <div className="Plantlife__Box">
          <div className="Plantlife__Text">
            <p>
              I løpet av mitt studiene mine ved Fagskolen Kristiania, arbeidet
              jeg med prosjektet Plantlife, der jeg planla, designet, utførte
              brukertester og utviklet en prototype for en mobilapplikasjon for
              plantentusiaster. Plantlife gir brukerne muligheten til å
              administrere informasjon om sine planter, samt motta varsler og
              påminnelser om vanning og stell. Dette prosjektet ga meg verdifull
              erfaring innen app-design og brukervennlighet, og Plantlife ble
              konseptualisert med en visjon om å forenkle omsorgen for planter
              og støtte lidenskapelige planteentusiaster, samt at dette
              prosjektet var det som gjorde at jeg forelsket meg i digitalt
              design og UX-design.
            </p>
            <p>
              I designprosessen for denne planteentusiast-appen har
              fargepaletten blitt nøye sammensatt med friske blå-grønne toner,
              som gir appen et friskt, beroligende og naturlig preg. Hvert
              fargevalg er nøye gjennomtenkt for å reflektere lidenskapen for
              planter. De grafiske elementene og logoen er resultatet av
              omfattende detaljarbeid, og vi har innført tre unike skrifttyper i
              det typografiske hierarkiet. Den første skrifttypen er dedikert
              til logoen og overskriftene, og de to andre brukes for brødtekst
              og uthevet tekst, noe som gir en balansert og leservennlig
              brukeropplevelse. Resultatet er et design som skaper visuelt
              mangfold og gir appen et unikt og dynamisk uttrykk, som forsterker
              engasjementet og omsorgen for verdens grønne skatter.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Plantlife__DisplayBox1">
          <img
            className="Plantlife__DisplayImage1"
            src={album}
            alt="Bildet viser album-siden i appen Plantlife."
          ></img>
          <img
            className="Plantlife__DisplayImage2"
            src={addnew}
            alt="Her legger du til nye planter i appen Plantlife."
          ></img>
        </div>
        <div className="Plantlife__ColorDisplayRow">
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay1"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay2"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay3"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay4"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay5"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay6"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay7"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay8"></div>
          <div className="Plantlife__ColorDisplay Plantlife__ColorDisplay9"></div>
        </div>
        <div className="Plantlife__DisplayBox2">
          <img
            className="Plantlife__DisplayImage3"
            src={myplants}
            alt="En oversikt i appen Plantlife som viser de ulike plantene du har lagt til."
          ></img>
        </div>
        <div className="Plantlife__DisplayBox3">
          <img
            className="Plantlife__DisplayImage4"
            src={notification}
            alt="Slik vil et varsel fra appen Plantlife se ut på en iPhone."
          ></img>{" "}
        </div>
        <div className="Plantlife__DisplayBox4">
          <img
            className="Plantlife__DisplayImage5"
            src={homepage}
            alt="Hjemsiden i appen Plantlife."
          ></img>
        </div>
        <div className="Plantlife__DisplayBox5">
          <img
            className="Plantlife__DisplayImage6"
            src={schedule}
            alt="Du kan sette opp en vanningsplan i appen Plantlife."
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

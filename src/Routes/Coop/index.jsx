import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./Coop.css";
import pageName from "./PageName";
import cover from "/src/Data/Business/GraphicalDesign/Coop/Images/pattern1.jpg";

import allboxes from "/src/Data/Business/GraphicalDesign/Coop/Images/allboxes.jpg";
import box1 from "/src/Data/Business/GraphicalDesign/Coop/Images/box1.jpg";
import box2 from "/src/Data/Business/GraphicalDesign/Coop/Images/box2.jpg";
import box3 from "/src/Data/Business/GraphicalDesign/Coop/Images/box3.jpg";
import pineapple from "/src/Data/Business/GraphicalDesign/Coop/Images/pattern2.jpg";
import madarin from "/src/Data/Business/GraphicalDesign/Coop/Images/pattern3.jpg";

import ContactRoute from "/src/Routes/Contact/Route";

export function Coop() {
  const location = useLocation();
  return (
    <div className="Coop">
      <SkaugHelmet
        title={pageName}
        description="Et skoleprosjekt jeg gjennomførte mitt siste år på Fagskolen Kristiania, der jeg skulle lage en komplett nettside med call-to-action, ved hjep av HTML og CSS."
        canonical={location.pathname}
      />
      <div
        className="Coop_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Et av mønsterene fra designet mitt."
      ></div>
      <PageSection outerClassName="Coop__Outer" innerClassName="Coop__Inner">
        <DesignHeading h1>Coop</DesignHeading>
        <div className="Coop__Box">
          <div className="Coop__Text">
            <p>
              I en spennende skoleoppgave tok jeg utfordringen med å gi
              hermetikkbokser fra Coop's eget merke, Xtra, et moderne og lekent
              redesign. Målet var å gi hermetikkboksene en tidløs og innbydende
              estetikk som appellerer til dagens forbrukere. Dette prosjektet
              har gitt meg muligheten til å utforske kreativiteten min og gi et
              kjent produkt et friskt og spennende uttrykk.
            </p>
            <p>
              Designet mitt har en variert fargepalett som inkluderer en rekke
              hovedfarger, sammen med flere ekstra farger som brukes i
              forskjellige mønstre og elementer. I det typografiske hierarki har
              jeg implementert fire ulike fonter. Disse brukes til å skape et
              variert hieraki. En viktig endring jeg har gjort er å erstatte
              Xtra-logoen med Coops egen logo, som gir en mer autentisk følelse
              til designet.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Coop__DisplayBox1">
          <img
            className="Coop__DisplayImage1"
            src={madarin}
            alt="Mønsteret som tilhører pakningen til mandarinbåtene fra Coop."
          ></img>
          <img
            className="Coop__DisplayImage2"
            src={box3}
            alt="Esken til mandarinbåtene fra Coop."
          ></img>
        </div>

        <div className="Coop__ColorDisplayRow">
          <div className="Coop__ColorDisplay Coop__ColorDisplay1"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay2"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay3"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay4"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay5"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay6"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay7"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay8"></div>
          <div className="Coop__ColorDisplay Coop__ColorDisplay9"></div>
        </div>
        <div className="Coop__DisplayBox2">
          <img
            className="Coop__DisplayImage3"
            src={allboxes}
            alt="Et samlet bilde av alle de ulike pakningene fra Coop."
          ></img>
        </div>
        <div className="Coop__DisplayBox3">
          <img
            className="Coop__DisplayImage4"
            src={box2}
            alt="Ananasringer fra Coop i pakning."
          ></img>{" "}
          <img
            className="Coop__DisplayImage5"
            src={pineapple}
            alt="Mønsteret til ananasringer fra Coop i pakning."
          ></img>{" "}
        </div>
        <div className="Coop__DisplayBox4">
          {" "}
          <img
            className="Coop__DisplayImage6"
            src={box1}
            alt="Coctailbær i pakning fra Coop."
          ></img>{" "}
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

import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./Kiehls.css";
import pageName from "./PageName";
import cover from "/src/Data/Business/GraphicalDesign/Kiehls/Images/logo_1.jpg";

import aboutpage from "/src/Data/Business/GraphicalDesign/Kiehls/Images/kiehls_about.jpg";
import responsive from "/src/Data/Business/GraphicalDesign/Kiehls/Images/kiehls_button.jpg";
import frontpage from "/src/Data/Business/GraphicalDesign/Kiehls/Images/kiehls_frontpage.jpg";
import productpage from "/src/Data/Business/GraphicalDesign/Kiehls/Images/kiehls_product_page.jpg";
import bottle from "/src/Data/Business/GraphicalDesign/Kiehls/Images/products.jpg";

import ContactRoute from "/src/Routes/Contact/Route";

export function Kiehls() {
  const location = useLocation();
  return (
    <div className="Kiehls">
      <SkaugHelmet
        title={pageName}
        description="Et skoleprosjekt jeg gjennomførte mitt siste år på Fagskolen Kristiania, der jeg skulle lage en komplett nettside med call-to-action, ved hjep av HTML og CSS."
        canonical={location.pathname}
      />
      <div
        className="Kiehls_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Mitt forslag til nytt design av logo for Kiehls."
      ></div>
      <PageSection
        outerClassName="Kiehls__Outer"
        innerClassName="Kiehls__Inner"
      >
        <DesignHeading h1>Kiehl`s</DesignHeading>
        <div className="Kiehls__Box">
          <div className="Kiehls__Text">
            <p>
              Dette prosjektet var en betydningsfull oppgave jeg utviklet mens
              jeg var student ved Fagskolen Kristiania. Oppgaven innebar å
              redesigne Kiehl's håndkremserie og skape to nye produkter for
              samme serie, samt utvikle en helhetlig visuell identitet og et
              responsivt nettsted ved hjelp av HTML og CSS. Dette prosjektet ga
              meg muligheten til å utforske digitalt design på en utfordrende og
              spennende måte, og jeg valgte å gi produktene et luksuriøst
              uttrykk som reflekterte Kiehl's omsorg for kvalitet og velvære.
            </p>
            <p>
              I designprosessen for håndkremprodukter og den tilhørende
              nettsiden har jeg nøye satt sammen en fargepalett som utstråler
              friskhet og vitalitet. Jeg har valgt friske og sterke farger for å
              formidle en følelse av energi og omsorg. I tillegg har jeg brukt
              ulike fontstørrelser for å variere hierarkiet, der den ene
              skrifttypen er dedikert til logoen, og den andre brukes for å
              fremheve viktig informasjon på nettsiden. Dette designet skaper
              visuelt mangfold og gir et dynamisk uttrykk som reflekterer mitt
              fokus på kvalitet og omsorg for huden.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Kiehls__DisplayBox1">
          <img
            className="Kiehls__DisplayImage1"
            src={bottle}
            alt="Produkter fra Kiehl`s."
          ></img>
          <img
            className="Kiehls__DisplayImage2"
            src={responsive}
            alt="Responsiv versjon av nettsiden med call to action."
          ></img>
        </div>
        <div className="Kiehls__ColorDisplayRow">
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay1"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay2"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay3"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay4"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay5"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay6"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay7"></div>
          <div className="Kiehls__ColorDisplay Kiehls__ColorDisplay8"></div>
        </div>
        <div className="Kiehls__DisplayBox2">
          <img
            className="Kiehls__DisplayImage3"
            src={frontpage}
            alt="Forsiden av nettsiden til Kiehl`s produktene."
          ></img>
        </div>
        <div className="Kiehls__DisplayBox3">
          <img
            className="Kiehls__DisplayImage4"
            src={aboutpage}
            alt="Om oss siden til Kiehl`s."
          ></img>{" "}
        </div>
        <div className="Kiehls__DisplayBox4">
          <img
            className="Kiehls__DisplayImage5"
            src={productpage}
            alt="En samleside som viser alle produktene, og som viser tekst når du hovrer over bildet."
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

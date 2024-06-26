import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./AI.css";
import pageName from "./PageName";
import { FeaturedGallery } from "/src/Components/FeaturedGallery";
import category from "/src/Data/Business/Galleries/AI";
import ContactRoute from "/src/Routes/Contact/Route";
import { byDate } from "/src/utils";

export function AI() {
  const images = category.shoots
    .sort(byDate)
    .flatMap((x) => x.images)
    .map((x) => ({ ...x, src: x.url }));

  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Informasjon om produktfotografering"
        canonical={location.pathname}
      />

      <PageSection
        outerClassName="BusinessCategory__Outer"
        innerClassName="BusinessCategory__Inner"
      ></PageSection>
      <PageSection>
        <div className="BusinessCategory__TopSection">
          <div className="BusinessCategory__TopSectionTextBox">
            <DesignHeading h1>AI / Kunstig Intelligens</DesignHeading>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              Spesialtilpasset AI-kunst
            </div>
            <p className="BusinessCategory__MiddleContentText">
              Oppdag en ny dimensjon av kunst med min bruk av kunstig
              intelligens (AI) for å generere unike og inspirerende verk.
              Gjennom avanserte algoritmer og innovative teknikker, skaper jeg
              forhåndsproduserte digitale filer og trykk som fanger øyet og
              berører sjelen. Du kan også utforske muligheten for skreddersydde
              kunstverk som er skapt spesielt etter dine ønsker og preferanser.
              Uansett om du ønsker å berike ditt hjem, kontor eller bedrift med
              kunstnerisk utforskning, gir mine AI-genererte verk deg muligheten
              til å oppleve kunst på en ny og spennende måte. Utforsk min
              kolleksjon i dag og la deg bli inspirert av den grensesprengende
              kreativiteten til kunstig intelligens.
            </p>
          </div>
        </div>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              ChatGPT-kurs
            </div>
            <p className="BusinessCategory__MiddleContentText">
              Oppdag potensialet i ChatGPT for din bedrift og innholdsproduksjon
              gjennom mine skreddersydde kurs. Få inngående kunnskap og
              praktiske ferdigheter som vil hjelpe deg med å implementere
              ChatGPT-effektivitet i din bedriftsprosess og innholdsproduksjon.
              Enten du er ny innen teknologien eller ønsker å forbedre dine
              eksisterende ferdigheter, tilbyr mine kurs en tilpasset tilnærming
              som passer for bedriftens behov og mål. Ta det første skrittet mot
              å utnytte ChatGPT's potensiale til det fulle, og skap innhold som
              skiller seg ut og engasjerer målgruppen din på helt egen måte.
            </p>
          </div>
        </div>
        <FeaturedGallery images={images} />
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__BottomDivider"></div>
        <div className="PhotoPrice__BookingText">
          Ønsker du en uforpliktende prat?
        </div>
        <NavLink to={`/${ContactRoute}`} className="PhotoPrice__BookingButton">
          Ta kontakt her
        </NavLink>
      </PageSection>
    </>
  );
}

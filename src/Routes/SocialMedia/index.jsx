import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { ComparisonTable } from "./Components/ComparisonTable";
import { Packages } from "./Components/Packages";
import pageName from "./PageName";
import "./SocialMedia.css";
import { FeaturedGallery } from "/src/Components/FeaturedGallery";
import { VerticalDivider } from "/src/Components/VerticalDivider";
import category from "/src/Data/Business/Galleries/SocialMedia";
import ContactRoute from "/src/Routes/Contact/Route";
import { byDate } from "/src/utils";

export function SocialMedia() {
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
            <DesignHeading h1>Sosiale Medier</DesignHeading>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              Veiledning i bruk av sosiale medier
            </div>
            <p className="BusinessCategory__MiddleContentText">
              Oppdag kraften i sosiale medier gjennom min skreddersydde
              veiledningstjeneste. Enten du er nybegynner eller erfaren, tilbyr
              jeg personlig veiledning som hjelper deg med å navigere i jungelen
              av sosiale medieplattformer. Fra å øke synligheten og
              engasjementet til å bygge en merkevare og tiltrekke deg målgruppen
              din, vil jeg gi deg de verktøyene og strategiene du trenger for å
              lykkes. La oss sammen utforske mulighetene og ta din
              tilstedeværelse på sosiale medier til neste nivå.
            </p>
          </div>
        </div>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              Innholdsproduksjon
            </div>
            <p className="BusinessCategory__MiddleContentText">
              Opplev styrken av målrettet innholdsproduksjon for din bedrift med
              mine skreddersydde pakker. Jeg tilbyr tre ulike pakker som passer
              til forskjellige behov og budsjett, og jeg gir deg også muligheten
              til å skreddersy en pakke som passer enda bedre for din bedrift.
              Som fast innholdsprodusent for bruktbutikken Pent og Brukt AS,
              bringer jeg med meg ekspertise innen fotografering,
              bildebehandling, videoredigering og publisering i sosiale medier,
              samt administrasjon av nettsiden deres. Med min erfaring og
              dedikasjon til kvalitetssikret innhold, kan du være trygg på at
              din bedrift får profesjonelt produsert innhold som skiller seg ut
              og engasjerer målgruppen din på en meningsfull måte. La oss sammen
              skape innhold som vil styrke din bedrifts online tilstedeværelse
              og bidra til å nå dine forretningsmål.
            </p>
          </div>
        </div>
        <FeaturedGallery images={images} />
        <VerticalDivider />
        <Packages />
        <ComparisonTable />
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

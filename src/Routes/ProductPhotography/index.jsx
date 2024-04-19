import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./ProductPhotography.css";

export function ProductPhotography() {
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
            <DesignHeading h1>Produktfotografering</DesignHeading>
            <p className="BusinessCategory__TopContentText">
              Produktfotografering for bedrifter og næringsliv er avgjørende for
              å formidle skjønnheten og funksjonaliteten av produkter, samt
              skape uimotståelig appell. Hvert bilde fanger øyeblikk som
              definerer produktene og merkevaren, enten det er detaljer, stil
              eller unike egenskaper.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}

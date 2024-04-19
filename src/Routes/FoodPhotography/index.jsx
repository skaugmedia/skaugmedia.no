import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./FoodPhotography.css";
import pageName from "./PageName";

export function FoodPhotography() {
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
            <DesignHeading h1>Matfotografering</DesignHeading>
            <p className="BusinessCategory__TopContentText">
              Matfotografering for bedrifter i matbransjen handler om å fange
              hjertevarme øyeblikk som formidler skjønnheten og smaken av
              kulinariske kreasjoner, med mål om å formidle kvalitet og
              uimotståelig appell i hvert bilde.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}

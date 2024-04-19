import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./BusinessPortraits.css";
import pageName from "./PageName";

export function BusinessPortraits() {
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
            <DesignHeading h1>Bedriftsportretter</DesignHeading>
            <p className="BusinessCategory__TopContentText">
              Portrettfotografering for bedrifter og næringsliv er avgjørende
              for å formidle personlighet og profesjonalitet i teamet, skape
              troverdighet og kompetanse, og appellere til målgruppen. Hvert
              bilde fanger øyeblikk som definerer teamet og merkevaren, enten
              det er detaljerte portretter, profesjonelle presentasjoner eller
              subtile detaljer som gir ekstraordinær betydning.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}

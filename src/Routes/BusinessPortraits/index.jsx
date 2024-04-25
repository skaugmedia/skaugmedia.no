import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./BusinessPortraits.css";
import pageName from "./PageName";
import { FeaturedGallery } from "/src/Components/FeaturedGallery";
import category from "/src/Data/Business/Galleries/Portrait";
import ContactRoute from "/src/Routes/Contact/Route";
import { byDate } from "/src/utils";

export function BusinessPortraits() {
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

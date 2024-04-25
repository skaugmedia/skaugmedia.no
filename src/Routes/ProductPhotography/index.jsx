import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./ProductPhotography.css";
import { FeaturedGallery } from "/src/Components/FeaturedGallery";
import category from "/src/Data/Business/Galleries/Product";
import ContactRoute from "/src/Routes/Contact/Route";
import { byDate } from "/src/utils";

export function ProductPhotography() {
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

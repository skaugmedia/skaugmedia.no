import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./KindergartenPhotography.css";
import pageName from "./PageName";
import { FeaturedGallery } from "/src/Components/FeaturedGallery";
import category from "/src/Data/Business/Galleries/Kindergarten";
import { byDate } from "/src/utils";

export function KindergartenPhotography() {
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
            <DesignHeading h1>Barnehagefotografering</DesignHeading>
            <p className="BusinessCategory__TopContentText">
              Barnehagefotografering fanger smilene og minnene som utgjør
              barnehagens hverdag, formidler glede, vennskap og uforglemmelige
              øyeblikk. Uansett om det er gruppebilder, portretter eller
              miljøbilder, hvert bilde har sin egen betydning og formidler
              barnehagens fellesskap og identitet.
            </p>
          </div>
        </div>
        <FeaturedGallery images={images} />
      </PageSection>
    </>
  );
}

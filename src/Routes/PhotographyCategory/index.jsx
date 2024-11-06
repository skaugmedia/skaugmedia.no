import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import { FeaturedGallery } from "../../Components/FeaturedGallery";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import classes from "./PhotographyCategory.module.css";
import { byDate } from "/src/utils";

export function PhotographyCategory() {
  const { category } = useLoaderData();
  const location = useLocation();

  const images = category.shoots
    .sort(byDate)
    .flatMap((x) => x.images)
    .map((x) => ({ ...x, src: x.url }));

  return (
    <PageSection>
      <SkaugHelmet
        title={category.title}
        description={`Samling av ${category.title?.toLowerCase()} bilder`}
        canonical={location.pathname}
      />
      <DesignHeading h1>{category.title}</DesignHeading>
      <div className={classes.description}>
        <p className={classes.bodyText}>{category.body}</p>
        <div className={classes.listing}>
          <div className={classes.listingTitle}>{category.listing.title}</div>
          <div className={classes.listingPrice}>{category.listing.price}</div>
        </div>
      </div>
      <FeaturedGallery images={images} />
    </PageSection>
  );
}

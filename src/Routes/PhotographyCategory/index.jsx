import { useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import classes from "./PhotographyCategory.module.css";
import { byDate } from "/src/utils";

export function PhotographyCategory() {
  const { category } = useLoaderData();
  const location = useLocation();
  const [index, setIndex] = useState(-1);
  const gallery = useRef(null);

  const images = category.shoots
    .sort(byDate)
    .flatMap((x) => x.images)
    .map((x) => ({ ...x, src: x.url }));

  const galleryImages = images.map((x) => ({
    original: x.src,
    originalWidth: x.width,
    originalHeight: x.height,
  }));

  const fullscreenGallery = () => {
    gallery.current.fullScreen();
  };

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
          {category.listing.link && (
            <NavLink className={classes.listingLink} to={category.listing.link}>
              Les mer
            </NavLink>
          )}
        </div>
      </div>
      <PhotoAlbum
        layout="columns"
        photos={images}
        onClick={({ index }) => {
          setIndex(index);
          fullscreenGallery();
        }}
      />
      <ImageGallery
        additionalClass={`${classes.gallery} ${index >= 0 ? "show" : ""}`}
        items={galleryImages}
        showThumbnails={false}
        startIndex={index}
        ref={gallery}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showBullets={true}
        showFullscreenButton={true}
        renderFullscreenButton={(onClick) =>
          FullscreenButton({
            onClick: (...e) => {
              setIndex(-1);
              onClick(...e);
            },
          })
        }
      />
    </PageSection>
  );
}

function FullscreenButton({ onClick }) {
  return (
    <button
      className={classes.closeFullscreen}
      type="button"
      onClick={onClick}
      aria-label="Lukk fullskjerm"
    >
      <div className={classes.closeFullscreenLine1} />
      <div className={classes.closeFullscreenLine2} />
    </button>
  );
}

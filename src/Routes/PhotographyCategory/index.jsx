import { useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { NavLink, useLoaderData } from "react-router-dom";
import PhotographyHeading from "../../Components/Headings/FotografiHeading";
import { PageSection } from "../../Components/PageSection";
import * as ids from "../Prices/Ids";
import classes from "./PhotographyCategory.module.css";
import PricesRoute from "../Prices/Route";
import { byDate } from "/src/util";
import { kr } from "../../utils";

export function PhotographyCategory() {
  const { category } = useLoaderData();
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
      <PhotographyHeading>{category.title}</PhotographyHeading>
      <div className={classes.description}>
        <p className={classes.bodyText}>{category.body}</p>
        <div className={classes.listing}>
          <div className={classes.listingTitle}>{category.listing.title}</div>
          <div className={classes.listingPrice}>{category.listing.price}</div>
          <NavLink className={classes.listingLink} to={category.listing.link}>
            Les mer
          </NavLink>
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

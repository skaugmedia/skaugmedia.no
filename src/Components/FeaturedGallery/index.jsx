import classNames from "classnames";
import { useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import classes from "./FeaturedGallery.module.css";

export function FeaturedGallery({ images }) {
  const [index, setIndex] = useState(-1);
  const gallery = useRef(null);

  const galleryImages = images.map((x) => ({
    original: x.src,
    originalWidth: x.width,
    originalHeight: x.height,
  }));

  const fullscreenGallery = () => {
    gallery.current.fullScreen();
  };

  return (
    <>
      <PhotoAlbum
        layout="columns"
        photos={images}
        onClick={({ index }) => {
          setIndex(index);
          fullscreenGallery();
        }}
      />
      <ImageGallery
        additionalClass={classNames(
          classes.gallery,
          index >= 0 ? classes.show : "",
        )}
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
    </>
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

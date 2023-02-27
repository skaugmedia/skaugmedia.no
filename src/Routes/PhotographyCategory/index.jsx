import { PageSection } from "../../Components/PageSection";
import { useLoaderData } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import classes from "./PhotographyCategory.module.css";
import { useState } from "react";
import { byDate } from "/src/util";
import { NextIcon, PrevIcon } from "./Icons";
import PhotographyHeading from "../../Components/Headings/FotografiHeading";

export function PhotographyCategory() {
  const { category } = useLoaderData();
  const [index, setIndex] = useState(-1);

  const images = category.shoots
    .sort(byDate)
    .flatMap((x) => x.images)
    .map((x) => ({ ...x, src: x.url }));

  return (
    <PageSection>
      <PhotographyHeading>{category.title}</PhotographyHeading>
      <p className={classes.bodyText}>{category.body}</p>
      <PhotoAlbum
        layout="columns"
        photos={images}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        className={classes.lightbox}
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
        render={{
          iconPrev: () => <PrevIcon size="90" />,
          iconNext: () => <NextIcon size="90" />,
        }}
      />
    </PageSection>
  );
}

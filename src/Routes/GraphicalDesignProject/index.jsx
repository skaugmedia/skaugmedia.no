import { useLoaderData } from "react-router-dom";
import GraphicalDesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "react-image-gallery/styles/css/image-gallery.css";
import classes from "./GraphicalDesignProject.module.css";
import ImageGallery from "react-image-gallery";
import { Image } from "/src/Components/Image";

export function GraphicalDesignProject() {
  const { project } = useLoaderData();
  const images = project.images.map((img) => ({
    original: img.url,
    originalWidth: img.width,
    originalHeight: img.height,
  }));

  const elements = [
    {
      title: "Typografi",
      src: project.designElements.fonts,
    },
    {
      title: "Logo",
      src: project.designElements.logo,
    },
    {
      title: "Skisser",
      src: project.designElements.sketches,
    },
    ...(project.graphicalElements?.map((g) => ({
      title: g.title,
      src: g.url,
    })) ?? []),
  ];

  return (
    <PageSection className={classes.container}>
      <GraphicalDesignHeading>{project.title}</GraphicalDesignHeading>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        showFullscreenButton={false}
      />
      <p className={classes.ingress}>{project.ingress}</p>
      <div className={classes.elementHeading}>Fargepalett</div>
      <div className={classes.colorPalette}>
        {project.designElements.colorPalette.map((color) => (
          <div
            className={classes.colorCard}
            style={{ "background-color": color.hex }}
          >
            <ul className={classes.colorDetails}>
              <li>Hex: {color.hex}</li>
              <li>
                RGB: {color.rgb.r} {color.rgb.g} {color.rgb.b}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <p className={classes.body}>{project.body}</p>
      <div className={classes.elements}>
        {elements &&
          elements.map((element) => (
            <div className={classes.element}>
              <div className={classes.elementHeading}>{element.title}</div>
              <Image
                className={classes.elementImage}
                fit="contain"
                src={element.src}
                alt={element.title}
              />
            </div>
          ))}
      </div>
    </PageSection>
  );
}

import { useLoaderData } from "react-router-dom";
import GraphicalDesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "react-image-gallery/styles/css/image-gallery.css";
import classes from "./GraphicalDesignProject.module.css";
import ImageGallery from "react-image-gallery";
import { Image } from "/src/Components/Image";

export function GraphicalDesignProject() {
  const { project } = useLoaderData();
  const images = project.images.map((img) => ({ original: img.url }));
  return (
    <PageSection className={classes.container}>
      <GraphicalDesignHeading>{project.title}</GraphicalDesignHeading>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
      />
      <p className={classes.ingress}>{project.ingress}</p>
      <div className={classes.designInfoHeading}>Fargepalett</div>
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
      <div className={classes.infoBoxesGridTop}>
        <div className={classes.designElements}>
          <div className={classes.designInfoHeading}>Typografi</div>
          <Image
            className={classes.designElement}
            fit="contain"
            src={project.designElements.fonts}
            alt="Fonts"
          />
        </div>
        <div className={classes.designElements}>
          <div className={classes.designInfoHeading}>Logo</div>
          <Image
            className={classes.designElement}
            fit="contain"
            src={project.designElements.logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className={classes.infoBoxesGridBottom}>
        <div className={classes.graphicalElements}>
          <div className={classes.designInfoHeading}>Skisser</div>

          <Image
            className={classes.designElement}
            fit="contain"
            src={project.designElements.sketches}
            alt="Skisser"
          />
          {project.graphicalElements?.map((graphicalElement) => (
            <div className={classes.graphicalElements}>
              <div className={classes.designInfoHeading}>
                {graphicalElement.title}
              </div>
              <Image
                className={classes.designElement}
                src={graphicalElement.url}
                alt={graphicalElement.title}
                fit="contain"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

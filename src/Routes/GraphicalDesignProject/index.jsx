import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLoaderData, useLocation } from "react-router-dom";
import GraphicalDesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./GraphicalDesignProject.css";

export function GraphicalDesignProject() {
  const { project } = useLoaderData();
  const location = useLocation();
  const images = project.images.map((img) => ({
    original: img.url,
    originalWidth: img.width,
    originalHeight: img.height,
  }));

  const Images = ({ images, title }) => (
    <>
      <div className="GraphicalDesignProject__ElementHeading">{title}</div>
      <div className="GraphicalDesignProject__ColorPalette">
        {images.map((img) => (
          <img
            key={img.url}
            className="GraphicalDesignProject__Font"
            src={img.url}
            alt={img.title}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
    </>
  );

  return (
    <PageSection className="GraphicalDesignProject__Container">
      <SkaugHelmet
        title={project.title}
        description={`Grafisk design utført for ${project.title}`}
        canonical={location.pathname}
      />
      <GraphicalDesignHeading h1>{project.title}</GraphicalDesignHeading>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        showFullscreenButton={false}
      />
      <p className="GraphicalDesignProject__Ingress">{project.ingress}</p>
      {project.designElements?.colorPalette?.length > 0 && (
        <>
          <div className="GraphicalDesignProject__ElementHeading">
            Fargepalett
          </div>
          <div className="GraphicalDesignProject__ColorPalette">
            {project.designElements.colorPalette.map((color) => (
              <div
                key={color.hex}
                className="GraphicalDesignProject__ColorCard"
                style={{ backgroundColor: color.hex }}
              >
                <ul className="GraphicalDesignProject__ColorDetails">
                  <li>Hex: {color.hex}</li>
                  <li>
                    RGB: {color.rgb.r} {color.rgb.g} {color.rgb.b}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
      <p className="GraphicalDesignProject__Body">{project.body}</p>
      {project.designElements?.fonts?.length > 0 && (
        <Images title="Typografi" images={project.designElements.fonts} />
      )}
      {project.designElements?.logo?.length > 0 && (
        <Images title="Logo" images={project.designElements.logo} />
      )}
      {project.graphicalElements?.length > 0 && (
        <Images title="Illustrasjoner" images={project.graphicalElements} />
      )}
      {project.designElements?.sketches?.length > 0 && (
        <Images
          title="Skisser"
          flex={true}
          images={project.designElements.sketches}
        />
      )}
    </PageSection>
  );
}

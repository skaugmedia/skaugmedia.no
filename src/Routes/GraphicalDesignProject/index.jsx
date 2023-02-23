import { useLoaderData } from "react-router-dom";
import GraphicalDesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export function GraphicalDesignProject() {
  const { project } = useLoaderData();
  return (
    <PageSection>
      <GraphicalDesignHeading>{project.title}</GraphicalDesignHeading>
      <ImageGallery items={project.images} />
    </PageSection>
  );
}

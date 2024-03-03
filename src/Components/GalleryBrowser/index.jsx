import { NavLink } from "react-router-dom";
import { Gallery } from "../Gallery";
import DesignHeading from "../Headings/DesignHeading";
import { PageSection } from "../PageSection";
import "./GalleryBrowser.css";

export function GalleryBrowser({
  title,
  h1,
  galleries,
  hideNumImages,
  viewItem,
}) {
  const ItemViewer = (() => {
    if (viewItem) {
      return viewItem;
    }
    return (props) => <Gallery h3 hideNumImages={hideNumImages} {...props} />;
  })();
  return (
    <PageSection className="GalleryBrowser">
      <DesignHeading h1={h1}>{title}</DesignHeading>
      <div className="GalleryBrowser__Galleries">
        {galleries.map((gallery) => (
          <NavLink
            className="GalleryBrowser__GalleryLink"
            to={gallery.id}
            key={gallery.id}
          >
            <ItemViewer h3={!h1} {...gallery} />
          </NavLink>
        ))}
      </div>
    </PageSection>
  );
}

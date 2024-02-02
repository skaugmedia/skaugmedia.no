import { NavLink } from "react-router-dom";
import { Gallery } from "../Gallery";
import DesignHeading from "../Headings/DesignHeading";
import { PageSection } from "../PageSection";
import "./GalleryBrowser.css";

export function GalleryBrowser({ title, galleries, hideNumImages, viewItem }) {
  const ItemViewer = (() => {
    if (viewItem) {
      return viewItem;
    }
    return (props) => <Gallery hideNumImages={hideNumImages} {...props} />;
  })();
  return (
    <PageSection className="GalleryBrowser">
      <DesignHeading>{title}</DesignHeading>
      <div className="GalleryBrowser__Galleries">
        {galleries.map((gallery) => (
          <NavLink
            className="GalleryBrowser__GalleryLink"
            to={gallery.id}
            key={gallery.id}
          >
            <ItemViewer {...gallery} />
          </NavLink>
        ))}
      </div>
    </PageSection>
  );
}

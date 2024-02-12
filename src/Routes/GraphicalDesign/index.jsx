import { useLoaderData, useLocation } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { Project } from "../../Components/Project";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./GraphicalDesign.css";
import pageName from "./PageName";

export function GraphicalDesign() {
  const location = useLocation();
  const { projects } = useLoaderData();

  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Grafiske designprosjekter"
        canonical={location.pathname}
      />
      <GalleryBrowser
        title={pageName}
        galleries={projects}
        viewItem={(p) => (
          <Project className="item graphical-design-title" {...p} />
        )}
      />
    </>
  );
}

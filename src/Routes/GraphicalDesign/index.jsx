import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { Project } from "../../Components/Project";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./GraphicalDesign.css";
import pageName from "./PageName";
import Route from "./Route";

export function GraphicalDesign() {
  const location = useLocation();
  const { projects } = useLoaderData();
  if (!location.pathname.endsWith(Route)) {
    return <Outlet />;
  }

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

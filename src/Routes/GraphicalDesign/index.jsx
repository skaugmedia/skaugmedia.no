import { useLoaderData } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { Project } from "../../Components/Project";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./GraphicalDesign.css";
import pageName from "./PageName";

export function GraphicalDesign() {
  useDocumentTitle(pageName);
  const { projects } = useLoaderData();

  return (
    <GalleryBrowser
      title={pageName}
      galleries={projects}
      viewItem={(p) => (
        <Project className="item graphical-design-title" {...p} />
      )}
    />
  );
}

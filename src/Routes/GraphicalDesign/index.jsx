import { NavLink, useLoaderData } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { Project } from "../../Components/Project";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./GraphicalDesign.css";
import classes from "./GraphicalDesign.module.css";
import pageName from "./PageName";

export function GraphicalDesign() {
  useDocumentTitle(pageName);
  const { projects } = useLoaderData();

  return (
    <PageSection className="design">
      <div className="content">
        <div>
          <DesignHeading>{pageName}</DesignHeading>
        </div>
        <div className="section">
          <div className="design-project">
            {projects.map((project) => (
              <NavLink
                className={classes.link}
                to={project.id}
                key={project.id}
              >
                <Project
                  className="item graphical-design-title"
                  {...project}
                ></Project>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}

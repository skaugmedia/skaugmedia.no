import { NavLink, useLoaderData } from "react-router-dom";
import "./GraphicalDesign.css";
import { Underline } from "../../Components/Underline";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Project } from "../../Components/Project";
import classes from "./GraphicalDesign.module.css";
import pageName from "./PageName";

export function GraphicalDesign() {
  const { projects } = useLoaderData();

  return (
    <div className="design">
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
                <Project className="item" {...project}></Project>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Underline></Underline>
    </div>
  );
}

import "./GraphicalDesign.css";
import { Underline } from "../../Components/Underline";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Project } from "../../Components/Project";
import lashbrowser from "../../Data/GraphicalDesign/lashbrowser";
import naturalis from "../../Data/GraphicalDesign/naturalis";
import pentogbrukt from "../../Data/GraphicalDesign/pentogbrukt";
import pageName from "./PageName";

const projects = [lashbrowser, naturalis, pentogbrukt];

export function GraphicalDesign() {
  return (
    <div className="design">
      <div className="content">
        <div>
          <DesignHeading>{pageName}</DesignHeading>
        </div>
        <div className="section">
          <div className="design-project">
            {projects.map((project) => (
              <Project className="item" {...project}></Project>
            ))}
          </div>
        </div>
      </div>
      <Underline></Underline>
    </div>
  );
}

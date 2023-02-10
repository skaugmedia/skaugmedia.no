import "./GraphicalDesign.css";
import { Underline } from "../../Components/Underline";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Project } from "../../Components/Project";
import lashbrowser from "../../Data/GraphicalDesign/lashbrowser.yaml";
import naturalis from "../../Data/GraphicalDesign/naturalis.yaml";
import pentogbrukt from "../../Data/GraphicalDesign/pentogbrukt.yaml";

export const route = "grafiskdesign";
export const pageName = "Grafisk design";

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

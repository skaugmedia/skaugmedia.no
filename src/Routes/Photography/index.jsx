import "./Photography.css";
import { Underline } from "../../Components/Underline";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import { categories } from "../../Data/Photography";
import { Category } from "../../Components/Category";

export const route = "fotografi";
export const pageName = "Fotografi";

export function Photography() {
  return (
    <div className="photography">
      <div className="content">
        <div>
          <FotografiHeading>{pageName}</FotografiHeading>
        </div>
        <div className="section">
          <div className=" photography-category">
            {categories.map((category) => (
              <Category className="item" {...category}></Category>
            ))}
          </div>
        </div>
      </div>
      <Underline></Underline>
    </div>
  );
}

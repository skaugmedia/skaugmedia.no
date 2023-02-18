import { NavLink, useLoaderData } from "react-router-dom";
import "./Photography.css";
import { Underline } from "../../Components/Underline";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import { Category } from "../../Components/Category";
import pageName from "./PageName";

export function Photography() {
  const { categories } = useLoaderData();
  return (
    <div className="photography">
      <div className="content">
        <div>
          <FotografiHeading>{pageName}</FotografiHeading>
        </div>
        <div className="section">
          <div className=" photography-category">
            {categories.map((category) => (
              <NavLink
                className="photography-category-link"
                to={category.id}
                key={category.id}
              >
                <Category className="item" {...category}></Category>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Underline></Underline>
    </div>
  );
}

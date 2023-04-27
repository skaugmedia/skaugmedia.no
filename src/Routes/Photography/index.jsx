import { NavLink, useLoaderData } from "react-router-dom";
import "./Photography.css";
import { Underline } from "../../Components/Underline";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import { Category } from "../../Components/Category";
import pageName from "./PageName";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

export function Photography() {
  useDocumentTitle(pageName);
  const { categories } = useLoaderData();
  return (
    <PageSection className="photography">
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
    </PageSection>
  );
}

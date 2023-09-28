import { NavLink, useLoaderData } from "react-router-dom";
import { Category } from "../../Components/Category";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import pageName from "./PageName";
import "./Photography.css";

export function Photography() {
  useDocumentTitle(pageName);
  const { categories } = useLoaderData();
  return (
    <PageSection className="photography">
      <div className="content">
        <div>
          <DesignHeading>{pageName}</DesignHeading>
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
    </PageSection>
  );
}

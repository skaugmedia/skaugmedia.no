import "./Photography.css";
import { Underline } from "../../Components/Underline";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import newborn from "../../Data/Photography/newborn.yaml";
import kids from "../../Data/Photography/kids.yaml";
import family from "../../Data/Photography/family.yaml";
import confirmation from "../../Data/Photography/confirmation.yaml";
import pregnant from "../../Data/Photography/pregnant.yaml";
import portrait from "../../Data/Photography/portrait.yaml";
import engagement from "../../Data/Photography/engagement.yaml";
import wedding from "../../Data/Photography/wedding.yaml";
import food from "../../Data/Photography/food.yaml";
import product from "../../Data/Photography/product.yaml";
import business from "../../Data/Photography/business.yaml";
import { Category } from "../../Components/Category";

export const route = "fotografi";
export const pageName = "Fotografi";

const categories = [
  newborn,
  kids,
  family,
  confirmation,
  pregnant,
  portrait,
  // engagement,
  // wedding,
  food,
  product,
  business,
];

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

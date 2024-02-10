import classNames from "classnames";
import { ActionButton } from "../ActionButton";
import { Collapsible } from "../Collapsible";
import "./PriceSection.css";

export function PriceSection({
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
  title,
  text,
  price,
  reverse,

  outerClassName,
  link,
}) {
  return (
    <div
      className={classNames("PriceSection", outerClassName, {
        "PriceSection--reverse": reverse,
      })}
    >
      <div className="PriceSection__ImgSection">
        <img className="PriceSection__Img" src={imgSrc1} alt={imgAlt1}></img>
        <img className="PriceSection__Img" src={imgSrc2} alt={imgAlt2}></img>
      </div>
      <div className="PriceSection__Textbox">
        <div className="PriceSection__Header">{title}</div>
        <div className="PriceSection__PriceBox">{price}</div>
        {text}
        <ActionButton to={link}>Book her</ActionButton>
      </div>
    </div>
  );
}

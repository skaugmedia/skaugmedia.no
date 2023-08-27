import classNames from "classnames";
import { ActionButton } from "../ActionButton";
import "./DiscountAd.css";

export function DiscountAd({
  imgSrc,
  title,
  text,
  imgAlt,
  outerClassName,
  link,
}) {
  return (
    <div className={classNames("DiscountAd", outerClassName)}>
      <img className="DiscountAd__Img" src={imgSrc} alt={imgAlt}></img>
      <div className="DiscountAd__Textbox">
        <div className="DiscountAd__Header">{title}</div>
        {text}
        <ActionButton to={link}>Book her</ActionButton>
      </div>
    </div>
  );
}

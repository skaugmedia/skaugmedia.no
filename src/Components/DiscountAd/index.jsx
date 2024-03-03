import classNames from "classnames";
import { ActionButton } from "../ActionButton";
import { Image } from "../Image";
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
      <div className="DiscountAd__Textbox">
        <h2 className="DiscountAd__Header">{title}</h2>
        {text}
        <ActionButton to={link}>Book her</ActionButton>
      </div>
      <Image className="DiscountAd__Img" src={imgSrc} alt={imgAlt} />
    </div>
  );
}

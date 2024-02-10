import "./FixedDiscount.css";
import classNames from "classnames";

export const FixedDiscount = ({
  className,
  imgSrc,
  imgAlt,
  discount,
  text,
}) => (
  <div className={classNames("FixedDiscount", className)}>
    <img className="FixedDiscount__Img" src={imgSrc} alt={imgAlt}></img>
    <div className="FixedDiscount__Header">{discount}</div>
    <div className="FixedDiscount__Text">{text}</div>
  </div>
);

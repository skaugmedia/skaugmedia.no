import classNames from "classnames";
import "./WeddingSection.css";

export function WeddingSection({
  title1,
  text1,
  title2,
  text2,
  price1,
  price2,
  reverse,

  outerClassName,
  link,
}) {
  return (
    <div
      className={classNames("WeddingSection", outerClassName, {
        "WeddingSection--reverse": reverse,
      })}
    >
      <div className="WeddingSection__Textbox1">
        <div className="WeddingSection__Header">{title1}</div>
        <div className="WeddingSection__PriceBox">{price1}</div>
        {text1}
      </div>

      <div className="WeddingSection__Textbox2">
        <div className="WeddingSection__Header">{title2}</div>
        <div className="WeddingSection__PriceBox">{price2}</div>
        {text2}
      </div>
    </div>
  );
}

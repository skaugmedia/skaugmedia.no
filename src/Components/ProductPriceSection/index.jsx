import classNames from "classnames";

import "./ProductPriceSection.css";

export function ProductPriceSection({
  imgSrc,
  imgAlt,
  title,
  text,
  priceText1,
  price1,
  priceText2,
  price2,
  priceText3,
  price3,
  priceText4,
  price4,
  priceText5,
  price5,
  reverse,

  outerClassName,
  link,
}) {
  return (
    <div
      className={classNames("ProductPriceSection", outerClassName, {
        "ProductPriceSection--reverse": reverse,
      })}
    >
      <div className="ProductPriceSection__ImgSection">
        <img
          className="ProductPriceSection__Img"
          src={imgSrc}
          alt={imgAlt}
        ></img>
      </div>

      <div className="ProductPriceSection__Textbox">
        {text}

        <div className="ProductPriceSection__ContentBox">
          <div className="ProductPriceSection__ContentText">
            <div className="ProductPriceSection__PriceText">{priceText1}</div>
            <div className="ProductPriceSection__PriceText">{priceText2}</div>
            <div className="ProductPriceSection__PriceText">{priceText3}</div>
            <div className="ProductPriceSection__PriceText">{priceText4}</div>
            <div className="ProductPriceSection__PriceText">{priceText5}</div>
          </div>

          <div className="ProductPriceSection__ContentPrice">
            <div className="ProductPriceSection__Price">{price1}</div>
            <div className="ProductPriceSection__Price">{price2}</div>
            <div className="ProductPriceSection__Price">{price3}</div>
            <div className="ProductPriceSection__Price">{price4}</div>
            <div className="ProductPriceSection__Price">{price5}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

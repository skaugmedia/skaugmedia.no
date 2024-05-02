import classNames from "classnames";
import React from "react";
import "./Package.css";

export function Package({
  className,
  heading,
  subHeading,
  paragraphs,
  discountPrice,
  fullPrice,
  onReadMore,
}) {
  return (
    <div className={classNames("Package", className)}>
      <div className="Package__Heading">{heading}</div>
      <div className="Package__SubHeading">{subHeading}</div>
      {paragraphs.map((p, i) => (
        <React.Fragment key={i}>
          <div className="Package__Paragraph">{p}</div>
          <div className="Package__ParagraphDivider" />
        </React.Fragment>
      ))}
      <div className="Package__DiscountPrice">{discountPrice}</div>
      <div className="Package__FullPrice">{fullPrice}</div>
      <button onClick={onReadMore} className="Package__ReadMoreButton">
        Les mer
      </button>
    </div>
  );
}

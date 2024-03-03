import classNames from "classnames";
import React from "react";
import "./Gallery.css";

export function Gallery({
  cover: img,
  shoots,
  hideNumImages,
  className,
  title,
  h3,
}) {
  const count = (() => {
    if (hideNumImages) {
      return "";
    }
    const images = shoots.map((shoot) => shoot.images).flat();
    const plural = images.length === 1 ? "bilde" : "bilder";
    return (
      <div className="Gallery__Count">
        {images.length} {plural}
      </div>
    );
  })();
  return (
    <div className={classNames("Gallery", className)}>
      <img className="Gallery__Image" src={img.url} alt={img.title}></img>
      {React.createElement(
        h3 ? "h3" : "h2",
        { className: "Gallery__Title" },
        title,
      )}
      {count}
    </div>
  );
}

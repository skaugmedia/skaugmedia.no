import React from "react";
import "../Category/Category.css";

export function Category(props) {
  const img = props.cover;
  const images = props.shoots.map((shoot) => shoot.images).flat();
  const plural = images.length === 1 ? "bilde" : "bilder";
  return (
    <div className={`category ${props.className}`}>
      <img
        className="photography-category-image"
        src={img.url}
        alt={img.title}
      ></img>
      <h3 className="photography-category-title">{props.title}</h3>
      <div className="photography-category-count">
        {images.length} {plural}
      </div>
    </div>
  );
}

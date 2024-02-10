import classNames from "classnames";
import "./Gallery.css";

export function Gallery({
  cover: img,
  shoots,
  hideNumImages,
  className,
  title,
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
      <h3 className="Gallery__Title">{title}</h3>
      {count}
    </div>
  );
}

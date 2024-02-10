import classNames from "classnames";
import "./Category.css";

export function Gallery(props) {
  const img = props.cover;
  const images = props.shoots.map((shoot) => shoot.images).flat();
  const plural = images.length === 1 ? "bilde" : "bilder";
  return (
    <div className={classNames("Category", props.className)}>
      <img className="Category__Image" src={img.url} alt={img.title}></img>
      <h3 className="Category__Title">{props.title}</h3>
      <div className="Category__Count">
        {images.length} {plural}
      </div>
    </div>
  );
}

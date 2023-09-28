import classNames from "classnames";
import "./index.css";
import { Img } from "./Img";

export const ImageSection = ({
  images,
  className,
  imageClassName,
  ...props
}) => {
  return (
    <div className={classNames("ImageSection", className)} {...props}>
      {images.map((image) => (
        <Img {...image} className={imageClassName} />
      ))}
    </div>
  );
};

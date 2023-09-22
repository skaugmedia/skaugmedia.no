import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./index.css";

export const ImageSection = ({
  images,
  className,
  imageClassName,
  ...props
}) => {
  return (
    <div className={classNames("ImageSection", className)} {...props}>
      {images.map((image) => (
        <NavLink
          key={`${image.title}${image.url}${image.thumbnail ?? image.img.url}`}
          to={image.url}
          className={classNames("ImageSection__ImageContainer", imageClassName)}
        >
          <img
            className={classNames("ImageSection__Image", imageClassName)}
            src={image.thumbnail ?? image.img.url}
            alt={image.img.title}
          />
        </NavLink>
      ))}
    </div>
  );
};

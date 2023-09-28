import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./index.css";

export const Img = ({ className, title, url, thumbnail, img, category }) => (
  <NavLink
    key={`${title}${url}${thumbnail ?? img.url}`}
    to={url}
    className={classNames("ImageSection__ImageContainer", className)}
  >
    <img
      className={classNames("ImageSection__Image", className)}
      src={thumbnail ?? img.url}
      alt={img.title}
      title={category}
    />
  </NavLink>
);

import classNames from "classnames";
import "./PlainLink.css";
import { NavLink } from "react-router-dom";

export const PlainLink = ({ className, children, ...props }) => (
  <NavLink className={classNames(className, "PlainLink")} {...props}>
    {children}
  </NavLink>
);

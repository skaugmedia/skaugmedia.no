import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./ActionButton.css";

export function ActionButton({ className, children, to, ...props }) {
  return (
    <NavLink
      to={to}
      className={classNames("ActionButton", className)}
      {...props}
    >
      {children}
    </NavLink>
  );
}

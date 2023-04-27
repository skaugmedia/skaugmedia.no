import cn from "classnames";
import { NavLink } from "react-router-dom";
import classes from "./MiniSessionButton.module.css";

export function MiniSessionButton({ link, className, ...props }) {
  return (
    <NavLink className={cn(classes.link, className)} to={link} {...props}>
      Les mer
    </NavLink>
  );
}

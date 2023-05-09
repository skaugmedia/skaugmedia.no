import cn from "classnames";
import { NavLink } from "react-router-dom";
import classes from "./MiniSessionButton.module.css";

export function MiniSessionButton({ link, className, buttonText, ...props }) {
  return (
    <NavLink className={cn(classes.link, className)} to={link} {...props}>
      {buttonText ?? "Les mer"}
    </NavLink>
  );
}

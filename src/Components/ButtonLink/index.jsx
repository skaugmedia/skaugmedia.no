import React from "react";
import { NavLink } from "react-router-dom";
import buttonLink from "./ButtonLink.module.css";

const props = {
  className: "ommeg-button",
  children: "Les mer",
  to: "ommeg",
  ariaRole: "nav-link",
};

export function ButtonLink({ className, children, to, ...props }) {
  return (
    <NavLink to={to} className={`${buttonLink.button} ${className}`} {...props}>
      {children}
    </NavLink>
  );
}

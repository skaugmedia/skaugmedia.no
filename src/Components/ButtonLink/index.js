import { NavLink } from "react-router-dom";
import buttonLink from "./ButtonLink.module.css";

const business = {
  title: "adpkfjadsolkfhjlkajn",
  body: "dafijsadfkljslkj",
  cover: {
    title: "fadfsaoj",
    url: "adfas",
  },
  images: [
    {
      title: "adfadfkj",
      url: "adfal",
    },
    {
      title: "adfadfkj",
      url: "adfal",
    },
  ],
};

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

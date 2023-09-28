import classNames from "classnames";
import "./MobileNav.css";
import { SocialIcons } from "../SocialIcons";
import { Nav } from "../Nav";

export const MobileNav = ({ show, className, ...props }) => (
  <div
    className={classNames(
      "MobileNav",
      {
        "MobileNav--Hidden": !show,
      },
      className
    )}
    {...props}
  >
    <Nav
      containerClassName="MobileNav__Links"
      linkClassName="MobileNav__Link"
    />
    <SocialIcons itemClassName="MobileNav__SocialHamburger" />
  </div>
);

import classNames from "classnames";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { SocialIcons } from "../SocialIcons";
import "./MobileNav.css";

export const MobileNav = ({
  show,
  className,
  hamburgerOnClick,
  hamburgerToggled,
  ...props
}) => (
  <div
    className={classNames(
      "MobileNav",
      {
        "MobileNav--Hidden": !show,
      },
      className,
    )}
    {...props}
  >
    <Header
      hamburgerOnClick={hamburgerOnClick}
      hamburgerToggled={hamburgerToggled}
      isMobile={true}
      className="MobileNav__Header"
    />
    <Nav
      containerClassName="MobileNav__Links"
      linkClassName="MobileNav__Link"
    />
    <SocialIcons itemClassName="MobileNav__SocialHamburger" />
  </div>
);

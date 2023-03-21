import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, Outlet } from "react-router-dom";

import skaugmedia from "../../Images/skaugmedia.png";
import AboutPageName from "../About/PageName";
import AboutRoute from "../About/Route";
import ContactPageName from "../Contact/PageName";
import ContactRoute from "../Contact/Route";
import GraphicalDesignPageName from "../GraphicalDesign/PageName";
import GraphicalDesignRoute from "../GraphicalDesign/Route";
import HomePageName from "../Home/PageName";
import HomeRoute from "../Home/Route";
import PhotographyPageName from "../Photography/PageName";
import PhotographyRoute from "../Photography/Route";
import PricesPageName from "../Prices/PageName";
import PricesRoute from "../Prices/Route";
import "./Root.css";
import classes from "./Root.module.css";
import { SocialIcons } from "/src/Components/SocialIcons";

export function Root() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <>
      <div className="Root">
        <header className={classes.header}>
          <NavLink to={HomeRoute} className={classes.plainLink}>
            {isMobile ? (
              <h1 className={classes.mobileHeading}>
                <span className={classes.mobileHeadingFirst}>Skaug</span>
                <span className={classes.mobileHeadingSecond}>Media</span>
              </h1>
            ) : (
              <img className="logo" src={skaugmedia} alt="Skaug Media logo" />
            )}
          </NavLink>

          <div
            className={`
              ${classes.hamburger}
              ${classes.showOnMobile}
              ${showNav ? classes.change : ""}
            `}
            onClick={() => setShowNav(!showNav)}
          >
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
          </div>

          <Nav
            containerClassName={`header row ${classes.hideOnMobile}`}
            linkClassName="nav-link"
          />
        </header>

        <div className="marchdiscount">
          <div className="discountheader">LANSERINGSTILBUD</div>
          <div className="discount">
            -25% avslag på alle fotograferinger som bookes i mars
          </div>
        </div>

        <main>
          <Outlet />
        </main>

        <footer>
          <Nav containerClassName="footer-links" linkClassName="footer-link" />
          <SocialIcons
            containerClassName="footer-social"
            itemClassName="social"
          />
        </footer>
      </div>
      <div
        className={`
          ${classes.mobileNavContainer}
          ${classes.showOnMobile}
          ${showNav ? "" : classes.hide}
        `}
        onClick={() => setShowNav(false)}
      >
        <Nav
          containerClassName={classes.mobileNav}
          linkClassName={classes.mobileNavLink}
        />
        <SocialIcons itemClassName="social-hamburger" />
      </div>
    </>
  );
}

function Nav({ containerClassName, linkClassName }) {
  return (
    <nav className={containerClassName}>
      <NavLink className={linkClassName} to={HomeRoute}>
        {HomePageName}
      </NavLink>
      <NavLink className={linkClassName} to={PhotographyRoute}>
        {PhotographyPageName}
      </NavLink>
      <NavLink className={linkClassName} to={GraphicalDesignRoute}>
        {GraphicalDesignPageName}
      </NavLink>
      <NavLink className={linkClassName} to={PricesRoute}>
        {PricesPageName}
      </NavLink>
      <NavLink className={linkClassName} to={AboutRoute}>
        {AboutPageName}
      </NavLink>
      <NavLink className={linkClassName} to={ContactRoute}>
        {ContactPageName}
      </NavLink>
    </nav>
  );
}

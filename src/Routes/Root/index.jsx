import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, Outlet } from "react-router-dom";
import etsy from "../../Images/etsy.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import skaugmedia from "../../Images/skaugmedia.png";
import tiktok from "../../Images/tiktok.png";
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

        <main>
          <Outlet />
        </main>

        <footer>
          <Nav containerClassName="footer-links" linkClassName="footer-link" />
          <div className="footer-social">
            <Link to="https://www.facebook.com/profile.php?id=100089990337611">
              <img className="social" src={facebook} alt="Facebook"></img>
            </Link>
            <Link to="https://www.instagram.com/skaugmedia/">
              <img className="social" src={instagram} alt="Instagram"></img>
            </Link>
            <Link to="https://www.tiktok.com/@skaugmedia?_t=8a92nGlyw7N&_r=1">
              <img className="social" src={tiktok} alt="Tiktok"></img>
            </Link>
            <Link to="https://www.etsy.com/shop/SkaugMedia?ref=search_shop_redirect">
              <img className="social" src={etsy} alt="Etsy"></img>
            </Link>
          </div>
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
        <div>
          <Link to="https://www.facebook.com/profile.php?id=100089990337611">
            <img
              className="social-hamburger"
              src={facebook}
              alt="Facebook"
            ></img>
          </Link>
          <Link to="https://www.instagram.com/skaugmedia/">
            <img
              className="social-hamburger"
              src={instagram}
              alt="Instagram"
            ></img>
          </Link>
          <Link to="https://www.tiktok.com/@skaugmedia?_t=8a92nGlyw7N&_r=1">
            <img className="social-hamburger" src={tiktok} alt="Tiktok"></img>
          </Link>
          <Link to="https://www.etsy.com/shop/SkaugMedia?ref=search_shop_redirect">
            <img className="social-hamburger" src={etsy} alt="Etsy"></img>
          </Link>
        </div>
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

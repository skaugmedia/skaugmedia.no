import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import AboutRoute from "../About/Route";
import AboutPageName from "../About/PageName";
import ContactRoute from "../Contact/Route";
import ContactPageName from "../Contact/PageName";
import GraphicalDesignRoute from "../GraphicalDesign/Route";
import GraphicalDesignPageName from "../GraphicalDesign/PageName";
import PhotographyRoute from "../Photography/Route";
import PhotographyPageName from "../Photography/PageName";
import PricesPageName from "../Prices/PageName";
import PricesRoute from "../Prices/Route";
import HomeRoute from "../Home/Route";
import HomePageName from "../Home/PageName";
import "./Root.css";
import classes from "./Root.module.css";
import { Outlet, NavLink } from "react-router-dom";
import skaugmedia from "../../Images/skaugmedia.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import tiktok from "../../Images/tiktok.png";
import etsy from "../../Images/etsy.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Root() {
  const [showNav, toggleNav] = useState(false);

  return (
    <>
      <div className="Root">
        <header className="header">
          <NavLink to={HomeRoute} className={classes.plainLink}>
            <img className="logo" src={skaugmedia} alt="Skaug Media logo"></img>
          </NavLink>

          <div className="hamburger" onClick={toggleNav}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
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
      <div className={classes.mobileNav}></div>
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

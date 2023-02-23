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

export function Root() {
  return (
    <div className="Root">
      <header className="header">
        <NavLink to={HomeRoute} className={classes.plainLink}>
          <img className="logo" src={skaugmedia} alt="Skaug Media logo"></img>
        </NavLink>
        <nav className="header row">
          <NavLink className="nav-link" to={HomeRoute}>
            {HomePageName}
          </NavLink>
          <NavLink className="nav-link" to={PhotographyRoute}>
            {PhotographyPageName}
          </NavLink>
          <NavLink className="nav-link" to={GraphicalDesignRoute}>
            {GraphicalDesignPageName}
          </NavLink>
          <NavLink className="nav-link" to={PricesRoute}>
            {PricesPageName}
          </NavLink>
          <NavLink className="nav-link" to={AboutRoute}>
            {AboutPageName}
          </NavLink>
          <NavLink className="nav-link" to={ContactRoute}>
            {ContactPageName}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-links">
          <NavLink className="footer-link" to={HomeRoute}>
            {HomePageName}
          </NavLink>

          <NavLink className="footer-link" to={PhotographyRoute}>
            {PhotographyPageName}
          </NavLink>

          <NavLink className="footer-link" to={GraphicalDesignRoute}>
            {GraphicalDesignPageName}
          </NavLink>

          <NavLink className="footer-link" to={PricesRoute}>
            {PricesPageName}
          </NavLink>

          <NavLink className="footer-link" to={AboutRoute}>
            {AboutPageName}
          </NavLink>

          <NavLink className="footer-link" to={ContactRoute}>
            {ContactPageName}
          </NavLink>
        </div>
        <div className="footer-social">
          <a>
            {" "}
            <img className="social" src={facebook} alt="Facebook"></img>
          </a>
          <a>
            <img className="social" src={instagram} alt="Instagram"></img>
          </a>
          <a>
            {" "}
            <img className="social" src={tiktok} alt="Tiktok"></img>
          </a>
          <a>
            <img className="social" src={etsy} alt="Etsy"></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

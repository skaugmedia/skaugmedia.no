import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import * as About from "../About";
import * as Contact from "../Contact";
import * as GraphicalDesign from "../GraphicalDesign";
import * as Photography from "../Photography";
import * as Prices from "../Prices";
import * as Home from "../Home";
import "./Root.css";
import { Outlet, NavLink } from "react-router-dom";

const skaugmedia = new URL("../../Images/skaugmedia.png", import.meta.url);
const facebook = new URL("../../Images/facebook.png", import.meta.url);
const instagram = new URL("../../Images/instagram.png", import.meta.url);
const tiktok = new URL("../../Images/tiktok.png", import.meta.url);
const etsy = new URL("../../Images/etsy.png", import.meta.url);

function Root() {
  return (
    <div className="Root">
      <header className="header">
        <img className="logo" src={skaugmedia} alt="Skaug Media logo"></img>
        <nav className="header row">
          <NavLink className="nav-link" to={Home.route}>
            {Home.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Photography.route}>
            {Photography.pageName}
          </NavLink>
          <NavLink className="nav-link" to={GraphicalDesign.route}>
            {GraphicalDesign.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Prices.route}>
            {Prices.pageName}
          </NavLink>
          <NavLink className="nav-link" to={About.route}>
            {About.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Contact.route}>
            {Contact.pageName}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-links">
          <NavLink className="footer-link" to={Home.route}>
            {Home.pageName}
          </NavLink>

          <NavLink className="footer-link" to={Photography.route}>
            {Photography.pageName}
          </NavLink>

          <NavLink className="footer-link" to={GraphicalDesign.route}>
            {GraphicalDesign.pageName}
          </NavLink>

          <NavLink className="footer-link" to={Prices.route}>
            {Prices.pageName}
          </NavLink>

          <NavLink className="footer-link" to={About.route}>
            {About.pageName}
          </NavLink>

          <NavLink className="footer-link" to={Contact.route}>
            {Contact.pageName}
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

export default Root;

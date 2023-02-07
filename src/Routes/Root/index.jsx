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
      <footer></footer>
    </div>
  );
}

export default Root;

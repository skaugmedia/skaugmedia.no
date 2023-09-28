import HomeRoute from "/src/Routes/Home/Route";
import { PlainLink } from "../PlainLink";
import "./Header.css";
import { Nav } from "../Nav";
import { useState } from "react";
import classNames from "classnames";
import skaugmedia from "../../Images/skaugmedia.png";
import { Hamburger } from "../Hamburger";

export const Header = ({ isMobile }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="Header">
      <PlainLink to={HomeRoute} className="Header__LogoContainer">
        {isMobile ? (
          <h1 className="Header--Mobile">
            <span className="Header--Mobile__First">Skaug</span>
            <span className="Header--Mobile__Second">Media</span>
          </h1>
        ) : (
          <img
            className="Header__Logo"
            src={skaugmedia}
            alt="Skaug Media logo"
          />
        )}
      </PlainLink>

      <Hamburger
        className={classNames("Header__Hamburger")}
        toggled={showNav}
        onClick={() => setShowNav(!showNav)}
      />

      <Nav
        containerClassName="Header--Mobile__Nav"
        linkClassName="Header--Mobile__NavLink"
      />
    </header>
  );
};

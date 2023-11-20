import classNames from "classnames";
import skaugmedia from "../../Images/skaugmedia_logo_only.png";
import { Hamburger } from "../Hamburger";
import { Nav } from "../Nav";
import { PlainLink } from "../PlainLink";
import "./Header.css";
import HomeRoute from "/src/Routes/Home/Route";

export const Header = ({ isMobile, hamburgerToggled, hamburgerOnClick }) => {
  return (
    <header className="Header">
      <div className="Header__Inner">
        <Hamburger
          className={classNames("Header__Hamburger")}
          toggled={hamburgerToggled}
          onClick={hamburgerOnClick}
        />

        <Nav
          containerClassName="Header--Mobile__Nav"
          linkClassName="Header--Mobile__NavLink"
        />

        <PlainLink to={HomeRoute} className="Header__LogoContainer">
          {isMobile ? (
            <h1 className="Header--Mobile">
              <span className="Header--Mobile__First">Skaug</span>
              <span className="Header--Mobile__Second">Media</span>
            </h1>
          ) : (
            <>
              <h1 className="Header__Name">
                <span className="Header__NameFirst">Skaug</span>
                <span className="Header__NameSecond">Media</span>
              </h1>
              <img
                className="Header__Logo"
                src={skaugmedia}
                alt="Skaug Media logo"
              />
            </>
          )}
        </PlainLink>
      </div>
    </header>
  );
};

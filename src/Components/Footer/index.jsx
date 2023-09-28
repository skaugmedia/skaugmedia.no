import { SocialIcons } from "../SocialIcons";
import { Nav } from "../Nav";
import "./Footer.css";

export const Footer = () => (
  <footer>
    <div className="Footer">
      <Nav containerClassName="Footer__Links" linkClassName="Footer__Link" />
      <div className="Footer__RowTwo">
        <img
          className="Footer__RowLogo"
          src="SimpleLogo"
          alt="Skaug Media simple logo"
        />
        <div className="Footer__RowText">Nina Merethe Skaug</div>
        <div className="Footer__RowText">Tlf. 464 18 241</div>
        <div className="Footer__RowText">kontakt@skaugmedia.no</div>
      </div>
      <div>
        <SocialIcons
          containerClassName="Footer__Social"
          itemClassName="Footer__SocialImg"
        />
      </div>
    </div>
  </footer>
);

import { SocialIcons } from "../SocialIcons";
import { Nav } from "../Nav";
import "./Footer.css";

import FooterLogo from "../../Images/Footer/skaug_media_simple_logo.png";

export const Footer = () => (
  <footer>
    <div className="Footer">
      <div className="Footer__ContentBox">
        <Nav containerClassName="Footer__Links" linkClassName="Footer__Link" />
        <div className="Footer__RowTwo">
          <img
            className="Footer__RowLogo"
            src={FooterLogo}
            alt="Skaug Media simple logo"
          />
          <div className="Footer__RowText">Nina Merethe Skaug</div>
          <div className="Footer__RowText">Tlf. 464 18 241</div>
          <div className="Footer__RowText">kontakt@skaugmedia.no</div>

          <div className="Footer__SocialIcons">
            <SocialIcons
              containerClassName="Footer__Social"
              itemClassName="Footer__SocialImg"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

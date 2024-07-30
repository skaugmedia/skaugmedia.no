import { Nav } from "../Nav";
import { SocialIcons } from "../SocialIcons";
import "./Footer.css";

import FooterLogo from "../../Images/Footer/skaug_media_simple_logo.png";

export const Footer = () => (
  <footer>
    <div className="Footer">
      <div className="Footer__ContentBox">
        <div className="Footer__ColumnBox">
          <div className="Footer__ColumnTwo">
            <Nav
              containerClassName="Footer__Links"
              linkClassName="Footer__Link"
            />
          </div>
          <div className="Footer__ColumnOne">
            <div className="Footer__ColumnText">Nina Merethe Skaug</div>
            <div className="Footer__ColumnText">Tlf. 464 18 241</div>
            <div className="Footer__ColumnText">
              E-post: kontakt@skaugmedia.no
            </div>
            <div className="Footer__ColumnText">
              Organisasjonsnummer: 930 561 673
            </div>
            <img
              className="Footer__ColumnLogo"
              src={FooterLogo}
              alt="Skaug Media simple logo"
            />

            <div className="Footer__SocialIcons">
              <SocialIcons
                containerClassName="Footer__Social"
                itemClassName="Footer__SocialImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

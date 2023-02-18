import ContactRoute from "../Contact/Route";
import AboutRoute from "../About/Route";
import { ButtonLink } from "../../Components/ButtonLink";
import { PageSection } from "../../Components/PageSection";
import "./Home.css";
import liamforside from "../../Images/liam_kvadrat_forside.jpg";
import lashbrowserforside from "../../Images/lashbrowser_forside.jpg";
import konfirmantsiljeforside from "../../Images/konfirmant_silje_forside.jpg";
import ninaforside from "../../Images/nina_forside.png";
import liamnyfødtforside from "../../Images/liam_nyfødt_forside.jpg";

import edwinforside from "../../Images/edwin_forside.jpg";
import siljeforside from "../../Images/silje_forside.jpg";
import matforside from "../../Images/matfotografi_forside.jpg";
import produktforside from "../../Images/produkt_forside.jpg";
import designforside from "../../Images/design_forside.jpg";

export function Home() {
  return (
    <>
      <PageSection outerClassName="intro-outer" innerClassName="intro">
        <div className="flex-container">
          <div className="flex-child text-container">
            <div className="intro-tekst">
              Nina Merethe Skaug <br />
              Fotograf og designer på Jessheim
            </div>
            <div className="uthevet-intro-tekst">
              Portrettfoto, produktfoto,
              <br />
              matfoto og grafisk design.
            </div>
            <ButtonLink to={ContactRoute} className="homecontactbutton">
              Kontakt meg
            </ButtonLink>
          </div>
          <div className="flex-child image-container">
            <img className="foto-header" src={liamforside} alt="Liam"></img>
            <img
              className="foto-header"
              src={lashbrowserforside}
              alt="Lashbrowser logo"
            ></img>
            <img
              className="foto-header"
              src={konfirmantsiljeforside}
              alt="Konfirmanten Silje"
            ></img>
          </div>
        </div>
      </PageSection>
      <PageSection innerClassName="skaugmedia">
        <div className="flex-container">
          <div className="flex-child image-container">
            <img
              className="round-nina"
              src={ninaforside}
              alt="Nina Merethe Skaug"
            ></img>
          </div>
          <div className="flex-child text-container">
            <div className="skaugmedia-overskrift">Skaug Media</div>
            <div className="nina-text">
              Jeg heter Nina Merethe Skaug, er mamma, fotograf og grafisk
              designer. Jeg elsker å være kreativ, og brenner for å<br />
              skape flotte bilder og design, både til privat og bedrifter. Jeg
              holder til på Jessheim i Ullensaker kommune, men <br />
              fotograferer over hele Oslo, Romerike og omegn.
            </div>
            <ButtonLink to={AboutRoute} className="lesmer-button">
              Les mer
            </ButtonLink>
          </div>
        </div>
      </PageSection>
      {
        <PageSection outerClassName="works-outer" innerClassName="works">
          <div className="flex-container works-forside">
            <div className="flex-child">
              <img
                className="works-img"
                src={liamnyfødtforside}
                alt="Liam"
              ></img>
              <div className="works-title">Nyfødt</div>
            </div>
            <div className="flex-child">
              <img className="works-img" src={edwinforside} alt="Edwin"></img>
              <div className="works-title">Familie og barn</div>
            </div>
            <div className="flex-child">
              <img className="works-img" src={siljeforside} alt="Silje"></img>
              <div className="works-title">Konfirmant</div>
            </div>

            <div className="flex-child">
              <img
                className="works-img"
                src={matforside}
                alt="Appelsinformkake med mørk sjokolade"
              ></img>
              <div className="works-title">Matfotografi</div>
            </div>
            <div className="flex-child">
              <img
                className="works-img"
                src={produktforside}
                alt="Rosendahl champagneglass"
              ></img>
              <div className="works-title">Produktfotografi</div>
            </div>
            {/*   <div className="flex-child">   <img
            className="works-img"
            src={}
            alt=""></img>
          <div className="works-title">Forlovelse</div></div>
          <div className="flex-child"> <img
            className="works-img"
            src={}
            alt=""
          ></img>
          <div className="works-title">Bryllup</div></div>
         <div className="flex-child">  <img
            className="works-img"
            src={}
            alt=""
          ></img>
          <div className="works-title">Interiør</div></div>  */}
            <div className="flex-child">
              <img
                className="works-img"
                src={designforside}
                alt="LashBrowser prisliste"
              ></img>
              <div className="works-title">Grafisk design</div>
            </div>
          </div>
        </PageSection>
      }
    </>
  );
}

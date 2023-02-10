import * as Contact from "../Contact";
import * as About from "../About";
import Button from "../../Components/Button";
import { ButtonLink } from "../../Components/ButtonLink";
import "./Home.css";

export const route = "";
export const pageName = "Hjem";

const liamforside = new URL(
  "../../Images/liam_kvadrat_forside.jpg",
  import.meta.url
);
const lashbrowserforside = new URL(
  "../../Images/lashbrowser_forside.jpg",
  import.meta.url
);
const konfirmantsiljeforside = new URL(
  "../../Images/konfirmant_silje_forside.jpg",
  import.meta.url
);
const ninaforside = new URL("../../Images/nina_forside.png", import.meta.url);
const liamnyfødtforside = new URL(
  "../../Images/liam_nyfødt_forside.jpg",
  import.meta.url
);
const marianneforside = new URL(
  "../../Images/marianne_forside.jpg",
  import.meta.url
);
const edwinforside = new URL("../../Images/edwin_forside.jpg", import.meta.url);
const siljeforside = new URL("../../Images/silje_forside.jpg", import.meta.url);
const matforside = new URL(
  "../../Images/matfotografi_forside.jpg",
  import.meta.url
);
const produktforside = new URL(
  "../../Images/produkt_forside.jpg",
  import.meta.url
);
const designforside = new URL(
  "../../Images/design_forside.jpg",
  import.meta.url
);

export function Home() {
  return (
    <>
      <div className="section intro">
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
            <ButtonLink to={Contact.route} className="homecontactbutton">
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
      </div>
      <div className="skaugmedia section">
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
            <ButtonLink to={About.route} className="lesmer-button">
              Les mer
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="section works">
        <div className="flex-container works-forside">
          <div className="flex-child">
            <img className="works-img" src={liamnyfødtforside} alt="Liam"></img>
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
              src={marianneforside}
              alt="Marianne"
            ></img>
            <div className="works-title">Portrett</div>
          </div>
          <div className="flex-child">
            {" "}
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
          {/*        <div className="flex-child">   <img
            className="works-img"
            src={}
            alt=""
          ></img>
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
            {" "}
            <img
              className="works-img"
              src={designforside}
              alt="LashBrowser prisliste"
            ></img>
            <div className="works-title">Grafisk design</div>
          </div>
        </div>
      </div>
    </>
  );
}

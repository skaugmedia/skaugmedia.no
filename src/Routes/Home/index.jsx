import Button from "../../Components/Button";
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

export function Home() {
  return (
    <div className="section-intro background-intro">
      <div className="flex-container">
        <div className="flex-child text-container">
          <div className="intro-tekst">
            Nina Merethe Skaug <p>Fotograf og designer på Jessheim</p>
          </div>
          <div className="uthevet-intro-tekst">
            Portrettfoto, produktfoto,
            <p>matfoto og grafisk design.</p>
          </div>
          <Button>Kontakt meg</Button>
        </div>

        <div class="flex-child image-container">
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
  );
}

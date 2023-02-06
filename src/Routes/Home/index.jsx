import Button from "../../Components/Button";

export const route = "";
export const pageName = "Hjem";

export function Home() {
  return (
    <div className="section-intro background-intro">
      <div className="intro-tekst">
        Nina Merethe Skaug <p>Fotograf og designer på Jessheim</p>
      </div>
      <div className="uthevet-intro-tekst">
        Portrettfoto, produktfoto, matfoto og grafisk design.
      </div>
      <Button>Kontakt meg</Button>
      <img className="foto-header" src="" alt=""></img>
      <img className="foto-header" src="" alt=""></img>
      <img className="foto-header" src="" alt=""></img>
    </div>
  );
}

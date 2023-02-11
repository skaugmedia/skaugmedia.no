import "./About.css";
import FotografiHeading from "../../Components/Headings/FotografiHeading";

export const route = "ommeg";
export const pageName = "Om meg";

const aboutnina = new URL("../../Images/me.jpg", import.meta.url);

export function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="section-about-box">
          <div>
            <FotografiHeading className="about-title">
              {pageName}
            </FotografiHeading>
            <div className="about-text">
              Jeg heter Nina Merethe og jeg jobber som fotograf og designer.
              Mine store lidenskaper er fotografi og design, jeg elsker å jobbe
              kreativt og jeg brenner for å levere flotte bilder som du kan
              henge på veggen og som du kan ha glede av i mange år fremover, om
              ikke for alltid!
              <br />
              <br />
              Jeg bor på Jessheim i Ullensaker kommune, sammen med samboer og en
              sønn på 1 år. Jeg tar på meg oppdrag på Romerike, Oslo og omegn,
              men ta gjerne kontakt om du lurer på om du bor for langt unna.
              <br />
              <br />
              For meg er det viktig at dere skal kose dere foran kamera, og
              tørre å være dere selv- da blir bildene og opplevelsen best! Jeg
              gjør det jeg kan for at opplevelsen blir bra, og jeg ønsker å
              fange magiske øyeblikk.
              <br />
              <br />
              Jeg fotograferer alltid på location, helst utendørs, men jeg kan
              også fotografere innendørs på location, med fotolys om dette er
              ønskelig. Jeg vil alltid hjelpe til med veiledning i forhold til
              valg av location og hva dere skal ha på dere under
              fotograferingen. Om det skulle være noe dere lurer på, så er ingen
              spørsmål dumme, jeg svarer så godt jeg kan på hva enn det måtte
              være!
              <br />
              <br />I all hovedsak fotograferer jeg konfirmanter, baby, barn,
              familie, portretter, produkter og matfotografi. Jeg fotograferer
              også for næringsliv og bedrifter, samt at jeg leverer ulike
              designtjenester. Jeg tilbyr både fulle designpakker og enkle
              designtjenester, alt etter hva du og din bedrift ønsker.
            </div>
            <img
              className="about-img"
              src={aboutnina}
              alt="Nina Merethe Skaug"
            ></img>
          </div>
        </div>
      </div>
      <div className="quote-box">
        <div className="about-name-title">
          Nina Merethe Skaug, fotograf og grafisk designer
        </div>
        <div className="about-quote">
          - Som fotograf fokuserer jeg på å få frem de magiske øyeblikkene og
          jeg er opptatt av at alle skal ha en fin opplevelse foran kamera. Mens
          jeg som designer er leken og eksperimentell, samtidig som jeg gjerne
          forholder meg til et stramt gridsystem.
        </div>
      </div>
    </div>
  );
}

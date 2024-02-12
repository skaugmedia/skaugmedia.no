import { useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import AboutMe from "../../Images/meg.jpg";
import "./About.css";
import pageName from "./PageName";

export function About() {
  const location = useLocation();
  return (
    <div className="AboutMe">
      <SkaugHelmet
        title={pageName}
        description="Beskrivelse av meg som fotograf og hvilke kvaliteter jeg verdsetter ved arbeidet mitt."
        canonical={location.pathname}
      />
      <PageSection
        outerClassName="AboutMe__Outer"
        innerClassName="AboutMe__Inner"
      >
        <DesignHeading>Om meg</DesignHeading>
        <div className="AboutMe__Box">
          <div className="AboutMe__Text">
            <p>
              Jeg heter Nina Merethe Skaug og jeg jobber som fotograf og
              designer i Skaug Media. Jeg elsker å jobbe kreativt og jeg brenner
              for å levere flotte bilder som du kan henge på veggen og som du
              kan ha glede av i mange år fremover, om ikke for alltid!
            </p>
            <p>
              Jeg bor på Jessheim i Ullensaker kommune, sammen med min forlovede
              og en sønn på snart 2 år. Jeg tar på meg oppdrag på Romerike, Oslo
              og omegn, men ta gjerne kontakt om du lurer på om du bor for langt
              unna.
            </p>
            <p>
              For meg er det viktig at dere skal ha en hyggelig opplevelse med å
              være foran kamera, og tørre å være dere selv- da blir bildene og
              opplevelsen best! Jeg gjør det jeg kan for at opplevelsen blir
              bra, og jeg ønsker å fange de magiske øyeblikkene.
            </p>
            <p>
              Jeg har ikke eget studio, da jeg alltid fotograferer på location,
              og aller helst utendørs. Jeg vil alltid hjelpe til med veiledning
              i forhold til valg av location og hva dere skal ha på dere under
              fotograferingen. For gravide, nyfødt og babyer har jeg en liten
              kundegarderobe som kan brukes ved fotografering. Om det skulle
              være noe dere lurer på, så er ingen spørsmål dumme, og jeg svarer
              så godt jeg kan på hva enn det måtte være!
            </p>
            <p>
              I all hovedsak fotograferer jeg konfirmanter, baby, barn, familie,
              portretter, produkter og matfotografi. I høst skal jeg starte opp
              med eiendomsfotografering, og bruke en del av tiden min på dette.
              Jeg fotograferer også for næringsliv og bedrifter, samt at jeg
              leverer ulike designtjenester til både privatpersoner og
              næringsliv. Jeg tilbyr både fulle designpakker og enkle
              designtjenester, alt etter hva slags behov og ønsker dere har.
            </p>
          </div>

          <img
            className="AboutMe__Img"
            src={AboutMe}
            alt="Nina Merethe Skaug"
          ></img>
        </div>
      </PageSection>
    </div>
  );
}

function Paragraphs() {
  return (
    <>
      <p>
        Jeg heter Nina Merethe og jeg jobber som fotograf og designer. Mine
        store lidenskaper er fotografi og design, jeg elsker å jobbe kreativt og
        jeg brenner for å levere flotte bilder som du kan henge på veggen og som
        du kan ha glede av i mange år fremover, om ikke for alltid!
      </p>
      <p>
        Jeg bor på Jessheim i Ullensaker kommune, sammen med min forlovede og en
        sønn på 1,5 år. Jeg tar på meg oppdrag på Romerike, Oslo og omegn, men
        ta gjerne kontakt om du lurer på om du bor for langt unna.
      </p>
      <p>
        For meg er det viktig at dere skal kose dere foran kamera, og tørre å
        være dere selv- da blir bildene og opplevelsen best! Jeg gjør det jeg
        kan for at opplevelsen blir bra, og jeg ønsker å fange magiske øyeblikk.
      </p>
      <p>
        Jeg fotograferer alltid på location, helst utendørs, men jeg kan også
        fotografere innendørs på location, med fotolys om dette er ønskelig. Jeg
        vil alltid hjelpe til med veiledning i forhold til valg av location og
        hva dere skal ha på dere under fotograferingen. Om det skulle være noe
        dere lurer på, så er ingen spørsmål dumme, jeg svarer så godt jeg kan på
        hva enn det måtte være!
      </p>
      <p>
        I all hovedsak fotograferer jeg konfirmanter, baby, barn, familie,
        portretter, produkter og matfotografi. Jeg fotograferer også for
        næringsliv og bedrifter, samt at jeg leverer ulike designtjenester. Jeg
        tilbyr både fulle designpakker og enkle designtjenester, alt etter hva
        du og din bedrift ønsker.
      </p>
    </>
  );
}

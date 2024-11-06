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
        <DesignHeading h1>Om meg</DesignHeading>
        <div className="AboutMe__Box">
          <div className="AboutMe__Text">
            <p>
              Jeg heter Nina Merethe Skaug og jeg er fotograf og grafisk
              designer i Skaug Media. Nå jobber jeg ikke lenger fulltid i Skaug
              Media, men jeg tar gjerne på meg oppdrag en gang i blandt.
            </p>
            <p>
              Jeg bor på Jessheim i Ullensaker kommune, sammen med min forlovede
              og en sønn på 3 år. Jeg tar på meg oppdrag på Romerike, Oslo og
              omegn.
            </p>
            <p>
              For meg er det viktig at dere skal ha en hyggelig opplevelse med å
              være foran kamera, og tørre å være dere selv- da blir bildene og
              opplevelsen best! Jeg gjør det jeg kan for at opplevelsen blir
              bra, og jeg ønsker å fange de magiske øyeblikkene.
            </p>
            <p>
              Jeg har ikke eget studio, da jeg i hovedsak fotograferer utendørs,
              men jeg har mulighet for å sette opp et lite ministudio for
              fotografering av barn - om du har god nok plass hjemme. For
              gravide, nyfødt og barn har jeg en liten kundegarderobe som kan
              brukes ved fotografering. Om det skulle være noe dere lurer på, så
              er ingen spørsmål dumme, og jeg svarer så godt jeg kan på hva enn
              det måtte være!
            </p>
            <p>
              I all hovedsak fotograferer jeg gravide, barn, familie,
              konfirmanter, portretter, produkter og mat.
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

import FotografiHeading from "../../Components/Headings/FotografiHeading";
import aboutnina from "../../Images/me.jpg";
import classes from "./About.module.css";
import { Image } from "/src/Components/Image";
import pageName from "./PageName";
import { PageSection } from "../../Components/PageSection";

export function About() {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.container}>
          <FotografiHeading className={classes.heading}>
            {pageName}
          </FotografiHeading>
          <Image
            className={classes.headshot}
            src={aboutnina}
            alt="Nina Merethe Skaug"
          />
          <div className={classes.text}>
            <Paragraphs />
          </div>
          <div className={classes.topLightgreen} />
          <div className={classes.rightLightgreen} />
          <div className={classes.bottomRightLightgreen} />
        </div>
      </div>
      <Quote />
    </>
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
        Jeg bor på Jessheim i Ullensaker kommune, sammen med samboer og en sønn
        på 1 år. Jeg tar på meg oppdrag på Romerike, Oslo og omegn, men ta
        gjerne kontakt om du lurer på om du bor for langt unna.
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

function Quote() {
  return (
    <PageSection className={classes.quote}>
      <div className={classes.quoteTitle}>
        Nina Merethe Skaug, fotograf og grafisk designer
      </div>
      <div className={classes.quoteContent}>
        - Som fotograf fokuserer jeg på å få frem de magiske øyeblikkene og jeg
        er opptatt av at alle skal ha en fin opplevelse foran kamera. Mens jeg
        som designer er leken og eksperimentell, samtidig som jeg gjerne
        forholder meg til et stramt gridsystem.
      </div>
    </PageSection>
  );
}

import * as ids from "./Ids";
import { Collapsible } from "../../Components/Collapsible";
import { IncludesList } from "./Components/IncludesList";

export const siblings = ({ ref, open }) => (
  <Collapsible
    id={ids.miniSessionSiblings}
    outerRef={ref}
    open={open}
    outerClassName="prices-heading"
    title="Søsken (gjelder kun fotografering i april)"
    price="Kr. 1000,-"
  >
    Minifotografering av søsken kan bookes for hele april, tilbudet gjelder kun
    fotograferinger i april. Gjelder for 2 eller flere søsken i aldre fra 6mnd
    og oppover. Kan ikke kombineres med andre tilbud.
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "Samtale før fotografering med veiledning til valg av lokasjon og anbefalte klær",
        "20 minutters fotografering på lokasjon utendørs",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "3 stk. redigerte, høyoppløselige bilder",
        "Bildene leveres digitalt",
        "Mulighet for å kjøpe ekstra bilder",
      ]}
    />
    Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er prisen
    kr. 600,- per bilde.
    <p className="additional-prices">
      Kveldstillegg etter kl. 18.00: kr. 400,- <br />
      Helgetillegg: kr. 700,- <br />
      <br />
      Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt til
      avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
    </p>
    <p>
      Eventuell betalt parkering og kjøring utover 20km fra Jessheim, faktureres
      med kr. 10,- per km.
    </p>
  </Collapsible>
);

export const confirmation = ({ ref, open }) => (
  <Collapsible
    id={ids.miniSessionConfirmation}
    outerRef={ref}
    open={open}
    outerClassName="prices-heading"
    title="Konfirmant (gjelder fotografering 20. mai)"
    price="Kr. 1000,-"
  >
    Minifotografering av konfirmanter 20. mai 2023, ved Nordbytjernet på
    Jessheim. Kun oppsatte tidspunkter kan bookes. Kan ikke kombineres med andre
    tilbud.
    <p>Ledige fotograferinger:</p>
    <p className="prices-time">
      Kl. 11.00, kl. 11.30, kl. 12.00, kl. 12.30, kl. 13.00, kl. 13.30, kl.
      14.00, kl. 14.30, kl. 15.00, kl. 15.30
    </p>
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "20 minutters fotografering ved Nordbytjernet på Jessheim",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "3 stk. redigerte, høyoppløselige bilder",
        "Bildene leveres digitalt",
        "Mulighet for å kjøpe ekstra bilder",
      ]}
    />
    Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er prisen
    kr. 600,- per bilde.
    <p className="additional-prices">
      Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt til
      avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
    </p>
  </Collapsible>
);

export const minisessions = ({ ref, open }) => (
  <Collapsible
    id={ids.miniSessionMinisessions}
    outerRef={ref}
    open={open}
    outerClassName="prices-heading"
    title="Valgfri minifotografering"
    price="Kr. 850,-"
  >
    Valgfri minifotografering kan bookes for datoer i mai og juni.
    <br />
    *Tilbudet gjelder ikke for nyfødtfotograferinger eller
    bryllupsfotografering, og kan ikke kombineres med andre tilbud.
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "Veiledning før fotografering i forhold til klær og lokasjon",
        "20 minutters fotografering utendørs",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "3 stk. redigerte, høyoppløselige bilder",
        "Bildene leveres digitalt",
        "Mulighet for å kjøpe ekstra bilder",
        "Mulighet for å bestille trykkede bilder",
        "Du velger selv hva slags fotografering du ønsker og når",
      ]}
    />
    Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er prisen
    kr. 600,- per bilde.
    <p className="additional-prices">
      Kveldstillegg etter kl. 18.00: kr. 400,- <br />
      Helgetillegg: kr. 700,- <br />
      <br />
      Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt til
      avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
    </p>
    <p>
      Eventuell betalt parkering og kjøring utover 20km fra Jessheim, faktureres
      med kr. 10,- per km.
    </p>
  </Collapsible>
);

import { Collapsible } from "../../Components/Collapsible";
import { IncludesList } from "./Components/IncludesList";
import * as ids from "./Ids";

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
    title="Minifotografering konfirmanter"
    price="Kr. 1000,-"
  >
    Minifotografering av konfirmanter 26. august 2023, ved Nordbytjernet på
    Jessheim.
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "20 minutters fotografering ved Nordbytjernet på Jessheim",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "2 stk. valgfrie bildekopier i 15x20cm",
        "Mulighet for å kjøpe digitale bilder og flere bildeprodukter",
      ]}
    />
    <p className="additional-prices">
      Faktura sendes ut ved booking, og må betales før fotograferingen.
    </p>
  </Collapsible>
);

export const christmas = ({ ref, open }) => (
  <Collapsible
    id={ids.miniSessionChristmas}
    outerRef={ref}
    open={open}
    outerClassName="prices-heading"
    title="Minifotografering jul"
    price="Kr. 1200,-"
  >
    Minifotografering julefotografering 21. oktober 2023.
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "20 minutters valgfri fotografering utendørs",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "2 stk. digitale bildefiler i høy oppløsning",
        "Mulighet for å kjøpe digitale bilder og flere bildeprodukter",
        "Mail med informasjon om lokasjon og tips til hva du kan ha på deg når det nærmer seg",
      ]}
    />
    Du booker fotograferingen ved å sende en mail til booking@skaugmedia.no,
    merket med "julefotografering" eller ta kontakt via kontaktskjema her på
    nettsiden.
    <p className="additional-prices">
      Faktura sendes ut ved booking, og må betales før fotograferingen.
    </p>
  </Collapsible>
);

export const sunflower = ({ ref, open }) => (
  <Collapsible
    id={ids.miniSessionSunflower}
    outerRef={ref}
    open={open}
    outerClassName="prices-heading"
    title="Minifotografering i solsikkeåker"
    price="Kr. 900,-"
  >
    Valgfri minifotografering i solsikkeåker 21. august 2023 på en gård i
    Lillestrøm kommune. Adressen mottas ved booking. Kan ikke kombineres med
    andre tilbud. Fotograferingen betales ved booking for å reservere din tid.
    <p>Ledige fotograferinger:</p>
    <p className="prices-time">
      Kl. 13.30, kl. 14.00, kl. 14.30, kl. 15.00, kl. 15.30, kl. 16.00, kl.
      16.30, kl. 17.00
    </p>
    <p>Inkluderer:</p>
    <IncludesList
      items={[
        "20 minutters fotografering på en gård i Lillestrøm kommune",
        "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
        "3 stk. redigerte, høyoppløselige bilder",
        "Bildene leveres digitalt",
        "Mulighet for å kjøpe ekstra bilder og trykk",
      ]}
    />
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

import ContactRoute from "../Routes/Contact/Route";
import * as ids from "../Routes/Prices/Ids";
import PricesRoute from "../Routes/Prices/Route";
import { kr, localTime } from "../utils";

export const discounts = [
  {
    title: "ONSDAGSTILBUD",
    price: "50% på fotografering",
    description: (
      <>
        Tilbudet gjelder kun 24.05.23
        <br />
        *Gjelder ikke minifotograferinger
      </>
    ),
    buttonText: "Book her",
    link: `/${ContactRoute}`,
    validFrom: localTime("24-05-2023 00:00"),
    validTo: localTime("25-05-2023 00:00"),
  },
  {
    title: "VALGFRI MINIFOTOGRAFERING",
    price: kr(850),
    description: (
      <>
        *Gjelder ikke nyfødtfotograferinger eller bryllupsfotografering, og kan
        ikke kombineres med andre tilbud. <br />
        Helgetillegg og kveldstillegg kommer i tillegg i prisen, samt kjøring
        utover 30Km fra Jessheim.
      </>
    ),
    link: `/${PricesRoute}#${ids.miniSessionMinisessions}`,
    validFrom: localTime("25-05-2023 00:00"),
    validTo: localTime("15-06-2023 00:00"),
  },
  {
    title: "HELGETILBUD",
    price: "-40% på alle fotograferinger",
    description: (
      <>
        Tilbudet gjelder 15.06.23 - 18.06.23.
        <br />
        *Gjelder ikke minifotograferinger eller for bedrifter.
      </>
    ),
    buttonText: "Book her",
    link: `/${ContactRoute}`,
    validFrom: localTime("15-06-2023 00:00"),
    validTo: localTime("19-06-2023 00:00"),
  },
  {
    title: "VALGFRI MINIFOTOGRAFERING",
    price: kr(850),
    description: (
      <>
        *Gjelder ikke nyfødtfotograferinger eller bryllupsfotografering, og kan
        ikke kombineres med andre tilbud. <br />
        Helgetillegg og kveldstillegg kommer i tillegg i prisen, samt kjøring
        utover 30Km fra Jessheim.
      </>
    ),
    link: `/${PricesRoute}#${ids.miniSessionMinisessions}`,
    validFrom: localTime("19-06-2023 00:00"),
    validTo: localTime("01-07-2023 00:00"),
  },
  {
    title: "Få 15% avslag på alle bookinger i juli!",
    price: "-15% på alle fotograferinger",
    description: (
      <>
        I hele juli tilbyr jeg en eksklusiv rabatt på 15% på alle bookinger som
        gjøres i løpet av måneden. Ta kontakt nå for å sikre deg 15% avslag på
        din fotografering! *Gjelder ikke for bedrifter.
      </>
    ),
    link: `/${PricesRoute}#${ids.miniSessionMinisessions}`,
    validFrom: localTime("01-07-2023 00:00"),
    validTo: localTime("30-07-2023 00:00"),
  },
  {
    title: "Valgfri minifotografering i solsikkeåker",
    price: "Kr. 900,-",
    description: (
      <>
        Valgfri minifotografering i solsikkeåker 21. august 2023, på en gård i
        Lillestrøm kommune.
      </>
    ),
    link: `/${PricesRoute}#${ids.miniSessionSunflower}`,
    validFrom: localTime("31-07-2023 00:00"),
    validTo: localTime("17-08-2023 00:00"),
  },

  {
    title: "HELGETILBUD",
    price: "-30% på fotograferinger",
    description: (
      <>
        -30% på alle fotograferinger som bookes torsdag, fredag, lørdag og
        søndag. Tilbudet gjelder 17.08.23 - 20.08.23.
        <br />
        *Gjelder ikke for bedrifter eller minifotograferinger.
      </>
    ),

    validFrom: localTime("17-08-2023 00:00"),
    validTo: localTime("21-08-2023 00:00"),
  },
  {
    title: "Minifotografering konfirmanter 26.08.2023",
    price: "Kr. 1000,-",
    description: (
      <>Minifotografering av konfirmanter ved Nordbytjernet på Jessheim.</>
    ),
    link: `/${PricesRoute}#${ids.miniSessionConfirmation}`,
    validFrom: localTime("20-08-2023 00:00"),
    validTo: localTime("26-08-2023 00:00"),
  },
  {
    title: "Juleminis",
    price: "Kr. 1200,-",
    description: (
      <>
        Julefotografering utendørs 21. oktober 2023.
        <br />
      </>
    ),
    link: `/${PricesRoute}#${ids.miniSessionChristmas}`,
    validFrom: localTime("26-08-2023 00:00"),
    validTo: localTime("21-10-2023 00:00"),
  },

  {
    title: "HELGETILBUD",
    price: "-40% på fotograferinger",
    description: (
      <>
        -40% på alle fotograferinger som gjennomføres i oktober, november eller
        desember, fotograferingen må bookes i løpet av helgen.
        <br />
        Tilbudet gjelder kun denne helgen, 12.10.23 - 15.10.23 <br />
        *Gjelder ikke bedrifter eller minifotograferinger
      </>
    ),

    validFrom: localTime("12-10-2023 00:00"),
    validTo: localTime("16-10-2023 00:00"),
  },
  {
    title: "HALLOWEENTILBUD",
    price: "-50% på fotograferinger",
    description: (
      <>
        -50% rabatt på alle fotograferinger som bookes i løpet av denne dagen.
        Fotograferingen må gjennomføres på et senere tidspunkt.
        <br />
        Tilbudet gjelder kun i dag, 31.10.2023 <br />
        *Gjelder ikke bedrifter eller minifotograferinger
      </>
    ),

    validFrom: localTime("31-10-2023 00:00"),
    validTo: localTime("01-11-2023 00:00"),
  },
];

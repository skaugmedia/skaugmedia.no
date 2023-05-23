import { kr } from "../utils";
import PricesRoute from "../Routes/Prices/Route";
import ContactRoute from "../Routes/Contact/Route";
import * as ids from "../Routes/Prices/Ids";
import { localTime } from "../utils";

export const discounts = [
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
    validFrom: localTime("15-05-2023 00:00"),
    validTo: localTime("24-05-2023 00:00"),
  },
  {
    title: "HELGETILBUD",
    price: "-40% på alle fotograferinger",
    description: (
      <>
        Tilbudet gjelder 12.05.23 - 14.05.23.
        <br />
        *Gjelder ikke tilleggspriser, bryllupsfotografering eller
        minifotograferinger.
      </>
    ),
    buttonText: "Book her",
    link: `/${ContactRoute}`,
    validFrom: localTime("12-05-2023 00:00"),
    validTo: localTime("24-05-2023 00:00"),
  },
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
    validTo: localTime("01-07-2023 00:00"),
  },
];

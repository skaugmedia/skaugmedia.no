import { kr } from "../utils";
import PricesRoute from "../Routes/Prices/Route";
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
    validFrom: localTime("27-04-2023 00:00"),
    validTo: localTime("01-07-2023 00:00"),
  },
];

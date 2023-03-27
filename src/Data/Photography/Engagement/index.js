import { oneLine } from "common-tags";
import forlovelsecover from "../../../Images/forlovelse_cover.jpg";
import forlovelse1 from "../../../Images/forlovelse_1.jpg";
import forlovelse2 from "../../../Images/forlovelse_2.jpg";
import forlovelse3 from "../../../Images/forlovelse_3.jpg";
import forlovelse4 from "../../../Images/forlovelse_4.jpg";
import forlovelse5 from "../../../Images/forlovelse_5.jpg";
import forlovelse6 from "../../../Images/forlovelse_6.jpg";
import forlovelse7 from "../../../Images/forlovelse_7.jpg";
import forlovelse8 from "../../../Images/forlovelse_8.jpg";
import forlovelse9 from "../../../Images/forlovelse_9.jpg";
import luciaole1 from "../../../Images/lucia_ole_1.jpg";
import luciaole2 from "../../../Images/lucia_ole_2.jpg";
import luciaole3 from "../../../Images/lucia_ole_3.jpg";
import luciaole4 from "../../../Images/lucia_ole_4.jpg";
import luciaole5 from "../../../Images/lucia_ole_5.jpg";
import luciaole6 from "../../../Images/lucia_ole_6.jpg";
import luciaole7 from "../../../Images/lucia_ole_7.jpg";
import luciaole8 from "../../../Images/lucia_ole_8.jpg";
import luciaole9 from "../../../Images/lucia_ole_9.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "kjaereste-og-forlovelse",
  title: "Kjæreste og forlovelse",

  body: oneLine`
    Det er så hyggelig å ha bilder som viser den ekte kjærligheten mellom et par, minner å 
    se tilbake på, og ikke bilder som kan brukes i forbindelse med invitasjoner og bryllupsdekorasjoner, 
    eller rett og slett bare til å henge opp på veggen!
  `,
  cover: {
    url: forlovelsecover,
    title: "Jan og Linn",
  },
  listing: {
    title: "Gruppefotografering: forlovelse",
    price: "Kr. 3000,-",
    link: `/${PricesRoute}#${ids.engagement}`,
  },
  shoots: [
    {
      description: "Jan og Linn",
      tags: ["forlovelse", "kjæreste"],
      images: [
        {
          url: forlovelse1,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
        {
          url: forlovelse6,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },

        {
          url: forlovelse3,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
        {
          url: forlovelse2,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },

        {
          url: forlovelse4,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
        {
          url: forlovelse7,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
        {
          url: forlovelse5,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },

        {
          url: forlovelse8,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
        {
          url: forlovelse9,
          title: "Jan og Linn",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-19",
    },
    {
      description: "Lucia og Ole",
      tags: ["hund", "kjæreste"],
      images: [
        {
          url: luciaole1,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },
        {
          url: luciaole6,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },

        {
          url: luciaole3,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },
        {
          url: luciaole2,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },

        {
          url: luciaole4,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },
        {
          url: luciaole7,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },
        {
          url: luciaole5,
          title: "Lucia og Ole",
          width: 1000,
          height: 667,
        },

        {
          url: luciaole8,
          title: "Lucia og Ole",
          width: 667,
          height: 1000,
        },
        {
          url: luciaole9,
          title: "Lucia og Ole",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-02-26",
    },
  ],
};

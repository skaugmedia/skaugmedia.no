import { oneLine } from "common-tags";
import coup_JL_1 from "../../../Images/Couple/coup_JL_1.jpg";
import coup_JL_2 from "../../../Images/Couple/coup_JL_2.jpg";
import coup_JL_3 from "../../../Images/Couple/coup_JL_3.jpg";
import coup_JL_4 from "../../../Images/Couple/coup_JL_4.jpg";
import coup_JL_5 from "../../../Images/Couple/coup_JL_5.jpg";
import coup_JL_6 from "../../../Images/Couple/coup_JL_6.jpg";
import coup_JL_7 from "../../../Images/Couple/coup_JL_7.jpg";
import coup_JL_8 from "../../../Images/Couple/coup_JL_8.jpg";
import coup_JL_9 from "../../../Images/Couple/coup_JL_9.jpg";

import coup_LO_1 from "../../../Images/Couple/coup_LO_1.jpg";
import coup_LO_2 from "../../../Images/Couple/coup_LO_2.jpg";
import coup_LO_3 from "../../../Images/Couple/coup_LO_3.jpg";
import coup_LO_4 from "../../../Images/Couple/coup_LO_4.jpg";
import coup_LO_5 from "../../../Images/Couple/coup_LO_5.jpg";
import coup_LO_6 from "../../../Images/Couple/coup_LO_6.jpg";
import coup_LO_7 from "../../../Images/Couple/coup_LO_7.jpg";
import coup_LO_8 from "../../../Images/Couple/coup_LO_8.jpg";
import coup_LO_9 from "../../../Images/Couple/coup_LO_9.jpg";
import * as ids from "../../../Routes/PricesServices/Ids";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "kjaereste-og-forlovelse",
  title: "Kjæreste og forlovelse",

  body: oneLine`
    Det er så hyggelig å ha bilder som viser den ekte kjærligheten mellom et par, minner å
    se tilbake på, og ikke bilder som kan brukes i forbindelse med invitasjoner og bryllupsdekorasjoner,
    eller rett og slett bare til å henge opp på veggen!
  `,
  cover: {
    url: coup_LO_5,
    title: "Kjæreste og forlovelse",
  },
  listing: {
    title: "Gruppefotografering: forlovelse",
    price: priceList.engagement,
    link: `/${PricesRoute}#${ids.engagement}`,
  },
  shoots: [
    {
      description: "Forlovelse J + L",
      tags: ["forlovelse", "kjæreste"],
      images: [
        {
          url: coup_JL_1,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
        {
          url: coup_JL_2,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },

        {
          url: coup_JL_3,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
        {
          url: coup_JL_4,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },

        {
          url: coup_JL_5,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
        {
          url: coup_JL_6,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
        {
          url: coup_JL_7,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },

        {
          url: coup_JL_8,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
        {
          url: coup_JL_9,
          title: "Forlovelse J + L",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-19",
    },
    {
      description: "Forlovelse L + O",
      tags: ["hund", "kjæreste"],
      images: [
        {
          url: coup_LO_1,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },
        {
          url: coup_LO_2,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },

        {
          url: coup_LO_3,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },
        {
          url: coup_LO_4,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },

        {
          url: coup_LO_5,
          title: "Forlovelse L + O",
          width: 1000,
          height: 667,
        },
        {
          url: coup_LO_6,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },
        {
          url: coup_LO_7,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },

        {
          url: coup_LO_8,
          title: "Forlovelse L + O",
          width: 667,
          height: 1000,
        },
        {
          url: coup_LO_9,
          title: "Forlovelse L + O",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-02-26",
    },
  ],
};

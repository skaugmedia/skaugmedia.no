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

import coup_MP_1 from "../../../Images/Couple/coup_MP_1.jpg";
import coup_MP_2 from "../../../Images/Couple/coup_MP_2.jpg";
import coup_MP_3 from "../../../Images/Couple/coup_MP_3.jpg";
import coup_MP_4 from "../../../Images/Couple/coup_MP_4.jpg";

import CouplesRoute from "../../../Routes/Couples/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "parfotografering",
  title: "Parfotografering",

  body: oneLine`
  Utforsk kjærlighetens magi gjennom en parfotografering som fanger øyeblikkene av intimitet, glede og forbindelse mellom dere. Med en unik blanding av profesjonell veiledning og autentiske øyeblikk, skaper vi tidløse bilder som feirer deres kjærlighetshistorie. Enten det er på en naturlig utendørslokasjon, i et romantisk bymiljø eller i komforten av deres eget hjem, vil jeg fange de spesielle øyeblikkene som definerer deres forhold. La oss sammen skape bilder som ikke bare fanger øyeblikket, men som også formidler den dype forbindelsen og kjærligheten dere deler.
  `,
  cover: {
    url: coup_MP_3,
    title: "Parfotografering",
  },
  listing: {
    title: "Parfotografering",
    price: priceList.engagement,
    link: `/${PricesRoute}/${CouplesRoute}`,
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
    {
      description: "Kjærestefotografering M + HP",
      tags: ["par", "kjæreste", "sommer"],
      images: [
        {
          url: coup_MP_1,
          title: "Kjærestefotografering M + HP",
          width: 667,
          height: 1000,
        },
        {
          url: coup_MP_2,
          title: "Kjærestefotografering M + HP",
          width: 667,
          height: 1000,
        },

        {
          url: coup_MP_3,
          title: "Kjærestefotografering M + HP",
          width: 1000,
          height: 667,
        },
        {
          url: coup_MP_4,
          title: "Kjærestefotografering M + HP",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-06-19",
    },
  ],
};

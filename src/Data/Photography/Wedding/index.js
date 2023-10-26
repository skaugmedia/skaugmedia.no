import { oneLine } from "common-tags";
import Weddingrt1 from "../../../Images/Wedding/weddingRT_1.jpg";
import Weddingrt2 from "../../../Images/Wedding/weddingRT_2.jpg";
import Weddingrt3 from "../../../Images/Wedding/weddingRT_3.jpg";
import Weddingrt4 from "../../../Images/Wedding/weddingRT_4.jpg";
import Weddingrt5 from "../../../Images/Wedding/weddingRT_5.jpg";
import Weddingrt6 from "../../../Images/Wedding/weddingRT_6.jpg";
import Weddingrt7 from "../../../Images/Wedding/weddingRT_7.jpg";
import Weddingrt8 from "../../../Images/Wedding/weddingRT_8.jpg";
import Weddingrt9 from "../../../Images/Wedding/weddingRT_9.jpg";
import Weddingrt10 from "../../../Images/Wedding/weddingRT_10.jpg";
import Weddingrt11 from "../../../Images/Wedding/weddingRT_11.jpg";
import Weddingrt12 from "../../../Images/Wedding/weddingRT_12.jpg";
import Weddingrt13 from "../../../Images/Wedding/weddingRT_13.jpg";
import Weddingrt14 from "../../../Images/Wedding/weddingRT_14.jpg";
import Weddingrt15 from "../../../Images/Wedding/weddingRT_15.jpg";
import Weddingrt16 from "../../../Images/Wedding/weddingRT_16.jpg";
import Weddingrt17 from "../../../Images/Wedding/weddingRT_17.jpg";

import * as ids from "../../../Routes/PricesServices/Ids";
import PricesServicesRoute from "../../../Routes/PricesServices/Route";

export default {
  id: "wedding",
  title: "Wedding",
  body: oneLine`
    Fotografering for bedrifter. Noen ønsker kun portretter, noen bedrifter ønsker å vise frem produkter, kontorene sine eller samholdet mellom sine ansatte.
  `,
  cover: {
    url: Weddingrt14,
    title: "Brudepar på vei ut av kirken",
  },
  listing: {
    title: "Bryllupsfotografering",
    price: "Fra kr. 16.000,-",
    link: `/${PricesServicesRoute}#${ids.wedding}`,
  },
  shoots: [
    {
      description: "Bryllupsfotografering R + T",
      tags: ["bryllup", "seremoni", "bryllupsseremoni", "sommer"],
      images: [
        {
          url: Weddingrt8,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt2,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt3,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt4,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt5,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt6,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt7,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt1,
          title: "Brudebukett",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt9,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt10,
          title: "Brudepar holder hender",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt11,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt12,
          title: "Bruden med gjester",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt13,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt14,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingrt15,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt16,
          title: "Brudgom i kirken",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt17,
          title: "Tom kirke",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-07-07",
    },
  ],
};

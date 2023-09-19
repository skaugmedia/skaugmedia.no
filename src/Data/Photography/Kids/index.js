import { oneLine } from "common-tags";

import EE1 from "../../../Images/Kids/EE_1.jpg";
import EE2 from "../../../Images/Kids/EE_2.jpg";
import EE3 from "../../../Images/Kids/EE_3.jpg";
import EE4 from "../../../Images/Kids/EE_4.jpg";
import EE5 from "../../../Images/Kids/EE_5.jpg";
import EE6 from "../../../Images/Kids/EE_6.jpg";
import EN_2 from "../../../Images/Kids/EN_2.jpg";
import EN_3 from "../../../Images/Kids/EN_3.jpg";
import LO_1 from "../../../Images/Kids/LO_1.jpg";
import LO_2 from "../../../Images/Kids/LO_2.jpg";
import LO_3 from "../../../Images/Kids/LO_3.jpg";
import LO_4 from "../../../Images/Kids/LO_4.jpg";
import LO_5 from "../../../Images/Kids/LO_5.jpg";
import LO_6 from "../../../Images/Kids/LO_6.jpg";

import LG1 from "../../../Images/Kids/LG_01.jpg";
import LG2 from "../../../Images/Kids/LG_02.jpg";
import LG3 from "../../../Images/Kids/LG_03.jpg";
import LG4 from "../../../Images/Kids/LG_04.jpg";
import LG5 from "../../../Images/Kids/LG_05.jpg";
import LG6 from "../../../Images/Kids/LG_06.jpg";
import ON2 from "../../../Images/Kids/ON_2.jpg";
import ON3 from "../../../Images/Kids/ON_3.jpg";
import SV1 from "../../../Images/Kids/SV_1.jpg";
import SV2 from "../../../Images/Kids/SV_2.jpg";
import SV3 from "../../../Images/Kids/SV_3.jpg";

import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "barn-og-baby",
  title: "Barn og baby",
  body: oneLine`
    Portretter av barn i alle aldre mellom 2 måneder og konfirmasjonstid. Disse bildene er så koselig å henge opp på veggen eller å gi bort innrammet i gave.
  `,
  cover: {
    url: LG1,
    title: "Barn",
  },
  listing: {
    title: "Barnefotografering",
    price: priceList.kids,
    link: `/${PricesRoute}#${ids.kids}`,
  },
  shoots: [
    {
      description: "EN",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: EN_2,
          title: "EN",
          width: 1000,
          height: 667,
        },
        {
          url: EN_3,
          title: "EN",
          width: 667,
          height: 1000,
        },
      ],
      date: "2021-12-13",
    },
    {
      description: "LO",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: LO_1,
          title: "LO",
          width: 667,
          height: 1000,
        },
        {
          url: LO_2,
          title: "LO",
          width: 533,
          height: 800,
        },
        {
          url: LO_3,
          title: "LO",
          width: 533,
          height: 800,
        },
      ],
      date: "2022-09-24",
    },
    {
      description: "LO",
      tags: ["gutt", "baby", "barn", "studio"],
      images: [
        {
          url: LO_4,
          title: "LO",
          width: 533,
          height: 800,
        },
        {
          url: LO_5,
          title: "LO",
          width: 533,
          height: 800,
        },
        {
          url: LO_6,
          title: "LO",
          width: 533,
          height: 800,
        },
      ],
      date: "2022-10-06",
    },
    {
      description: "EE",
      tags: ["gutt", "barn"],
      images: [
        {
          url: EE1,
          title: "EE",
          width: 467,
          height: 700,
        },
        {
          url: EE2,
          title: "EE",
          width: 467,
          height: 700,
        },
        {
          url: EE3,
          title: "EE",
          width: 467,
          height: 700,
        },
        {
          url: EE4,
          title: "EE",
          width: 467,
          height: 700,
        },
        {
          url: EE5,
          title: "EE",
          width: 467,
          height: 700,
        },
        {
          url: EE6,
          title: "EE",
          width: 467,
          height: 700,
        },
      ],
      date: "2023-02-14",
    },
    {
      description: "ON",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: ON2,
          title: "ON",
          width: 667,
          height: 1000,
        },
        {
          url: ON3,
          title: "ON",
          width: 667,
          height: 1000,
        },
      ],
      date: "2020-07-26",
    },
    {
      description: "SV",
      tags: ["jente", "barn"],
      images: [
        {
          url: SV1,
          title: "SV",
          width: 667,
          height: 1000,
        },
        {
          url: SV2,
          title: "SV",
          width: 800,
          height: 513,
        },
        {
          url: SV3,
          title: "SV",
          width: 667,
          height: 1000,
        },
      ],
      date: "2015-08-20",
    },
    {
      description: "LG",
      tags: ["gutt", "barn"],
      images: [
        {
          url: LG1,
          title: "SV",
          width: 1000,
          height: 667,
        },
        {
          url: LG2,
          title: "SV",
          width: 667,
          height: 1000,
        },
        {
          url: LG3,
          title: "SV",
          width: 667,
          height: 1000,
        },
        {
          url: LG4,
          title: "SV",
          width: 667,
          height: 1000,
        },
        {
          url: LG5,
          title: "SV",
          width: 667,
          height: 1000,
        },
        {
          url: LG6,
          title: "SV",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-18",
    },
  ],
};

import { oneLine } from "common-tags";
import * as ids from "../../../Routes/PricesServices/Ids";
import PricesServicesRoute from "../../../Routes/PricesServices/Route";

import realestate_AV_1 from "../../../Images/Realestate/AV_1.jpg";
import realestate_AV_10 from "../../../Images/Realestate/AV_10.jpg";
import realestate_AV_11 from "../../../Images/Realestate/AV_11.jpg";
import realestate_AV_2 from "../../../Images/Realestate/AV_2.jpg";
import realestate_AV_3 from "../../../Images/Realestate/AV_3.jpg";
import realestate_AV_4 from "../../../Images/Realestate/AV_4.jpg";
import realestate_AV_5 from "../../../Images/Realestate/AV_5.jpg";
import realestate_AV_6 from "../../../Images/Realestate/AV_6.jpg";
import realestate_AV_7 from "../../../Images/Realestate/AV_7.jpg";
import realestate_AV_8 from "../../../Images/Realestate/AV_8.jpg";
import realestate_AV_9 from "../../../Images/Realestate/AV_9.jpg";

import realestate_BL_1 from "../../../Images/Realestate/BL_1.jpg";
import realestate_BL_10 from "../../../Images/Realestate/BL_10.jpg";
import realestate_BL_11 from "../../../Images/Realestate/BL_11.jpg";
import realestate_BL_12 from "../../../Images/Realestate/BL_12.jpg";
import realestate_BL_13 from "../../../Images/Realestate/BL_13.jpg";
import realestate_BL_14 from "../../../Images/Realestate/BL_14.jpg";
import realestate_BL_2 from "../../../Images/Realestate/BL_2.jpg";
import realestate_BL_3 from "../../../Images/Realestate/BL_3.jpg";
import realestate_BL_4 from "../../../Images/Realestate/BL_4.jpg";
import realestate_BL_5 from "../../../Images/Realestate/BL_5.jpg";
import realestate_BL_6 from "../../../Images/Realestate/BL_6.jpg";
import realestate_BL_7 from "../../../Images/Realestate/BL_7.jpg";
import realestate_BL_8 from "../../../Images/Realestate/BL_8.jpg";
import realestate_BL_9 from "../../../Images/Realestate/BL_9.jpg";

import realestate_DSA_1 from "../../../Images/Realestate/DSA_1.jpg";
import realestate_DSA_2 from "../../../Images/Realestate/DSA_2.jpg";
import realestate_DSA_3 from "../../../Images/Realestate/DSA_3.jpg";
import realestate_DSA_4 from "../../../Images/Realestate/DSA_4.jpg";
import realestate_DSA_5 from "../../../Images/Realestate/DSA_5.jpg";
import realestate_DSA_6 from "../../../Images/Realestate/DSA_6.jpg";
import realestate_DSA_7 from "../../../Images/Realestate/DSA_7.jpg";

import realestate_MS_1 from "../../../Images/Realestate/MS_1.jpg";
import realestate_MS_2 from "../../../Images/Realestate/MS_2.jpg";
import realestate_MS_3 from "../../../Images/Realestate/MS_3.jpg";
import realestate_MS_4 from "../../../Images/Realestate/MS_4.jpg";
import realestate_MS_5 from "../../../Images/Realestate/MS_5.jpg";
import realestate_MS_6 from "../../../Images/Realestate/MS_6.jpg";
import realestate_MS_7 from "../../../Images/Realestate/MS_7.jpg";
import realestate_MS_8 from "../../../Images/Realestate/MS_8.jpg";

export default {
  id: "realestate",
  title: "Eiendom",
  body: oneLine`
    Jeg fotograferer leiligheter, hybler, eneboliger og andre eiendommer for EFKT. Ønsker du å booke eiendomsfotografering, må du selv ta kontakt med EFKT.
  `,
  cover: {
    url: realestate_AV_6,
    title:
      "Eiendomsfotografering av en stue, med utsikt til kjøkken og spisestue",
  },
  listing: {
    title: "Eiendomsfotografering",
    price: "Ta kontakt med EFKT for booking",
    link: `/${PricesServicesRoute}#${ids.realestate}`,
  },
  shoots: [
    {
      description: "Eiendomsfotografering i Kongsvinger",
      tags: ["eiendom", "høst"],
      images: [
        {
          url: realestate_AV_1,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_2,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_AV_3,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_4,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_AV_5,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_6,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_7,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_8,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_AV_9,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_AV_10,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_AV_11,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-10-03",
    },
    {
      description: "Eiendomsfotografering i Kongsvinger",
      tags: ["eiendom", "høst"],
      images: [
        {
          url: realestate_BL_1,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_BL_2,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_BL_3,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_BL_4,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_5,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_6,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_7,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_8,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_9,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_BL_10,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_11,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_12,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_BL_13,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_BL_14,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-10-02",
    },
    {
      description: "Eiendomsfotografering på Jessheim",
      tags: ["eiendom", "høst"],
      images: [
        {
          url: realestate_DSA_1,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_DSA_2,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_DSA_3,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_DSA_4,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_DSA_5,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_DSA_6,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_DSA_7,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-10-04",
    },
    {
      description: "Eiendomsfotografering på Jessheim",
      tags: ["eiendom", "høst"],
      images: [
        {
          url: realestate_MS_1,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_MS_2,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_MS_3,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_MS_4,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_MS_5,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_MS_6,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
        {
          url: realestate_MS_7,
          title: "Eiendomsfotografering",
          width: 667,
          height: 1000,
        },
        {
          url: realestate_MS_8,
          title: "Eiendomsfotografering",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-10-18",
    },
  ],
};

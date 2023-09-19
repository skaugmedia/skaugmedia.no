import { oneLine } from "common-tags";

import preg_p_1 from "../../../Images/Pregnant/preg_p_1.jpg";
import preg_p_2 from "../../../Images/Pregnant/preg_p_2.jpg";
import preg_p_3 from "../../../Images/Pregnant/preg_p_3.jpg";
import preg_p_4 from "../../../Images/Pregnant/preg_p_4.jpg";
import preg_p_5 from "../../../Images/Pregnant/preg_p_5.jpg";
import preg_p_6 from "../../../Images/Pregnant/preg_p_6.jpg";

import preg_l_1 from "../../../Images/Pregnant/preg_l_1.jpg";
import preg_l_2 from "../../../Images/Pregnant/preg_l_2.jpg";
import preg_l_3 from "../../../Images/Pregnant/preg_l_3.jpg";
import preg_l_4 from "../../../Images/Pregnant/preg_l_4.jpg";
import preg_l_5 from "../../../Images/Pregnant/preg_l_5.jpg";
import preg_l_6 from "../../../Images/Pregnant/preg_l_6.jpg";

import preg_j_1 from "../../../Images/Pregnant/preg_j_1.jpg";
import preg_j_2 from "../../../Images/Pregnant/preg_j_2.jpg";
import preg_j_3 from "../../../Images/Pregnant/preg_j_3.jpg";
import preg_j_4 from "../../../Images/Pregnant/preg_j_4.jpg";
import preg_j_5 from "../../../Images/Pregnant/preg_j_5.jpg";
import preg_j_6 from "../../../Images/Pregnant/preg_j_6.jpg";
import preg_j_7 from "../../../Images/Pregnant/preg_j_7.jpg";
import preg_j_8 from "../../../Images/Pregnant/preg_j_8.jpg";

import preg_k_1 from "../../../Images/Pregnant/preg_k_1.jpg";
import preg_k_2 from "../../../Images/Pregnant/preg_k_2.jpg";
import preg_k_3 from "../../../Images/Pregnant/preg_k_3.jpg";
import preg_k_4 from "../../../Images/Pregnant/preg_k_4.jpg";
import preg_k_5 from "../../../Images/Pregnant/preg_k_5.jpg";
import preg_k_6 from "../../../Images/Pregnant/preg_k_6.jpg";
import preg_k_7 from "../../../Images/Pregnant/preg_k_7.jpg";

import preg_m_1 from "../../../Images/Pregnant/preg_m_1.jpg";
import preg_m_2 from "../../../Images/Pregnant/preg_m_2.jpg";
import preg_m_3 from "../../../Images/Pregnant/preg_m_3.jpg";
import preg_m_4 from "../../../Images/Pregnant/preg_m_4.jpg";
import preg_m_5 from "../../../Images/Pregnant/preg_m_5.jpg";
import preg_m_6 from "../../../Images/Pregnant/preg_m_6.jpg";
import preg_m_7 from "../../../Images/Pregnant/preg_m_7.jpg";
import preg_m_8 from "../../../Images/Pregnant/preg_m_8.jpg";

import preg_kr_1 from "../../../Images/Pregnant/preg_kr_1.jpg";

import j_gravid_01_thumbnail from "../../../Images/j_gravid_01.jpg?width=200&height=200";
import m_gravid_03_thumbnail from "../../../Images/m_gravid_03.jpg?width=200&height=200";
import { priceList } from "/src/Data/priceList";

import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "gravid",
  title: "Gravid",
  body: oneLine`
    Det er veldig mange som tenker at de ikke trenger gravidbilder, og ikke vil bruke penger på dette. Veldig 
    mange angrer seg i ettertid, fordi de ikke kan huske hvor flotte de så ut med den fine kula og hvor helt 
    spesielt fantastisk det er å kunne få bære frem et helt nytt menneske! Jeg anbefaler alle gravide å ta gravidbilder,
    fordi det er noe helt eget som du ønsker å kunne se tilbake på etter at babyen er ute.
  `,
  cover: {
    url: preg_k_7,
    title: "Gravide P",
  },
  listing: {
    title: "Portrettfotografering: gravid",
    price: priceList.pregnant,
    link: `/${PricesRoute}#${ids.pregnant}`,
  },
  shoots: [
    {
      description: "Gravide Kr",
      tags: ["gravid", "sommer"],
      images: [
        {
          url: preg_kr_1,
          title: "Gravide Kr",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-02",
    },
    {
      description: "Gravide K",
      tags: ["gravid", "sommer", "blomstereng"],
      images: [
        {
          url: preg_k_1,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_2,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_3,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_4,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },

        {
          url: preg_k_5,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_6,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_7,
          title: "Gravide K",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-08-16",
    },
    {
      description: "Gravide L",
      tags: ["gravid", "sommer"],
      images: [
        {
          url: preg_l_1,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_2,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_3,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_4,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },

        {
          url: preg_l_5,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_6,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-07",
    },
    {
      description: "Gravide K",
      tags: ["gravid", "sommer", "blomstereng"],
      images: [
        {
          url: preg_k_1,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_2,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_3,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_4,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },

        {
          url: preg_k_5,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_6,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_7,
          title: "Gravide K",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-08-16",
    },
    {
      description: "Gravide P",
      tags: ["gravid", "vinter", "partner"],
      images: [
        {
          url: preg_p_1,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
        {
          url: preg_p_2,
          title: "Gravide P",
          width: 1000,
          height: 667,
        },
        {
          url: preg_p_3,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
        {
          url: preg_p_4,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },

        {
          url: preg_p_5,
          title: "Gravide P",
          width: 1000,
          height: 667,
        },
        {
          url: preg_p_6,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-25",
    },
    {
      description: "Gravide J",
      tags: ["gravid", "innendørs"],
      thumbnail: j_gravid_01_thumbnail,
      images: [
        {
          url: preg_j_1,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_2,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_3,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_4,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_5,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_6,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_7,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_8,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-04-13",
    },
    {
      description: "Gravide M",
      tags: ["gravid", "utendørs", "sorthvitt", "farger"],
      thumbnail: m_gravid_03_thumbnail,
      images: [
        {
          url: preg_m_1,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_2,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_3,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_4,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_5,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_6,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_7,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_8,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_8,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-05-22",
    },
  ],
};

import { oneLine } from "common-tags";

import pregnant_1 from "../../../Images/gravid_1.jpg";
import pregnant_2 from "../../../Images/gravid_2.jpg";
import pregnant_3 from "../../../Images/gravid_3.jpg";
import pregnant_4 from "../../../Images/gravid_4.jpg";
import pregnant_5 from "../../../Images/gravid_5.jpg";
import pregnant_6 from "../../../Images/gravid_6.jpg";
import pregnant_7 from "../../../Images/gravid_7.jpg";
import j_gravid_01 from "../../../Images/j_gravid_01.jpg";
import j_gravid_01_thumbnail from "../../../Images/j_gravid_01.jpg?width=200&height=200";
import j_gravid_02 from "../../../Images/j_gravid_02.jpg";
import j_gravid_03 from "../../../Images/j_gravid_03.jpg";
import j_gravid_04 from "../../../Images/j_gravid_04.jpg";
import j_gravid_05 from "../../../Images/j_gravid_05.jpg";
import j_gravid_06 from "../../../Images/j_gravid_06.jpg";
import j_gravid_07 from "../../../Images/j_gravid_07.jpg";
import j_gravid_08 from "../../../Images/j_gravid_08.jpg";
import j_gravid_09 from "../../../Images/j_gravid_09.jpg";
import m_gravid_01 from "../../../Images/m_gravid_01.jpg";
import m_gravid_02 from "../../../Images/m_gravid_02.jpg";
import m_gravid_03 from "../../../Images/m_gravid_03.jpg";
import m_gravid_03_thumbnail from "../../../Images/m_gravid_03.jpg?width=200&height=200";
import m_gravid_04 from "../../../Images/m_gravid_04.jpg";
import m_gravid_05 from "../../../Images/m_gravid_05.jpg";
import m_gravid_06 from "../../../Images/m_gravid_06.jpg";
import m_gravid_07 from "../../../Images/m_gravid_07.jpg";
import m_gravid_08 from "../../../Images/m_gravid_08.jpg";
import m_gravid_09 from "../../../Images/m_gravid_09.jpg";
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
    url: pregnant_6,
    title: "Prini",
  },
  listing: {
    title: "Portrettfotografering: gravid",
    price: priceList.pregnant,
    link: `/${PricesRoute}#${ids.pregnant}`,
  },
  shoots: [
    {
      description: "Prini",
      tags: ["gravid"],
      images: [
        {
          url: pregnant_4,
          title: "Prini",
          width: 667,
          height: 1000,
        },
        {
          url: pregnant_1,
          title: "Prini",
          width: 667,
          height: 1000,
        },
        {
          url: pregnant_2,
          title: "Prini",
          width: 667,
          height: 1000,
        },
        {
          url: pregnant_3,
          title: "Prini",
          width: 1000,
          height: 667,
        },

        {
          url: pregnant_6,
          title: "Prini",
          width: 1000,
          height: 667,
        },
        {
          url: pregnant_5,
          title: "Prini",
          width: 667,
          height: 1000,
        },
        {
          url: pregnant_7,
          title: "Prini",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-25",
    },
    {
      description: "Jenny",
      tags: ["gravid", "innendørs", "sorthvitt"],
      thumbnail: j_gravid_01_thumbnail,
      images: [
        {
          url: j_gravid_01,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_02,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_03,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_04,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_05,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_06,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_07,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_08,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
        {
          url: j_gravid_09,
          title: "Jenny",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-04-13",
    },
    {
      description: "Marianne",
      tags: ["gravid", "innendørs", "sorthvitt"],
      thumbnail: m_gravid_03_thumbnail,
      images: [
        {
          url: m_gravid_03,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_01,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_02,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_04,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_05,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_06,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_07,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_08,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
        {
          url: m_gravid_09,
          title: "Marianne",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-05-22",
    },
  ],
};

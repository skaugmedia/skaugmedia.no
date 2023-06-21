import { oneLine } from "common-tags";
import mommyandme_cover from "../../../Images/mommyandme_cover.jpg";
import klara_1 from "../../../Images/klara_mommyandme_1.jpg";
import klara_2 from "../../../Images/klara_mommyandme_2.jpg";
import klara_3 from "../../../Images/klara_mommyandme_3.jpg";
import klara_4 from "../../../Images/klara_mommyandme_4.jpg";
import klara_5 from "../../../Images/klara_mommyandme_5.jpg";
import v_l_daddy_1 from "../../../Images/v_l_daddy_01.jpg";
import v_l_daddy_2 from "../../../Images/v_l_daddy_02.jpg";
import v_l_daddy_6_thumbnail from "../../../Images/v_l_daddy_06.jpg?width=200&height=200";
import v_l_daddy_3 from "../../../Images/v_l_daddy_03.jpg";
import v_l_daddy_4 from "../../../Images/v_l_daddy_04.jpg";
import v_l_daddy_5 from "../../../Images/v_l_daddy_05.jpg";
import v_l_daddy_6 from "../../../Images/v_l_daddy_06.jpg";
import v_l_daddy_7 from "../../../Images/v_l_daddy_07.jpg";
import {priceList} from '/src/Data/priceList';
import v_l_daddy_8 from "../../../Images/v_l_daddy_08.jpg";

import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "mommyandme",
  title:  "Mommy & me / Daddy & me",
  body: oneLine`
    Det er så hyggelig å ha bilder sammen med barna sine. Enten mommy & me bilder eller daddy & me, helt ettersom hva dere ønsker. Slike bilder er så koselige å henge 
    opp på veggen og å se tilbake på om mange år. 
  `,
  cover: {
    url: mommyandme_cover,
    title: "Klara og Lea",
  },
  listing: {
    title: "Gruppefotografering: mommy & me",
    price: priceList.mommyandme,
    link: `/${PricesRoute}#${ids.mommyandme}`,
  },
  shoots: [
    {
      description: "Klara og Lea",
      tags: ["mommyandme", "baby", "mamma", "familie"],
      images: [
        {
          url: klara_1,
          title: "Mommy & me - Klara og Lea",
          width: 667,
          height: 1000,
        },
        {
          url: klara_3,
          title: "Mommy & me - Klara og Lea",
          width: 667,
          height: 1000,
        },
        {
          url: klara_2,
          title: "Mommy & me - Klara og Lea",
          width: 667,
          height: 1000,
        },
        {
          url: klara_5,
          title: "Mommy & me - Klara og Lea",
          width: 667,
          height: 1000,
        },
        {
          url: klara_4,
          title: "Mommy & me - Klara og Lea",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-03-29",
    },
    {
      description: "Victor og Liam",
      tags: ["daddyandme", "barn", "pappa", "familie"],
      thumbnail: v_l_daddy_6_thumbnail,
      images: [
        {
          url: v_l_daddy_6,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_2,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_3,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_4,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_5,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_1,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_7,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
        {
          url: v_l_daddy_8,
          title: "Victor og Liam",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-05-07",
    },
  ],
};

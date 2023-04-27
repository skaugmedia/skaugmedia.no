import { oneLine } from "common-tags";
import mommyandme_cover from "../../../Images/mommyandme_cover.jpg";
import klara_1 from "../../../Images/klara_mommyandme_1.jpg";
import klara_2 from "../../../Images/klara_mommyandme_2.jpg";
import klara_3 from "../../../Images/klara_mommyandme_3.jpg";
import klara_4 from "../../../Images/klara_mommyandme_4.jpg";
import klara_5 from "../../../Images/klara_mommyandme_5.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "mommyandme",
  title: "Mommy & me / Daddy & me",
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
    price: "Kr. 2500,-",
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
  ],
};
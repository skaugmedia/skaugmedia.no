import { oneLine } from "common-tags";
import madeleine1 from "../../../Images/madeleine_1.jpg";
import madeleine2 from "../../../Images/madeleine_2.jpg";
import marianne1 from "../../../Images/marianne_1.jpg";
import marianne2 from "../../../Images/marianne_2.jpg";
import ninahelene1 from "../../../Images/nina_helene_1.jpg";
import ninahelene2 from "../../../Images/nina_helene_2.jpg";
import ninahelene3 from "../../../Images/nina_helene_3.jpg";
import ninahelene4 from "../../../Images/nina_helene_4.jpg";
import ninahelene5 from "../../../Images/nina_helene_5.jpg";
import portrait_cover from "../../../Images/portrett_cover.jpg";
import sigurd1 from "../../../Images/sigurd_portrett_1.jpg";
import sigurd2 from "../../../Images/sigurd_portrett_2.jpg";
import sigurd3 from "../../../Images/sigurd_portrett_3.jpg";
import victor1 from "../../../Images/victor_1.jpg";
import victor2 from "../../../Images/victor_2.jpg";
import victoria1 from "../../../Images/victoria_1.jpg";
import victoria2 from "../../../Images/victoria_2.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "portrett",
  title: "Portrett",
  body: oneLine`
    Portretter er noe de fleste trenger en gang eller to i løpet av livet. Enten det er i jobbsammenheng, eller man bare ønsker noen flotte bilder av seg selv!
  `,
  cover: {
    url: portrait_cover,
    title: "Victor",
  },
  listing: {
    title: "Portrettfotografering",
    price: priceList.portraits,
    link: `/${PricesRoute}#${ids.portrait}`,
  },
  shoots: [
    {
      description: "Nina Helene",
      tags: ["portrett", "dame", "urban", "frodig"],
      images: [
        {
          url: ninahelene1,
          title: "Nina Helene",
          height: 1000,
          width: 667,
        },
        {
          url: ninahelene2,
          title: "Nina Helene",
          height: 1000,
          width: 667,
        },
        {
          url: ninahelene3,
          title: "Nina Helene",
          height: 1000,
          width: 667,
        },
        {
          url: ninahelene4,
          title: "Nina Helene",
          height: 1000,
          width: 667,
        },
        {
          url: ninahelene5,
          title: "Nina Helene",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-07-13",
    },

    {
      description: "Sigurd",
      tags: ["portrett", "mann", "urban", "skog"],
      images: [
        {
          url: sigurd3,
          title: "Sigurd",
          height: 1000,
          width: 667,
        },
        {
          url: sigurd1,
          title: "Sigurd",
          height: 1000,
          width: 667,
        },
        {
          url: sigurd2,
          title: "Sigurd",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-03-29",
    },
    {
      description: "Madeleine",
      tags: ["portrett", "dame", "urban"],
      images: [
        {
          url: madeleine1,
          title: "Madeleine",
          height: 1000,
          width: 667,
        },
        {
          url: madeleine2,
          title: "Madeleine",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-12-13",
    },
    {
      description: "Marianne",
      tags: ["portrett", "dame", "urban"],
      images: [
        {
          url: marianne1,
          title: "Marianne",
          height: 1000,
          width: 667,
        },
        {
          url: marianne2,
          title: "Marianne",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-11-19",
    },
    {
      description: "Victoria",
      tags: ["portrett", "dame"],
      images: [
        {
          url: victoria1,
          title: "Victoria",
          height: 1000,
          width: 667,
        },
        {
          url: victoria2,
          title: "Victoria",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-10-27",
    },
    {
      description: "Victor",
      tags: ["portrett", "mann"],
      images: [
        {
          url: victor1,
          title: "Victor",
          height: 1000,
          width: 667,
        },
        {
          url: victor2,
          title: "Victor",
          height: 1000,
          width: 667,
        },
      ],
      date: "2018-06-24",
    },
  ],
};

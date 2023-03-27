import { oneLine } from "common-tags";
import portrait_cover from "../../../Images/portrett_cover.jpg";
import madeleine1 from "../../../Images/madeleine_1.jpg";
import madeleine2 from "../../../Images/madeleine_2.jpg";
import marianne1 from "../../../Images/marianne_1.jpg";
import marianne2 from "../../../Images/marianne_2.jpg";
import victoria1 from "../../../Images/victoria_1.jpg";
import victoria2 from "../../../Images/victoria_2.jpg";
import victor1 from "../../../Images/victor_1.jpg";
import victor2 from "../../../Images/victor_2.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

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
    price: "Fra kr. 1500,-",
    link: `/${PricesRoute}#${ids.portrait}`,
  },
  shoots: [
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

import { oneLine } from "common-tags";

import pregnant_1 from "../../../Images/gravid_1.jpg";
import pregnant_2 from "../../../Images/gravid_2.jpg";
import pregnant_3 from "../../../Images/gravid_3.jpg";
import pregnant_4 from "../../../Images/gravid_4.jpg";
import pregnant_5 from "../../../Images/gravid_5.jpg";
import pregnant_6 from "../../../Images/gravid_6.jpg";
import pregnant_7 from "../../../Images/gravid_7.jpg";
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
    price: "Kr. 2500,-",
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
  ],
};

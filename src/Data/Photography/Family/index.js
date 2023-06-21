import { oneLine } from "common-tags";
import familie1 from "../../../Images/familie_1.jpg";
import familie10 from "../../../Images/familie_10.jpg";
import familie11 from "../../../Images/familie_11.jpg";
import familie12 from "../../../Images/familie_12.jpg";
import familie13 from "../../../Images/familie_13.jpg";
import familie14 from "../../../Images/familie_14.jpg";
import familie15 from "../../../Images/familie_15.jpg";
import familie16 from "../../../Images/familie_16.jpg";
import familie2 from "../../../Images/familie_2.jpg";
import familie3 from "../../../Images/familie_3.jpg";
import familie4 from "../../../Images/familie_4.jpg";
import familie5 from "../../../Images/familie_5.jpg";
import familie6 from "../../../Images/familie_6.jpg";
import familie7 from "../../../Images/familie_7.jpg";
import familie8 from "../../../Images/familie_8.jpg";
import familie9 from "../../../Images/familie_9.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "familie",
  title: "Familie",

  body: oneLine`
    Familiebilder er så koselig å ha for å se tilbake på når barna har vokst opp, og flyttet ut, 
    eller når de vi er så glade i, ikke lenger er her med oss!
  `,
  cover: {
    url: familie1,
    title: "Familietid i snøen",
  },
  listing: {
    title: "Gruppefotografering: familie",
    price: priceList.family,
    link: `/${PricesRoute}#${ids.family}`,
  },
  shoots: [
    {
      description: "Familietid i snøen",
      tags: ["familie", "snø"],
      images: [
        {
          url: familie1,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: familie2,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: familie3,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie4,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: familie5,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: familie6,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie7,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: familie8,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie9,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie10,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie11,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie12,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: familie13,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie14,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: familie15,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: familie16,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-19",
    },
  ],
};

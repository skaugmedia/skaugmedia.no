import { oneLine } from "common-tags";
import businesscover from "../../../Images/bedrift_foto.jpg";
import pentogbrukt1 from "../../../Images/pentogbrukt_1.jpg";
import pentogbrukt2 from "../../../Images/pentogbrukt_2.jpg";
import pentogbrukt3 from "../../../Images/pentogbrukt_3.jpg";
import pentogbrukt4 from "../../../Images/pentogbrukt_4.jpg";
import pentogbrukt5 from "../../../Images/pentogbrukt_5.jpg";
import pogb_produkt_1 from "../../../Images/pentogbrukt_sommer_1.jpg";
import pogb_produkt_10 from "../../../Images/pentogbrukt_sommer_10.jpg";
import pogb_produkt_11 from "../../../Images/pentogbrukt_sommer_11.jpg";
import pogb_produkt_12 from "../../../Images/pentogbrukt_sommer_12.jpg";
import pogb_produkt_13 from "../../../Images/pentogbrukt_sommer_13.jpg";
import pogb_produkt_14 from "../../../Images/pentogbrukt_sommer_14.jpg";
import pogb_produkt_15 from "../../../Images/pentogbrukt_sommer_15.jpg";
import pogb_produkt_16 from "../../../Images/pentogbrukt_sommer_16.jpg";
import pogb_produkt_17 from "../../../Images/pentogbrukt_sommer_17.jpg";
import pogb_produkt_18 from "../../../Images/pentogbrukt_sommer_18.jpg";
import pogb_produkt_19 from "../../../Images/pentogbrukt_sommer_19.jpg";
import pogb_produkt_2 from "../../../Images/pentogbrukt_sommer_2.jpg";
import pogb_produkt_20 from "../../../Images/pentogbrukt_sommer_20.jpg";
import pogb_produkt_21 from "../../../Images/pentogbrukt_sommer_21.jpg";
import pogb_produkt_22 from "../../../Images/pentogbrukt_sommer_22.jpg";
import pogb_produkt_23 from "../../../Images/pentogbrukt_sommer_23.jpg";
import pogb_produkt_24 from "../../../Images/pentogbrukt_sommer_24.jpg";
import pogb_produkt_3 from "../../../Images/pentogbrukt_sommer_3.jpg";
import pogb_produkt_4 from "../../../Images/pentogbrukt_sommer_4.jpg";
import pogb_produkt_5 from "../../../Images/pentogbrukt_sommer_5.jpg";
import pogb_produkt_6 from "../../../Images/pentogbrukt_sommer_6.jpg";
import pogb_produkt_7 from "../../../Images/pentogbrukt_sommer_7.jpg";
import pogb_produkt_8 from "../../../Images/pentogbrukt_sommer_8.jpg";
import pogb_produkt_9 from "../../../Images/pentogbrukt_sommer_9.jpg";
import strangeras1 from "../../../Images/stranger_as.jpg";
import strangeras2 from "../../../Images/stranger_as_1.jpg";
import strangeras3 from "../../../Images/stranger_as_2.jpg";
import strangeras4 from "../../../Images/stranger_as_3.jpg";
import strangeras5 from "../../../Images/stranger_as_4.jpg";
import strangeras6 from "../../../Images/stranger_as_5.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "bedrift",
  title: "Bedrift",
  body: oneLine`
    Fotografering for bedrifter. Noen ønsker kun portretter, noen bedrifter ønsker å vise frem produkter, kontorene sine eller samholdet mellom sine ansatte. 
  `,
  cover: {
    url: businesscover,
    title: "Bedriftfotografering",
  },
  listing: {
    title: "Portrettfotografering: bedrift",
    price: "Ta kontakt for pristilbud",
    link: `/${PricesRoute}#${ids.business}`,
  },
  shoots: [
    {
      description: "Pent og Brukt sommer",
      tags: ["produkt", "bedrift"],
      images: [
        {
          url: pogb_produkt_3,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_4,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_5,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_1,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_2,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_6,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_7,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_8,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_9,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_10,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_11,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_12,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_13,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_14,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_15,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_16,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_17,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_18,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_19,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_20,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_21,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_22,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: pogb_produkt_23,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: pogb_produkt_24,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-06-12",
    },
    {
      description: "Stranger AS",
      tags: ["bedrift", "portretter"],
      images: [
        {
          url: strangeras2,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },
        {
          url: strangeras5,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },

        {
          url: strangeras3,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },
        {
          url: strangeras1,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },
        {
          url: strangeras6,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },
        {
          url: strangeras4,
          title: "Cecilie",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-03-02",
    },
    {
      description: "Pent og Brukt AS",
      tags: ["bedrift", "portretter"],
      images: [
        {
          url: pentogbrukt3,
          title: "Pent og Brukt AS",
          width: 667,
          height: 1000,
        },
        {
          url: pentogbrukt1,
          title: "Pent og Brukt AS",
          width: 1000,
          height: 667,
        },
        {
          url: pentogbrukt2,
          title: "Pent og Brukt AS",
          width: 667,
          height: 1000,
        },

        {
          url: pentogbrukt4,
          title: "Pent og Brukt AS",
          width: 1000,
          height: 1000,
        },
        {
          url: pentogbrukt5,
          title: "Pent og Brukt AS",
          width: 1000,
          height: 1000,
        },
      ],
      date: "2023-01-30",
    },
  ],
};

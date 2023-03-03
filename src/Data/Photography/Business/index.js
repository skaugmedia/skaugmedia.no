import { oneLine } from "common-tags";
import businesscover from "../../../Images/bedrift_foto.jpg";
import strangeras1 from "../../../Images/stranger_as.jpg";
import strangeras2 from "../../../Images/stranger_as_1.jpg";
import strangeras3 from "../../../Images/stranger_as_2.jpg";
import strangeras4 from "../../../Images/stranger_as_3.jpg";
import strangeras5 from "../../../Images/stranger_as_4.jpg";
import strangeras6 from "../../../Images/stranger_as_5.jpg";
import pentogbrukt1 from "../../../Images/pentogbrukt_1.jpg";
import pentogbrukt2 from "../../../Images/pentogbrukt_2.jpg";
import pentogbrukt3 from "../../../Images/pentogbrukt_3.jpg";
import pentogbrukt4 from "../../../Images/pentogbrukt_4.jpg";
import pentogbrukt5 from "../../../Images/pentogbrukt_5.jpg";

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
  shoots: [
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

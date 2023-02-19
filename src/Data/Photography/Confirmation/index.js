import { oneLine } from "common-tags";
import silje_1 from "../../../Images/silje_konfirmant_1.jpg";
import silje_2 from "../../../Images/silje_konfirmant_2.jpg";
import silje_3 from "../../../Images/silje_konfirmant_3.jpg";
import silje_4 from "../../../Images/silje_konfirmant_4.jpg";
import silje_5 from "../../../Images/silje_konfirmant_5.jpg";
import silje_6 from "../../../Images/silje_konfirmant_6.jpg";
import keshra_1 from "../../../Images/keshra_1.jpg";
import keshra_2 from "../../../Images/keshra_2.jpg";
import keshra_3 from "../../../Images/keshra_3.jpg";
import keshra_4 from "../../../Images/keshra_4.jpg";
import keshra_5 from "../../../Images/keshra_5.jpg";
import keshra_6 from "../../../Images/keshra_6.jpg";
import heidi_1 from "../../../Images/heidi_1.jpg";
import heidi_2 from "../../../Images/heidi_2.jpg";

export default {
  id: "konfirmant",
  title: "Konfirmant",
  body: oneLine`
    Både for foreldre og konfirmanten selv, er det viktig med gode bilder for å forevige den store konfirmasjonsdagen.
    Det er også fint å ha gode bilder som kan brukes til takkekort og å kunne henge på veggen i etterkant av konfirmasjonen.
  `,
  cover: {
    url: silje_4,
    title: "Silje Viktoria",
  },
  shoots: [
    {
      description: "Silje Viktoria",
      tags: ["jente", "konfirmant", "festdrakt", "nordbytjernet"],
      images: [
        {
          url: silje_1,
          title: "Silje Viktoria",
          width: 667,
          height: 1000,
        },
        {
          url: silje_2,
          title: "Silje Viktoria",
          width: 533,
          height: 800,
        },
        {
          url: silje_3,
          title: "Silje Viktoria",
          width: 533,
          height: 800,
        },
        {
          url: silje_4,
          title: "Silje Viktoria",
          width: 700,
          height: 467,
        },
        {
          url: silje_5,
          title: "Silje Viktoria",
          width: 600,
          height: 900,
        },
        {
          url: silje_6,
          title: "Silje Viktoria",
          width: 533,
          height: 800,
        },
      ],
      date: "2022-05-07",
    },
    {
      description: "Keshra",
      tags: ["konfirmant", "jente", "bunad"],
      images: [
        {
          url: keshra_1,
          title: "Keshra",
          width: 467,
          height: 700,
        },
        {
          url: keshra_2,
          title: "Keshra",
          width: 700,
          height: 467,
        },
        {
          url: keshra_3,
          title: "Keshra",
          width: 467,
          height: 700,
        },
        {
          url: keshra_4,
          title: "Keshra",
          width: 467,
          height: 700,
        },
        {
          url: keshra_5,
          title: "Keshra",
          width: 467,
          height: 700,
        },
        {
          url: keshra_6,
          title: "Keshra",
          width: 467,
          height: 700,
        },
      ],
      date: "2019-05-26",
    },
    {
      description: "Heidi Therese",
      tags: ["konfirmant", "jente", "bunad"],
      images: [
        {
          url: heidi_1,
          title: "Heidi Therese",
          width: 467,
          height: 700,
        },
        {
          url: heidi_2,
          title: "Heidi Therese",
          width: 467,
          height: 700,
        },
      ],
      date: "2014-05-26",
    },
  ],
};

import { oneLine } from "common-tags";
import edwin_1 from "../../../Images/edwin_1.jpg";
import edwin_2 from "../../../Images/edwin_2.jpg";
import edwin_3 from "../../../Images/edwin_3.jpg";
import liam_barn_1 from "../../../Images/liam_barn_1.jpg";
import liam_barn_2 from "../../../Images/liam_barn_2.jpg";
import liam_barn_3 from "../../../Images/liam_barn_3.jpg";
import liam_barn_4 from "../../../Images/liam_barn_4.jpg";
import liam_barn_5 from "../../../Images/liam_barn_5.jpg";
import liam_barn_6 from "../../../Images/liam_barn_6.jpg";
import ellioteliascover from "../../../Images/elliot_elias_cover.jpg";
import elliotelias1 from "../../../Images/elliot_elias_1.jpg";
import elliotelias2 from "../../../Images/elliot_elias_2.jpg";
import elliotelias3 from "../../../Images/elliot_elias_3.jpg";
import elliotelias4 from "../../../Images/elliot_elias_4.jpg";
import elliotelias5 from "../../../Images/elliot_elias_5.jpg";
import elliotelias6 from "../../../Images/elliot_elias_6.jpg";
import olaf1 from "../../../Images/olaf_1.jpg";
import olaf2 from "../../../Images/olaf_2.jpg";
import olaf3 from "../../../Images/olaf_3.jpg";
import silje1 from "../../../Images/silje_barn_1.jpg";
import silje2 from "../../../Images/silje_barn_2.jpg";
import silje3 from "../../../Images/silje_barn_3.jpg";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "barn-og-baby",
  title: "Barn og baby",
  body: oneLine`
    Portretter av barn i alle aldre mellom 2 måneder og konfirmasjonstid. Disse bildene er så koselig å henge opp på veggen eller å gi bort innrammet i gave.
  `,
  cover: {
    url: ellioteliascover,
    title: "Elliot",
  },
  listing: {
    title: "Barnefotografering",
    price: "Kr. 2750,-",
    link: `/${PricesRoute}#${ids.kids}`,
  },
  shoots: [
    {
      description: "Edwin Atlas",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: edwin_1,
          title: "Edwin Atlas",
          width: 1000,
          height: 667,
        },
        {
          url: edwin_2,
          title: "Edwin Atlas",
          width: 1000,
          height: 667,
        },
        {
          url: edwin_3,
          title: "Edwin Atlas",
          width: 667,
          height: 1000,
        },
      ],
      date: "2021-12-13",
    },
    {
      description: "Liam Oleander",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: liam_barn_1,
          title: "Liam Oleander",
          width: 667,
          height: 1000,
        },
        {
          url: liam_barn_2,
          title: "Liam Oleander",
          width: 533,
          height: 800,
        },
        {
          url: liam_barn_3,
          title: "Liam Oleander",
          width: 533,
          height: 800,
        },
      ],
      date: "2022-09-24",
    },
    {
      description: "Liam Oleander",
      tags: ["gutt", "baby", "barn", "studio"],
      images: [
        {
          url: liam_barn_4,
          title: "Liam Oleander",
          width: 533,
          height: 800,
        },
        {
          url: liam_barn_5,
          title: "Liam Oleander",
          width: 533,
          height: 800,
        },
        {
          url: liam_barn_6,
          title: "Liam Oleander",
          width: 533,
          height: 800,
        },
      ],
      date: "2022-10-06",
    },
    {
      description: "Elliot Elias",
      tags: ["gutt", "barn"],
      images: [
        {
          url: elliotelias1,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
        {
          url: elliotelias2,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
        {
          url: elliotelias3,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
        {
          url: elliotelias4,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
        {
          url: elliotelias5,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
        {
          url: elliotelias6,
          title: "Elliot Elias",
          width: 467,
          height: 700,
        },
      ],
      date: "2023-02-14",
    },
    {
      description: "Olaf Theodor",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: olaf1,
          title: "Olaf Theodor",
          width: 1000,
          height: 667,
        },
        {
          url: olaf2,
          title: "Olaf Theodor",
          width: 667,
          height: 1000,
        },
        {
          url: olaf3,
          title: "Olaf Theodor",
          width: 667,
          height: 1000,
        },
      ],
      date: "2020-07-26",
    },
    {
      description: "Silje Viktoria",
      tags: ["jente", "barn"],
      images: [
        {
          url: silje1,
          title: "Silje Viktoria",
          width: 667,
          height: 1000,
        },
        {
          url: silje2,
          title: "Silje Viktoria",
          width: 800,
          height: 513,
        },
        {
          url: silje3,
          title: "Silje Viktoria",
          width: 667,
          height: 1000,
        },
      ],
      date: "2015-08-20",
    },
  ],
};

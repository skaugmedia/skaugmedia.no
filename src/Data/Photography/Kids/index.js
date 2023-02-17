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

export default {
  title: "Barn og baby",
  body: oneLine`
    Portretter av barn i alle aldre mellom 2 måneder og konfirmasjonstid. Disse bildene er så koselig å henge opp på veggen eller å gi bort innrammet i gave.
  `,
  cover: {
    url: "",
    title: "gfgfg",
  },
  shoots: [
    {
      description: "Edwin Atlas",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: edwin_1,
          title: "Edwin Atlas",
        },
        {
          url: edwin_2,
          title: "Edwin Atlas",
        },
        {
          url: edwin_3,
          title: "Edwin Atlas",
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
        },
        {
          url: liam_barn_2,
          title: "Liam Oleander",
        },
        {
          url: liam_barn_3,
          title: "Liam Oleander",
        },
      ],
      date: "2022-09-24",
    },
    {
      description: "Liam Oleander",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: liam_barn_4,
          title: "Liam Oleander",
        },
        {
          url: liam_barn_5,
          title: "Liam Oleander",
        },
        {
          url: liam_barn_6,
          title: "Liam Oleander",
        },
      ],
      date: "2022-10-06",
    },
  ],
};

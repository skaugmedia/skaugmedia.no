import { oneLine } from "common-tags";

export default {
  title: "Barn og baby",
  body: oneLine`
    Portretter av barn i alle aldre mellom 2 måneder og konfirmasjonstid. Disse bildene er så koselig å henge opp på veggen eller å gi bort innrammet i gave. 
  `,
  cover: {
    url: new URL("", import.meta.url),
    title: "gfgfg",
  },
  shoots: [
    {
      description: "Edwin Atlas",
      tags: ["gutt", "baby", "barn"],
      images: [
        {
          url: new URL("../../../Images/edwin_1.jpg", import.meta.url),
          title: "Edwin Atlas",
        },
        {
          url: new URL("../../../Images/edwin_2.jpg", import.meta.url),
          title: "Edwin Atlas",
        },
        {
          url: new URL("../../../Images/edwin_3.jpg", import.meta.url),
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
          url: new URL("../../../Images/liam_barn_1.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/liam_barn_2.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/liam_barn_3.jpg", import.meta.url),
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
          url: new URL("../../../Images/liam_barn_4.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/liam_barn_5.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/liam_barn_6.jpg", import.meta.url),
          title: "Liam Oleander",
        },
      ],
      date: "2022-10-06",
    },
  ],
};

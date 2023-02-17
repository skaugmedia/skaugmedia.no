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
  ],
};

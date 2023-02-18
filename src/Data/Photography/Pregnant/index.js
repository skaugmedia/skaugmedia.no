import { oneLine } from "common-tags";
import tonje1 from "../../../Images/tonje_1.jpg";
import tonje2 from "../../../Images/tonje_2.jpg";

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
    url: tonje2,
    title: "Tonje",
  },
  shoots: [
    {
      description: "Tonje",
      tags: ["gravid", "sorthvitt", "studio"],
      images: [
        {
          url: tonje1,
          title: "Tonje",
          width: 626,
          height: 1000,
        },
        {
          url: tonje2,
          title: "Tonje",
          width: 1000,
          height: 625,
        },
      ],
      date: "2013-03-18",
    },
  ],
};

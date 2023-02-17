import { oneLine } from "common-tags";
import liam1 from "../../../Images/newborn_liam_1.jpg";
import liam2 from "../../../Images/newborn_liam_2.jpg";
import liam3 from "../../../Images/newborn_liam_3.jpg";
import liam4 from "../../../Images/newborn_liam_4.jpg";
import liam5 from "../../../Images/newborn_liam_5.jpg";
import liam6 from "../../../Images/newborn_liam_6.jpg";
import liam7 from "../../../Images/newborn_liam_7.jpg";

export default {
  title: "Nyfødt",
  body: oneLine`
    Det er noe helt spesielt med nyfødtfotografering. Den helt ferske, nydelige, lille babyen din sover mesteparten av tiden, men kan også være våken I korte perioder. De små ser så fredfulle og avslappede ut, mens de ligger der og sover mens man kan flytte rundt på dem og plassere dem akkurat slik man ønsker.
  `,
  cover: {
    url: liam1,
    title: "Liam Oleander",
  },
  shoots: [
    {
      description: "Liam Oleander",
      tags: ["nyfødt", "baby", "gutt"],
      images: [
        {
          url: liam1,
          title: "Liam Oleander",
        },
        {
          url: liam2,
          title: "Liam Oleander",
        },
        {
          url: liam3,
          title: "Liam Oleander",
        },
        {
          url: liam4,
          title: "Liam Oleander",
        },
        {
          url: liam5,
          title: "Liam Oleander",
        },
        {
          url: liam6,
          title: "Liam Oleander",
        },
        {
          url: liam7,
          title: "Liam Oleander",
          width: 667,
          height: 1000,
        },
      ],
      date: "2021-11-01",
    },
  ],
};

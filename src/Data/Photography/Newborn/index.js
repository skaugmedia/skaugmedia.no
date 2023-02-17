import { oneLine } from "common-tags";

export default {
  title: "Nyfødt",
  body: oneLine`
  Det er noe helt spesielt med nyfødtfotografering. Den helt ferske, nydelige, lille babyen din sover mesteparten av tiden, men kan også være våken I korte perioder. De små ser så fredfulle og avslappede ut, mens de ligger der og sover mens man kan flytte rundt på dem og plassere dem akkurat slik man ønsker. 
  `,
  cover: {
    url: new URL("../../../Images/newborn_liam_1.jpg", import.meta.url),
    title: "Liam Oleander",
  },
  shoots: [
    {
      description: "Liam Oleander",
      tags: ["nyfødt", "baby", "gutt"],
      images: [
        {
          url: new URL("../../../Images/newborn_liam_1.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/newborn_liam_2.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/newborn_liam_3.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/newborn_liam_4.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/newborn_liam_5.jpg", import.meta.url),
          title: "Liam Oleander",
        },
        {
          url: new URL("../../../Images/newborn_liam_6.jpg", import.meta.url),
          title: "Liam Oleander",
        },
      ],
      date: "2021-11-01",
    },
  ],
};

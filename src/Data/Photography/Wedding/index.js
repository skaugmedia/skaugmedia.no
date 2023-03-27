import { oneLine } from "common-tags";
import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";

export default {
  id: "bryllup",
  title: "Bryllup",
  date: "2023-02-11",
  tags: ["jente", "konfirmant", "nasjonaldrakt"],
  body: oneLine`
    adsfgchjvgcfdxzfs<adDFGH
    DSSFFGS
    dgfåolsajgløk
    adlfjsdaøk

    adskgjsøfdgj
  `,
  cover: {
    url: "",
    title: "gfgfg",
  },
  listing: {
    title: "Bryllupsfotografering",
    price: "Fra kr. 10.000,-",
    link: `/${PricesRoute}#${ids.wedding}`,
  },
  shoots: [
    {
      description: "Silje",
      tags: ["foo", "bar"],
      images: [
        {
          url: "https://www.gravatar.com/avatar/deabcb6140a4cad604de58990bc2094c?s=64&d=identicon&r=PG&f=1",
          title: "altext",
        },
        {
          url: "https://www.gravatar.com/avatar/deabcb6140a4cad604de58990bc2094c?s=64&d=identicon&r=PG&f=1",
          title: "altext",
        },
      ],
      date: "2023-02-11",
    },
    {
      description: "Tobias",
      tags: ["foo", "bar"],
      images: [
        {
          url: "https://www.gravatar.com/avatar/deabcb6140a4cad604de58990bc2094c?s=64&d=identicon&r=PG&f=1",
          title: "altext",
        },
        {
          url: "https://www.gravatar.com/avatar/deabcb6140a4cad604de58990bc2094c?s=64&d=identicon&r=PG&f=1",
          title: "altext",
        },
      ],
      date: "2023-02-11",
    },
  ],
};

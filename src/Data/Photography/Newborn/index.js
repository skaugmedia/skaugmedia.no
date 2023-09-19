import { oneLine } from "common-tags";
import l1 from "../../../Images/Newborn/l_newborn_1.jpg";
import l2 from "../../../Images/Newborn/l_newborn_2.jpg";
import l3 from "../../../Images/Newborn/l_newborn_3.jpg";
import l4 from "../../../Images/Newborn/l_newborn_4.jpg";
import l5 from "../../../Images/Newborn/l_newborn_5.jpg";
import l6 from "../../../Images/Newborn/l_newborn_6.jpg";
import l7 from "../../../Images/Newborn/l_newborn_7.jpg";
import l8 from "../../../Images/Newborn/l_newborn_8.jpg";
import LO1 from "../../../Images/Newborn/newborn_LO_1.jpg";
import LO2 from "../../../Images/Newborn/newborn_LO_2.jpg";
import LO3 from "../../../Images/Newborn/newborn_LO_3.jpg";
import LO4 from "../../../Images/Newborn/newborn_LO_4.jpg";
import LO5 from "../../../Images/Newborn/newborn_LO_5.jpg";
import LO6 from "../../../Images/Newborn/newborn_LO_6.jpg";
import LO7 from "../../../Images/Newborn/newborn_LO_7.jpg";

import * as ids from "../../../Routes/Prices/Ids";
import PricesRoute from "../../../Routes/Prices/Route";
import { priceList } from "../../priceList";

export default {
  id: "nyfodt",
  title: "Nyfødt",
  body: oneLine`
    Det er noe helt spesielt med nyfødtfotografering. Den helt ferske, nydelige, lille babyen din
    sover mesteparten av tiden, men kan også være våken i korte perioder. De små ser så fredfulle og
    avslappede ut, mens de ligger der og sover mens man kan flytte rundt på dem og plassere dem
    akkurat slik man ønsker.
  `,
  cover: {
    url: LO1,
    title: "LO",
  },
  listing: {
    title: "Barnefotografering: nyfødt",
    price: priceList.newborn,
    link: `/${PricesRoute}#${ids.newborn}`,
  },
  shoots: [
    {
      description: "LO",
      tags: ["nyfødt", "baby", "gutt"],
      images: [
        {
          url: LO1,
          title: "LO",
          width: 1000,
          height: 667,
        },
        {
          url: LO2,
          title: "LO",
          width: 1000,
          height: 667,
        },
        {
          url: LO3,
          title: "LO",
          width: 1000,
          height: 666,
        },
        {
          url: LO4,
          title: "LO",
          width: 667,
          height: 1000,
        },
        {
          url: LO5,
          title: "LO",
          width: 1000,
          height: 667,
        },
        {
          url: LO6,
          title: "LO",
          width: 1000,
          height: 667,
        },
        {
          url: LO7,
          title: "LO",
          width: 667,
          height: 1000,
        },
      ],
      date: "2021-11-01",
    },
    {
      description: "Lille L",
      tags: ["nyfødt", "baby", "gutt"],
      images: [
        {
          url: l1,
          title: "Lille L",
          width: 1000,
          height: 667,
        },
        {
          url: l2,
          title: "Lille L",
          width: 667,
          height: 1000,
        },
        {
          url: l3,
          title: "Lille L",
          width: 1000,
          height: 667,
        },
        {
          url: l4,
          title: "Lille L",
          width: 667,
          height: 1000,
        },
        {
          url: l5,
          title: "Lille L",
          width: 1000,
          height: 667,
        },
        {
          url: l6,
          title: "Lille L",
          width: 667,
          height: 1000,
        },
        {
          url: l7,
          title: "Lille L",
          width: 1000,
          height: 667,
        },
        {
          url: l8,
          title: "Lille L",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-06-19",
    },
  ],
};

import { oneLine } from "common-tags";
import mom_IL_1 from "../../../Images/Mommy&me/mom_IL_1.jpg";
import mom_IL_2 from "../../../Images/Mommy&me/mom_IL_2.jpg";
import mom_IL_3 from "../../../Images/Mommy&me/mom_IL_3.jpg";
import mom_IL_4 from "../../../Images/Mommy&me/mom_IL_4.jpg";

import mom_K_1 from "../../../Images/Mommy&me/mom_K_1.jpg";
import mom_K_2 from "../../../Images/Mommy&me/mom_K_2.jpg";
import mom_K_3 from "../../../Images/Mommy&me/mom_K_3.jpg";
import mom_K_4 from "../../../Images/Mommy&me/mom_K_4.jpg";

import dad_VL_1 from "../../../Images/Mommy&me/dad_VL_1.jpg";
import dad_VL_2 from "../../../Images/Mommy&me/dad_VL_2.jpg";
import dad_VL_3 from "../../../Images/Mommy&me/dad_VL_3.jpg";
import dad_VL_4 from "../../../Images/Mommy&me/dad_VL_4.jpg";
import dad_VL_5 from "../../../Images/Mommy&me/dad_VL_5.jpg";
import dad_VL_6 from "../../../Images/Mommy&me/dad_VL_6.jpg";
import dad_VL_7 from "../../../Images/Mommy&me/dad_VL_7.jpg";

import mom_RL_1 from "../../../Images/Mommy&me/mom_RL_1.jpg";
import mom_RL_2 from "../../../Images/Mommy&me/mom_RL_2.jpg";
import mom_RL_3 from "../../../Images/Mommy&me/mom_RL_3.jpg";

import { priceList } from "/src/Data/priceList";

import FamilyRoute from "../../../Routes/Family/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";

export default {
  id: "mommyandme",
  title: "Mommy & me / Daddy & me",
  body: oneLine`
  Bli med på en hjertevarm reise gjennom mommy&Me-fotografering, en spesiell fotografering som hyller båndet mellom mor og barn eller far og barn. I en intim og kjærlighetsfylt setting, fanger vi øyeblikkene av ømhet, latter og uendelig kjærlighet som dere deler. Enten det er i hjemmets varme, i en frodig park eller et annet sted som betyr noe for dere, vil jeg fange de unike båndene og den spesielle dynamikken mellom forelder og barn.
  `,
  cover: {
    url: mom_IL_4,
    title: "Mommy and me",
  },
  listing: {
    title: "Mommy & me-fotografering",
    price: priceList.mommyandme,
    link: `/${PricesRoute}/${FamilyRoute}`,
  },
  shoots: [
    {
      description: "Mommy and me",
      tags: ["mommyandme", "baby", "mamma", "familie"],
      images: [
        {
          url: mom_IL_1,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },
        {
          url: mom_IL_2,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },
        {
          url: mom_IL_3,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },

        {
          url: mom_IL_4,
          title: "Mamma og meg",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-08-22",
    },
    {
      description: "Mamma og meg",
      tags: ["mommyandme", "baby", "mamma", "familie"],
      images: [
        {
          url: mom_K_1,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },
        {
          url: mom_K_3,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },
        {
          url: mom_K_2,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },

        {
          url: mom_K_4,
          title: "Mamma og meg",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-03-29",
    },
    {
      description: "Daddy and me",
      tags: ["daddyandme", "barn", "pappa", "familie"],

      images: [
        {
          url: dad_VL_1,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
        {
          url: dad_VL_2,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
        {
          url: dad_VL_3,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-06-11",
    },
    {
      description: "Pappa og meg",
      tags: ["daddyandme", "barn", "pappa", "familie"],

      images: [
        {
          url: dad_VL_4,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
        {
          url: dad_VL_5,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
        {
          url: dad_VL_6,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
        {
          url: dad_VL_7,
          title: "Pappa og meg",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-05-07",
    },
    {
      description: "Mamma og meg",
      tags: ["mommy&me", "barn", "mamma", "familie"],

      images: [
        {
          url: mom_RL_1,
          title: "Mamma og meg i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: mom_RL_2,
          title: "Mamma og meg i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: mom_RL_3,
          title: "Mamma og meg i snøen",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-02-21",
    },
  ],
};

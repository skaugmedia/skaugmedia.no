import { oneLine } from "common-tags";
import conf_e_1 from "../../../Images/Confirmation/conf_E_1.jpg";
import conf_e_2 from "../../../Images/Confirmation/conf_E_2.jpg";
import conf_e_3 from "../../../Images/Confirmation/conf_E_3.jpg";
import conf_e_4 from "../../../Images/Confirmation/conf_E_4.jpg";
import conf_e_5 from "../../../Images/Confirmation/conf_E_5.jpg";
import conf_e_6 from "../../../Images/Confirmation/conf_E_6.jpg";
import conf_e_7 from "../../../Images/Confirmation/conf_E_7.jpg";
import conf_h_1 from "../../../Images/Confirmation/conf_H_1.jpg";
import conf_h_2 from "../../../Images/Confirmation/conf_H_2.jpg";
import conf_j_1 from "../../../Images/Confirmation/conf_J_1.jpg";
import conf_K_1 from "../../../Images/Confirmation/conf_K_1.jpg";
import conf_K_2 from "../../../Images/Confirmation/conf_K_2.jpg";
import conf_K_3 from "../../../Images/Confirmation/conf_K_3.jpg";
import conf_K_4 from "../../../Images/Confirmation/conf_K_4.jpg";
import conf_K_5 from "../../../Images/Confirmation/conf_K_5.jpg";
import conf_K_6 from "../../../Images/Confirmation/conf_K_6.jpg";
import conf_l_1 from "../../../Images/Confirmation/conf_L_1.jpg";
import conf_l_2 from "../../../Images/Confirmation/conf_L_2.jpg";
import conf_l_3 from "../../../Images/Confirmation/conf_L_3.jpg";
import conf_l_4 from "../../../Images/Confirmation/conf_L_4.jpg";
import conf_l_5 from "../../../Images/Confirmation/conf_L_5.jpg";
import conf_sv_1 from "../../../Images/Confirmation/conf_SV_1.jpg";
import conf_sv_2 from "../../../Images/Confirmation/conf_SV_2.jpg";
import conf_sv_3 from "../../../Images/Confirmation/conf_SV_3.jpg";
import conf_sv_4 from "../../../Images/Confirmation/conf_SV_4.jpg";
import conf_sv_5 from "../../../Images/Confirmation/conf_SV_5.jpg";
import conf_sv_6 from "../../../Images/Confirmation/conf_SV_6.jpg";
import conf_sv_7 from "../../../Images/Confirmation/conf_SV_7.jpg";
import ConfirmationRoute from "../../../Routes/Confirmation/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "konfirmant",
  title: "Konfirmant",
  body: oneLine`
    Både for foreldre og konfirmanten selv, er det viktig med gode bilder for å forevige den store konfirmasjonsdagen.
    Det er også fint å ha gode bilder som kan brukes til takkekort og å kunne henge på veggen i etterkant av konfirmasjonen.
  `,
  cover: {
    url: conf_l_3,
    title: "Konfirmanten L",
  },
  listing: {
    title: "Konfirmantfotografering",
    price: priceList.confirmation,
    link: `/${PricesRoute}/${ConfirmationRoute}`,
  },
  shoots: [
    {
      description: "Konfirmanten L",
      tags: ["jente", "konfirmant", "festpyntet", "nordbytjernet"],
      images: [
        {
          url: conf_l_1,
          title: "Konfirmanten L",
          width: 667,
          height: 1000,
        },
        {
          url: conf_l_2,
          title: "Konfirmanten L",
          width: 667,
          height: 1000,
        },
        {
          url: conf_l_3,
          title: "Konfirmanten L",
          width: 1000,
          height: 667,
        },
        {
          url: conf_l_4,
          title: "Konfirmanten L",
          width: 667,
          height: 1000,
        },
        {
          url: conf_l_5,
          title: "Konfirmanten L",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-26",
    },
    {
      description: "Konfirmanten E",
      tags: ["gutt", "konfirmant", "festpyntet", "nordbytjernet"],
      images: [
        {
          url: conf_e_1,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
        {
          url: conf_e_2,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
        {
          url: conf_e_3,
          title: "Konfirmanten E",
          width: 1000,
          height: 667,
        },
        {
          url: conf_e_4,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
        {
          url: conf_e_5,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
        {
          url: conf_e_6,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
        {
          url: conf_e_7,
          title: "Konfirmanten E",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-06-23",
    },
    {
      description: "Konfirmanten S",
      tags: ["jente", "konfirmant", "festdrakt", "nordbytjernet"],
      images: [
        {
          url: conf_sv_1,
          title: "Konfirmanten S",
          width: 667,
          height: 1000,
        },
        {
          url: conf_sv_2,
          title: "Konfirmanten S",
          width: 533,
          height: 800,
        },
        {
          url: conf_sv_3,
          title: "Konfirmanten S",
          width: 533,
          height: 800,
        },
        {
          url: conf_sv_4,
          title: "Konfirmanten S",
          width: 700,
          height: 467,
        },
        {
          url: conf_sv_5,
          title: "Konfirmanten S",
          width: 600,
          height: 900,
        },
        {
          url: conf_sv_6,
          title: "Konfirmanten S",
          width: 533,
          height: 800,
        },
        {
          url: conf_sv_7,
          title: "Konfirmanten S",
          width: 667,
          height: 1000,
        },
      ],
      date: "2022-05-07",
    },
    {
      description: "Konfirmanten K",
      tags: ["konfirmant", "jente", "bunad"],
      images: [
        {
          url: conf_K_1,
          title: "Konfirmanten K",
          width: 467,
          height: 700,
        },
        {
          url: conf_K_2,
          title: "Konfirmanten K",
          width: 700,
          height: 467,
        },
        {
          url: conf_K_3,
          title: "Konfirmanten K",
          width: 467,
          height: 700,
        },
        {
          url: conf_K_4,
          title: "Konfirmanten K",
          width: 467,
          height: 700,
        },
        {
          url: conf_K_5,
          title: "Konfirmanten K",
          width: 467,
          height: 700,
        },
        {
          url: conf_K_6,
          title: "Konfirmanten K",
          width: 467,
          height: 700,
        },
      ],
      date: "2019-05-26",
    },
    {
      description: "Konfirmanten H",
      tags: ["konfirmant", "jente", "bunad"],
      images: [
        {
          url: conf_h_1,
          title: "Konfirmanten H",
          width: 467,
          height: 700,
        },
        {
          url: conf_h_2,
          title: "Konfirmanten H",
          width: 467,
          height: 700,
        },
      ],
      date: "2014-05-26",
    },
    {
      description: "Konfirmanten J",
      tags: ["konfirmant", "gutt", "festpyntet"],
      images: [
        {
          url: conf_j_1,
          title: "Konfirmanten H",
          width: 667,
          height: 1000,
        },
      ],
      date: "2013-09-26",
    },
  ],
};

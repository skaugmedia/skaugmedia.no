import { oneLine } from "common-tags";
import business_pogb_sommer_01 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_01.jpg";
import business_pogb_sommer_02 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_02.jpg";
import business_pogb_sommer_03 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_03.jpg";
import business_pogb_sommer_04 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_04.jpg";
import business_pogb_sommer_05 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_05.jpg";
import business_pogb_sommer_06 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_06.jpg";
import business_pogb_sommer_07 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_07.jpg";
import business_pogb_sommer_08 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_08.jpg";
import business_pogb_sommer_09 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_09.jpg";
import business_pogb_sommer_10 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_10.jpg";
import business_pogb_sommer_11 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_11.jpg";
import business_pogb_sommer_12 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_12.jpg";
import business_pogb_sommer_13 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_13.jpg";
import business_pogb_sommer_14 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_14.jpg";
import business_pogb_sommer_15 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_15.jpg";
import business_pogb_sommer_16 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_16.jpg";
import business_pogb_sommer_17 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_17.jpg";
import business_pogb_sommer_18 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_18.jpg";
import business_pogb_sommer_19 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_19.jpg";
import business_pogb_sommer_20 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_20.jpg";
import business_pogb_sommer_21 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_21.jpg";
import business_pogb_sommer_22 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_22.jpg";
import business_pogb_sommer_23 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_23.jpg";
import business_pogb_sommer_24 from "../../../Images/Business/Pent_og_brukt/business_pogb_sommer_24.jpg";

import product_aida_1 from "../../../Images/Product/product_aida_1.jpg";
import product_aida_2 from "../../../Images/Product/product_aida_2.jpg";
import product_aida_3 from "../../../Images/Product/product_aida_3.jpg";

import product_eva_solo_1 from "../../../Images/Product/product_eva_solo_1.jpg";
import product_eva_solo_2 from "../../../Images/Product/product_eva_solo_2.jpg";
import product_eva_solo_3 from "../../../Images/Product/product_eva_solo_3.jpg";

import product_moody_5 from "../../../Images/Product/product_moody_5.jpg";
import product_moody_6 from "../../../Images/Product/product_moody_6.jpg";
import product_moody_7 from "../../../Images/Product/product_moody_7.jpg";
import product_moody_8 from "../../../Images/Product/product_moody_8.jpg";

import product_piliyvit_1 from "../../../Images/Product/product_piliyvit_1.jpg";
import product_piliyvit_2 from "../../../Images/Product/product_piliyvit_2.jpg";
import product_piliyvit_3 from "../../../Images/Product/product_piliyvit_3.jpg";
import product_piliyvit_4 from "../../../Images/Product/product_piliyvit_4.jpg";
import product_piliyvit_5 from "../../../Images/Product/product_piliyvit_5.jpg";
import product_piliyvit_6 from "../../../Images/Product/product_piliyvit_6.jpg";
import product_piliyvit_7 from "../../../Images/Product/product_piliyvit_7.jpg";
import product_piliyvit_8 from "../../../Images/Product/product_piliyvit_8.jpg";

import product_rosendahl_champagne_1 from "../../../Images/Product/product_rosendahl_champagne_1.jpg";

import product_royal_copenhagen_1 from "../../../Images/Product/product_royal_copenhagen_1.jpg";

import product_rosendahl_fcc_1 from "../../../Images/Product/product_rosendahl_fcc_1.jpg";
import product_rosendahl_fcc_2 from "../../../Images/Product/product_rosendahl_fcc_2.jpg";
import product_rosendahl_fcc_3 from "../../../Images/Product/product_rosendahl_fcc_3.jpg";
import product_rosendahl_fcc_4 from "../../../Images/Product/product_rosendahl_fcc_4.jpg";

import product_wikwalsoe_1 from "../../../Images/Product/product_wikwalsoe_1.jpg";
import product_wikwalsoe_2 from "../../../Images/Product/product_wikwalsoe_2.jpg";
import product_wikwalsoe_3 from "../../../Images/Product/product_wikwalsoe_3.jpg";

import * as ids from "../../../Routes/PricesServices/Ids";
import PricesRoute from "../../../Routes/PricesServices/Route";

export default {
  id: "produkt",
  title: "Produkt",
  body: oneLine`
    Produktbilder kan enten tas i studio, eller i et flott miljø sammen med andre produkter.
  `,
  cover: {
    url: product_eva_solo_1,
    title: "Produkt",
  },
  listing: {
    title: "Produktfotografering",
    price: "Ta kontakt for pristilbud",
    link: `/${PricesRoute}#${ids.product}`,
  },
  shoots: [
    {
      description: "Pent og Brukt sommer",
      tags: ["produkt", "bedrift"],
      hideFromRecentWorks: true,
      images: [
        {
          url: business_pogb_sommer_01,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_02,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_03,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_04,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_05,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_06,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_07,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_08,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_09,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_10,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_11,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_12,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_13,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_14,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_15,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_16,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_17,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_18,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_19,
          title: "Pent og Brukt sommerstemning",
          width: 1000,
          height: 667,
        },
        {
          url: business_pogb_sommer_20,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_21,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_22,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_23,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
        {
          url: business_pogb_sommer_24,
          title: "Pent og Brukt sommerstemning",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-06-12",
    },
    {
      description: "Rosendahl champagneglass",
      tags: ["produkt"],
      images: [
        {
          url: product_rosendahl_champagne_1,
          title: "Rosendahl champagneglass",
          width: 1000,
          height: 667,
        },
      ],
      date: "2018-08-09",
    },
    {
      description: "Mørk borddekking",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_moody_5,
          title: "Mørk borddekking",
          width: 667,
          height: 1000,
        },
        {
          url: product_moody_6,
          title: "Mørk borddekking",
          width: 667,
          height: 1000,
        },
        {
          url: product_moody_7,
          title: "Mørk borddekking",
          width: 667,
          height: 1000,
        },
        {
          url: product_moody_8,
          title: "Mørk borddekking",
          width: 667,
          height: 1000,
        },
      ],
      date: "2018-08-09",
    },
    {
      description: "Pilluyvit servise",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_piliyvit_1,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_2,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_3,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_4,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_5,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_6,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_7,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_piliyvit_8,
          title: "Pilluyvit servise",
          width: 667,
          height: 1000,
        },
      ],
      date: "2016-06-01",
    },
    {
      description: "Royal Copenhagen contrast kopper",
      tags: ["produkt"],
      images: [
        {
          url: product_royal_copenhagen_1,
          title: "Royal Copenhagen contrast kopper",
          width: 667,
          height: 1000,
        },
      ],
      date: "2016-05-28",
    },
    {
      description: "Rosendahl servise og FCC bestikk",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_rosendahl_fcc_1,
          title: "Rosendahl servise og FCC bestikk",
          width: 667,
          height: 1000,
        },
        {
          url: product_rosendahl_fcc_2,
          title: "Rosendahl servise og FCC bestikk",
          width: 667,
          height: 1000,
        },
        {
          url: product_rosendahl_fcc_3,
          title: "Rosendahl servise og FCC bestikk",
          width: 667,
          height: 1000,
        },
        {
          url: product_rosendahl_fcc_4,
          title: "Rosendahl servise og FCC bestikk",
          width: 667,
          height: 1000,
        },
      ],
      date: "2016-06-06",
    },
    {
      description: "Eva Solo trio servise",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_eva_solo_1,
          title: "Eva Solo trio servise",
          width: 1000,
          height: 667,
        },
        {
          url: product_eva_solo_2,
          title: "Eva Solo trio servise",
          width: 667,
          height: 1000,
        },
        {
          url: product_eva_solo_3,
          title: "Eva Solo trio servise",
          width: 1000,
          height: 667,
        },
      ],
      date: "2016-05-26",
    },
    {
      description: "Wik & Walsøe Slåpe",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_wikwalsoe_1,
          title: "Wik & Walsøe Slåpe",
          width: 667,
          height: 1000,
        },
        {
          url: product_wikwalsoe_2,
          title: "Wik & Walsøe Slåpe",
          width: 667,
          height: 1000,
        },
        {
          url: product_wikwalsoe_3,
          title: "Wik & Walsøe Slåpe",
          width: 667,
          height: 1000,
        },
      ],
      date: "2016-05-28",
    },
    {
      description: "Aida",
      tags: ["produkt", "borddekking"],
      images: [
        {
          url: product_aida_2,
          title: "Aida Quatro",
          width: 667,
          height: 1000,
        },
        {
          url: product_aida_3,
          title: "Aida Quatro",
          width: 667,
          height: 1000,
        },
        {
          url: product_aida_1,
          title: "Aida Paul Pava",
          width: 1000,
          height: 667,
        },
      ],
      date: "2016-06-01",
    },
  ],
};

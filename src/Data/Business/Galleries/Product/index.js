import { oneLine } from "common-tags";

import product_aida_1 from "../../../../Images/Product/product_aida_1.jpg";
import product_aida_2 from "../../../../Images/Product/product_aida_2.jpg";
import product_aida_3 from "../../../../Images/Product/product_aida_3.jpg";

import product_eva_solo_1 from "../../../../Images/Product/product_eva_solo_1.jpg";
import product_eva_solo_2 from "../../../../Images/Product/product_eva_solo_2.jpg";
import product_eva_solo_3 from "../../../../Images/Product/product_eva_solo_3.jpg";

import product_moody_5 from "../../../../Images/Product/product_moody_5.jpg";
import product_moody_6 from "../../../../Images/Product/product_moody_6.jpg";
import product_moody_7 from "../../../../Images/Product/product_moody_7.jpg";
import product_moody_8 from "../../../../Images/Product/product_moody_8.jpg";

import product_piliyvit_1 from "../../../../Images/Product/product_piliyvit_1.jpg";
import product_piliyvit_2 from "../../../../Images/Product/product_piliyvit_2.jpg";
import product_piliyvit_3 from "../../../../Images/Product/product_piliyvit_3.jpg";
import product_piliyvit_4 from "../../../../Images/Product/product_piliyvit_4.jpg";
import product_piliyvit_5 from "../../../../Images/Product/product_piliyvit_5.jpg";
import product_piliyvit_6 from "../../../../Images/Product/product_piliyvit_6.jpg";
import product_piliyvit_7 from "../../../../Images/Product/product_piliyvit_7.jpg";
import product_piliyvit_8 from "../../../../Images/Product/product_piliyvit_8.jpg";

import product_rosendahl_champagne_1 from "../../../../Images/Product/product_rosendahl_champagne_1.jpg";

import product_royal_copenhagen_1 from "../../../../Images/Product/product_royal_copenhagen_1.jpg";

import product_rosendahl_fcc_1 from "../../../../Images/Product/product_rosendahl_fcc_1.jpg";
import product_rosendahl_fcc_2 from "../../../../Images/Product/product_rosendahl_fcc_2.jpg";
import product_rosendahl_fcc_3 from "../../../../Images/Product/product_rosendahl_fcc_3.jpg";
import product_rosendahl_fcc_4 from "../../../../Images/Product/product_rosendahl_fcc_4.jpg";

import product_wikwalsoe_1 from "../../../../Images/Product/product_wikwalsoe_1.jpg";
import product_wikwalsoe_2 from "../../../../Images/Product/product_wikwalsoe_2.jpg";
import product_wikwalsoe_3 from "../../../../Images/Product/product_wikwalsoe_3.jpg";

import * as ids from "../../../../Routes/PricesServices/Ids";
import PricesRoute from "../../../../Routes/PricesServices/Route";

export default {
  id: "produkt",
  title: "Produkt",
  body: oneLine`
  La produktene deres skinne gjennom profesjonell produktfotografering som fanger oppmerksomheten til kundene og gir dem et uimotståelig førsteinntrykk. Med nøye belysning, komposisjon og retning, vil jeg skape bilder som fremhever kvaliteten, funksjonaliteten og unikheten til deres produkter. Enten det er for nettbutikker, kataloger, annonser eller sosiale medieplattformer, vil jeg jobbe tett med dere for å forstå deres merkevareidentitet og mål, og skape bilder som resonnerer med deres målgruppe. La oss sammen skape visuelt slående bilder som ikke bare selger produkter, men som også styrker deres merkevare og øker salget.
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
          width: 1000,
          height: 667,
        },
        {
          url: product_eva_solo_3,
          title: "Eva Solo trio servise",
          width: 667,
          height: 1000,
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

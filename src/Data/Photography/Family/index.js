import { oneLine } from "common-tags";
import famE1 from "../../../Images/Family/fam_e_1.jpg";
import famE2 from "../../../Images/Family/fam_e_2.jpg";
import famE3 from "../../../Images/Family/fam_e_3.jpg";
import famE4 from "../../../Images/Family/fam_e_4.jpg";
import famE5 from "../../../Images/Family/fam_e_5.jpg";
import famE6 from "../../../Images/Family/fam_e_6.jpg";
import famE7 from "../../../Images/Family/fam_e_7.jpg";
import famE8 from "../../../Images/Family/fam_e_8.jpg";
import famE9 from "../../../Images/Family/fam_e_9.jpg";
import famH1 from "../../../Images/Family/fam_h_1.jpg";
import famH2 from "../../../Images/Family/fam_h_2.jpg";
import famH3 from "../../../Images/Family/fam_h_3.jpg";
import famH4 from "../../../Images/Family/fam_h_4.jpg";
import famH5 from "../../../Images/Family/fam_h_5.jpg";
import famH6 from "../../../Images/Family/fam_h_6.jpg";
import famL10 from "../../../Images/Family/fam_l_10.jpg";
import famL11 from "../../../Images/Family/fam_l_11.jpg";
import famL2 from "../../../Images/Family/fam_l_2.jpg";
import famL3 from "../../../Images/Family/fam_l_3.jpg";
import famL5 from "../../../Images/Family/fam_l_5.jpg";
import famL9 from "../../../Images/Family/fam_l_9.jpg";

import famHS1 from "../../../Images/Family/fam_hs_1.jpg";
import famHS2 from "../../../Images/Family/fam_hs_2.jpg";
import famHS3 from "../../../Images/Family/fam_hs_3.jpg";
import famHS4 from "../../../Images/Family/fam_hs_4.jpg";

import famBA1 from "../../../Images/Family/fam_ba_1.jpg";
import famBA2 from "../../../Images/Family/fam_ba_2.jpg";
import famBA3 from "../../../Images/Family/fam_ba_3.jpg";

import famCK1 from "../../../Images/Family/fam_ck_1.jpg";
import famCK2 from "../../../Images/Family/fam_ck_2.jpg";
import famCK3 from "../../../Images/Family/fam_ck_3.jpg";

import famCS1 from "../../../Images/Family/fam_cs_1.jpg";
import famCS2 from "../../../Images/Family/fam_cs_2.jpg";

import famAV1 from "../../../Images/Family/fam_AV_1.jpg";
import famAV2 from "../../../Images/Family/fam_AV_2.jpg";
import famAV3 from "../../../Images/Family/fam_AV_3.jpg";
import famAV4 from "../../../Images/Family/fam_AV_4.jpg";
import famAV5 from "../../../Images/Family/fam_AV_5.jpg";

import famST1 from "../../../Images/Family/fam_ST_1.jpg";
import famST2 from "../../../Images/Family/fam_ST_2.jpg";
import famST3 from "../../../Images/Family/fam_ST_3.jpg";
import famST4 from "../../../Images/Family/fam_ST_4.jpg";

import FamilyRoute from "../../../Routes/Family/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "familie",
  title: "Familie",

  body: oneLine`
  Bli med oss og la øyeblikkene bli til varige minner gjennom en familiefotografering som er perfekt for å fange deres unike bånd og kjærlighet. Ved å kombinere naturlig lys, autentiske øyeblikk og enkle retninger, skaper vi varige minner fylt med latter, nærhet og kjærlighet. La oss fange deres unike historie gjennom bilder som vil bli verdsatt i generasjoner fremover.
  `,
  cover: {
    url: famCS2,
    title: "Familie i en eng av Lupiner",
  },
  listing: {
    title: "Familiefotografering",
    price: priceList.family,
    link: `/${PricesRoute}/${FamilyRoute}`,
  },
  shoots: [
    {
      description: "Familien T",
      tags: ["familie", "skog", "sommer"],
      images: [
        {
          url: famST3,
          title: "Familiefotografering i skogen",
          width: 667,
          height: 1000,
        },
        {
          url: famST1,
          title: "Familiefotografering i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famST2,
          title: "Familiefotografering i skogen",
          width: 667,
          height: 1000,
        },

        {
          url: famST4,
          title: "Familiefotografering i skogen",
          width: 1000,
          height: 667,
        },
      ],
      date: "2024-08-02",
    },
    {
      description: "Familien V",
      tags: ["familie", "strå", "sommer"],
      images: [
        {
          url: famAV3,
          title: "Familiefotografering i strå",
          width: 1000,
          height: 667,
        },
        {
          url: famAV1,
          title: "Familiefotografering i strå",
          width: 667,
          height: 1000,
        },
        {
          url: famAV2,
          title: "Familiefotografering i strå",
          width: 667,
          height: 1000,
        },

        {
          url: famAV4,
          title: "Familiefotografering i strå",
          width: 1000,
          height: 667,
        },

        {
          url: famAV5,
          title: "Familiefotografering i strå",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-07-31",
    },
    {
      description: "Familien H",
      tags: ["familie", "skog", "høst"],
      images: [
        {
          url: famH3,
          title: "Familien H",
          width: 1000,
          height: 667,
        },
        {
          url: famH1,
          title: "Familien H",
          width: 667,
          height: 1000,
        },
        {
          url: famH2,
          title: "Familien H",
          width: 667,
          height: 1000,
        },

        {
          url: famH4,
          title: "Familien H",
          width: 667,
          height: 1000,
        },

        {
          url: famH5,
          title: "Familien H",
          width: 1000,
          height: 667,
        },
        {
          url: famH6,
          title: "Familien H",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-09-08",
    },
    {
      description: "Familietid i skogen",
      tags: ["familie", "skog", "sommer"],
      images: [
        {
          url: famE1,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE2,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },

        {
          url: famE3,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },
        {
          url: famE4,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },

        {
          url: famE5,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },
        {
          url: famE6,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE7,
          title: "Familietid i skogen",
          width: 667,
          height: 1000,
        },

        {
          url: famE8,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
        {
          url: famE9,
          title: "Familietid i skogen",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-06-23",
    },

    {
      description: "Familietid i snøen",
      tags: ["familie", "snø"],
      images: [
        {
          url: famL2,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL3,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL5,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },

        {
          url: famL9,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
        {
          url: famL10,
          title: "Familietid i snøen",
          width: 1000,
          height: 667,
        },
        {
          url: famL11,
          title: "Familietid i snøen",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-19",
    },
    {
      description: "Familie i lupineng",
      tags: ["familie", "blomster", "sommer"],
      images: [
        {
          url: famHS1,
          title: "Familien HS",
          width: 1000,
          height: 667,
        },
        {
          url: famHS2,
          title: "Familien HS",
          width: 667,
          height: 1000,
        },

        {
          url: famHS3,
          title: "Familien HS",
          width: 667,
          height: 1000,
        },
        {
          url: famHS4,
          title: "Familien HS",
          width: 1000,
          height: 667,
        },
      ],
      date: "2024-06-14",
    },
    {
      description: "Familiefoto",
      tags: ["familie", "gartneri", "sommer"],
      images: [
        {
          url: famBA1,
          title: "Familien BA",
          width: 1000,
          height: 667,
        },
        {
          url: famBA2,
          title: "Familien BA",
          width: 1000,
          height: 667,
        },

        {
          url: famBA3,
          title: "Familien BA",
          width: 1000,
          height: 667,
        },
      ],
      date: "2024-06-08",
    },
    {
      description: "Familiefoto",
      tags: ["familie", "gartneri", "sommer"],
      images: [
        {
          url: famCK1,
          title: "Familien CK",
          width: 1000,
          height: 667,
        },
        {
          url: famCK2,
          title: "Familien CK",
          width: 1000,
          height: 667,
        },

        {
          url: famCK3,
          title: "Familien CK",
          width: 1000,
          height: 667,
        },
      ],
      date: "2024-06-08",
    },
    {
      description: "Familiefoto",
      tags: ["familie", "skog", "sommer"],
      images: [
        {
          url: famCS1,
          title: "Familien CS",
          width: 1000,
          height: 667,
        },
        {
          url: famCS2,
          title: "Familien CS",
          width: 1000,
          height: 667,
        },
      ],
      date: "2024-06-18",
    },
  ],
};

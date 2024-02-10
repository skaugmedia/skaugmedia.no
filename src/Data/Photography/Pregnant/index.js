import { oneLine } from "common-tags";

import preg_i_1 from "../../../Images/Pregnant/preg_i_1.jpg";
import preg_i_2 from "../../../Images/Pregnant/preg_i_2.jpg";
import preg_i_3 from "../../../Images/Pregnant/preg_i_3.jpg";
import preg_i_4 from "../../../Images/Pregnant/preg_i_4.jpg";
import preg_i_5 from "../../../Images/Pregnant/preg_i_5.jpg";
import preg_i_6 from "../../../Images/Pregnant/preg_i_6.jpg";
import preg_i_7 from "../../../Images/Pregnant/preg_i_7.jpg";
import preg_i_8 from "../../../Images/Pregnant/preg_i_8.jpg";
import preg_i_9 from "../../../Images/Pregnant/preg_i_9.jpg";

import preg_p_1 from "../../../Images/Pregnant/preg_p_1.jpg";
import preg_p_2 from "../../../Images/Pregnant/preg_p_2.jpg";
import preg_p_3 from "../../../Images/Pregnant/preg_p_3.jpg";
import preg_p_4 from "../../../Images/Pregnant/preg_p_4.jpg";
import preg_p_5 from "../../../Images/Pregnant/preg_p_5.jpg";
import preg_p_6 from "../../../Images/Pregnant/preg_p_6.jpg";

import preg_c_1 from "../../../Images/Pregnant/preg_c_1.jpg";
import preg_c_10 from "../../../Images/Pregnant/preg_c_10.jpg";
import preg_c_11 from "../../../Images/Pregnant/preg_c_11.jpg";
import preg_c_12 from "../../../Images/Pregnant/preg_c_12.jpg";
import preg_c_13 from "../../../Images/Pregnant/preg_c_13.jpg";
import preg_c_2 from "../../../Images/Pregnant/preg_c_2.jpg";
import preg_c_3 from "../../../Images/Pregnant/preg_c_3.jpg";
import preg_c_4 from "../../../Images/Pregnant/preg_c_4.jpg";
import preg_c_5 from "../../../Images/Pregnant/preg_c_5.jpg";
import preg_c_6 from "../../../Images/Pregnant/preg_c_6.jpg";
import preg_c_7 from "../../../Images/Pregnant/preg_c_7.jpg";
import preg_c_8 from "../../../Images/Pregnant/preg_c_8.jpg";
import preg_c_9 from "../../../Images/Pregnant/preg_c_9.jpg";

import preg_l_1 from "../../../Images/Pregnant/preg_l_1.jpg";
import preg_l_2 from "../../../Images/Pregnant/preg_l_2.jpg";
import preg_l_3 from "../../../Images/Pregnant/preg_l_3.jpg";
import preg_l_4 from "../../../Images/Pregnant/preg_l_4.jpg";
import preg_l_5 from "../../../Images/Pregnant/preg_l_5.jpg";
import preg_l_6 from "../../../Images/Pregnant/preg_l_6.jpg";

import preg_j_1 from "../../../Images/Pregnant/preg_j_1.jpg";
import preg_j_2 from "../../../Images/Pregnant/preg_j_2.jpg";
import preg_j_3 from "../../../Images/Pregnant/preg_j_3.jpg";
import preg_j_4 from "../../../Images/Pregnant/preg_j_4.jpg";
import preg_j_5 from "../../../Images/Pregnant/preg_j_5.jpg";
import preg_j_6 from "../../../Images/Pregnant/preg_j_6.jpg";
import preg_j_7 from "../../../Images/Pregnant/preg_j_7.jpg";
import preg_j_8 from "../../../Images/Pregnant/preg_j_8.jpg";

import preg_k_1 from "../../../Images/Pregnant/preg_k_1.jpg";
import preg_k_2 from "../../../Images/Pregnant/preg_k_2.jpg";
import preg_k_3 from "../../../Images/Pregnant/preg_k_3.jpg";
import preg_k_4 from "../../../Images/Pregnant/preg_k_4.jpg";
import preg_k_5 from "../../../Images/Pregnant/preg_k_5.jpg";
import preg_k_6 from "../../../Images/Pregnant/preg_k_6.jpg";
import preg_k_7 from "../../../Images/Pregnant/preg_k_7.jpg";

import preg_m_1 from "../../../Images/Pregnant/preg_m_1.jpg";
import preg_m_2 from "../../../Images/Pregnant/preg_m_2.jpg";
import preg_m_3 from "../../../Images/Pregnant/preg_m_3.jpg";
import preg_m_4 from "../../../Images/Pregnant/preg_m_4.jpg";
import preg_m_5 from "../../../Images/Pregnant/preg_m_5.jpg";
import preg_m_6 from "../../../Images/Pregnant/preg_m_6.jpg";
import preg_m_7 from "../../../Images/Pregnant/preg_m_7.jpg";
import preg_m_8 from "../../../Images/Pregnant/preg_m_8.jpg";

import preg_kr_1 from "../../../Images/Pregnant/preg_kr_1.jpg";

import preg_a_1 from "../../../Images/Pregnant/preg_a_1.jpg";
import preg_a_2 from "../../../Images/Pregnant/preg_a_2.jpg";
import preg_a_3 from "../../../Images/Pregnant/preg_a_3.jpg";
import preg_a_4 from "../../../Images/Pregnant/preg_a_4.jpg";

import preg_JA_1 from "../../../Images/Pregnant/preg_JA_1.jpg";
import preg_JA_2 from "../../../Images/Pregnant/preg_JA_2.jpg";
import preg_JA_3 from "../../../Images/Pregnant/preg_JA_3.jpg";
import preg_JA_4 from "../../../Images/Pregnant/preg_JA_4.jpg";

import { priceList } from "/src/Data/priceList";

import MaternityRoute from "../../../Routes/Maternity/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";

export default {
  id: "gravid",
  title: "Gravid",
  body: oneLine`
    Det er så viktig å fange noen bilder av magen mens den stråler som mest, plutselig er den borte! Med det vakre utendørslandskapet som bakgrunn, fanger vi de naturlige lyset og omgivelsene for å skape bilder som stråler av forventning, kjærlighet og forundring. Enten det er i en skog, på en strand, eller på et annet sted som betyr noe for dere, bringer jeg min ekspertise og lidenskap for å fange disse spesielle øyeblikkene.
  `,
  cover: {
    url: preg_JA_1,
    title: "Gravide J",
  },
  listing: {
    title: "Gravidfotografering",
    price: priceList.pregnant,
    link: `/${PricesRoute}/${MaternityRoute}`,
  },
  shoots: [
    {
      description: "Gravide A",
      tags: ["gravid", "sommer", "skog"],
      images: [
        {
          url: preg_a_1,
          title: "Gravide A",
          width: 667,
          height: 1000,
        },
        {
          url: preg_a_2,
          title: "Gravide A",
          width: 667,
          height: 1000,
        },
        {
          url: preg_a_3,
          title: "Gravide A",
          width: 667,
          height: 1000,
        },
        {
          url: preg_a_4,
          title: "Gravide A",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-09-04",
    },
    {
      description: "Gravide Kr",
      tags: ["gravid", "sommer"],
      images: [
        {
          url: preg_kr_1,
          title: "Gravide Kr",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-02",
    },
    {
      description: "Gravide K",
      tags: ["gravid", "sommer", "blomstereng"],
      images: [
        {
          url: preg_k_1,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_2,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_3,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_4,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },

        {
          url: preg_k_5,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_6,
          title: "Gravide K",
          width: 667,
          height: 1000,
        },
        {
          url: preg_k_7,
          title: "Gravide K",
          width: 1000,
          height: 667,
        },
      ],
      date: "2023-08-16",
    },
    {
      description: "Gravide L",
      tags: ["gravid", "sommer"],
      images: [
        {
          url: preg_l_1,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_2,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_3,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_4,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },

        {
          url: preg_l_5,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
        {
          url: preg_l_6,
          title: "Gravide L",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-08-07",
    },

    {
      description: "Gravide P",
      tags: ["gravid", "vinter", "partner"],
      images: [
        {
          url: preg_p_1,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
        {
          url: preg_p_2,
          title: "Gravide P",
          width: 1000,
          height: 667,
        },
        {
          url: preg_p_3,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
        {
          url: preg_p_4,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },

        {
          url: preg_p_5,
          title: "Gravide P",
          width: 1000,
          height: 667,
        },
        {
          url: preg_p_6,
          title: "Gravide P",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-02-25",
    },
    {
      description: "Gravide J",
      tags: ["gravid", "innendørs"],

      images: [
        {
          url: preg_j_1,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_2,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_3,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_4,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_5,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_6,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_7,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_j_8,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-04-13",
    },
    {
      description: "Gravide M",
      tags: ["gravid", "utendørs", "sorthvitt", "farger"],

      images: [
        {
          url: preg_m_1,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_2,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_3,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_4,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_5,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_6,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_7,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
        {
          url: preg_m_8,
          title: "Gravide M",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-05-22",
    },
    {
      description: "Gravide C",
      tags: ["gravid", "vinter", "høst", "nordbytjernet"],
      images: [
        {
          url: preg_c_2,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_3,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_4,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_5,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_1,
          title: "Gravide C",
          width: 1000,
          height: 667,
        },
        {
          url: preg_c_6,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_7,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_8,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_9,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_10,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_11,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_12,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
        {
          url: preg_c_13,
          title: "Gravide C",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-11-16",
    },
    {
      description: "Gravide J",
      tags: ["gravid", "vinter", "nordbytjernet"],
      images: [
        {
          url: preg_JA_1,
          title: "Gravide J",
          width: 1000,
          height: 667,
        },
        {
          url: preg_JA_2,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
        {
          url: preg_JA_3,
          title: "Gravide J",
          width: 1000,
          height: 667,
        },
        {
          url: preg_JA_4,
          title: "Gravide J",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-11-02",
    },
    {
      description: "Gravide I",
      tags: ["gravid", "vinter", "nordbytjernet"],
      images: [
        {
          url: preg_i_9,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
        {
          url: preg_i_1,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
        {
          url: preg_i_8,
          title: "Gravide I",
          width: 1000,
          height: 667,
        },
        {
          url: preg_i_2,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },

        {
          url: preg_i_4,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
        {
          url: preg_i_7,
          title: "Gravide I",
          width: 1000,
          height: 667,
        },

        {
          url: preg_i_5,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
        {
          url: preg_i_3,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
        {
          url: preg_i_6,
          title: "Gravide I",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-11-30",
    },
  ],
};

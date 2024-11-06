import { oneLine } from "common-tags";
import port_M_01 from "../../../Images/Portrait/port_M_01.jpg";
import port_M_02 from "../../../Images/Portrait/port_M_02.jpg";

import port_MB_01 from "../../../Images/Portrait/port_MB_01.jpg";
import port_MB_02 from "../../../Images/Portrait/port_MB_02.jpg";

import port_NH_01 from "../../../Images/Portrait/port_NH_01.jpg";
import port_NH_02 from "../../../Images/Portrait/port_NH_02.jpg";
import port_NH_03 from "../../../Images/Portrait/port_NH_03.jpg";
import port_NH_04 from "../../../Images/Portrait/port_NH_04.jpg";

import port_S_01 from "../../../Images/Portrait/port_S_01.jpg";
import port_S_02 from "../../../Images/Portrait/port_S_02.jpg";

import port_VNB_01 from "../../../Images/Portrait/port_VNB_01.jpg";
import port_VNB_02 from "../../../Images/Portrait/port_VNB_02.jpg";

import port_VJ_01 from "../../../Images/Portrait/port_VJ_01.jpg";
import port_VJ_02 from "../../../Images/Portrait/port_VJ_02.jpg";

import port_IM_01 from "../../../Images/Portrait/port_IM_01.jpg";
import port_IM_02 from "../../../Images/Portrait/port_IM_02.jpg";

import port_ST_01 from "../../../Images/Portrait/port_ST_01.jpg";
import port_ST_02 from "../../../Images/Portrait/port_ST_02.jpg";
import port_ST_03 from "../../../Images/Portrait/port_ST_03.jpg";

import port_SV_01 from "../../../Images/Portrait/port_SV_01.jpg";
import port_SV_02 from "../../../Images/Portrait/port_SV_02.jpg";
import port_SV_03 from "../../../Images/Portrait/port_SV_03.jpg";
import port_SV_04 from "../../../Images/Portrait/port_SV_04.jpg";
import port_SV_05 from "../../../Images/Portrait/port_SV_05.jpg";
import port_SV_06 from "../../../Images/Portrait/port_SV_06.jpg";
import port_SV_07 from "../../../Images/Portrait/port_SV_07.jpg";

import port_T_01 from "../../../Images/Portrait/port_T_01.jpg";
import port_T_02 from "../../../Images/Portrait/port_T_02.jpg";
import port_T_03 from "../../../Images/Portrait/port_T_03.jpg";
import port_T_04 from "../../../Images/Portrait/port_T_04.jpg";
import port_T_05 from "../../../Images/Portrait/port_T_05.jpg";
import port_T_06 from "../../../Images/Portrait/port_T_06.jpg";

import port_LG_1 from "../../../Images/Portrait/port_LG_1.jpg";
import port_LG_2 from "../../../Images/Portrait/port_LG_2.jpg";
import port_LG_3 from "../../../Images/Portrait/port_LG_3.jpg";
import port_LG_4 from "../../../Images/Portrait/port_LG_4.jpg";
import port_LG_5 from "../../../Images/Portrait/port_LG_5.jpg";
import port_LG_6 from "../../../Images/Portrait/port_LG_6.jpg";
import port_LG_7 from "../../../Images/Portrait/port_LG_7.jpg";
import port_LG_8 from "../../../Images/Portrait/port_LG_8.jpg";
import port_LG_9 from "../../../Images/Portrait/port_LG_9.jpg";

import HeadshotsRoute from "../../../Routes/Headshots/Route";
import PricesRoute from "../../../Routes/PricesServices/Route";
import { priceList } from "/src/Data/priceList";

export default {
  id: "portrett",
  title: "Portrett",
  body: oneLine`
  Opplev kraften av et godt portrett gjennom en profesjonell fotografering som setter deg i det beste lyset, enten det er for profesjonelle formål eller til dine kanaler i sosiale medier. Enten du trenger imponerende profilbilder for profesjonelle nettverk eller ønsker å forsterke ditt nærvær på sosiale medier, vil jeg skape bilder som formidler din autentiske identitet og styrker din visuelle appell. La oss sammen skape portretter som ikke bare ser fantastiske ut, men som også kommuniserer din profesjonelle dyktighet og personlige sjarm til verden.
  `,
  cover: {
    url: port_T_01,
    title: "Portrett",
  },
  listing: {
    title: "Portrettfotografering / Headshots",
    price: priceList.portraits,
    link: `/${PricesRoute}/${HeadshotsRoute}`,
  },
  shoots: [
    {
      description: "LG",
      tags: ["portrett", "dame", "natur", "beige", "sommer", "strå"],
      images: [
        {
          url: port_LG_1,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_2,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_3,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_4,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_5,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_6,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_7,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_8,
          title: "LG",
          height: 1000,
          width: 667,
        },
        {
          url: port_LG_9,
          title: "LG",
          height: 1000,
          width: 667,
        },
      ],
      date: "2024-08-06",
    },
    {
      description: "IM",
      tags: ["portrett", "dame", "natur", "frodig", "sommer", "solsikke"],
      images: [
        {
          url: port_IM_01,
          title: "IM",
          height: 1000,
          width: 667,
        },
        {
          url: port_IM_02,
          title: "IM",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-08-22",
    },
    {
      description: "T",
      tags: ["portrett", "dame", "natur", "frodig", "sommer", "nordbytjernet"],
      images: [
        {
          url: port_T_01,
          title: "T",
          height: 667,
          width: 1000,
        },
        {
          url: port_T_02,
          title: "T",
          height: 1000,
          width: 667,
        },
        {
          url: port_T_03,
          title: "T",
          height: 1000,
          width: 667,
        },
        {
          url: port_T_04,
          title: "T",
          height: 1000,
          width: 667,
        },
        {
          url: port_T_05,
          title: "T",
          height: 1000,
          width: 667,
        },
        {
          url: port_T_06,
          title: "T",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-08-10",
    },
    {
      description: "SV",
      tags: ["portrett", "jente", "natur", "frodig", "sommer"],
      images: [
        {
          url: port_SV_01,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_02,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_03,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_04,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_05,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_06,
          title: "SV",
          height: 1000,
          width: 667,
        },
        {
          url: port_SV_07,
          title: "SV",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-08-11",
    },

    {
      description: "Stranger AS",
      tags: ["portrett", "dame", "headshot", "vinter"],
      images: [
        {
          url: port_ST_01,
          title: "Stranger",
          height: 1000,
          width: 667,
        },
        {
          url: port_ST_02,
          title: "Stranger",
          height: 1000,
          width: 667,
        },
        {
          url: port_ST_03,
          title: "Stranger",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-03-02",
    },

    {
      description: "NH",
      tags: ["portrett", "dame", "urban", "frodig"],
      images: [
        {
          url: port_NH_01,
          title: "NH",
          height: 1000,
          width: 667,
        },
        {
          url: port_NH_02,
          title: "NH",
          height: 1000,
          width: 667,
        },
        {
          url: port_NH_03,
          title: "NH",
          height: 1000,
          width: 667,
        },
        {
          url: port_NH_04,
          title: "NH",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-07-13",
    },

    {
      description: "S",
      tags: ["portrett", "mann", "urban", "skog"],
      images: [
        {
          url: port_S_01,
          title: "S",
          height: 1000,
          width: 667,
        },
        {
          url: port_S_02,
          title: "S",
          height: 1000,
          width: 667,
        },
      ],
      date: "2023-03-29",
    },
    {
      description: "M",
      tags: ["portrett", "dame", "urban"],
      images: [
        {
          url: port_M_01,
          title: "M",
          height: 1000,
          width: 667,
        },
        {
          url: port_M_02,
          title: "M",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-12-13",
    },
    {
      description: "MB",
      tags: ["portrett", "dame", "urban"],
      images: [
        {
          url: port_MB_01,
          title: "MB",
          height: 1000,
          width: 667,
        },
        {
          url: port_MB_02,
          title: "MB",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-11-19",
    },
    {
      description: "V",
      tags: ["portrett", "dame"],
      images: [
        {
          url: port_VJ_01,
          title: "V",
          height: 1000,
          width: 667,
        },
        {
          url: port_VJ_02,
          title: "V",
          height: 1000,
          width: 667,
        },
      ],
      date: "2014-10-27",
    },
    {
      description: "VN",
      tags: ["portrett", "mann"],
      images: [
        {
          url: port_VNB_01,
          title: "VN",
          height: 1000,
          width: 667,
        },
        {
          url: port_VNB_02,
          title: "VN",
          height: 1000,
          width: 667,
        },
      ],
      date: "2018-06-24",
    },
  ],
};

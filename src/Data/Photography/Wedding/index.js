import { oneLine } from "common-tags";
import Weddingrt1 from "../../../Images/Wedding/weddingRT_1.jpg";
import Weddingrt10 from "../../../Images/Wedding/weddingRT_10.jpg";
import Weddingrt11 from "../../../Images/Wedding/weddingRT_11.jpg";
import Weddingrt12 from "../../../Images/Wedding/weddingRT_12.jpg";
import Weddingrt13 from "../../../Images/Wedding/weddingRT_13.jpg";
import Weddingrt14 from "../../../Images/Wedding/weddingRT_14.jpg";
import Weddingrt15 from "../../../Images/Wedding/weddingRT_15.jpg";
import Weddingrt16 from "../../../Images/Wedding/weddingRT_16.jpg";
import Weddingrt17 from "../../../Images/Wedding/weddingRT_17.jpg";
import Weddingrt18 from "../../../Images/Wedding/weddingRT_18.jpg";
import Weddingrt19 from "../../../Images/Wedding/weddingRT_19.jpg";
import Weddingrt2 from "../../../Images/Wedding/weddingRT_2.jpg";
import Weddingrt20 from "../../../Images/Wedding/weddingRT_20.jpg";
import Weddingrt21 from "../../../Images/Wedding/weddingRT_21.jpg";
import Weddingrt22 from "../../../Images/Wedding/weddingRT_22.jpg";
import Weddingrt23 from "../../../Images/Wedding/weddingRT_23.jpg";
import Weddingrt24 from "../../../Images/Wedding/weddingRT_24.jpg";
import Weddingrt25 from "../../../Images/Wedding/weddingRT_25.jpg";
import Weddingrt26 from "../../../Images/Wedding/weddingRT_26.jpg";
import Weddingrt27 from "../../../Images/Wedding/weddingRT_27.jpg";
import Weddingrt3 from "../../../Images/Wedding/weddingRT_3.jpg";
import Weddingrt4 from "../../../Images/Wedding/weddingRT_4.jpg";
import Weddingrt5 from "../../../Images/Wedding/weddingRT_5.jpg";
import Weddingrt6 from "../../../Images/Wedding/weddingRT_6.jpg";
import Weddingrt7 from "../../../Images/Wedding/weddingRT_7.jpg";
import Weddingrt8 from "../../../Images/Wedding/weddingRT_8.jpg";
import Weddingrt9 from "../../../Images/Wedding/weddingRT_9.jpg";

import Weddingah1 from "/src/Images/Wedding/weddingAH_(1).jpg";
import Weddingah10 from "/src/Images/Wedding/weddingAH_(10).jpg";
import Weddingah11 from "/src/Images/Wedding/weddingAH_(11).jpg";
import Weddingah12 from "/src/Images/Wedding/weddingAH_(12).jpg";
import Weddingah13 from "/src/Images/Wedding/weddingAH_(13).jpg";
import Weddingah14 from "/src/Images/Wedding/weddingAH_(14).jpg";
import Weddingah15 from "/src/Images/Wedding/weddingAH_(15).jpg";
import Weddingah16 from "/src/Images/Wedding/weddingAH_(16).jpg";
import Weddingah17 from "/src/Images/Wedding/weddingAH_(17).jpg";
import Weddingah18 from "/src/Images/Wedding/weddingAH_(18).jpg";
import Weddingah19 from "/src/Images/Wedding/weddingAH_(19).jpg";
import Weddingah2 from "/src/Images/Wedding/weddingAH_(2).jpg";
import Weddingah20 from "/src/Images/Wedding/weddingAH_(20).jpg";
import Weddingah21 from "/src/Images/Wedding/weddingAH_(21).jpg";
import Weddingah22 from "/src/Images/Wedding/weddingAH_(22).jpg";
import Weddingah3 from "/src/Images/Wedding/weddingAH_(3).jpg";
import Weddingah4 from "/src/Images/Wedding/weddingAH_(4).jpg";
import Weddingah5 from "/src/Images/Wedding/weddingAH_(5).jpg";
import Weddingah6 from "/src/Images/Wedding/weddingAH_(6).jpg";
import Weddingah7 from "/src/Images/Wedding/weddingAH_(7).jpg";
import Weddingah8 from "/src/Images/Wedding/weddingAH_(8).jpg";
import Weddingah9 from "/src/Images/Wedding/weddingAH_(9).jpg";

import WeddingLJ1 from "/src/Images/Wedding/weddingLJ_1.jpg";
import WeddingLJ10 from "/src/Images/Wedding/weddingLJ_10.jpg";
import WeddingLJ11 from "/src/Images/Wedding/weddingLJ_11.jpg";
import WeddingLJ2 from "/src/Images/Wedding/weddingLJ_2.jpg";
import WeddingLJ3 from "/src/Images/Wedding/weddingLJ_3.jpg";
import WeddingLJ4 from "/src/Images/Wedding/weddingLJ_4.jpg";
import WeddingLJ5 from "/src/Images/Wedding/weddingLJ_5.jpg";
import WeddingLJ6 from "/src/Images/Wedding/weddingLJ_6.jpg";
import WeddingLJ7 from "/src/Images/Wedding/weddingLJ_7.jpg";
import WeddingLJ8 from "/src/Images/Wedding/weddingLJ_8.jpg";
import WeddingLJ9 from "/src/Images/Wedding/weddingLJ_9.jpg";

import PricesRoute from "../../../Routes/PricesServices/Route";
import WeddingRoute from "../../../Routes/Wedding/Route";

export default {
  id: "wedding",
  title: "Bryllup",
  body: oneLine`
  La oss fange hvert øyeblikk av deres unike kjærlighetshistorie gjennom en bryllupsfotografering som er skreddersydd for akkurat dere. Fra de intime blikkene under vielsen til de hjertelige omfavnelsene på dansegulvet, vil jeg være der for å fange øyeblikkene med autentisk lidenskap og kreativitet. Med en blanding av naturlig lys og artistisk retning, skaper jeg tidløse bilder som reflekterer deres personlighet og den dype forbindelsen dere deler.
  `,
  cover: {
    url: Weddingah12,
    title: "Brudepar ute i snøen",
  },
  listing: {
    title: "Bryllupsfotografering",
    price: "Fra kr. 16.000,-",
    link: `/${PricesRoute}/${WeddingRoute}`,
  },
  shoots: [
    {
      description: "Bryllupsfotografering A + H",
      tags: ["bryllup", "seremoni", "bryllupsseremoni", "vinter"],
      images: [
        {
          url: Weddingah6,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah7,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah8,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah9,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah10,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah11,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah12,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah1,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah2,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah3,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah4,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah5,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah13,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah14,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah15,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah16,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah17,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah18,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah19,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingah20,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah21,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingah22,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-15-03",
    },
    {
      description: "Bryllupsfotografering L + J",
      tags: [
        "bryllup",
        "seremoni",
        "bryllupsseremoni",
        "rådhus",
        "rådhusbryllup",
      ],
      images: [
        {
          url: Weddingrt2,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt3,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt4,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt5,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt6,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt7,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt1,
          title: "Brudebukett",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt8,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt9,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt10,
          title: "Brudepar holder hender",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt11,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt12,
          title: "Bruden med gjester",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt13,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt14,
          title: "Brudepar",
          width: 1000,
          height: 667,
        },
        {
          url: Weddingrt15,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt16,
          title: "Brudgom i kirken",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt17,
          title: "Kirken",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt18,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt19,
          title: "Brudepar",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt20,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt21,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt22,
          title: "Ringene og brudebuketten",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt23,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt24,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },

        {
          url: Weddingrt26,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt25,
          title: "Ringene og brudebuketten",
          width: 667,
          height: 1000,
        },
        {
          url: Weddingrt27,
          title: "Brudeparet",
          width: 667,
          height: 1000,
        },
      ],
      date: "2023-07-07",
    },
    {
      description: "Bryllupsfotografering R + T",
      tags: ["bryllup", "seremoni", "bryllupsseremoni", "sommer"],
      images: [
        {
          url: WeddingLJ1,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ2,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ3,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ4,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ5,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ9,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },

        {
          url: WeddingLJ7,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ8,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ6,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ10,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
        {
          url: WeddingLJ11,
          title: "Brudepar på Oslo Rådhus",
          width: 667,
          height: 1000,
        },
      ],
      date: "2024-03-23",
    },
  ],
};

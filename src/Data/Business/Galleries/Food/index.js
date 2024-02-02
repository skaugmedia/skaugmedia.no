import { oneLine } from "common-tags";
import food_belgian_waffle_1 from "../../../../Images/Food/food_belgian_waffle_1.jpg";

import food_bread_1 from "../../../../Images/Food/food_bread_1.jpg";

import food_cakes_1 from "../../../../Images/Food/food_cakes_1.jpg";
import food_cakes_10 from "../../../../Images/Food/food_cakes_10.jpg";
import food_cakes_11 from "../../../../Images/Food/food_cakes_11.jpg";
import food_cakes_12 from "../../../../Images/Food/food_cakes_12.jpg";
import food_cakes_2 from "../../../../Images/Food/food_cakes_2.jpg";
import food_cakes_3 from "../../../../Images/Food/food_cakes_3.jpg";
import food_cakes_4 from "../../../../Images/Food/food_cakes_4.jpg";
import food_cakes_5 from "../../../../Images/Food/food_cakes_5.jpg";
import food_cakes_6 from "../../../../Images/Food/food_cakes_6.jpg";
import food_cakes_7 from "../../../../Images/Food/food_cakes_7.jpg";
import food_cakes_8 from "../../../../Images/Food/food_cakes_8.jpg";
import food_cakes_9 from "../../../../Images/Food/food_cakes_9.jpg";

import food_christmas_truffles_1 from "../../../../Images/Food/food_christmas_truffles_1.jpg";
import food_christmas_truffles_2 from "../../../../Images/Food/food_christmas_truffles_2.jpg";
import food_christmas_truffles_3 from "../../../../Images/Food/food_christmas_truffles_3.jpg";

import food_eggs_1 from "../../../../Images/Food/food_eggs_1.jpg";

import food_granola_1 from "../../../../Images/Food/food_granola_1.jpg";
import food_granola_2 from "../../../../Images/Food/food_granola_2.jpg";

import food_hotdogs_1 from "../../../../Images/Food/food_hotdogs_1.jpg";

import food_limonade_1 from "../../../../Images/Food/food_limonade_1.jpg";
import food_limonade_2 from "../../../../Images/Food/food_limonade_2.jpg";

import food_lunch_1 from "../../../../Images/Food/food_lunch_1.jpg";
import food_lunch_2 from "../../../../Images/Food/food_lunch_2.jpg";

import food_lunch_3 from "../../../../Images/Food/food_lunch_3.jpg";
import food_lunch_4 from "../../../../Images/Food/food_lunch_4.jpg";
import food_lunch_5 from "../../../../Images/Food/food_lunch_5.jpg";

import food_milk_berry_1 from "../../../../Images/Food/food_milk_berry_1.jpg";
import food_milk_berry_2 from "../../../../Images/Food/food_milk_berry_2.jpg";
import food_milk_berry_3 from "../../../../Images/Food/food_milk_berry_3.jpg";

import food_pasta_alforno_1 from "../../../../Images/Food/food_pasta_alforno_1.jpg";
import food_pasta_alforno_2 from "../../../../Images/Food/food_pasta_alforno_2.jpg";
import food_pasta_alforno_3 from "../../../../Images/Food/food_pasta_alforno_3.jpg";

import food_pasta_pesto_1 from "../../../../Images/Food/food_pasta_pesto_1.jpg";
import food_pasta_pesto_2 from "../../../../Images/Food/food_pasta_pesto_2.jpg";
import food_pasta_pesto_3 from "../../../../Images/Food/food_pasta_pesto_3.jpg";
import food_pasta_pesto_4 from "../../../../Images/Food/food_pasta_pesto_4.jpg";

import food_smoothie_1 from "../../../../Images/Food/food_smoothie_1.jpg";

import food_soup_1 from "../../../../Images/Food/food_soup_1.jpg";

import food_tomato_1 from "../../../../Images/Food/food_tomato_1.jpg";
import food_tomato_2 from "../../../../Images/Food/food_tomato_2.jpg";

import food_tomatosoup_1 from "../../../../Images/Food/food_tomatosoup_1.jpg";

import * as ids from "/src/Routes/PricesServices/Ids";
import PricesRoute from "/src/Routes/PricesServices/Route";

export default {
  id: "mat",
  title: "Mat",
  body: oneLine`
    Fotografering av mat er en helt egen kunst, som jeg har jobbet mye med å presisere og lære. Det er viktig
    at maten alltid ser innbydende ut.
  `,
  cover: {
    url: food_lunch_1,
    title: "Ciabatta med pesto, svinekjøtt og ost",
  },
  listing: {
    title: "Matfotografering",
    price: "Ta kontakt for pristilbud",
    link: `/${PricesRoute}#${ids.food}`,
  },
  shoots: [
    {
      description: "Pestopasta",
      tags: ["mat", "lys", "studiofotografering", "stilleben"],
      images: [
        {
          url: food_pasta_pesto_1,
          title: "Pestopasta",
          width: 677,
          height: 1000,
        },
        {
          url: food_pasta_pesto_2,
          title: "Pestopasta",
          width: 677,
          height: 1000,
        },
        {
          url: food_pasta_pesto_3,
          title: "Pestopasta",
          width: 677,
          height: 1000,
        },
        {
          url: food_pasta_pesto_4,
          title: "Pestopasta",
          width: 677,
          height: 1000,
        },
      ],
      date: "2023-06-09",
    },

    {
      description: "Egg",
      tags: ["mat", "moody", "stilleben"],
      images: [
        {
          url: food_eggs_1,
          title: "Egg",
          width: 467,
          height: 700,
        },
      ],
      date: "2016-04-15",
    },
    {
      description: "Kaker",
      tags: ["mat", "baking", "kake"],
      images: [
        {
          url: food_cakes_1,
          title: "Pasjonsfruktpai",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_2,
          title: "Appelsinformkake",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_3,
          title: "Blånærcupcakes",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_4,
          title: "Sjokolade, lakris og bringebærkake",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_5,
          title: "Sjokoladeknuter",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_6,
          title: "Bringebærsnurrer",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_7,
          title: "Pasjonsfrukt",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_8,
          title: "Blåbærmuffins",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_9,
          title: "Sjokolademuffins",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_10,
          title: "Fiken",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_11,
          title: "Red velvet kake",
          width: 467,
          height: 700,
        },
        {
          url: food_cakes_12,
          title: "Sjokoladekake med jordbær",
          width: 467,
          height: 700,
        },
      ],
      date: "2016-04-12",
    },

    {
      description: "Bær i melk",
      tags: ["mat", "bær"],
      images: [
        {
          url: food_milk_berry_1,
          title: "Bær i melk",
          width: 467,
          height: 700,
        },
        {
          url: food_milk_berry_2,
          title: "Bær i melk",
          width: 467,
          height: 700,
        },
        {
          url: food_milk_berry_3,
          title: "Bær i melk",
          width: 467,
          height: 700,
        },
      ],
      date: "2015-05-01",
    },

    {
      description: "Tomatsuppe",
      tags: ["mat", "middag", "moody"],
      images: [
        {
          url: food_tomatosoup_1,
          title: "Tomatsuppe",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-05-18",
    },
    {
      description: "Pasta al forno",
      tags: ["mat", "middag"],
      images: [
        {
          url: food_pasta_alforno_1,
          title: "Pasta al forno, på benken",
          width: 467,
          height: 700,
        },
        {
          url: food_pasta_alforno_2,
          title: "Pasta al forno",
          width: 467,
          height: 700,
        },
        {
          url: food_pasta_alforno_3,
          title: "Pasta al forno, ingredienser",
          height: 467,
          width: 700,
        },
      ],
      date: "2018-03-22",
    },

    {
      description: "Lemonade",
      tags: ["mat", "drikke"],
      images: [
        {
          url: food_limonade_1,
          title: "Lemonade",
          width: 700,
          height: 467,
        },
        {
          url: food_limonade_2,
          title: "Lemonade",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-06-17",
    },
    {
      description: "Stekte cherrytomater",
      tags: ["mat", "moody"],
      images: [
        {
          url: food_tomato_1,
          title: "Stekte cherrytomater",
          width: 467,
          height: 700,
        },
        {
          url: food_tomato_2,
          title: "Stekte cherrytomater",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-06-16",
    },
    {
      description: "Rødbetesalat",
      tags: ["mat", "moody"],
      images: [
        {
          url: food_lunch_5,
          title: "Rødbetesalat",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-06-16",
    },
    {
      description: "Reddiker på skiva",
      tags: ["mat", "moody"],
      images: [
        {
          url: food_lunch_3,
          title: "Reddik på skiva",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-06-16",
    },

    {
      description: "Belgisk vaffel",
      tags: ["mat", "baking"],
      images: [
        {
          url: food_belgian_waffle_1,
          title: "Belgisk vaffel",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-09-04",
    },
    {
      description: "Smoothie med bringebær og basilikum",
      tags: ["mat", "smoothie"],
      images: [
        {
          url: food_smoothie_1,
          title: "Smoothie med bringebær og basilikum",
          width: 467,
          height: 700,
        },
      ],
      date: "2017-01-06",
    },
    {
      description: "Stekt sopp",
      tags: ["mat", "middag"],
      images: [
        {
          url: food_lunch_4,
          title: "Stekt sopp",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-06-17",
    },
    {
      description: "Granola med bringebær",
      tags: ["mat", "smoothie"],
      images: [
        {
          url: food_granola_2,
          title: "Granola med bringebær, gresk yoghurt og pasjonsfrukt",
          width: 467,
          height: 700,
        },
        {
          url: food_granola_1,
          title: "Granola med bringebær, i melk",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-05-19",
    },
    {
      description: "Søtpotetsuppe",
      tags: ["mat", "middag"],
      images: [
        {
          url: food_soup_1,
          title: "Søtpotetsuppe",
          width: 467,
          height: 700,
        },
      ],
      date: "2018-05-18",
    },
    {
      description: "Pølser med tilbehør",
      tags: ["mat", "middag"],
      images: [
        {
          url: food_hotdogs_1,
          title: "Pølser med tilbehør",
          height: 467,
          width: 700,
        },
      ],
      date: "2018-05-18",
    },
    {
      description: "Ciabatta med pesto, svinekjøtt og ost",
      tags: ["mat", "middag"],
      images: [
        {
          url: food_lunch_1,
          title: "Ciabatta med pesto, svinekjøtt og ost",
          width: 700,
          height: 467,
        },
        {
          url: food_lunch_2,
          title: "Timian",
          width: 467,
          height: 700,
        },
      ],
      date: "2015-09-09",
    },
    {
      description: "Brød",
      tags: ["mat"],
      images: [
        {
          url: food_bread_1,
          title: "Brød",
          width: 700,
          height: 467,
        },
      ],
      date: "2015-08-06",
    },
    {
      description: "Sjokoladetrøfler",
      tags: ["mat", "sjokolade"],
      images: [
        {
          url: food_christmas_truffles_1,
          title: "Sjokolade",
          width: 467,
          height: 700,
        },
        {
          url: food_christmas_truffles_2,
          title: "Sjokoladetrøfler",
          width: 467,
          height: 700,
        },
        {
          url: food_christmas_truffles_3,
          title: "Stjerneanis",
          width: 467,
          height: 700,
        },
      ],
      date: "2015-11-12",
    },
  ],
};

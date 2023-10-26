import { oneLine } from "common-tags";
import SaftigLogoMockup from "./Images/saftig_logo_mockup.jpg";
import SaftigFrontpage from "./Images/saftig_1.jpg";
import SaftigSpreadRecipes from "./Images/saftig_2.jpg";
import SaftigStack from "./Images/saftig_3.jpg";
import SaftigSpreadRecipe from "./Images/saftig_4.jpg";
import SaftigTableofContents from "./Images/saftig_5.jpg";
import SaftigFrontBack from "./Images/saftig_6.jpg";
import SaftigSpreadAd from "./Images/saftig_7.jpg";
import SaftigSpreadStory from "./Images/saftig_8.jpg";

import SaftigFont1 from "./Fonts/dosis_extralight.jpg";
import SaftigFont2 from "./Fonts/dosis_light.jpg";
import SaftigFont3 from "./Fonts/dosis_regular.jpg";
import SaftigFont4 from "./Fonts/dosis_semibold.jpg";

import SaftigLogo from "./Logo/logo.jpg";

import SaftigSketch1 from "./Sketches/sketch1.jpg";
import SaftigSketch2 from "./Sketches/sketch2.jpg";
import SaftigSketch3 from "./Sketches/sketch3.jpg";
import SaftigSketch4 from "./Sketches/sketch4.jpg";
import SaftigSketch5 from "./Sketches/sketch5.jpg";
import SaftigSketch6 from "./Sketches/sketch6.jpg";

export default {
  id: "saftig",
  title: "Saftig",
  category: "Trykksaker",
  date: "2020-10-01",
  ingress: oneLine`
  Dette skoleprosjektet ble realisert under min tid ved Fagskolen Kristiania. Oppgaven 
  krevde utvikling av en helhetlig visuell identitet for et fiktivt magasin, som inkluderte 
  designelementer, en reportasje, reklameinnslag, og en innholdsfortegnelse. Magasinet, kalt 
  Saftig Bakemagasin, der jeg laget egne oppskriftssider, en reportasje om en hobbybaker. Gjennom 
  dette prosjektet fikk jeg utforske kreativt innhold og formgi en unik visuell identitet for magasinet.
  `,
  body: oneLine`
    I dette prosjektet er kun sort og hvit som en del av fargepaletten, jeg har valgt å trekke ut farger 
    fra ulike bilder for å skape en helhet, i stedet for å velge farger som skal gå igjen gjennom designet. 
    Jeg har valgt å bruke fonten Dosis, men for å variere det typografiske hierakiet har jeg brukt ulike fontstiler.
  `,
  cover: {
    url: SaftigFrontpage,
    title: "Saftig bakemagasin",
  },
  images: [
    {
      url: SaftigLogoMockup,
      title: "Saftig logo",
      width: 1000,
      height: 669,
    },
    {
      url: SaftigFrontpage,
      title: "Saftig bakemagasin",
      width: 1000,
      height: 669,
    },
    {
      url: SaftigSpreadRecipes,
      title: "Saftig oppskrifter",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigStack,
      title: "Saftig bakemagasin",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigSpreadRecipe,
      title: "Saftig oppskrift",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigTableofContents,
      title: "Saftig innholdsfortegnelse",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigFrontBack,
      title: "Saftig bakemagasin forside og bakside",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigSpreadAd,
      title: "Saftig Reklame",
      width: 1000,
      height: 667,
    },
    {
      url: SaftigSpreadStory,
      title: "Saftig reportasje",
      width: 1000,
      height: 667,
    },
  ],

  designElements: {
    fonts: [
      {
        url: SaftigFont1,
        title: "Dosis extralight",
        width: 250,
        height: 250,
      },
      {
        url: SaftigFont2,
        title: "Dosis light",
        width: 250,
        height: 250,
      },
      {
        url: SaftigFont3,
        title: "Dosis regular",
        width: 250,
        height: 250,
      },
      {
        url: SaftigFont4,
        title: "Dosis semibold",
        width: 250,
        height: 250,
      },
    ],
    logo: [
      {
        url: SaftigLogo,
        title: "Saftig bakemagasin logo",
        width: 250,
        height: 250,
      },
    ],
    colorPalette: [
      {
        hex: "#ffffff",
        rgb: {
          r: 255,
          g: 255,
          b: 255,
        },
      },

      {
        hex: "#000000",
        rgb: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    ],
    sketches: [
      {
        url: SaftigSketch1,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
      {
        url: SaftigSketch2,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
      {
        url: SaftigSketch3,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
      {
        url: SaftigSketch4,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
      {
        url: SaftigSketch5,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
      {
        url: SaftigSketch6,
        title: "Saftig skisser",
        width: 250,
        height: 250,
      },
    ],
  },
};

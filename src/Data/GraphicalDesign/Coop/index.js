import { oneLine } from "common-tags";

import CoopCans from "./Images/allboxes.jpg";
import CoopPattern1 from "./Images/pattern1.jpg";
import CoopPattern2 from "./Images/pattern2.jpg";
import CoopPattern3 from "./Images/pattern3.jpg";
import CoopBox1 from "./Images/box1.jpg";
import CoopBox2 from "./Images/box2.jpg";
import CoopBox3 from "./Images/box3.jpg";

import CoopFont1 from "./Fonts/font1.jpg";
import CoopFont2 from "./Fonts/font2.jpg";
import CoopFont3 from "./Fonts/font3.jpg";
import CoopFont4 from "./Fonts/font4.jpg";

import CoopSketch1 from "./Sketches/sketch1.jpg";
import CoopSketch2 from "./Sketches/sketch2.jpg";
import CoopSketch3 from "./Sketches/sketch3.jpg";

import CoopIllustration1 from "./Illustrations/illustrations1.jpg";
import CoopIllustration2 from "./Illustrations/illustrations2.jpg";
import CoopIllustration3 from "./Illustrations/illustrations3.jpg";

export default {
  id: "coop-hermetikk",
  title: "Coop hermetikk",
  category: "Redesign og matemballasje",
  date: "2020-05-01",
  ingress: oneLine`
  I en spennende skoleoppgave tok jeg utfordringen med å gi hermetikkbokser fra Coop's eget merke, Xtra,
   et moderne og lekent redesign. Målet var å gi hermetikkboksene en tidløs og innbydende estetikk som 
   appellerer til dagens forbrukere. Dette prosjektet har gitt meg muligheten til å utforske kreativiteten 
   min og gi et kjent produkt et friskt og spennende uttrykk.
  `,
  body: oneLine`
  Designet mitt har en variert fargepalett som inkluderer en rekke hovedfarger, sammen med flere ekstra 
  farger som brukes i forskjellige mønstre og elementer. I det typografiske hierarki har jeg implementert 
  fire ulike fonter. Disse brukes til å skape et variert hieraki. En viktig endring jeg har gjort er å 
  erstatte Xtra-logoen med Coops egen logo, som gir en mer autentisk følelse til designet.
  `,
  cover: {
    url: CoopCans,
    title: "Coop hermetikk",
  },
  images: [
    {
      url: CoopCans,
      title: "Coop redesign av hermetikk",
      height: 667,
      width: 1000,
    },
    {
      url: CoopBox1,
      title: "Coop redesign av hermetikk coctailbær",
      height: 667,
      width: 1000,
    },
    {
      url: CoopBox2,
      title: "Coop redesign av hermetikk ananasringer",
      height: 667,
      width: 1000,
    },
    {
      url: CoopBox3,
      title: "Coop redesign av hermetikk fersken",
      height: 667,
      width: 1000,
    },
    {
      url: CoopPattern1,
      title: "Coop mønster coctailbær",
      height: 667,
      width: 1000,
    },
    {
      url: CoopPattern2,
      title: "Coop mønster ananasringer",
      height: 667,
      width: 1000,
    },
    {
      url: CoopPattern3,
      title: "Coop mønster fersken",
      height: 667,
      width: 1000,
    },
  ],

  designElements: {
    fonts: [
      {
        url: CoopFont2,
        title: "Coop font D-DIN exp regular",
        height: 250,
        width: 250,
      },
      {
        url: CoopFont1,
        title: "Coop font D-DIN exp italic",
        height: 250,
        width: 250,
      },
      {
        url: CoopFont3,
        title: "Coop font D-DIN exp bold",
        height: 250,
        width: 250,
      },
      {
        url: CoopFont4,
        title: "Coop font JKS Handwriting",
        height: 250,
        width: 250,
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
        hex: "#ffd040",
        rgb: {
          r: 255,
          g: 208,
          b: 64,
        },
      },
      {
        hex: "#66c9ba",
        rgb: {
          r: 102,
          g: 201,
          b: 186,
        },
      },
      {
        hex: "#ffda00",
        rgb: {
          r: 255,
          g: 218,
          b: 0,
        },
      },
      {
        hex: "#f93549",
        rgb: {
          r: 249,
          g: 53,
          b: 73,
        },
      },
      {
        hex: "#feb0c0",
        rgb: {
          r: 254,
          g: 176,
          b: 192,
        },
      },
      {
        hex: "#c40d3c",
        rgb: {
          r: 196,
          g: 13,
          b: 60,
        },
      },
      {
        hex: "#ffc629",
        rgb: {
          r: 255,
          g: 198,
          b: 41,
        },
      },
      {
        hex: "#87e1d1",
        rgb: {
          r: 135,
          g: 225,
          b: 209,
        },
      },
      {
        hex: "#f5a800",
        rgb: {
          r: 245,
          g: 168,
          b: 0,
        },
      },
    ],
    sketches: [
      {
        url: CoopSketch1,
        title: "Coop skisser",
        height: 250,
        width: 250,
      },
      {
        url: CoopSketch2,
        title: "Coop skisser",
        height: 250,
        width: 250,
      },
      {
        url: CoopSketch3,
        title: "Coop skisser",
        height: 250,
        width: 250,
      },
    ],
    illustrations: [
      {
        url: CoopIllustration1,
        title: "Coop cocatilbær illustrasjoner",
        height: 250,
        width: 250,
      },
      {
        url: CoopIllustration2,
        title: "Coop ananasringer illustrasjoner",
        height: 250,
        width: 250,
      },
      {
        url: CoopIllustration3,
        title: "Coop fersken illustrasjoner",
        height: 250,
        width: 250,
      },
    ],
  },
};

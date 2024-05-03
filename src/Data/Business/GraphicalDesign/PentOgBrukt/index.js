import { oneLine } from "common-tags";
import signimg from "./Images/fasadeskilt.jpg";
import sign1img from "./Images/fasadeskilt_1.jpg";
import giftcard from "./Images/gavekort.jpg";
import openinghoursimg from "./Images/openinghours.jpg";
import poster1 from "./Images/plakat_1.jpg";
import poster2 from "./Images/plakat_2.jpg";
import bussinesscardimg from "./Images/visittkort.jpg";

import logomockup from "./Images/logo_mockup.jpg";
import webpage from "./Images/webside.jpg";
import webpage1 from "./Images/webside_1.jpg";

import PentogbruktFont1 from "./Fonts/clicker_script.jpg";
import PentogbruktFont2 from "./Fonts/quicksand_bold.jpg";
import PentogbruktFont3 from "./Fonts/quicksand_medium.jpg";
import PentogbruktFont4 from "./Fonts/quicksand_regular.jpg";

import PentogbruktLogo1 from "./Logo/logo_alternate.jpg";
import PentogbruktLogo2 from "./Logo/logo_main.jpg";
import PentogbruktLogo3 from "./Logo/logo_secondary.jpg";

import PentogbruktSketch1 from "./Sketches/sketch1.jpg";
import PentogbruktSketch2 from "./Sketches/sketch2.jpg";
import PentogbruktSketch3 from "./Sketches/sketch3.jpg";
import PentogbruktSketch4 from "./Sketches/sketch4.jpg";
import PentogbruktSketch5 from "./Sketches/sketch5.jpg";
import PentogbruktSketch6 from "./Sketches/sketch6.jpg";
import PentogbruktSketch7 from "./Sketches/sketch7.jpg";
import PentogbruktSketch8 from "./Sketches/sketch8.jpg";

export default {
  id: "pentogbrukt",
  title: "Pent og Brukt AS",
  category: "Visuell identitet",
  date: "2021-11-01",
  ingress: oneLine`
    Pent og Brukt AS er en liten og søt bruktbutikk som ligger på Kløfta, i Ullensaker kommune. Jeg fikk i oppgave å lage et enkelt og tidløst design til deres bedrift.
    Da veggene ble malt i fargen "Minty Breeze" før jeg fikk dette oppdraget, inspirerte fargen meg til å bruke nettopp denne fargen i det helhetlige designet, for å knytte
    sammen alle grafiske elementer, sammen med butikkens innside.
  `,
  body: oneLine`
    Pent og Brukt AS sitt design har en enkel fargepallett, to fonter inkludert- der den ene kun brukes i logoen, mens den andre brukes i forskjellige fontstiler, for å skape
    et typografisk hiearki. Designet inneholder også tre forskjellige logoer, som alle har flere av de samme elementene, men der de alle skiller seg litt fra hverandre.
  `,
  cover: {
    url: poster1,
    title: "Pent og Brukt stående skilt",
  },
  images: [
    {
      url: logomockup,
      title: "Logo",
      width: 1000,
      height: 669,
    },
    {
      url: giftcard,
      title: "Gavekort",
      width: 1000,
      height: 669,
    },
    {
      url: webpage,
      title: "Webside",
      width: 1000,
      heigh: 743,
    },
    {
      url: poster1,
      title: "Åpen bruktbutikk skilt",
      width: 1000,
      height: 667,
    },
    {
      url: poster2,
      title: "Parkering bak butikken",
      width: 1000,
      height: 667,
    },

    {
      url: bussinesscardimg,
      title: "Visittkort",
      height: 1000,
      width: 1000,
    },
    {
      url: openinghoursimg,
      title: "Åpningstider",
      width: 1000,
      height: 667,
    },

    {
      url: signimg,
      title: "Fasadeskilt",
      width: 1000,
      height: 667,
    },
    {
      url: webpage1,
      title: "Webside",
      width: 1000,
      height: 722,
    },
    {
      url: sign1img,
      title: "Fasadeskilt",
      width: 667,
      height: 1000,
    },
  ],

  designElements: {
    fonts: [
      {
        url: PentogbruktFont1,
        title: "Pent og Brukt Clicker Script",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktFont2,
        title: "Pent og Brukt Quicksand Bold",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktFont3,
        title: "Pent og Brukt Quicksand Medium",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktFont4,
        title: "Pent og Brukt Quicksand Regular",
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
        hex: "#deeced",
        rgb: {
          r: 222,
          g: 236,
          b: 237,
        },
      },
      {
        hex: "#b6ced0",
        rgb: {
          r: 182,
          g: 206,
          b: 208,
        },
      },
      {
        hex: "#91b6bb",
        rgb: {
          r: 145,
          g: 182,
          b: 187,
        },
      },
      {
        hex: "#7ca7ad",
        rgb: {
          r: 124,
          g: 167,
          b: 173,
        },
      },
      {
        hex: "#5D7D7F",
        rgb: {
          r: 93,
          g: 125,
          b: 127,
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
    logo: [
      {
        url: PentogbruktLogo1,
        title: "Pent og Brukt alternativ logo",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktLogo2,
        title: "Pent og Brukt hovedlogo",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktLogo3,
        title: "Pent og Brukt ekstra logo",
        height: 250,
        width: 250,
      },
    ],
    sketches: [
      {
        url: PentogbruktSketch1,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch2,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch3,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch4,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch5,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch6,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch7,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
      {
        url: PentogbruktSketch8,
        title: "Pent og Brukt skisser",
        height: 250,
        width: 250,
      },
    ],
  },
};

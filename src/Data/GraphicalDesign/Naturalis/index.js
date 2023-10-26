import { oneLine } from "common-tags";
import logomockup from "./Images/logo_mockup.jpg";
import letter from "./Images/brevpapir.jpg";
import desktop from "./Images/desktop.jpg";
import sign from "./Images/fasadeskilt.jpg";
import illustration from "./Images/illustrasjon.jpg";
import logo from "./Images/logo.jpg";
import responsive from "./Images/mobil.jpg";
import paperbag from "./Images/papirpose.jpg";
import box from "./Images/pappesker.jpg";
import postalia from "./Images/postalia.jpg";
import pricetag from "./Images/prislapper.jpg";
import windowsign from "./Images/skiltvindu.jpg";
import sketch from "./Images/skisser.jpg";
import thankyou from "./Images/takkforhandelen.jpg";
import typography from "./Images/typografi.jpg";
import cardbrown from "./Images/visittkort_brun.jpg";
import cardgreen from "./Images/visittkort_gronn.jpg";

import NaturalisFont1 from "./Fonts/font1.jpg";
import NaturalisFont2 from "./Fonts/font2.jpg";

import NaturalisIllustration1 from "./Illustrations/illustration1.jpg";
import NaturalisIllustration2 from "./Illustrations/illustration2.jpg";
import NaturalisIllustration3 from "./Illustrations/illustration3.jpg";
import NaturalisIllustration4 from "./Illustrations/illustration4.jpg";
import NaturalisIllustration5 from "./Illustrations/illustration5.jpg";
import NaturalisIllustration6 from "./Illustrations/illustration6.jpg";

import NaturalisLogo1 from "./Logo/logo_1.jpg";
import NaturalisLogo2 from "./Logo/logo_2.jpg";
import NaturalisLogo3 from "./Logo/logo_3.jpg";
import NaturalisLogo4 from "./Logo/logo_4.jpg";
import NaturalisLogo5 from "./Logo/logo_5.jpg";
import NaturalisLogo6 from "./Logo/logo_6.jpg";
import NaturalisLogo7 from "./Logo/logo_7.jpg";
import NaturalisLogo8 from "./Logo/logo_8.jpg";
import NaturalisLogo9 from "./Logo/logo_9.jpg";
import NaturalisLogo10 from "./Logo/logo_10.jpg";
import NaturalisLogo11 from "./Logo/logo_11.jpg";
import NaturalisLogo12 from "./Logo/logo_12.jpg";

import NaturalisSketch1 from "./Sketches/sketch1.jpg";
import NaturalisSketch2 from "./Sketches/sketch2.jpg";
import NaturalisSketch3 from "./Sketches/sketch3.jpg";
import NaturalisSketch4 from "./Sketches/sketch4.jpg";
import NaturalisSketch5 from "./Sketches/sketch5.jpg";
import NaturalisSketch6 from "./Sketches/sketch6.jpg";
import NaturalisSketch7 from "./Sketches/sketch7.jpg";
import NaturalisSketch8 from "./Sketches/sketch8.jpg";

export default {
  id: "naturalis",
  title: "Naturalis by Synne Wik",
  category: "Visuell identitet",
  date: "21-05-15",
  ingress: oneLine`
    Naturalis var et skoleprosjekt jeg laget mens jeg gikk på Fagskolen Kristiania. Oppgaven gikk ut på å lage en komplett visuell identitet inkludert en animasjon,
    webside både responsiv og for desktop, postalia, og alt annet som medfølger en slik type bedrift. Dette er altså en fiksjonell bedrift, for en interiørdesigner ved navn Synne Wik,
    som spesialiserer seg på bærekraftig interiørdesign, og bruker naturmaterialer i alle sine prosjekter. Hun er nå i ferd med å åpne sin egen butikk der hun selger interiør og
    dekor til bruk i hjemmet.
  `,
  body: oneLine`
  Fargepaletten i dette designprosjektet er en hyllest til naturens mangfold, der hver nyanse er inspirert av de naturlige elementene som omgir oss. Grafiske elementer og logoen i 
  designet er forankret i en dypt forankret forbindelse med naturen, noe som lett vises i hvert designelement. I tillegg til de varierte fargene, har vi innført en spesiell font med 
  to unike stiler – én som utgjør selve logoen og den andre som er en nøkkelkomponent i det typografiske hierarkiet. Dette skaper et design som ikke bare feirer, men også aktivt 
  fremmer den rike skjønnheten som naturen tilbyr.
  `,
  cover: {
    url: box,
    title: "Naturalis by Synne Wik esker",
  },
  images: [
    {
      url: logomockup,
      title: "Logo",
      height: 669,
      width: 1000,
    },
    {
      url: letter,
      title: "Brevpapir",
      height: 667,
      width: 1000,
    },
    {
      url: postalia,
      title: "Postalia",
      height: 667,
      width: 1000,
    },
    {
      url: desktop,
      title: "Webside",
      height: 667,
      width: 1000,
    },
    {
      url: responsive,
      title: "Webside mobil",
      height: 687,
      width: 1000,
    },

    {
      url: sign,
      title: "Fasadeskilt",
      height: 7,
      width: 1000,
    },
    {
      url: windowsign,
      title: "Vindusskilt",
      height: 667,
      width: 1000,
    },
    {
      url: paperbag,
      title: "Papirpose",
      height: 667,
      width: 1000,
    },
    {
      url: box,
      title: "Esker",
      height: 667,
      width: 1000,
    },
    {
      url: pricetag,
      title: "Prislapper",
      height: 752,
      width: 1000,
    },
    {
      url: thankyou,
      title: "Takk-for-handelen-kort",
      height: 661,
      width: 1000,
    },
    {
      url: cardbrown,
      title: "Visittkort brun",
      height: 667,
      width: 1000,
    },
    {
      url: cardgreen,
      title: "Visittkort grønn",
      height: 650,
      width: 1000,
    },
  ],
  designElements: {
    fonts: [
      {
        url: NaturalisFont1,
        title: "Thasadith bold",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisFont2,
        title: "Thasadith regular",
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
        hex: "#d7c6bd",
        rgb: {
          r: 215,
          g: 198,
          b: 198,
        },
      },
      {
        hex: "#79a17a",
        rgb: {
          r: 121,
          g: 161,
          b: 122,
        },
      },
      {
        hex: "#00582a",
        rgb: {
          r: 0,
          g: 88,
          b: 42,
        },
      },
      {
        hex: "#5a3b34",
        rgb: {
          r: 90,
          g: 59,
          b: 52,
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
        url: NaturalisLogo1,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo2,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo3,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo4,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo5,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo6,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo7,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo8,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo9,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo10,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo11,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisLogo12,
        title: "Naturalis logo",
        height: 250,
        width: 250,
      },
    ],
    sketches: [
      {
        url: NaturalisSketch1,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch2,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch3,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch4,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch5,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch6,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch7,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
      {
        url: NaturalisSketch8,
        title: "Naturalis skisser",
        height: 250,
        width: 250,
      },
    ],
  },
  graphicalElements: [
    {
      url: NaturalisIllustration1,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
    {
      url: NaturalisIllustration2,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
    {
      url: NaturalisIllustration3,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
    {
      url: NaturalisIllustration4,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
    {
      url: NaturalisIllustration5,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
    {
      url: NaturalisIllustration6,
      title: "Naturalis illustrasjon",
      height: 250,
      width: 250,
    },
  ],
};

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

export default {
  id: "naturalis",
  title: "Naturalis by Synne Wik",
  date: "21-05-15",
  ingress: oneLine`
    Naturalis var et skoleprosjekt jeg laget mens jeg gikk på Fagskolen Kristiania. Oppgaven gikk ut på å lage en komplett visuell identitet inkludert en animasjon, 
    webside både responsiv og for desktop, postalia, og alt annet som medfølger en slik type bedrift. Dette er altså en fiksjonell bedrift, for en interiørdesigner ved navn Synne Wik, 
    som spesialiserer seg på bærekraftig interiørdesign, og bruker naturmaterialer i alle sine prosjekter. Hun er nå i ferd med å åpne sin egen butikk der hun selger interiør og 
    dekor til bruk i hjemmet. 
  `,
  body: oneLine`
    Fargepaletten til Naturalis er i alle høyeste grad inspirert av naturen, og alle naturmaterialene vi kan finne utendørs i naturen. I form av de grafiske elementene og logoen til denne 
    bedriften, er det også enkelt å forstå at dette er et design som er inspirert av og som fremmer naturen. 
  `,
  cover: {
    url: logomockup,
    title: "Naturalis by Synne Wik",
  },
  images: [
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
      url: logomockup,
      title: "Logo",
      height: 669,
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
    fonts: typography,
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

    logo: logo,
    sketches: sketch,
  },
  graphicalElements: [
    {
      url: illustration,
      title: "Illustrasjoner",
      height: 750,
      width: 1000,
    },
  ],
};

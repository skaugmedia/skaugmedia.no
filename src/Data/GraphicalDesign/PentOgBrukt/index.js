import { oneLine } from "common-tags";
import pentogbrukt_logo from "../../../Images/pentogbrukt_logo.jpg";
import bussinesscardimg from "./Images/visittkort.jpg";
import openinghoursimg from "./Images/openinghours.jpg";
import openinghours1img from "./Images/openinghours_1.jpg";
import signimg from "./Images/fasadeskilt.jpg";
import sign1img from "./Images/fasadeskilt_1.jpg";
import colorpalette from "./Images/fargepalett.jpg";
import typography from "./Images/typografi.jpg";
import logo from "./Images/logo.jpg";
import logomockup from "./Images/logo_mockup.jpg";
import webpage from "./Images/webside.jpg";
import webpage1 from "./Images/webside_1.jpg";
import sketch from "./Images/skisser.jpg";

export default {
  id: "pent-og-brukt-as",
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
    url: pentogbrukt_logo,
    title: "Pent og Brukt logo",
  },
  images: [
    {
      url: logomockup,
      title: "Logo",
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
      url: webpage1,
      title: "Webside",
      width: 1000,
      height: 722,
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
      url: openinghours1img,
      title: "Åpningstider",
      width: 667,
      height: 1000,
    },
    {
      url: signimg,
      title: "Fasadeskilt",
      width: 1000,
      height: 667,
    },
    {
      url: sign1img,
      title: "Fasadeskilt",
      width: 667,
      height: 1000,
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
};

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

export default {
  id: "pent-og-brukt-as",
  title: "Pent og Brukt AS",
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
    },
    {
      url: webpage,
      title: "Webside",
    },
    {
      url: webpage1,
      title: "Webside",
    },
    {
      url: bussinesscardimg,
      title: "Visittkort",
    },
    {
      url: openinghoursimg,
      title: "Åpningstider",
    },
    {
      url: openinghours1img,
      title: "Åpningstider",
    },
    {
      url: signimg,
      title: "Fasadeskilt",
    },
    {
      url: sign1img,
      title: "Fasadeskilt",
    },
  ],
  designElements: {
    fonts: typography,
    colorPalette: colorpalette,
    logo: logo,
  },
};

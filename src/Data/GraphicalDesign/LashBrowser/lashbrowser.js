import { oneLine } from "common-tags";
import lashbrowser_logo from "../../Images/lashbrowser_logo.jpg";
import giftcard from "./Images/gavekort.jpg";
import giveaway from "./Images/webside_1.jpg";
import instagramicon from "./Images/instagram.jpg";
import instagram from "./Images/instagram_1.jpg";
import logo from "./Images/logo.jpg";
import pattern from "./Images/pattern.jpg";
import poster from "./Images/plakat.jpg";
import pricelist from "./Images/prisliste.jpg";
import typography from "./Images/typografi.jpg";
import card from "./Images/visittkort.jpg";
import logomockup from "./Images/logo_mockup.jpg";
import sketch from "./Images/skisser.jpg";

export default {
  id: "lashbrowser",
  title: "LashBrowser",
  date: "2023-01-30",
  ingress: oneLine`
    LashBrowser er en bedrift som utfører Brynslaminering, Vippeløft, Make-up og andre ting innen vipper og bryn. Bedriften var opptatt av å få 
    frem essensen av hva de jobber med, derfor var det naturlig å bruke vipper og bryn i logoen og designet generelt. Ved utvidelse til egen salong, 
    trengte bedriften ulike forskjellige design knyttet til åpning av salong og å drive en bedrift. LashBrowser fokuserer mye av sin markedsføring gjennom 
    sosiale medier, og har derfor hatt behov for flere maler og lignende til bruk på Instagram. 
  `,
  body: oneLine`
    Fargepaletten til LashBrowser, er inspirert av personen bak bedriften, men ikke helt tro til inspirasjonsfargene. Dette er en dame med bein i nesa, som har 
    blått hår, blå bil og blå behandlingsbenk, hun elsker blått, grønt og gull- som til en viss grad synes gjennom bedriftens design. 
  `,
  cover: {
    url: lashbrowser_logo,
    title: "LashBrowser logo",
  },
  images: [
    {
      url: giftcard,
      title: "Gavekort",
      height: 667,
      width: 1000,
    },
    {
      url: giveaway,
      title: "Giveaway mal til Instagram",
      height: 1000,
      width: 1000,
    },
    {
      url: instagram,
      title: "Instagram",
      height: 667,
      width: 1000,
    },
    {
      url: logomockup,
      title: "Logo",
      height: 669,
      width: 1000,
    },
    {
      url: poster,
      title: "Plakat",
      height: 667,
      width: 1000,
    },
    {
      url: pricelist,
      title: "Prisliste",
      height: 667,
      width: 1000,
    },
    {
      url: card,
      title: "Visittkort",
      height: 1000,
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
        hex: "#becec8",
        rgb: {
          r: 190,
          g: 206,
          b: 200,
        },
      },
      {
        hex: "#9ecca9",
        rgb: {
          r: 158,
          g: 204,
          b: 169,
        },
      },
      {
        hex: "#55ceab",
        rgb: {
          r: 85,
          g: 206,
          b: 171,
        },
      },
      {
        hex: "#2e7f66",
        rgb: {
          r: 46,
          g: 127,
          b: 102,
        },
      },
      {
        hex: "#969448",
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

    logo: logo,
    sketches: sketch,
  },
  graphicalElements: [
    {
      url: pattern,
      title: "Mønster",
      height: 750,
      width: 1000,
    },
    {
      url: instagramicon,
      title: "Knapper til Instagram highlights",
      height: 750,
      width: 1000,
    },
  ],
};

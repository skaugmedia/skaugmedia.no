import { oneLine } from "common-tags";

import KiehlsFrontpage from "./Images/kiehls_frontpage.jpg";
import KiehlsAbout from "./Images/kiehls_about.jpg";
import KiehlsButton from "./Images/kiehls_button.jpg";
import KiehlsNews from "./Images/kiehls_news.jpg";
import KiehlsProductPage from "./Images/kiehls_product_page.jpg";
import KiehlsProducts from "./Images/products.jpg";

import KiehlsLogo from "./Logo/logo.jpg";

import KiehlsFont1 from "./Fonts/font1.jpg";
import KiehlsFont2 from "./Fonts/font2.jpg";
import KiehlsFont3 from "./Fonts/font3.jpg";

import KiehlsSketch1 from "./Sketches/sketch1.png";
import KiehlsSketch2 from "./Sketches/sketch2.png";
import KiehlsSketch3 from "./Sketches/sketch3.png";

export default {
  id: "kiehls",
  title: "Kiehls",
  category: "UX-design",
  date: "2020-10-01",
  ingress: oneLine`
Dette prosjektet var en betydningsfull oppgave jeg utviklet mens jeg var student ved Fagskolen Kristiania. 
Oppgaven innebar å redesigne Kiehl's håndkremserie og skape to nye produkter for samme serie, samt utvikle 
en helhetlig visuell identitet og et responsivt nettsted ved hjelp av HTML og CSS. Dette prosjektet ga meg 
muligheten til å utforske digitalt design på en utfordrende og spennende måte, og jeg valgte å gi produktene
 et luksuriøst uttrykk som reflekterte Kiehl's omsorg for kvalitet og velvære.
  `,
  body: oneLine`
  I designprosessen for håndkremprodukter og den tilhørende nettsiden har jeg nøye satt sammen en
   fargepalett som utstråler friskhet og vitalitet. Jeg har valgt friske og sterke farger for å formidle
    en følelse av energi og omsorg. I tillegg har jeg brukt ulike fontstørrelser for å variere hierarkiet,
     der den ene skrifttypen er dedikert til logoen, og den andre brukes for å fremheve viktig informasjon
      på nettsiden. Dette designet skaper visuelt mangfold og gir et dynamisk uttrykk som reflekterer mitt
       fokus på kvalitet og omsorg for huden.
  `,
  cover: {
    url: KiehlsFrontpage,
    title: "Kiehls forside",
  },
  images: [
    {
      url: KiehlsFrontpage,
      title: "Kiehls hjemside",
      height: 667,
      width: 1000,
    },
    {
      url: KiehlsAbout,
      title: "Kiehls om oss side",
      height: 667,
      width: 1000,
    },
    {
      url: KiehlsButton,
      title: "Kiehls call to action knapp",
      height: 667,
      width: 1000,
    },
    {
      url: KiehlsNews,
      title: "Kiehls nyheter",
      height: 667,
      width: 1000,
    },
    {
      url: KiehlsProductPage,
      title: "Kiehls produktside",
      height: 667,
      width: 1000,
    },
    {
      url: KiehlsProducts,
      title: "Kiehls produkter",
      height: 667,
      width: 1000,
    },
  ],

  designElements: {
    fonts: [
      {
        url: KiehlsFont1,
        title: "Kiehls font Dosis light",
        height: 250,
        width: 250,
      },
      {
        url: KiehlsFont2,
        title: "Kiehls font Dosis regular",
        height: 250,
        width: 250,
      },
      {
        url: KiehlsFont3,
        title: "Kiehls font Dosis semibold",
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
        hex: "#1fc2c5",
        rgb: {
          r: 31,
          g: 194,
          b: 197,
        },
      },
      {
        hex: "#ff872f",
        rgb: {
          r: 255,
          g: 135,
          b: 47,
        },
      },
      {
        hex: "#ffa767",
        rgb: {
          r: 255,
          g: 167,
          b: 103,
        },
      },
      {
        hex: "#fd5c5c",
        rgb: {
          r: 253,
          g: 92,
          b: 92,
        },
      },
      {
        hex: "#c0d89b",
        rgb: {
          r: 192,
          g: 216,
          b: 155,
        },
      },
      {
        hex: "#f54f96",
        rgb: {
          r: 245,
          g: 79,
          b: 150,
        },
      },
      {
        hex: "#ffa5cb",
        rgb: {
          r: 255,
          g: 165,
          b: 203,
        },
      },
    ],
    logo: [
      {
        url: KiehlsLogo,
        title: "Kiehls logo",
        height: 250,
        width: 250,
      },
    ],
    sketches: [
      {
        url: KiehlsSketch1,
        title: "Kiehls skisser",
        height: 250,
        width: 250,
      },
      {
        url: KiehlsSketch2,
        title: "Kiehls skisser",
        height: 250,
        width: 250,
      },
      {
        url: KiehlsSketch3,
        title: "Kiehls skisser",
        height: 250,
        width: 250,
      },
    ],
  },
};

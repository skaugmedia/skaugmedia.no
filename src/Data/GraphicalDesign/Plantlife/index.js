import { oneLine } from "common-tags";
import PlantlifeLogo from "./Images/plantlife_logo_mockup.jpg";
import PlantlifeHomepage from "./Images/homepage.jpg";

export default {
  id: "plantlife",
  title: "Plantlife",
  category: "UX-design",
  date: "2020-09-01",
  ingress: oneLine`
   
  `,
  body: oneLine`
    
  `,
  cover: {
    url: PlantlifeHomepage,
    title: "Plantlife homepage",
  },
  images: [
    {
      url: PlantlifeLogo,
      title: "Logo",
      width: 1000,
      height: 669,
    },
  ],

  designElements: {
    fonts: [],
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
  },
};

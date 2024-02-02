import { oneLine } from "common-tags";

import Popsicles from "./Images/popsicles.jpg";
import Elephant from "./Images/elephant.jpg";
import Giraffe from "./Images/giraffe.jpg";
import GIF from "./Images/animated_giraffe.gif";

import Illustration1 from "./Illustrations/illustration1.jpg";
import Illustration2 from "./Illustrations/illustration2.jpg";
import Illustration3 from "./Illustrations/illustration3.jpg";

export default {
  id: "illustrasjoner",
  title: "Illustrasjoner",
  category: "Illustrasjoner",
  date: "2020-05-01",
  ingress: oneLine`
  Jeg fikk gleden av å skape sjarmerende barneillustrasjoner for et spennende 
  prosjekt med barnerom. Inspirert av det lekne og fantasifulle universet til 
  barndommen, har jeg utviklet et tidløst design som gir barnerommet en unik 
  atmosfære. Med detaljer inspirert av barnas nysgjerrighet og kreativitet, har 
  jeg sørget for at designet knytter seg sømløst til rommets innredning, og 
  gir det en varm og sjarmerende følelse.
  `,
  body: oneLine`
    
  `,
  cover: {
    url: Popsicles,
    title: "Illustrasjoner av ispinner",
  },
  images: [
    {
      url: Popsicles,
      title: "Illustrasjoner av ispinner",
      height: 667,
      width: 1000,
    },
    {
      url: Elephant,
      title: "Illustrasjon av en elefant",
      height: 1000,
      width: 667,
    },
    {
      url: Giraffe,
      title: "Illustrasjon av en giraff",
      height: 1000,
      width: 667,
    },
    {
      url: GIF,
      title: "Animasjon av en illustrasjon av en giraff",
      height: 1000,
      width: 1000,
    },
  ],

  graphicalElements: [
    {
      url: Illustration1,
      title: "Illustrasjon av ispinner",
      height: 250,
      width: 250,
    },
    {
      url: Illustration2,
      title: "Illustrasjon av en elefant",
      height: 250,
      width: 250,
    },
    {
      url: Illustration3,
      title: "Illustrasjon av giraff",
      height: 250,
      width: 250,
    },
  ],
};

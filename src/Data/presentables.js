import { shuffle } from "fast-shuffle";
import LashBrowser from "./GraphicalDesign/LashBrowser";
import Naturalis from "./GraphicalDesign/Naturalis";
import PentOgBrukt from "./GraphicalDesign/PentOgBrukt";
import Confirmation from "./Photography/Confirmation";
import Engagement from "./Photography/Engagement";
import Family from "./Photography/Family";
import Food from "./Photography/Food";
import Kids from "./Photography/Kids";
import Mommyandme from "./Photography/Mommyandme";
import Newborn from "./Photography/Newborn";
import Portrait from "./Photography/Portrait";
import Pregnant from "./Photography/Pregnant";
import Product from "./Photography/Product";
import GraphicalDesignRoute from "/src/Routes/GraphicalDesign/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

const rawPhotography = [
  {
    image: Confirmation.shoots[1].images[5],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[2].images[5],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[0].images[4],
    category: Confirmation,
  },
  {
    image: Engagement.shoots[0].images[0],
    category: Engagement,
  },
  {
    image: Engagement.shoots[1].images[0],
    category: Engagement,
  },
  {
    image: Newborn.shoots[1].images[3],
    category: Newborn,
  },
  {
    image: Newborn.shoots[0].images[2],
    category: Newborn,
  },
  {
    image: Family.shoots[0].images[8],
    category: Family,
  },
  {
    image: Food.shoots[0].images[1],
    category: Food,
  },
  {
    image: Kids.shoots[1].images[2],
    category: Kids,
  },
  {
    image: Mommyandme.shoots[0].images[0],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[1].images[0],
    category: Mommyandme,
  },
  {
    image: Portrait.shoots[0].images[0],
    category: Portrait,
  },
  {
    image: Pregnant.shoots[1].images[0],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[2].images[0],
    category: Pregnant,
  },
  {
    image: Product.shoots[1].images[0],
    category: Product,
  },
  {
    image: Product.shoots[0].images[5],
    category: Product,
  },
  {
    image: Product.shoots[0].images[7],
    category: Product,
  },
  {
    image: Product.shoots[2].images[2],
    category: Product,
  },
].map(({ image, category }) => ({
  title: category.title,
  url: `/${PhotographyRoute}/${category.id}`,
  thumbnail: image.thumbnail,
  img: image,
}));
export const photography = shuffle(rawPhotography).slice(0, 5);

const graphicalDesign = [
  {
    image: LashBrowser.images[1],
    project: LashBrowser,
  },
  {
    image: Naturalis.images[0],
    project: Naturalis,
  },
  {
    image: Naturalis.images[2],
    project: Naturalis,
  },
  {
    image: Naturalis.images[4],
    project: Naturalis,
  },
  {
    image: LashBrowser.images[0],
    project: LashBrowser,
  },
  {
    image: LashBrowser.images[5],
    project: LashBrowser,
  },
  {
    image: PentOgBrukt.images[0],
    project: PentOgBrukt,
  },
  {
    image: PentOgBrukt.images[2],
    project: PentOgBrukt,
  },
  {
    image: PentOgBrukt.images[8],
    project: PentOgBrukt,
  },
].map(({ image, project }) => ({
  title: project.title,
  url: `/${GraphicalDesignRoute}/${project.id}`,
  thumbnail: image.thumbnail,
  img: image,
}));
const shuffledGraphicalDesign = shuffle(graphicalDesign).slice(0, 3);
export { shuffledGraphicalDesign as graphicalDesign };

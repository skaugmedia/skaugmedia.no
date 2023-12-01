import { shuffle } from "fast-shuffle";
import Coop from "./GraphicalDesign/Coop";
import Illustrasjoner from "./GraphicalDesign/Illustrasjoner";
import Kiehls from "./GraphicalDesign/Kiehls";
import LashBrowser from "./GraphicalDesign/LashBrowser";
import Naturalis from "./GraphicalDesign/Naturalis";
import PentOgBrukt from "./GraphicalDesign/PentOgBrukt";
import Plantlife from "./GraphicalDesign/Plantlife";
import Saftig from "./GraphicalDesign/Saftig";
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
import Realestate from "./Photography/Realestate";
import Wedding from "./Photography/Wedding";
import GraphicalDesignRoute from "/src/Routes/GraphicalDesign/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

const rawPhotography = [
  {
    image: Confirmation.shoots[0].images[4],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[0].images[1],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[1].images[4],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[1].images[6],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[2].images[5],
    category: Confirmation,
  },
  {
    image: Confirmation.shoots[2].images[1],
    category: Confirmation,
  },

  {
    image: Engagement.shoots[0].images[0],
    category: Engagement,
  },
  {
    image: Engagement.shoots[0].images[5],
    category: Engagement,
  },
  {
    image: Engagement.shoots[1].images[0],
    category: Engagement,
  },
  {
    image: Engagement.shoots[1].images[5],
    category: Engagement,
  },

  {
    image: Newborn.shoots[0].images[2],
    category: Newborn,
  },
  {
    image: Newborn.shoots[0].images[6],
    category: Newborn,
  },
  {
    image: Newborn.shoots[1].images[4],
    category: Newborn,
  },
  {
    image: Newborn.shoots[1].images[2],
    category: Newborn,
  },
  {
    image: Newborn.shoots[1].images[5],
    category: Newborn,
  },

  {
    image: Family.shoots[0].images[3],
    category: Family,
  },
  {
    image: Family.shoots[0].images[5],
    category: Family,
  },
  {
    image: Family.shoots[1].images[2],
    category: Family,
  },
  {
    image: Family.shoots[1].images[4],
    category: Family,
  },
  {
    image: Family.shoots[2].images[1],
    category: Family,
  },
  {
    image: Family.shoots[2].images[8],
    category: Family,
  },

  {
    image: Kids.shoots[0].images[0],
    category: Kids,
  },
  {
    image: Kids.shoots[0].images[1],
    category: Kids,
  },
  {
    image: Kids.shoots[1].images[1],
    category: Kids,
  },
  {
    image: Kids.shoots[1].images[5],
    category: Kids,
  },
  {
    image: Kids.shoots[2].images[1],
    category: Kids,
  },
  {
    image: Kids.shoots[3].images[0],
    category: Kids,
  },
  {
    image: Kids.shoots[2].images[1],
    category: Kids,
  },
  {
    image: Kids.shoots[6].images[1],
    category: Kids,
  },
  {
    image: Kids.shoots[7].images[0],
    category: Kids,
  },

  {
    image: Mommyandme.shoots[0].images[0],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[0].images[3],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[1].images[0],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[1].images[3],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[2].images[2],
    category: Mommyandme,
  },
  {
    image: Mommyandme.shoots[3].images[2],
    category: Mommyandme,
  },

  {
    image: Portrait.shoots[0].images[1],
    category: Portrait,
  },
  {
    image: Portrait.shoots[1].images[2],
    category: Portrait,
  },
  {
    image: Portrait.shoots[2].images[1],
    category: Portrait,
  },
  {
    image: Portrait.shoots[2].images[5],
    category: Portrait,
  },

  {
    image: Pregnant.shoots[0].images[3],
    category: Pregnant,
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
    image: Pregnant.shoots[2].images[3],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[3].images[4],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[4].images[2],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[5].images[1],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[5].images[3],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[6].images[1],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[6].images[4],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[7].images[0],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[7].images[6],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[7].images[11],
    category: Pregnant,
  },
  {
    image: Pregnant.shoots[8].images[3],
    category: Pregnant,
  },

  {
    image: Wedding.shoots[0].images[1],
    category: Wedding,
  },
  {
    image: Wedding.shoots[0].images[4],
    category: Wedding,
  },
  {
    image: Wedding.shoots[0].images[10],
    category: Wedding,
  },

  {
    image: Food.shoots[0].images[1],
    category: Food,
  },
  {
    image: Food.shoots[1].images[0],
    category: Food,
  },

  {
    image: Product.shoots[0].images[1],
    category: Product,
  },
  {
    image: Product.shoots[0].images[10],
    category: Product,
  },
  {
    image: Product.shoots[0].images[20],
    category: Product,
  },
  {
    image: Product.shoots[2].images[2],
    category: Product,
  },
  {
    image: Product.shoots[3].images[5],
    category: Product,
  },
  {
    image: Product.shoots[9].images[0],
    category: Product,
  },
  {
    image: Product.shoots[9].images[4],
    category: Product,
  },
  {
    image: Product.shoots[10].images[5],
    category: Product,
  },
  {
    image: Product.shoots[10].images[4],
    category: Product,
  },
  {
    image: Product.shoots[10].images[8],
    category: Product,
  },

  {
    image: Realestate.shoots[0].images[1],
    category: Realestate,
  },
  {
    image: Realestate.shoots[1].images[0],
    category: Realestate,
  },
  {
    image: Realestate.shoots[2].images[1],
    category: Realestate,
  },
  {
    image: Realestate.shoots[3].images[2],
    category: Realestate,
  },
].map(({ image, category }) => ({
  title: category.title,
  url: `/${PhotographyRoute}/${category.id}`,
  thumbnail: image.thumbnail,
  img: image,
  category: category.title,
}));
export const photography = shuffle(rawPhotography).slice(0, 5);

const graphicalDesign = [
  {
    image: Coop.images[0],
    project: Coop,
  },
  {
    image: Coop.images[1],
    project: Coop,
  },
  {
    image: Coop.images[2],
    project: Coop,
  },
  {
    image: Coop.images[3],
    project: Coop,
  },

  {
    image: Illustrasjoner.images[0],
    project: Illustrasjoner,
  },

  {
    image: Kiehls.images[0],
    project: Kiehls,
  },
  {
    image: Kiehls.images[1],
    project: Kiehls,
  },
  {
    image: Kiehls.images[3],
    project: Kiehls,
  },
  {
    image: Kiehls.images[4],
    project: Kiehls,
  },

  {
    image: Saftig.images[1],
    project: Saftig,
  },

  {
    image: Saftig.images[3],
    project: Saftig,
  },
  {
    image: Saftig.images[4],
    project: Saftig,
  },
  {
    image: Saftig.images[6],
    project: Saftig,
  },

  {
    image: Plantlife.images[1],
    project: Plantlife,
  },
  {
    image: Plantlife.images[4],
    project: Plantlife,
  },
  {
    image: Plantlife.images[5],
    project: Plantlife,
  },

  {
    image: Naturalis.images[0],
    project: Naturalis,
  },
  {
    image: Naturalis.images[1],
    project: Naturalis,
  },
  {
    image: Naturalis.images[2],
    project: Naturalis,
  },
  {
    image: Naturalis.images[3],
    project: Naturalis,
  },
  {
    image: Naturalis.images[4],
    project: Naturalis,
  },
  {
    image: Naturalis.images[8],
    project: Naturalis,
  },
  {
    image: Naturalis.images[9],
    project: Naturalis,
  },
  {
    image: Naturalis.images[11],
    project: Naturalis,
  },

  {
    image: LashBrowser.images[0],
    project: LashBrowser,
  },
  {
    image: LashBrowser.images[1],
    project: LashBrowser,
  },
  {
    image: LashBrowser.images[3],
    project: LashBrowser,
  },
  {
    image: LashBrowser.images[4],
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
    image: PentOgBrukt.images[1],
    project: PentOgBrukt,
  },
  {
    image: PentOgBrukt.images[2],
    project: PentOgBrukt,
  },
  {
    image: PentOgBrukt.images[6],
    project: PentOgBrukt,
  },
  {
    image: PentOgBrukt.images[7],
    project: PentOgBrukt,
  },
].map(({ image, project }) => ({
  title: project.title,
  url: `/${GraphicalDesignRoute}/${project.id}`,
  thumbnail: image.thumbnail,
  img: image,
  category: project.title,
}));
const shuffledGraphicalDesign = shuffle(graphicalDesign).slice(0, 3);
export { shuffledGraphicalDesign as graphicalDesign };

import Confirmation from "./Photography/Confirmation";
import Engagement from "./Photography/Engagement";
import LashBrowser from "./GraphicalDesign/LashBrowser";
import Naturalis from "./GraphicalDesign/Naturalis";
import GraphicalDesignRoute from "/src/Routes/GraphicalDesign/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

export const photography = [
  {
    image: Confirmation.shoots[1].images[0],
    category: Confirmation,
  },
  {
    image: Engagement.shoots[0].images[0],
    category: Engagement,
  },
].map(({ image, category }) => ({
  title: category.title,
  url: `/${PhotographyRoute}/${category.id}`,
  thumbnail: image.thumbnail,
  img: image,
}));

export const graphicalDesign = [
  {
    image: LashBrowser.images[0],
    project: LashBrowser,
  },
  {
    image: Naturalis.images[3],
    project: Naturalis,
  },
].map(({ image, project }) => ({
  title: project.title,
  url: `/${GraphicalDesignRoute}/${project.id}`,
  thumbnail: image.thumbnail,
  img: image,
}));

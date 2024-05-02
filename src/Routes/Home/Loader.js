import businessPricesRoute from "../BusinessPrices/Route";
import designRoute from "../DesignInfo/Route";
import photoRoute from "../Photography/Route";
import { projects } from "/src/Data/Business/GraphicalDesign";
import { categories } from "/src/Data/Photography";
import { byDate } from "/src/utils";

export default function Loader() {
  const shouldNotHideFromRecentWorks = (work) => !work.hideFromRecentWorks;
  const shoots = categories.flatMap((category) =>
    category.shoots.map((shoot) => ({
      url: `${photoRoute}/${category.id}`,
      date: shoot.date,
      thumbnail: shoot.thumbnail,
      img: shoot.images[0],
      title: shoot.description,
      category: category.title,
      hideFromRecentWorks: shoot.hideFromRecentWorks,
    })),
  );

  const projs = projects.map((project) => ({
    date: project.date,
    url: `${businessPricesRoute}/${designRoute}/${project.id}`,
    thumbnail: project.thumbnail,
    img: project.cover,
    title: project.title,
    category: project.category,
    hideFromRecentWorks: project.hideFromRecentWorks,
  }));

  const recentWorks = shoots
    .concat(projs)
    .filter(shouldNotHideFromRecentWorks)
    .sort(byDate)
    .slice(0, 4);
  return { recentWorks };
}

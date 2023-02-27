import { categories } from "/src/Data/Photography";
import { projects } from "/src/Data/GraphicalDesign";
import photoRoute from "../Photography/Route";
import designRoute from "../GraphicalDesign/Route";
import { byDate } from "/src/util";

export default function Loader() {
  const shoots = categories.flatMap((category) =>
    category.shoots.map((shoot) => ({
      url: `${photoRoute}/${category.id}`,
      date: shoot.date,
      img: shoot.images[0],
      title: shoot.description,
      category: category.title,
    }))
  );

  const projs = projects.map((project) => ({
    date: project.date,
    url: `${designRoute}/${project.id}`,
    img: project.cover,
    title: project.title,
    category: project.category,
  }));

  const recentWorks = shoots.concat(projs).sort(byDate).slice(0, 4);
  return { recentWorks };
}

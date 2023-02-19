import { categories } from "../../Data/Photography";

export default ({ params }) => {
  const category = categories.find((x) => x.id === params.categoryId);
  return { category };
};

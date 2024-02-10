import { galleries } from "../../Data/Business/Galleries";
import { categories } from "../../Data/Photography";

export default (isBusiness) =>
  ({ params }) => {
    if (isBusiness) {
      const category = galleries.find((x) => x.id === params.categoryId);
      return { category };
    }
    const category = categories.find((x) => x.id === params.categoryId);
    return { category };
  };

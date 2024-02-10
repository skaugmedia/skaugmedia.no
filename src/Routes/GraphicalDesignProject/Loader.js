import { projects } from "../../Data/Business/GraphicalDesign";

export default ({ params }) => {
  const project = projects.find((x) => x.id === params.projectId);
  return { project };
};

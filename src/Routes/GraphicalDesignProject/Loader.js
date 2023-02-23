import { projects } from "../../Data/GraphicalDesign";

export default ({ params }) => {
  const project = projects.find((x) => x.id === params.projectId);
  return { project };
};

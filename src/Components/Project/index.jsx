import project from "../Project/Project.module.css";

export function Project(props) {
  const img = props.cover;
  const plural = props.images.length === 1 ? "bilde" : "bilder";
  return (
    <div className={`${project.main} ${props.className}`}>
      <img className={project.image} src={img.url} alt={img.title}></img>
      <h3 className={project.title}>{props.title}</h3>
      <div className={project.count}>
        {props.images.length} {plural}
      </div>
    </div>
  );
}

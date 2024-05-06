import classes from "../Project/Project.module.css";

export const Project = ({ className, cover, title }) => (
  <div className={`${classes.main} ${className}`}>
    <img className={classes.image} src={cover.url} alt={cover.title}></img>
    <h3 className={classes.title}>{title}</h3>
  </div>
);

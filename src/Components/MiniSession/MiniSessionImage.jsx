import classNames from "classnames";
import classes from "./MiniSession.module.css";

export function MiniSessionImage({ src, className, alt, ...props }) {
  return (
    <img
      className={classNames(classes.image, className)}
      src={src}
      alt={alt}
      {...props}
    ></img>
  );
}

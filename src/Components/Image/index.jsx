import css from "./Image.module.css";
import classNames from "classnames";

export function Image({ className, src, alt, fit, ...props }) {
  return (
    <div
      className={classNames(
        css.main,
        fit === "contain" ? css.contain : css.cover,
        className,
      )}
      aria-label={alt}
      role="img"
      {...props}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

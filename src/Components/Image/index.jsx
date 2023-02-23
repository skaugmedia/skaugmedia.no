import css from "./Image.module.css";

export function Image({ className, src, alt, fit, ...props }) {
  return (
    <div
      className={`${css.main} ${
        fit === "contain" ? css.contain : css.cover
      } ${className}`}
      aria-label={alt}
      aria-role="img"
      {...props}
      style={{ "background-image": `url(${src})` }}
    />
  );
}

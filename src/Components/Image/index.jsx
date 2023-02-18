import css from "./Image.module.css";

export function Image({ className, src, alt, ...props }) {
  return (
    <div
      className={`${css.main} ${className}`}
      aria-label={alt}
      aria-role="img"
      {...props}
      style={{ "background-image": `url(${src})` }}
    />
  );
}

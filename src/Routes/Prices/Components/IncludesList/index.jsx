import css from "./IncludesList.module.css";

export function IncludesList({ className, items, ...props }) {
  return (
    <ul className={`${css.main} ${className}`} {...props}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

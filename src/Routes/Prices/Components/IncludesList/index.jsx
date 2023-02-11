import IncludesList from "./IncludesList.module.css";

export function IncludesList({ className, items, ...props }) {
  return (
    <ul class={`${IncludesList.main} ${className}`} {...props}>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

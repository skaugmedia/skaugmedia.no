import React from "react";
import css from "./IncludesList.module.css";

export function IncludesList({ className, items, ...props }) {
  return (
    <ul class={`${css.main} ${className}`} {...props}>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

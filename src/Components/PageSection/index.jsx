import React from "react";
import css from "./PageSection.module.css";

export function PageSection({
  innerClassName,
  outerClassName,
  className,
  children,
  ...props
}) {
  return (
    <div className={`${css.outer} ${outerClassName} ${className}`}>
      <div className={`${css.inner} ${innerClassName}`} {...props}>
        {children}
      </div>
    </div>
  );
}

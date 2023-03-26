import classNames from "classnames";
import css from "./DottedLine.module.css";

export function DottedLine({ className, ...props }) {
  return <div className={classNames(css.line, className)} {...props} />;
}

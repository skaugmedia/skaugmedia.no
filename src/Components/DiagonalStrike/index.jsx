import classNames from "classnames";
import "./DiagonalStrike.css";

export function DiagonalStrike({ className, children, ...props }) {
  return (
    <span className={classNames("DiagonalStrike", className)} {...props}>
      {children}
      <div className="DiagonalStrike__Line"></div>
    </span>
  );
}

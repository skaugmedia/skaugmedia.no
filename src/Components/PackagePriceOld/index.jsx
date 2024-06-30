import classNames from "classnames";
import { DiagonalStrike } from "../DiagonalStrike";
import "./PackagePriceOld.css";

export function PackagePriceOld({ className, children, ...props }) {
  return (
    <div className={classNames("PackagePriceOld", className)} {...props}>
      <DiagonalStrike>{children}</DiagonalStrike>
    </div>
  );
}

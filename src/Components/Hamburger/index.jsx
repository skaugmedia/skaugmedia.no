import classNames from "classnames";
import "./Hamburger.css";

export const Hamburger = ({ className, toggled, ...props }) => (
  <div
    className={classNames(
      "Hamburger",
      { "Hamburger--Toggled": toggled },
      className
    )}
    {...props}
  >
    <div className="Hamburger__Bar1"></div>
    <div className="Hamburger__Bar2"></div>
    <div className="Hamburger__Bar3"></div>
  </div>
);

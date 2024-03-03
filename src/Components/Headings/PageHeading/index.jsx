import classNames from "classnames";
import React from "react";
import "./PageHeading.css";

export default function PageHeading({ className, h1, ...props }) {
  return React.createElement(
    h1 ? "h1" : "h2",
    { className: classNames("PageHeading", className), ...props },
    props.children,
  );
}

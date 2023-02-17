import React from "react";
import "./Underline.css";

export function Underline(props) {
  return <div className={`underline ${props.className}`}>{props.children}</div>;
}

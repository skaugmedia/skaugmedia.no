import React from "react";
import "./FotografiHeading.css";
import PageHeading from "../PageHeading";

export default function FotografiHeading({ className, ...props }) {
  return (
    <PageHeading className={`FotografiHeading ${className}`} {...props}>
      {props.children}
    </PageHeading>
  );
}

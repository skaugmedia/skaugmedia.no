import React from "react";
import "./DesignHeading.css";
import PageHeading from "../PageHeading";

export default function DesignHeading({ className, ...props }) {
  return (
    <PageHeading className={`DesignHeading ${className}`} {...props}>
      {props.children}
    </PageHeading>
  );
}

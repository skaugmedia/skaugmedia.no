import classNames from "classnames";
import PageHeading from "../PageHeading";
import "./DesignHeading.css";

export default function DesignHeading({ className, ...props }) {
  return (
    <PageHeading className={classNames("DesignHeading", className)} {...props}>
      {props.children}
    </PageHeading>
  );
}

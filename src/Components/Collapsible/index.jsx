import classNames from "classnames";
import { useState } from "react";
import ReactCollapsible from "react-collapsible";
import { DottedLine } from "../DottedLine";
import chevron from "./chevron-right-solid.svg";
import "./Collapsible.css";

export function Collapsible({
  id,
  title,
  price,
  textClassName,
  outerRef,
  open,
  children,
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <ReactCollapsible
      trigger={
        <>
          <TriggerButton open={isOpen} name={title} price={price} />
          <DottedLine className="Collapsible__Line" />
        </>
      }
      containerElementProps={{ id, ref: outerRef }}
      className="Collapsible"
      openedClassName={classNames("Collapsible", "Collapsible--Opened")}
      triggerClassName="Collapsible__Button"
      triggerOpenedClassName="Collapsible__Button"
      triggerTagName="div"
      open={open}
      onOpening={() => setOpen(true)}
      onClosing={() => setOpen(false)}
      transitionTime={200}
      easing="ease-in-out"
      contentInnerClassName={classNames("Collapsible__TextBox", textClassName)}
    >
      <div className="Collapsible__Text">{children}</div>
    </ReactCollapsible>
  );
}

export function TriggerButton({ className, name, price, open, ...props }) {
  return (
    <div
      className={classNames("Collapsible__TriggerButton", className)}
      {...props}
    >
      <div className={"Collapsible__TriggerButtonText"}>
        <img
          src={chevron}
          className={classNames("Collapsible__Chevron", {
            "Collapsible__Chevron--Open": open,
          })}
        />
        <div className={classNames("Collapsible__Name")}>{name}</div>
      </div>
      <div className="Collapsible__Price">{price}</div>
    </div>
  );
}

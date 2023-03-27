import classNames from "classnames";
import { useState } from "react";
import ReactCollapsible from "react-collapsible";
import { DottedLine } from "../DottedLine";
import chevron from "./chevron-right-solid.svg";
import classes from "./Collapsible.module.css";

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
          <DottedLine className={classes.line} />
        </>
      }
      containerElementProps={{ id, ref: outerRef }}
      className={classes.outer}
      openedClassName={classNames(classes.outer, classes.outerOpened)}
      triggerClassName={classes.button}
      triggerOpenedClassName={classes.button}
      triggerTagName="div"
      open={open}
      onOpening={() => setOpen(true)}
      onClosing={() => setOpen(false)}
      transitionTime={200}
      easing="ease-in-out"
      contentInnerClassName={classNames(classes.textBox, textClassName)}
    >
      <div className={classes.text}>{children}</div>
    </ReactCollapsible>
  );
}

export function TriggerButton({ className, name, price, open, ...props }) {
  return (
    <div className={classNames(classes.triggerButton, className)} {...props}>
      <div className={classes.triggerButtonText}>
        <img
          src={chevron}
          className={classNames(classes.chevron, { [classes.open]: open })}
        />
        <div className={classNames(classes.name)}>{name}</div>
      </div>
      <div className={classes.price}>{price}</div>
    </div>
  );
}

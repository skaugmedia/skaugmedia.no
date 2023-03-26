import { ItemPrice } from "../ItemPrice";
import React from "react";
import { DottedLine } from "/src/Components/DottedLine";

export function PriceList({ className, items, ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ItemPrice name={item.name} price={item.price} />
          <DottedLine />
        </React.Fragment>
      ))}
    </div>
  );
}

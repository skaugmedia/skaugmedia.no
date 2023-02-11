import PriceList from "./PriceList.module.css";
import { ItemPrice } from "../ItemPrice";

export function PriceList({ className, items, ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {items.map((item) => (
        <>
          <ItemPrice name={item.name} price={item.price} />
          <div className="line-between"></div>
        </>
      ))}
    </div>
  );
}

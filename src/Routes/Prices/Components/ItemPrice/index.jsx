import ItemPrice from "./ItemPrice.module.css";

export function ItemPrice({ className, name, price, ...props }) {
  return (
    <div class={ItemPrice.main}>
      <div className={ItemPrice.name}>{name}</div>
      <div className={ItemPrice.price}>{price}</div>
    </div>
  );
}

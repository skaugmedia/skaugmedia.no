import css from "./ItemPrice.module.css";

export function ItemPrice({ className, name, price, ...props }) {
  return (
    <div className={css.main} {...props}>
      <div className={css.name}>{name}</div>
      <div className={css.price}>{price}</div>
    </div>
  );
}

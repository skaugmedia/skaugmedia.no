import css from "./ItemPrice.module.css";
import classNames from "classnames";

export function ItemPrice({ className, name, price, ...props }) {
  return (
    <div className={classNames(css.main, className)} {...props}>
      <div className={css.name}>{name}</div>
      <div className={css.price}>{price}</div>
    </div>
  );
}

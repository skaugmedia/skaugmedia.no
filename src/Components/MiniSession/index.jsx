import cn from "classnames";
import { MiniSessionButton } from "../MiniSessionButton";
import classes from "./MiniSession.module.css";

export function MiniSession({
  image,
  category,
  classNames,
  title,
  price,
  when,
  link,
}) {
  return (
    <div className={cn(classes.main, classNames?.outer)}>
      <div className={cn(classes.imageWrapper)}>{image}</div>
      <div className={cn(classes.whitePadding)}>
        <div className={cn(classes.white)}>
          <div className={cn(classes.text)}>
            <div className={cn(classes.category, classNames?.category)}>
              {category}
            </div>
            <div className={cn(classes.title, classNames?.title)}>{title}</div>
            <div className={cn(classes.price, classNames?.price)}>{price}</div>
            <div className={cn(classes.when, classNames?.when)}>{when}</div>
          </div>
          {!!link && (
            <MiniSessionButton link={link} className={classNames?.link} />
          )}
        </div>
      </div>
    </div>
  );
}

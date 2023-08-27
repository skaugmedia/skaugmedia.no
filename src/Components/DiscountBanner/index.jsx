import { isWithinRange } from "../../utils";
import { MiniSessionButton } from "../MiniSessionButton";
import classes from "./DiscountBanner.module.css";

export function DiscountBanner({
  title,
  price,
  description,
  link,
  validFrom,
  validTo,
  buttonText,
}) {
  const now = new Date();
  if (!isWithinRange(validFrom, now, validTo)) {
    return <></>;
  }

  return (
    <div className={classes.main}>
      <div className={classes.title}>{title}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.text}>
        <div className={classes.description}>{description}</div>
      </div>

      {!!link && (
        <MiniSessionButton
          buttonText={buttonText}
          link={link}
          className={classes.button}
        />
      )}
    </div>
  );
}

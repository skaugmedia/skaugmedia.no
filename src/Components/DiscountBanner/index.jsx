import { isWithinRange } from "../../utils";
import { MiniSessionButton } from "../MiniSessionButton";
import classes from "./DiscountBanner.css";

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
    <div className="DiscountBanner">
      <div className="DiscountBanner__Title">{title}</div>
      <div className="DiscountBanner__Price">{price}</div>
      <div className="DiscountBanner__Text">
        <div className="DiscountBanner__Description">{description}</div>
      </div>

      {!!link && (
        <MiniSessionButton
          buttonText={buttonText}
          link={link}
          className="DiscountBanner__Button"
        />
      )}
    </div>
  );
}

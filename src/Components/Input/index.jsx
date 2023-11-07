import "./Input.css";
import classNames from "classnames";

export const Input = ({
  outerClassName,
  inputClassName,
  labelClassName,
  area,
  name,
  label,
  ...props
}) => {
  return (
    <div className={classNames("Input", outerClassName)}>
      <label
        htmlFor={name}
        className={classNames("Input__Label", labelClassName)}
      >
        {label}
      </label>
      {area ? (
        <textarea
          className={classNames(
            "Input__Input",
            "Input__Input--Area",
            inputClassName,
          )}
          name={name}
          {...props}
        />
      ) : (
        <input
          className={classNames("Input__Input", inputClassName)}
          name={name}
          {...props}
        />
      )}
    </div>
  );
};

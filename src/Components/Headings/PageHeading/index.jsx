import "./PageHeading.css";

export default function PageHeading({ className, ...props }) {
  return (
    <h2 className={`PageHeading ${className}`} {...props}>
      {props.children}
    </h2>
  );
}

import classNames from "classnames";
import ReactCollapsible from "react-collapsible";
import { ItemPrice } from "../../Routes/Prices/Components/ItemPrice";
import "./Collapsible.css";
import { DottedLine } from "../DottedLine";

export function Collapsible(props) {
  return (
    <ReactCollapsible
      trigger={
        <>
          <ItemPrice name={props.title} price={props.price} />
          <DottedLine className="collapsible-button-line" />
        </>
      }
      triggerClassName="collapsible-button"
      triggerOpenedClassName="collapsible-button"
      triggerTagName="div"
      transitionTime={200}
      easing="ease-in-out"
      contentInnerClassName={classNames(
        "collapsible-textbox-outer",
        props.textClassName
      )}
    >
      <div className="prices-text">{props.children}</div>
    </ReactCollapsible>
  );
}

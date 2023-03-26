import "./Collapsible.css";
import { ItemPrice } from "../../Routes/Prices/Components/ItemPrice";

export function Collapsible(props) {
  return (
    <div className="collapsible">
      <button className={`collapsible-button ${props.className}`}>
        <ItemPrice name={props.title} price={props.price} />
      </button>
      <div className="collapsible-textbox-outer">
        <div className="prices-text">{props.children}</div>
      </div>
    </div>
  );
}

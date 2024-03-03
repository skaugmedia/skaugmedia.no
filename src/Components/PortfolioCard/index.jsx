import { NavLink } from "react-router-dom";
import "./PortfolioCard.css";

export function PortfolioCard({ link, imgSrc, imgAlt, title }) {
  return (
    <NavLink to={link} className="PortfolioCard">
      <div className="PortfolioCard__ImageBox">
        <img className="PortfolioCard__Image" src={imgSrc} alt={imgAlt} />
      </div>
      <h2 className="PortfolioCard__Title">{title}</h2>
    </NavLink>
  );
}

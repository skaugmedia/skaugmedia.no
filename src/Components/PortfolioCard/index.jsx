import { NavLink } from "react-router-dom";
import "./PortfolioCard.css";

export function PortfolioCard({ link, imgSrc, imgAlt, title }) {
  return (
    <NavLink to={link} className="PortfolioCard">
      <img className="PortfolioCard__Image" src={imgSrc} alt={imgAlt} />
      <span className="PortfolioCard__Title">{title}</span>
    </NavLink>
  );
}

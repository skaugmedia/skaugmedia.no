import { NavLink } from "react-router-dom";
import "./PortfolioCard.css";

export function PortfolioCard({ link, imgSrc, imgAlt, title }) {
  return (
    <NavLink to={link} className="PortfolioCard">
      <div className="PortfolioCard__ImageBox">
        {/* <FontAwesomeIcon
          icon={faArrowRight}
          className="PortfolioCard__ImageArrow"
        /> */}
        <img className="PortfolioCard__Image" src={imgSrc} alt={imgAlt} />
      </div>
      <span className="PortfolioCard__Title">{title}</span>
    </NavLink>
  );
}

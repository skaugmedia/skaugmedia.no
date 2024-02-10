import { NavLink } from "react-router-dom";
import AboutPageName from "../../Routes/About/PageName";
import AboutRoute from "../../Routes/About/Route";
import BusinessPricesPageName from "../../Routes/BusinessPrices/PageName";
import BusinessPricesRoute from "../../Routes/BusinessPrices/Route";
import ContactPageName from "../../Routes/Contact/PageName";
import ContactRoute from "../../Routes/Contact/Route";
import DiscountsPageName from "../../Routes/Discounts/PageName";
import DiscountsRoute from "../../Routes/Discounts/Route";
import HomePageName from "../../Routes/Home/PageName";
import HomeRoute from "../../Routes/Home/Route";
import PhotographyPageName from "../../Routes/Photography/PageName";
import PhotographyRoute from "../../Routes/Photography/Route";
import PricesPageName from "../../Routes/PricesServices/PageName";
import PricesRoute from "../../Routes/PricesServices/Route";

export const Nav = ({ containerClassName, linkClassName }) => (
  <nav className={containerClassName}>
    <NavLink className={linkClassName} to={HomeRoute}>
      {HomePageName}
    </NavLink>
    <NavLink className={linkClassName} to={PhotographyRoute}>
      {PhotographyPageName}
    </NavLink>
    <NavLink className={linkClassName} to={BusinessPricesRoute}>
      {BusinessPricesPageName}
    </NavLink>
    <NavLink className={linkClassName} to={PricesRoute}>
      {PricesPageName}
    </NavLink>

    <NavLink className={linkClassName} to={DiscountsRoute}>
      {DiscountsPageName}
    </NavLink>
    <NavLink className={linkClassName} to={AboutRoute}>
      {AboutPageName}
    </NavLink>
    <NavLink className={linkClassName} to={ContactRoute}>
      {ContactPageName}
    </NavLink>
  </nav>
);

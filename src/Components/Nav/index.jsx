import { NavLink } from "react-router-dom";
import AboutPageName from "../../Routes/About/PageName";
import AboutRoute from "../../Routes/About/Route";
import ContactPageName from "../../Routes/Contact/PageName";
import ContactRoute from "../../Routes/Contact/Route";
import DiscountsPageName from "../../Routes/Discounts/PageName";
import DiscountsRoute from "../../Routes/Discounts/Route";
import GraphicalDesignPageName from "../../Routes/GraphicalDesign/PageName";
import GraphicalDesignRoute from "../../Routes/GraphicalDesign/Route";
import HomeRoute from "../../Routes/Home/Route";
import HomePageName from "../../Routes/Home/PageName";
import PhotographyPageName from "../../Routes/Photography/PageName";
import PhotographyRoute from "../../Routes/Photography/Route";
import PricesPageName from "../../Routes/PricesServices/PageName";
import PricesRoute from "../../Routes/PricesServices/Route";
import PricesProductsPageName from "../../Routes/Wedding/PageName";
import PricesProductsRoute from "../../Routes/Wedding/Route";

export const Nav = ({ containerClassName, linkClassName }) => (
  <nav className={containerClassName}>
    <NavLink className={linkClassName} to={HomeRoute}>
      {HomePageName}
    </NavLink>
    <NavLink className={linkClassName} to={PhotographyRoute}>
      {PhotographyPageName}
    </NavLink>
    <NavLink className={linkClassName} to={GraphicalDesignRoute}>
      {GraphicalDesignPageName}
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

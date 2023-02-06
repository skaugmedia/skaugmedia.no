import Button from "../../Components/Button";
import DesignHeading from "../../Components/Headings/DesignHeading";
import FotografiHeading from "../../Components/Headings/FotografiHeading";
import * as About from "../About";
import * as Contact from "../Contact";
import * as GraphicalDesign from "../GraphicalDesign";
import * as Photography from "../Photography";
import * as Prices from "../Prices";
import * as Home from "../Home";
import "./Root.css";
import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="Root">
      <header className="header">
        <img
          className="headerlogo"
          src="https://082-up-r.jotta.cloud/files/v1/dl/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiemlwIjoiREVGIn0..iiIn6XjatRoU2xO2pohD_A.at6Fnet5inSfXW06wNH6iRnWWkpo8h_mEUu0B70q_S7EQTVTeVwamYs4KMmayNF9H1s_b70BRzI3r1ZX7avxTCfHOTK3Mnoerm3qoxVgZFNUMhHLtMygfabC_lXuf9v5PwJAyNYQL4feRjkQSj8fIp6p854roDSRKBZAGsZjP1z-Bfc_88BDgWHp1-8mB2c2SeWDrXft4ohW1uiWKoU_TjoTG8s1ZYh-3KphlRIYY8Fdl0yH1S8ONN1cW2uBc0Rq7_CsTRl_Jfe92RR7HQC9gA.acf3SOJF5sD01mpfCebvmg?access_token=eyJraWQiOiJkZDBhMWIyOS02MjIyLTRmMWMtYjhkOS1jOTFiY2Q1OTRiMjkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhY2NvdW50Iiwic3ViIjoicF8wMjY1OGIwY2MzOGU0NGNlOTE1ZTgxOTFkN2EzODciLCJzdCI6IkNpQndYekF5TmpVNFlqQmpZek00WlRRMFkyVTVNVFZsT0RFNU1XUTNZVE00TnhJQ0NBRWFKUm9qTVRBelpqbGxNRFJrWlRNeU1UUmpOR05rTm1JMFlqVmxZamN3TldJMVlqZzVZamc9IiwiaXNzIjoiam90dGEiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE2NzUzNzc0NzIsInVzZXJuYW1lIjoicF8wMjY1OGIwY2MzOGU0NGNlOTE1ZTgxOTFkN2EzODcifQ.SC4FYN_C4AJEde7ZULh-AcFaDxtrcw_sIuqtgSrolxYhdPHNwPS3VPXab9RptBOpfWgXcB0Q5xeTpNWb6p9TceUHYf0J7gaKMIobnPyzXzGJihRkVztFMbbOS7DK3TGVs5WmSLNU10P1doC_JzUMnqvzy7jPXaSBaRmIOxGfPZxlRpdSltZQ_M-b0Q3VR0VErnpeisv6ha4clA3BDb5pN29pB3QdtnjmsCQY5p3a_KDo7BSMT5zze17vITyHW3nR6qKFE_VYlyc_g-pmEvqGoqV0tIKCbAYbAxgTBITLhf7jfXIlUbUJV7dTo-9_KAhPlnuxM9agK6Mub35Zd-19VA"
          alt="Skaug Media logo"
        ></img>
        <nav className="header row">
          <NavLink className="nav-link" to={Home.route}>
            {Home.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Photography.route}>
            {Photography.pageName}
          </NavLink>
          <NavLink className="nav-link" to={GraphicalDesign.route}>
            {GraphicalDesign.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Prices.route}>
            {Prices.pageName}
          </NavLink>
          <NavLink className="nav-link" to={About.route}>
            {About.pageName}
          </NavLink>
          <NavLink className="nav-link" to={Contact.route}>
            {Contact.pageName}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Root;

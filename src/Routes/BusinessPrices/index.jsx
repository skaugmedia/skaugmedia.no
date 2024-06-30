import { NavLink, Outlet, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import BottomImg from "../../Images/Business/bottom_img.jpg";
import "./BusinessPrices.css";
import pageName from "./PageName";
import Route from "./Route";
import AIRoute from "/src/Routes/AI/Route";
import BusinessPortraitsRoute from "/src/Routes/BusinessPortraits/Route";
import BusinessPricesRoute from "/src/Routes/BusinessPrices/Route";
import DesignInfoRoute from "/src/Routes/DesignInfo/Route";
import FoodPhotographyRoute from "/src/Routes/FoodPhotography/Route";
import KindergartenPhotographyRoute from "/src/Routes/KindergartenPhotography/Route";
import ProductPhotographyRoute from "/src/Routes/ProductPhotography/Route";
import SocialMediaRoute from "/src/Routes/SocialMedia/Route";

export function BusinessPrices() {
  const location = useLocation();

  if (!location.pathname.endsWith(Route)) {
    return <Outlet />;
  }

  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester for bedrifter og næringsliv"
        canonical={location.pathname}
      />
      <PageSection
        outerClassName="BusinessPrices__Outer"
        innerClassName="BusinessPrices__Inner"
      ></PageSection>
      <PageSection>
        <div className="BusinessPrices__TopSection">
          <div className="BusinessPrices__TopSectionTextBox">
            <DesignHeading h1>Bedrifter og næringsliv</DesignHeading>
            <p className="BusinessPrices__TopContentText">
              På jakt etter skreddersydde løsninger for din bedrift? Jeg tilbyr
              tre ulike bedriftsabonnement tilpasset ulike prisklasser og behov
              for næringslivet. Mine tjenester spenner fra portretter av ansatte
              til en komplett pakke med innholdsproduksjon, sosiale medier og
              designtjenester, og jeg tilbyr en løsning som passer perfekt for
              din virksomhet.
            </p>
          </div>
        </div>
        <p className="BusinessPrices__TopContentText">
          Mine pakker kan skreddersys nøyaktig etter din bedrifts behov. Uansett
          om du er ute etter en pakkeløsning på innholdsproduksjon eller design,
          har jeg det rette elementet for dere. Jeg er her for å hjelpe din
          bedrift med å lykkes, og mine skreddersydde abonnementer er en nøkkel
          til deres suksess.
        </p>
      </PageSection>

      <PageSection>
        <div className="BusinessPrices__ContentBoxList">
          <div className="BusinessPrices__ContentHeaderListBox">
            <div className="BusinessPrices__ContentElementsBox">
              <h2 className="BusinessPrices__ContentSubHeader">
                Hvilken tjeneste trenger din bedrift?
              </h2>
              <div className="BusinessPrices__ContentCategory">
                <div className="BusinessPrices__ContentCategoryBox">
                  <h3 className="BusinessPrices__ContentCategoryHeader">
                    Fotografering
                  </h3>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${ProductPhotographyRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Produktfotografering
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${FoodPhotographyRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Matfotografering
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${KindergartenPhotographyRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Barnehagefotografering
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${BusinessPortraitsRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Bedriftsportretter
                  </NavLink>
                </div>
                <div className="BusinessPrices__ContentCategoryBox">
                  <h3 className="BusinessPrices__ContentCategoryHeader">
                    Design
                  </h3>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${DesignInfoRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Utvikling av en visuell identitet
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${DesignInfoRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Logo-design
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${DesignInfoRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    UX-design
                  </NavLink>
                </div>
                <div className="BusinessPrices__ContentCategoryBox">
                  <h3 className="BusinessPrices__ContentCategoryHeader">
                    Sosiale medier
                  </h3>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${SocialMediaRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Veiledning i sosiale medier
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${SocialMediaRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Innholdsproduksjon
                  </NavLink>
                </div>
                <div className="BusinessPrices__ContentCategoryBox">
                  <h3 className="BusinessPrices__ContentCategoryHeader">
                    Kunstig intellegens / AI
                  </h3>

                  <NavLink
                    to={`/${BusinessPricesRoute}/${AIRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    Spesialtilpasset AI-kunst
                  </NavLink>
                  <NavLink
                    to={`/${BusinessPricesRoute}/${AIRoute}`}
                    className="BusinessPrices__CategoryButton"
                  >
                    ChatGPT-kurs
                  </NavLink>
                </div>
              </div>

              <PageSection>
                <div className="BusinessPrice__BottomSection">
                  <div>
                    <img
                      className="BusinessPrices__BottomImg"
                      src={BottomImg}
                      alt="Fotografi av en laptop som blir brukt"
                    ></img>
                    <div className="PhotoPrice__BookingText">
                      Ønsker du en prat for å kartlegge hva jeg kan hjelpe din
                      bedrift med?
                    </div>
                    <NavLink className="PhotoPrice__BookingButton">
                      Trykk her for å booke
                    </NavLink>
                  </div>
                </div>
              </PageSection>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

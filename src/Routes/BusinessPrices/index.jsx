import className from "classnames";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Checkmark } from "../../Components/Checkmark";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { projects } from "../../Data/Business/GraphicalDesign";
import BottomImg from "../../Images/Business/bottom_img.jpg";
import GraphicalDesignRoute from "../GraphicalDesign/Route";
import "./BusinessPrices.css";
import pageName from "./PageName";
import Route from "./Route";
import { galleries as plainGalleries } from "/src/Data/Business/Galleries";
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

  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const Check = () => (
    <Checkmark color="#3AC1C1" style={{ height: "24px" }}></Checkmark>
  );
  const galleries = plainGalleries.concat([
    {
      ...projects[0],
      title: "Grafisk design",
      id: GraphicalDesignRoute,
    },
  ]);

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

      <GalleryBrowser
        title="Gallerier"
        hideNumImages={true}
        galleries={galleries}
      />
      <div className="PhotoPrice__BottomDivider"></div>
      <PageSection>
        <button
          className="BusinessPrices__PackageCompareButton"
          onClick={() => setShowComparisonTable(!showComparisonTable)}
        >
          Sammenlign bedriftsabonnementer
        </button>
        <h2
          className={className("BusinessPrices__ComparisonTableHeader", {
            "BusinessPrices__ComparisonTableHeader--Shown": showComparisonTable,
          })}
        >
          Sammenlign de ulike bedriftsabonnementene her
        </h2>
        <table
          className={className("BusinessPrices__ComparisonTable", {
            "BusinessPrices__ComparisonTable--Shown": showComparisonTable,
          })}
        >
          <tbody>
            <tr>
              <td></td>
              <td>Social-pakken</td>
              <td>Strategy-pakken</td>
              <td>Impact-pakken</td>
            </tr>
            <tr>
              <th>Innholdsproduksjon til sosiale medier</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Foto, grafikk og enkel videoproduksjon</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>

            <tr>
              <th>Ingen bindingstid</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Antall dager med innholdsproduksjon</th>
              <td>1 dag med innholdsproduksjon</td>
              <td>2 dager med innholdsproduksjon</td>
              <td>2-3 dager med innholdsproduksjon</td>
            </tr>
            <tr>
              <th>Antall fotografier</th>
              <td>15-25 stk. fotografier</td>
              <td>25-40 stk. fotografier</td>
              <td>35-50 stk. fotografier</td>
            </tr>
            <tr>
              <th>Antall grafiske bilder</th>
              <td>5-10 stk. grafiske bilder</td>
              <td>8-15 stk. grafiske bilder</td>
              <td>10-20 stk. grafiske bilder</td>
            </tr>
            <tr>
              <th>Antall stories</th>
              <td>5 stories</td>
              <td>12 stories</td>
              <td> stories</td>
            </tr>
            <tr>
              <th>Antall video/reels</th>
              <td>1 video/reels</td>
              <td>2 video/reels</td>
              <td>3 video/reels</td>
            </tr>
            <tr>
              <th>Planlegging og publisering i deres kanaler</th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Antall innlegg i feed</th>
              <td></td>
              <td>16 innlegg</td>
              <td>25 innlegg</td>
            </tr>
          </tbody>
        </table>
      </PageSection>
      {/*  <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Sosiale medier veiledning
              </div>
            </div>

            <div className="BusinessPrices__ContentText">
              Ønsker din bedrift å utnytte kraften og potensialet til sosiale
              medier for å nå ut til en bredere målgruppe, øke
              merkevarebevisstheten og generere vekst? Vel, du er på rett sted!
              Jeg tilbyr skreddersydde veiledningstjenester som hjelper
              bedrifter med å mestre kunsten å utnytte sosiale medier for å
              oppnå målene sine.
              <br />
              <br />
              Sosiale medier har raskt blitt en integrert del av vår digitale
              hverdag, og det er her kundene dine er. Mine tjenester gir deg
              muligheten til å forstå og engasjere din målgruppe på Facebook og
              Instagram. Med riktig tilnærming kan du bygge lojalitet, oppnå økt
              synlighet og oppleve en betydelig økning i inntektene.
              <br />
              <br />Å produsere engasjerende innhold for sosiale medier kan være
              en utfordring, men frykt ikke, for jeg kan hjelpe deg med å
              utnytte kunstig intelligens for å optimalisere din
              innholdsproduksjon. Et av mine hemmelige våpen er ChatGPT, en
              kraftig AI-modell som er skapt for å generere kreativt og relevant
              innhold.
              <p className="BusinessPrices__ContentSubHeaderText">
                Hvordan hjelper dette deres bedrift?
              </p>
              Under veiledningen vil jeg demonstrere hvordan du kan bruke
              ChatGPT for å forbedre din innholdsproduksjon. Sammen vil vi skape
              en strategi som kombinerer menneskelig kreativitet med
              AI-teknologi for å oppnå de beste resultatene.
              <br />
              <br />
              Kontakt meg i dag for å lære mer om hvordan du kan dra nytte av
              ChatGPT for å optimalisere deres tilstedeværelse på sosiale
              medier. La oss sammen skape innhold som begeistrer og konverterer
              følgere til kunder!
            </div>
          </div>
        </div>
      </PageSection> */}

      {/* <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Matfotografering
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter i matbransjen er presentasjonen av deres kulinariske
              mesterverk en del av deres unike reise, og hvert bilde utgjør en
              avgjørende del av deres historie. Matfotografering for bedrifter
              og næringsliv gir dere muligheten til å fange de hjertevarme
              øyeblikkene som formidler skjønnheten og smaken av deres
              kulinariske kreasjoner.
              <br />
              <br />
              Det handler om å formidle kvalitet, smak og øyeblikk som skaper en
              uimotståelig appell. Uansett om det er en velduftende tallerken
              som forfører sansene, en delikat presentasjon av deilige
              ingredienser eller en enkel detalj som setter prikken over i-en,
              har hvert bilde en egen betydning. Matfotografering for bedrifter
              og næringsliv handler om å fange disse øyeblikkene som formidler
              essensen av deres kulinariske kunstverk.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            src={FoodImg}
            title="Granola, gresk yoghurt, bringebær og pasjonsfrukt"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Produktfotografering
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter og næringsliv er presentasjonen av deres produkter
              en integrert del av deres reise, og hvert bilde utgjør en
              avgjørende del av deres historie. Produktfotografering for
              bedrifter og næringsliv gir dere muligheten til å fange de
              hjertevarme øyeblikkene som formidler skjønnheten og
              funksjonaliteten av deres produkter. Det handler om å formidle
              kvalitet, funksjonalitet og øyeblikk som skaper en uimotståelig
              appell til deres målgruppe.
              <br />
              <br />
              Uansett om det er et detaljert bilde som fremhever produktets
              unike egenskaper, en stilfull presentasjon som fanger
              oppmerksomheten, eller en enkel detalj som gir det ekstraordinære,
              har hvert bilde sin egen betydning. Produktfotografering for
              bedrifter og næringsliv handler om å fange disse øyeblikkene som
              formidler essensen av deres produkter og merkevare.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            className="BusinessPrices__ContentImgProduct"
            src={ProductImg}
            title="Produkter stylet sammen med frukt"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Portrettfotografering for bedrifter
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter og næringsliv er visningen av deres team en viktig
              del av deres reise, og hvert bilde utgjør en avgjørende del av
              deres historie. Portrettfotografering for bedrifter og næringsliv
              gir dere muligheten til å fange de hjertevarme øyeblikkene som
              formidler personlighet og profesjonalitet til deres team. Det
              handler om å formidle troverdighet, kompetanse og øyeblikk som
              skaper en uimotståelig appell til deres målgruppe.
              <br />
              <br />
              Uansett om det er et detaljert portrett som fremhever hver enkelt
              medarbeiders unike egenskaper, en profesjonell presentasjon som
              fanger oppmerksomheten, eller en enkel detalj som gir det
              ekstraordinære, har hvert bilde sin egen betydning.
              Portrettfotografering for bedrifter og næringsliv handler om å
              fange disse øyeblikkene som formidler essensen av deres team og
              merkevare.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            className="BusinessPrices__ContentImgBusiness"
            src={BusinessPortraitImg}
            title="Portrett av daglig leder i Pent og Brukt AS"
          />
        </div>
      </PageSection> */}
    </>
  );
}

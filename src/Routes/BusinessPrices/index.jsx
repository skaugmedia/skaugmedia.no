import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./BusinessPrices.css";
import { Image } from "../../Components/Image";
import pageName from "./PageName";
import FoodImg from "/src/Images/Prices/food_photography.jpg";
import ProductImg from "/src/Images/Prices/product_photography.jpg";
import BusinessPortraitImg from "/src/Images/Prices/business_portrait_photography.jpg";
import KindergardenImg from "/src/Images/Prices/kindergarten_photography.jpg";
export function BusinessPrices() {
  useDocumentTitle(pageName);
  return (
    <>
      <PageSection
        outerClassName="BusinessPrices__Outer"
        innerClassName="BusinessPrices__Inner"
      >
        <DesignHeading>Bedrifter og næringsliv</DesignHeading>
      </PageSection>
      <PageSection>
        <p className="BusinessPrices__TopContentText">
          På jakt etter skreddersydde løsninger for din bedrift? Jeg tilbyr tre
          ulike bedriftsabonnement tilpasset ulike prisklasser og behov for
          næringslivet. Mine tjenester spenner fra portretter av ansatte til en
          komplett pakke med innholdsproduksjon, sosiale medier og
          designtjenester, og jeg tilbyr en løsning som passer perfekt for din
          virksomhet.
        </p>
        <p className="BusinessPrices__TopContentText">
          Mine pakker kan skreddersys nøyaktig etter din bedrifts behov. Uansett
          om du er ute etter en pakkeløsning på innholdsproduksjon eller design,
          har jeg det rette elementet for dere. Jeg er her for å hjelpe din
          bedrift med å lykkes, og mine skreddersydde abonnementer er en nøkkel
          til deres suksess.
        </p>
      </PageSection>
      <PageSection>
        <div className="BusinessPrices__PackageBoxRow">
          <div className="BusinessPrices__PackageBox1">
            <div className="BusinessPrices__PackageBoxHeader">
              Bedriftsabonnement 1
            </div>
            <div className="BusinessPrices__PackageBoxSubHeader">
              Innholdsproduksjon til sosiale medier
            </div>
            <div className="BusinessPrices__PackageBoxText">
              Fotografering av vielse, portretter av brudeparet
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBoxText">
              3 timer fotografering
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Ca. 50 stk. digitale bildefiler{" "}
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              50% rabatt på forlovelsesfotografering{" "}
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxPrice">Kr. 16.000,-</div>
            <button
              onClick={() => setMenu("b1")}
              className="BusinessPrices__ReadMoreButton"
            >
              Les mer
            </button>
          </div>
          <div className="BusinessPrices__PackageBox2">
            <div className="BusinessPrices__PackageBoxHeader">
              Bedriftsabonnement 2
            </div>
            <div className="BusinessPrices__PackageBoxSubHeader">
              Innholdsproduksjon og portretter av ansatte
            </div>
            <div className="BusinessPrices__PackageBoxText">
              Fotografering av forberedelser eller ankomst til festen, vielse og
              portretter
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBoxText">
              5 timer fotografering
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Ca. 150 stk. digitale bildefiler{" "}
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert
              I prisen
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxPrice">Kr. 24.000,-</div>
            <button
              onClick={() => setMenu("b2")}
              className="BusinessPrices__ReadMoreButton"
            >
              Les mer
            </button>
          </div>
          <div className="BusinessPrices__PackageBox3">
            <div className="BusinessPrices__PackageBoxHeader">
              Bedriftspakke 3
            </div>
            <div className="BusinessPrices__PackageBoxSubHeader">
              Innholdsproduksjon, portretter av ansatte og design
            </div>
            <div className="BusinessPrices__PackageBoxText">
              Fotografering av forberedelser eller ankomst til festen, vielse og
              portretter
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBoxText">
              5 timer fotografering
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Ca. 150 stk. digitale bildefiler{" "}
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert
              I prisen
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              20 stk. doble invitasjoner (mulig å bestille flere)
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              20 stk. doble takkekort (mulig å bestille flere)
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxText">
              Mulighet for å bestille flere trykksaker i samme stil
            </div>

            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBoxPrice">Kr. 32.000,-</div>
            <button
              onClick={() => setMenu("b3")}
              className="BusinessPrices__ReadMoreButton"
            >
              Les mer
            </button>
          </div>
        </div>
      </PageSection>
      );
      <PageSection>
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
      </PageSection>
    </>
  );
}

import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import "./DesignInfo.css";
import pageName from "./PageName";

export function DesignInfo() {
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Informasjon om produktfotografering"
        canonical={location.pathname}
      />

      <PageSection
        outerClassName="BusinessCategory__Outer"
        innerClassName="BusinessCategory__Inner"
      ></PageSection>
      <PageSection>
        <div className="BusinessCategory__TopSection">
          <div className="BusinessCategory__TopSectionTextBox">
            <DesignHeading h1>Design</DesignHeading>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              Utvikling av en visuell identiet
            </div>
            <p className="BusinessCategory__MiddleContentText">
              Grafisk design er avgjørende for å formidle profesjonalitet,
              originalitet og uimotståelig appell for bedrifter. Hvert
              designelement, enten det er logo, visuell identitet eller
              kampanje, har sin egen betydning og hjelper med å formidle
              essensen av bedriftens visuelle identitet. Kontakt meg for å
              diskutere hvordan jeg kan hjelpe dere med å forme deres unike
              branding og visuell identitet. Sammen kan vi skape en grafisk
              reise som beriker deres merkevare.
            </p>
          </div>
        </div>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              Logo-design
            </div>
            <p className="BusinessCategory__MiddleContentText">
              For bedrifter som søker en rask etablering av en visuell
              identitet, spiller logoen en sentral rolle i den unike reisen dere
              deler med deres merkevare. Logo-design gir dere muligheten til å
              forme en fremtredende visuell representasjon som uttrykker deres
              særegne essens. Det handler om å formidle gjenkjennelighet,
              originalitet og øyeblikk som skaper en uimotståelig
              tiltrekningskraft for deres målgruppe. Uansett om det er en logo
              som fremhever deres bedrifts personlighet, har hver logo sin egen
              unike betydning. Logo-design handler om å fange dette øyeblikket
              som formidler essensen av deres merkevare og gir dere en tydelig
              identitet.
            </p>
          </div>
        </div>
        <div className="BusinessCategory__MiddleSection">
          <div className="BusinessCategory__MiddleSectionTextBox">
            <div className="BusinessCategory__MiddleSectionHeader">
              UX-design
            </div>
            <p className="BusinessCategory__MiddleContentText">
              UX-design gir bedrifter muligheten til å forme en uimotståelig
              brukeropplevelse som uttrykker deres essens. Enten det er
              nettsidedesign, app eller digitalt produkt, hvert UX-designelement
              har sin egen betydning i å formidle brukervennlighet og
              innovasjon. Kontakt meg for å diskutere hvordan jeg kan hjelpe
              dere med å skape en tiltalende digital reise. Sammen kan vi berike
              deres digitale plattformer med brukervennlighet og appell.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}

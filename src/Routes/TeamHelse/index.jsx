import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import businesscards from "../../Images/TeamHelse/teamhelse_businesscard.jpg";
import cover from "../../Images/TeamHelse/teamhelse_logo.jpg";
import primarylogo from "../../Images/TeamHelse/teamhelse_primarylogo.jpg";
import pageName from "./PageName";
import "./TeamHelse.css";
import ContactRoute from "/src/Routes/Contact/Route";

export function TeamHelse() {
  const location = useLocation();
  return (
    <div className="TeamHelse">
      <SkaugHelmet
        title={pageName}
        description="En del av min portefølje, som viser designarbeidet jeg har gjort for bedriften TeamHelse."
        canonical={location.pathname}
      />
      <div
        className="TeamHelse_TopCoverImg"
        style={{ backgroundImage: `url(${cover})` }}
        alt="TeamHelses sekundærlogo"
      ></div>
      <PageSection
        outerClassName="TeamHelse__Outer"
        innerClassName="TeamHelse__Inner"
      >
        <DesignHeading h1>TeamHelse Jessheim</DesignHeading>
        <div className="TeamHelse__Box">
          <div className="TeamHelse__Text">
            <p>
              TeamHelse Jessheim har tatt et viktig skritt mot en sterk visuell
              identitet med sitt nye basisdesign, utviklet av meg. Dette
              designet består av nøye utvalgte farger, typografi, logo og
              visittkort til hver terapeut på klinikken. Som en samlende kraft
              for flere selvstendige terapeuter som tilbyr et mangfold av
              helsetjenester, ønsket de en visuell identitet som reflekterte
              deres profesjonalitet og bredde i tjenestespekteret. Med en
              stilren og troverdig tilnærming har jeg skapt et design som fanger
              essensen av deres virksomhet. Gjennom en kombinasjon av klare
              linjer, beroligende farger og profesjonell utforming, har vi
              sammen skapt et visuelt uttrykk som passer perfekt til deres
              klinikk. Denne visuelle profilen gir TeamHelse Jessheim en solid
              plattform for å markedsføre seg selv på en enhetlig og troverdig
              måte, og vil være en verdifull ressurs i deres vekst og suksess
              fremover.
            </p>
            <p>
              Kunden har uttrykt ønske om å beholde en lignende farge som den de
              hadde før jeg ble satt på oppdraget, en nyanse som minner om den
              karakteristiske "Oslo"-fargen. Imidlertid ønsket de å rendyrke
              denne fargen og utvide fargepaletten med flere nyanser. Det
              overordnede målet var å skape et design som fremstår seriøst,
              kjønnsnøytralt, stilfullt og profesjonelt, og som samtidig passer
              inn i helsesektoren. Med dette i tankene ville jeg utvikle et
              designkonsept som balanserte eleganse og funksjonalitet, og som
              reflekterte kundens verdier og mål på en troverdig måte. Ved å
              bruke en nøye utvalgt fargepalett og en minimalistisk, men
              raffinert designstil, ville jeg skape et visuelt uttrykk som
              resonerte med kundens ønsker og behov, samtidig som det appellerte
              til deres målgruppe i helsesektoren.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="TeamHelse__ColorDisplayRow">
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay1"></div>
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay2"></div>
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay3"></div>
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay4"></div>
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay5"></div>
          <div className="TeamHelse__ColorDisplay TeamHelse__ColorDisplay6"></div>
        </div>
        <div className="TeamHelse__DisplayBox1">
          <img
            className="TeamHelse__DisplayImage1"
            src={primarylogo}
            alt="Primærlogoen til TeamHelse"
          ></img>
          <img
            className="TeamHelse__DisplayImage2"
            src={businesscards}
            alt="Prislisten til TeamHelse"
          ></img>
        </div>
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__BottomDivider"></div>
        <div className="PhotoPrice__BookingText">
          Trenger du ny logo, visuell identitet eller websidedesign?
        </div>
        <NavLink to={`/${ContactRoute}`} className="PhotoPrice__BookingButton">
          Ta kontakt her
        </NavLink>
      </PageSection>
    </div>
  );
}

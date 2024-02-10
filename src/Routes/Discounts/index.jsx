import { useLocation } from "react-router-dom";
import { DiscountAd } from "../../Components/DiscountAd";
import { FixedDiscount } from "../../Components/FixedDiscount";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { IncludesList } from "../../Components/IncludesList";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { FreePregnancyDate } from "../../Data/FreePregnancyDate";
import "./Discounts.css";
import pageName from "./PageName";
import OneYear from "/src/Images/Discounts/1-year-photo.jpg";
import PregnancyFree from "/src/Images/Discounts/preg_c_10.jpg";
import NewbornDiscount from "/src/Images/FastRabattNewborn.jpg";
import MiniShootMothersday from "/src/Images/Mommy&me/mom_IL_4.jpg";
import MiniShootWinter from "/src/Images/Pregnant/preg_JA_1.jpg";
import WeddingDiscount from "/src/Images/Wedding/weddingRT_14.jpg";
import TenPercent from "/src/Images/konfirmant_silje_forside.jpg";
import ContactRoute from "/src/Routes/Contact/Route";

export function Discounts() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet title={pageName} canonical={location.pathname} />
      <div className="Discounts">
        <PageSection>
          <DesignHeading>Tilbud</DesignHeading>
        </PageSection>
        {/* <PageSection>
          <DiscountAd
            imgSrc={ChristmasDiscount}
            imgAlt="En baby i blomstereng"
            title="40% rabatt på alle barnefotograferinger"
            text={
              <>
                <div className="Discounts__Text">
                  <p>
                    Alle ordinære barnefotograferinger som bookes med dato i
                    januar 2024, får 40% avslag i prisen. Tilbudet gjelder for
                    nyfødtfotografering, 1-årsfotografering og
                    barnefotografering (fra 6mnd)
                  </p>
                  <p>Tilbudet gjelder til og med 15.01.2024</p>
                  <p>
                    *Det er ingen rabatter på tilleggspriser. Kveldstillegg,
                    helgetillegg og kjøretillegg kommer utenom.
                  </p>
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          /> */}
        <PageSection>
          <DiscountAd
            imgSrc={MiniShootMothersday}
            imgAlt="En mamma med hennes sønn i en solsikkeåker"
            title="MORSDAGSTILBUD"
            text={
              <>
                <div className="Discounts__FreePregnancyNextDate">
                  Minifotografering - Mommy & me
                </div>
                <div className="Discounts__Text">
                  Den perfekte morsdagsgave til alle mammaer i alle aldre!{" "}
                  <br />
                  Gi det til din kjære fra barna deres, eller gi det til din 90
                  år gamle mamma - og ta henne med på fotografering.
                  <br />
                  <br />
                  Hva får du ut av det? <br />
                  ❤ Kvalitetstid mellom mor og barn <br />
                  ❤ 20 minutter mommy & me fotografering <br />
                  ❤ Online bildegallei hvor du velger bilder fra <br />
                  ❤ 5 valgfrie digitale bildefiler <br />
                  ❤ Fotografering på Jessheim i Ullensaker <br />
                  ❤ Rabattkupong du kan bruke på neste fotografering
                  <br />
                  ❤ Verdens mest verdifulle morsdagsgave
                  <br />
                  <br /> Tilbudet gjelder for booking på hverdager i uke 8 og 9.
                  <br />
                  <br />
                  <div className="Discounts__DiscountTextImportant">
                    KUN KR. 1350,-
                  </div>
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          />
        </PageSection>

        <PageSection>
          <DiscountAd
            imgSrc={MiniShootWinter}
            imgAlt="En gravid kvinne ute i snøstorm"
            title="Minifotografering på Jessheim i vinterferien"
            text={
              <>
                <div className="Discounts__Text">
                  ❤ 20 minutter valgfri fotografering
                  <br />
                  ❤ Online bildegalleri hvor du velger bilder <br />
                  ❤ 5 valgfrie digitale bildefiler
                  <br />
                  <br />
                  Ta kontakt for mer informasjon og booking.
                  <br />
                  kontakt@skaugmedia.no
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          />
        </PageSection>

        <PageSection>
          <DiscountAd
            imgSrc={WeddingDiscount}
            imgAlt="En brud med hennes brudebukett"
            title="30% rabatt på bryllupspakker"
            text={
              <>
                <div className="Discounts__Text">
                  <p>
                    De første 3 brudeparene som booker bryllupspakke 1 eller 2,
                    med fotografering i 2023 eller 2024, får 30% rabatt på
                    pakken. (Når kontrakt er signert og reservasjonsbeløpet er
                    betalt, er fotograferingen booket.) Tilbudet gjelder ikke om
                    dere har en kontrakt med en annen fotograf.
                  </p>
                  <p>
                    Jeg trenger mer erfaring med bryllupsfotografering, og
                    ønsker derfor å fylle opp min portefølje med flere
                    bryllupsbilder.
                  </p>
                  <p>Ta kontakt om dere lurer på noe!</p>
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          />
        </PageSection>
        {/* <DiscountAd
            imgSrc={PregnantBabyModelcall}
            imgAlt="En brud med hennes brudebukett"
            title="Modelcall gravid + baby"
            text={
              <>
                <div className="Discounts__Text">
                  <p>
                    Jeg søker etter en gravid kvinne som har termin i januar
                    eller februar, til gravidfotografering utendørs eller hjemme
                    hos deg, samt at jeg ønsker å fotografere mor (gjerne med
                    familien) og den nyfødte babyen med noen måneders mellomrom
                    frem til babyen er 1 år gammel. Bildene må kunne brukes i
                    markedsføring av Skaug Media.
                  </p>
                  <p>
                    Alle fotograferingene vil være kostnadsfrie, og dere vil få
                    3 stk. digitale bildefiler fra hver enkelt fotografering.
                    Det vil også bli mulighet for å kjøpe flere bildeprodukter.
                  </p>

                  <p>
                    Interessert eller har du spørsmål?{" "}
                    <div className="Discounts__TextImportant">
                      Send en mail til modell@skaugmedia.no
                    </div>
                  </p>
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          /></PageSection> */}

        <PageSection>
          <DiscountAd
            imgSrc={PregnancyFree}
            imgAlt="En gravid kvinne"
            title="Gratis minifotografering av gravide - Hver måned"
            text={
              <>
                <div className="Discounts__FreePregnancyNextDate">
                  Neste ledige dato: {FreePregnancyDate}
                </div>
                <div className="Discounts__Text">
                  <p>
                    Hver måned har jeg en dato der jeg tilbyr GRATIS utendørs
                    minifotografering av gravide som er i uke 30-36 av
                    svangerskapet. Fotograferingen vil foregå på Jessheim i
                    Ullensaker.
                  </p>
                  <p>
                    Det vil fra og med nå bli rom for å ha med partner og
                    tidligere barn på gratis minifotografering av gravide. Lån
                    av gravidkjoler er ikke inkludert i fotograferingen, men du
                    har mulighet til å leie en gravidkjole for kr. 200,- om du
                    ønsker dette.
                  </p>
                  <p>
                    Om du vet at du ønsker å delta på dette når det nærmer seg
                    din termin, ta kontakt via kontaktskjema og fortell meg når
                    du har termin- så setter jeg deg på en prioritert liste.
                  </p>
                  Dette inkluderer:
                  <IncludesList
                    items={[
                      "20 minutters fotografering utendørs",
                      "Fotografering med partner og tidligere barn",
                      "Mulighet for å leie gravidkjole for kr. 200,-",
                      "Online bildegalleri hvor du velger dine bilder",
                      "1 digital bildefil i høy oppløsning",
                      "Mulighet for å kjøpe flere bilder, og bildeprodukter",
                      "Rabattkupong som kan brukes på valgfri fotografering senere",
                    ]}
                  />
                  <div className="Discounts__DiscountTextImportant">
                    Neste dato annonseres i slutten av måneden.
                  </div>
                </div>
              </>
            }
            link={`/${ContactRoute}`}
          />
        </PageSection>
        <PageSection>
          <div className="Discounts__RegularDiscounts">Faste rabatter</div>

          <div className="Discounts__RegularDiscountsRow">
            <FixedDiscount
              imgSrc={NewbornDiscount}
              imgAlt="Våken nyfødt baby"
              discount="GRATIS"
              text={
                <>
                  minifotografering ved 6-9 mnd,
                  <br />
                  etter nyfødtfotografering
                </>
              }
            />

            <FixedDiscount
              imgSrc={OneYear}
              imgAlt="Ettåring som spiser på Duplo"
              discount="50%"
              text={
                <>
                  avslag på 1-års fotografering, <br />
                  etter nyfødtfotografering
                </>
              }
            />

            <FixedDiscount
              imgSrc={TenPercent}
              imgAlt="Konfirmant i vårfarger"
              discount="20%"
              text={
                <>
                  avslag på din neste fotografering <br />
                  <span className="Discounts__RegularDiscountsTenPercentTextImportant">
                    *Gjelder kun privatpersoner og kan ikke kombineres med andre
                    tilbud
                  </span>
                </>
              }
            />
          </div>
        </PageSection>
      </div>
    </>
  );
}

import { DiscountAd } from "../../Components/DiscountAd";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { IncludesList } from "../../Components/IncludesList";
import "./Discounts.css";
import OneYear from "/src/Images/1-year-photo.jpg";
import NewbornDiscount from "/src/Images/FastRabattNewborn.jpg";
import ChristmasMinishoot from "/src/Images/christmas_minishoot.jpg";
import PregnancyFree from "/src/Images/free_pregnancy_shoot_offers.jpg";
import TenPercent from "/src/Images/konfirmant_silje_forside.jpg";
import { FixedDiscount } from "../../Components/FixedDiscount";
import ContactRoute from "/src/Routes/Contact/Route";

export function Discounts() {
  return (
    <>
      <div className="Discounts">
        <PageSection>
          <DesignHeading>Tilbud</DesignHeading>
        </PageSection>
        <PageSection>
          {/* <DiscountAd
            outerClassName="Discounts__ChristmasDiscountAd"
            imgSrc={ChristmasMinishoot}
            imgAlt="En familie på fem"
            title="Minifotografering jul"
            text={
              <>
                <div className="Discounts__ChristmasNextDate">
                  Neste ledige dato: 21.10.2023
                </div>
                <div className="Discounts__ChristmasText">
                  Minifotografering julefotografering 21. oktober 2023. <br />
                  <br />
                  Dette inkluderer:
                  <IncludesList
                    items={[
                      "20 minutters valgfri fotografering utendørs",
                      "Online bildegalleri hvor du velger dine bilder",
                      "2 stk. digitale bildefiler i høy oppløsning",
                      "Mulighet for å kjøpe flere bilder, og bildeprodukter",
                      "Mail med informasjon om lokasjon og tips til hva du kan ha på deg når det nærmer seg",
                    ]}
                  />
                  <div className="Discounts__ChristmasTextImportant">
                    Faktura sendes ut ved booking, og må betales før
                    fotograferingen.
                  </div>
                </div>
              </>
            }
            link={ContactRoute}
          /> */}
          <DiscountAd
            imgSrc={PregnancyFree}
            imgAlt="En gravid kvinne"
            title="Gratis minifotografering av gravide - Hver måned"
            text={
              <>
                <div className="Discounts__FreePregnancyNextDate">
                  Neste ledige dato: 02.11.2023
                </div>
                <div className="Discounts__FreePregnancyText">
                  Hver måned har jeg en dato der jeg tilbyr GRATIS utendørs
                  minifotografering av gravide som er i uke 30-36 av
                  svangerskapet. Fotograferingen vil foregå på Jessheim i
                  Ullensaker. Begrenset kapasitet, så book tidlig! <br />
                  <br />
                  Dette inkluderer:
                  <IncludesList
                    items={[
                      "20 minutters fotografering utendørs",
                      "Online bildegalleri hvor du velger dine bilder",
                      "1 digital bildefil i høy oppløsning",
                      "Mulighet for å kjøpe flere bilder, og bildeprodukter",
                      "Rabattkupong som kan brukes på valgfri fotografering senere",
                    ]}
                  />
                  <div className="Discounts__FreePregnancyTextImportant">
                    Neste dato annonseres i slutten av måneden.
                  </div>
                </div>
              </>
            }
            link={ContactRoute}
          />
        </PageSection>
        <PageSection>
          <div className="Discounts__RegularDiscounts">Faste rabatter</div>

          <div className="Discounts__RegularDiscountsRow">
            <FixedDiscount
              imgSrc={NewbornDiscount}
              imgAlt="Våken nyfødt baby"
              discount="50%"
              text={
                <>
                  avslag på nyfødtfotografering, <br />
                  etter ordinær gravidfotografering
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
              discount="10%"
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

import { useLocation } from "react-router-dom";
import { DiscountAd } from "../../Components/DiscountAd";
import { FixedDiscount } from "../../Components/FixedDiscount";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { discountPosts } from "../../Data/discountPosts";
import "./Discounts.css";
import pageName from "./PageName";
import OneYear from "/src/Images/Discounts/1-year-photo.jpg";
import NewbornDiscount from "/src/Images/FastRabattNewborn.jpg";
import TenPercent from "/src/Images/konfirmant_silje_forside.jpg";

export function Discounts() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Oversikt over pågående tilbud og rabatter."
        canonical={location.pathname}
      />
      <div className="Discounts">
        <PageSection>
          <DesignHeading h1>Tilbud</DesignHeading>
        </PageSection>
        <PageSection>
          {discountPosts.map((discount) => (
            <DiscountAd
              key={`${discount.title}${discount.button.link}`}
              id={discount.banner?.button.linkId}
              imgSrc={discount.img.src}
              imgAlt={discount.img.alt}
              title={discount.title}
              text={discount.description}
              link={discount.button.link}
              buttonText={discount.button.text}
            />
          ))}
        </PageSection>

        <PageSection>
          <h2 className="Discounts__RegularDiscounts">Faste rabatter</h2>

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

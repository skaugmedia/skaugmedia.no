import { NavLink, useLocation } from "react-router-dom";
import { ActionButton } from "../../Components/ActionButton";
import { PageSection } from "../../Components/PageSection";
import { PortfolioBrowser } from "../../Components/PortfolioBrowser";
import { PortfolioCard } from "../../Components/PortfolioCard";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import OneYearDiscount from "../../Images/1-year-photo.jpg";
import PhotographerImg from "../../Images/Home/ninaskaug.jpg";
import freePregnancyShoot from "../../Images/Prices/free_pregnant_shoot.jpg";
import cover from "../../Images/coverphoto.jpg";
import newbornDiscount from "../../Images/newborn_offer.jpg";
import quotepng from "../../Images/quote_icon.png";
import "./Home.css";
import pageName from "./PageName";
import { portfolio } from "./portfolio";
import { freePregnancyDate } from "/src/Data/FreePregnancyDate";
import { discountPosts } from "/src/Data/discountPosts";
import DiscountHeaderImg from "/src/Images/Discounts/discount.png";
import ContactRoute from "/src/Routes/Contact/Route";
import DiscountRoute from "/src/Routes/Discounts/Route";

export function Home() {
  const location = useLocation();

  const discountWithBanner = discountPosts.filter((d) => d.banner)[0];
  const discountEl = (
    <div
      className="Home__DiscountHeader"
      style={{ backgroundImage: `url(${DiscountHeaderImg})` }}
    >
      <div className="Home__DiscountHeaderBox">
        {((discount) => {
          const linkId = discount.banner.button.linkId
            ? `#${discount.banner.button.linkId}`
            : "";
          const link = `${discount.banner.button.link}${linkId}`;
          return (
            <div
              className="Home__DiscountHeaderTextBox"
              key={`${discount.title}${discount.button.link}`}
            >
              <div className="Home__DiscountHeaderHeader">{discount.title}</div>
              <div className="Home__DiscountHeaderSubHeader">
                {discount.banner.subTitle}
              </div>

              <div className="Home__DiscountHeaderText">
                {discount.banner.description}
              </div>
              <NavLink to={link} className="Home__DiscountHeaderButton">
                {discount.banner.button.text ?? "Les mer"}
              </NavLink>
            </div>
          );
        })(discountWithBanner)}
      </div>
    </div>
  );
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Skaug Media, foto og grafisk design"
        canonical={location.pathname}
      />
      {discountWithBanner && discountEl}
      <div
        className="top-cover-img"
        style={{ backgroundImage: `url(${cover})` }}
        alt="Familiefotografering"
      >
        <div className="top-cover-text-box">
          <h1 className="cover-headertext">Skaug Media</h1>
          <div className="cover-text">
            Fotograf og grafisk designer på Jessheim
          </div>
        </div>
      </div>
      <PageSection>
        <div className="Home__PhotographerSection">
          <div className="Home__PhotographerImgSection">
            <img
              className="Home__PhotographerImg"
              src={PhotographerImg}
              alt="Portrett av en fotograf"
            ></img>
          </div>
          <div className="Home__PhotographerTextSection">
            Hei,
            <br />
            jeg heter Nina Merethe Skaug og er fotograf og designer, som jobber
            med privatpersoner og næringsliv. Jeg tilbyr ikke fotografering i
            studio, og jeg jobber aller helst utendørs, men kommer også gjerne
            hjem til dere for fotografering. De fleste som booker meg som sin
            fotograf booker gravidfotografering, barnefotografering og
            konfirmantfotografering. <br />
            <br />
            Jeg gleder meg til å høre fra deg!
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="Home__IncludedSection">
          <div className="Home__IncludesText">
            Du kan booke kun fotografering, eller velge en pakkepris med
            bildeprodukter inkludert
          </div>
          <div className="Home__IncludesSubtext">
            (unntak er bryllupsfotografering, mitt første år-fotografering og
            gratis gravidfotografering)
          </div>
        </div>
      </PageSection>

      <PageSection
        outerClassName="regular-discounts-outer"
        innerClassName="regular-discounts"
      >
        <div className="free-pregnancy-row">
          <div className="free-pregnancy-textbox">
            <div className="free-pregnancy-header">HVER MÅNED</div>
            <div className="free-pregnancy-sub-header">
              GRATIS MINIFOTOGRAFERING AV GRAVIDE
            </div>
            <div className="free-pregnancy-next-date">
              Neste ledige dato: {freePregnancyDate.nextDate}
            </div>
            <div className="free-pregnancy-text">
              Hver måned setter jeg av en dato der jeg tilbyr GRATIS utendørs
              minifotografering av gravide som er i uke 30-36 av svangerskapet.
              Fotograferingen vil foregå på en utendørs lokasjon på Jessheim.
              <br />
              <br />
              Det er begrenset med kapasitet, så book tidlig!
            </div>
            <ActionButton to={DiscountRoute}>Les mer her</ActionButton>
          </div>
          <img
            className="free-pregnancy-img"
            src={freePregnancyShoot}
            alt="Gratis minifotografering av gravide"
          ></img>
        </div>

        <div className="Home__DiscountSection">
          <div className="Home__Discount_NewbornSquare">
            <img
              className="Home__Discount_NewbornImg"
              src={newbornDiscount}
              alt="Nyfødt baby"
            ></img>
            <div className="Home__Discount_NewbornTextBox">
              <div className="Home__Discount_NewbornHeader">GRATIS</div>
              <div className="Home__Discount_NewbornSubHeader">
                babyfotografering
              </div>
              <div className="Home__Discount_NewbornText">
                når babyen er 6-9 mnd,
                <br /> etter nyfødtfotografering
              </div>
              <ActionButton to={ContactRoute}>Book her</ActionButton>
            </div>
          </div>

          <div className="Home__Discount_OneYearSquare">
            <img
              className="Home__Discount_OneYearImg"
              src={OneYearDiscount}
              alt="1-åring"
            ></img>
            <div className="Home__Discount_OneYearTextBox">
              <div className="Home__Discount_OneYearHeader">ALLTID</div>
              <div className="Home__Discount_OneYearSubHeader">50%</div>
              <div className="Home__Discount_OneYearText">
                avslag på 1-års fotografering,
                <br /> etter nyfødtfotografering
              </div>
              <ActionButton to={ContactRoute}>Book her</ActionButton>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="Home__PortfolioSection">
          <div className="Home__PortfolioHeader">Min portefølje</div>
          <PortfolioBrowser>
            {portfolio.map((p) => (
              <PortfolioCard key={p.link} {...p} />
            ))}
          </PortfolioBrowser>
        </div>
      </PageSection>
      <PageSection outerClassName="myquote-outer" innerClassName="myquote">
        <div className="quote-section">
          <img className="quote-left-png" src={quotepng} alt="Quote icon"></img>
          <div className="quote-text">
            Jeg fokuserer på å få frem de magiske øyeblikkene og jeg er opptatt
            av at alle skal ha en fin opplevelse foran kamera. Som designer er
            jeg leken og eksperimentell, samtidig som jeg foretrekker rette
            linjer og et stramt gridsystem.
          </div>
          <img
            className="quote-right-png"
            src={quotepng}
            alt="Quote icon"
          ></img>
        </div>
      </PageSection>
    </>
  );
}

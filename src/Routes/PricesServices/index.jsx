import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import ContactRoute from "../Contact/Route";
import WeddingRoute from "../Wedding/Route";
import * as ids from "./Ids";
import pageName from "./PageName";
import "./Prices.css";
import Route from "./Route";
import PricePhoto from "/src/Images/Couple/coup_DL_4.jpg";
import DigitalImageImg from "/src/Images/Newborn/newborn_TG_2.jpg";

export function PricesServices() {
  const location = useLocation();

  if (!location.pathname.endsWith(Route)) {
    return <Outlet />;
  }

  const refs = Object.entries(ids).reduce(
    (acc, [key, id]) => ({ ...acc, [key]: { ref: useRef(), id: id } }),
    {},
  );
  const [open, setOpen] = useState({});
  useEffect(() => {
    const entry = Object.entries(refs).find(
      ([_key, { id }]) => location.hash === `#${id}`,
    );
    if (entry) {
      const [key, { ref }] = entry;
      ref.current?.scrollIntoView();
      if (!open[key]) {
        setOpen({ ...open, [key]: true });
      }
    }
  }, [location.hash]);

  const prices = [
    {
      name: "Gravidfotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Familiefotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Nyfødtfotografering",
      price: "kr. 1900,-",
    },
    {
      name: "Barnefotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Konfirmantfotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Mommy & me-fotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Parfotografering",
      price: "kr. 1700,-",
    },
    {
      name: "Profilbilder",
      price: "fra kr. 1500,-",
    },
    {
      name: "Bryllupsfotografering",
      price: "kr. 16.000,-",
    },
  ];

  return (
    <div className="prices-content">
      <SkaugHelmet
        title={pageName}
        description="Prisliste for fotografitjenester"
        canonical={location.pathname}
      />
      <PageSection innerClassName="prices">
        <DesignHeading h1 className="prices-heading">
          {pageName}
        </DesignHeading>
      </PageSection>
      <PageSection innerClassName="Prices__Section Prices__GiftcardSection">
        <h2 className="Prices__Header">Gavekort</h2>
        <div className="Prices__Text">
          Hos meg kan du kjøpe gaven til den som har alt- nemlig et gavekort!
          Perfekt for den kommende mammaen, besteforeldre som ønsker bilder av
          hele familien og alle de andre som ønsker å stoppe tiden! Gavekortet
          gjelder ikke for design-tjenestene mine. Du velger summen.
          <div className="Prices__TextAdditional">
            *Minstepris ved kjøp av gavekort er kr. 100,-
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__PriceListBox">
          <img src={PricePhoto} className="PhotoPrice__PriceListImg"></img>

          <div>
            {prices.map((p, i) => (
              <>
                <div className="PhotoPrice__PhotographyList" key={p.name}>
                  {p.name} {p.price}
                </div>
                {prices.length - 1 != i && (
                  <div className="PhotoPrice__BottomDivider PhotoPrice__BottomDividerPriceList"></div>
                )}
              </>
            ))}
            <div className="PhotoPrice__PriceListWedding">
              Les mer om de ulike bryllupspakkene
              <NavLink
                className="PhotoPrice__PriceListWeddingLink"
                to={`/${WeddingRoute}`}
              >
                her
              </NavLink>
              .
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="PhotoPrice__PriceInformation">
          Når du booker en fotografering hos meg, får du en avslappet og
          personlig opplevelse. Standard fotografering varer i 1 time, noe som
          gir god tid til å skape vakre bilder sammen. For nyfødtfotografering
          settes det av opptil 3 timer slik at vi kan ta oss god tid, inkludere
          pauser for amming og stell, og slippe stress.
          <br />
          <br />
          Jeg har ikke tilgang til studio, men for barnefotograferinger har jeg
          et lite, mobilt studiooppsett som kan settes opp hjemme hos dere hvis
          det er god nok plass. Dette oppsettet er dessverre ikke egnet for
          fotografering av voksne.
          <br />
          <br />
          Ved fotografering mer enn 20 km fra Jessheim tilkommer et kjøretillegg
          på kr. 10,- per km. Du kan velge en ferdig pakke som inkluderer både
          fotografering og et antall digitale bildefiler, eller booke
          fotografering og bestemme hvor mange bilder du ønsker å kjøpe i
          ettertid.
        </div>
      </PageSection>
      <PageSection>
        <h2 className="Prices__Header">Pakkepriser</h2>
        <div className="PhotoPrice__PackageBoxRow">
          <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package1">
            <div className="PhotoPrice__PackageBoxHeader">
              <div className="PhotoPrice__PackageBoxHeading">Bronseglimt</div>
              <div className="PhotoPrice__PackageBoxSubHeading"></div>
            </div>
            <div className="PhotoPrice__PackageBoxText">
              Valgfri fotografering
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              Online bildegalleri
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              10 høyoppløselige bildefiler
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxPrice">Kr. 8000,-</div>
          </div>
          <div className="PhotoPrice__ResponsiveDivider"></div>
          <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package2">
            <div className="PhotoPrice__PackageBoxHeader">
              <div className="PhotoPrice__PackageBoxHeading">Sølvglimt</div>
              <div className="PhotoPrice__PackageBoxSubHeading"></div>
            </div>
            <div className="PhotoPrice__PackageBoxText">
              Valgfri fotografering
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              Online bildegalleri
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              20 høyoppløselige bildefiler
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxPrice">Kr. 10.000,-</div>
          </div>
          <div className="PhotoPrice__ResponsiveDivider"></div>
          <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package3">
            <div className="PhotoPrice__PackageBoxHeader">
              <div className="PhotoPrice__PackageBoxHeading">Gullglimt</div>
              <div className="PhotoPrice__PackageBoxSubHeading"></div>
            </div>
            <div className="PhotoPrice__PackageBoxText">
              Valgfri fotografering
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              Online bildegalleri
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxText">
              30 høyoppløselige bildefiler
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxPrice">Kr. 12.500,-</div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <h2 className="Prices__Header">Digitale bildefiler</h2>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          reverse={true}
          imgSrc={DigitalImageImg}
          imgAlt="Familie med mor og to barn"
          title=""
          text={
            <div className="ProductPriceSection__Text">
              Det minste antallet digitale bildefiler du kan bestille er: pakken
              med 3 digitiale bildefiler. Etter kjøp av en bildepakke kan du
              kjøpe enkeltbilder for kr. 650,- per stk. Du får bildene du
              bestiller i både farger og sorthvitt.
            </div>
          }
          priceText1={
            <div className="ProductPriceSection__PriceText1">
              3 digitale filer
            </div>
          }
          price1={<div className="ProductPriceSection__Price">Kr. 3400,-</div>}
          priceText2={
            <div className="ProductPriceSection__PriceText">
              6 digitale filer
            </div>
          }
          price2={<div className="ProductPriceSection__Price">Kr. 4900,-</div>}
          priceText3={
            <div className="ProductPriceSection__PriceText">
              10 digitale filer
            </div>
          }
          price3={<div className="ProductPriceSection__Price">Kr. 6800,-</div>}
          priceText4={
            <div className="ProductPriceSection__PriceText">
              15 digitale filer
            </div>
          }
          price4={<div className="ProductPriceSection__Price">Kr. 8100,-</div>}
          priceText5={
            <div className="ProductPriceSection__PriceText">
              20 digitale filer
            </div>
          }
          price5={<div className="ProductPriceSection__Price">Kr. 9200,-</div>}
          priceText6={
            <div className="ProductPriceSection__PriceText">
              25 digitale filer
            </div>
          }
          price6={
            <div className="ProductPriceSection__Price">Kr. 10.400,-</div>
          }
          priceText7={
            <div className="ProductPriceSection__PriceText">
              30 digitale filer
            </div>
          }
          price7={
            <div className="ProductPriceSection__Price">Kr. 11.500,-</div>
          }
          priceText8={false}
          price8={false}
          priceText9={false}
          price9={false}
        />
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__BottomDivider"></div>
        <div className="PhotoPrice__BookingText">Ønsker du å booke?</div>
        <div style={{ margin: "1rem 0" }}>
          <NavLink
            className="PhotoPrice__BookingButton"
            to={`/${ContactRoute}`}
          >
            Trykk her for å booke!
          </NavLink>
        </div>
      </PageSection>
    </div>
  );
}

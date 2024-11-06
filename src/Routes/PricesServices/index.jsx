import { useEffect, useRef, useState } from "react";
import ContactRoute from "../Contact/Route";
import { ButtonLink } from "../../Components/ButtonLink";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import WeddingRoute from "../Wedding/Route";
import * as ids from "./Ids";
import pageName from "./PageName";
import "./Prices.css";
import Route from "./Route";

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

      <PageSection>
        <ul>
          {prices.map((p) => (
            <li key={p.name}>{p.name} {p.price}</li>
          ))}
        </ul>
        Les mer om de ulike bryllupspakkene <NavLink to={`/${WeddingRoute}`}>her</NavLink>.
      </PageSection>

      <PageSection>
        <div style={{ margin: "1rem 0" }}>
          <ButtonLink className="call-to-action" to={`/${ContactRoute}`}>Trykk her for å booke!</ButtonLink>
        </div>
      </PageSection>

      <PageSection innerClassName="Prices__Section">
        <h2 className="Prices__Header">Gavekort</h2>
        <div className="Prices__Text">
          Hos meg kan du kjøpe gaven til den som har alt- nemlig et gavekort!
          Perfekt for den kommende mammaen, besteforeldre som ønsker bilder av
          hele familien og alle de andre som ønsker å stoppe tiden! Gavekortet
          gjelder ikke for design-tjenestene mine.
          <div className="Prices__TextAdditional">
            *Minstepris ved kjøp av gavekort er kr. 100,-
          </div>
          <div className="Prices__PriceBox">
            <div className="Prices__PriceText">Valgfri sum</div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        Nina, skriv noe artig her.
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
            <div className="PhotoPrice__PackageBoxPrice">
              Kr. 8000,-
            </div>
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
    </div>
  );
}

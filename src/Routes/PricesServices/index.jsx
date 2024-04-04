import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { PortfolioBrowser } from "../../Components/PortfolioBrowser";
import { PortfolioCard } from "../../Components/PortfolioCard";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import WeddingRoute from "../Wedding/Route";
import * as ids from "./Ids";
import pageName from "./PageName";
import "./Prices.css";
import Route from "./Route";
import ChildrenButton from "/src/Images/Prices/children_button.jpg";
import ConfirmationButton from "/src/Images/Prices/confirmation_button.jpg";
import FamilyButton from "/src/Images/Prices/family_button.jpg";
import FirstYearButton from "/src/Images/Prices/firstyear_button.jpg";
import HeadshotsButton from "/src/Images/Prices/headshots_button.jpg";
import MaternityButton from "/src/Images/Prices/maternity_button.jpg";
import NewbornButton from "/src/Images/Prices/newborn_button.jpg";
import PhotoProductsButton from "/src/Images/Prices/photoproducts_button.jpg";
import WeddingButton from "/src/Images/Prices/wedding_button.jpg";
import ChildrenPageName from "/src/Routes/Children/PageName";
import ChildrenRoute from "/src/Routes/Children/Route";
import ConfirmationPageName from "/src/Routes/Confirmation/PageName";
import ConfirmationRoute from "/src/Routes/Confirmation/Route";
import FamilyPageName from "/src/Routes/Family/PageName";
import FamilyRoute from "/src/Routes/Family/Route";
import FirstYearPageName from "/src/Routes/FirstYear/PageName";
import FirstYearRoute from "/src/Routes/FirstYear/Route";
import HeadshotsPageName from "/src/Routes/Headshots/PageName";
import HeadshotsRoute from "/src/Routes/Headshots/Route";
import MaternityPageName from "/src/Routes/Maternity/PageName";
import MaternityRoute from "/src/Routes/Maternity/Route";
import NewbornPageName from "/src/Routes/Newborn/PageName";
import NewbornRoute from "/src/Routes/Newborn/Route";
import PhotoProductsPageName from "/src/Routes/PhotoProducts/PageName";
import PhotoProductsRoute from "/src/Routes/PhotoProducts/Route";
import WeddingPageName from "/src/Routes/Wedding/PageName";

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

  const priceSections = [
    {
      link: MaternityRoute,
      imgSrc: MaternityButton,
      title: MaternityPageName,
      imgAlt: MaternityPageName,
    },
    {
      link: FamilyRoute,
      imgSrc: FamilyButton,
      title: FamilyPageName,
      imgAlt: FamilyPageName,
    },
    {
      link: NewbornRoute,
      imgSrc: NewbornButton,
      title: NewbornPageName,
      imgAlt: NewbornPageName,
    },
    {
      link: ChildrenRoute,
      imgSrc: ChildrenButton,
      title: ChildrenPageName,
      imgAlt: ChildrenPageName,
    },
    {
      link: ConfirmationRoute,
      imgSrc: ConfirmationButton,
      title: ConfirmationPageName,
      imgAlt: ConfirmationPageName,
    },
    {
      link: WeddingRoute,
      imgSrc: WeddingButton,
      title: WeddingPageName,
      imgAlt: WeddingPageName,
    },
    {
      link: FirstYearRoute,
      imgSrc: FirstYearButton,
      title: FirstYearPageName,
      imgAlt: FirstYearPageName,
    },
    {
      link: HeadshotsRoute,
      imgSrc: HeadshotsButton,
      title: HeadshotsPageName,
      imgAlt: HeadshotsPageName,
    },
    {
      link: PhotoProductsRoute,
      imgSrc: PhotoProductsButton,
      title: PhotoProductsPageName,
      imgAlt: PhotoProductsPageName,
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
        <PortfolioBrowser>
          {priceSections.map((p) => (
            <PortfolioCard key={p.link} {...p} />
          ))}
        </PortfolioBrowser>
      </PageSection>

      <PageSection>
        <div className="Prices__BottomSection">
          <div className="Prices__TextIntroHeader">
            Ønsker du kun å booke fotografering?
          </div>
          <div className="Prices__TextIntro">
            Du kan velge å booke kun fotografering inkludert en visningstime i
            etterkant av fotograferingen, eller du kan velge en pakkepris med
            fotografering og bildeprodukter inkludert.
          </div>
          <div className="Prices__TextIntroHeader">
            Ønsker du å booke en minifotografering?
          </div>
          <div className="Prices__TextIntro">
            Du kan velge å booke en valgfri minifotografering, inkludert 3
            digitale bildefiler. En slik minifotografering gjelder ikke for
            nyfødfotografering hjemme hos dere, eller bryllupsfotografering. En
            minifotografering har en fast pris på kr. 1400,- (Unntak ved
            spesialtilbud)
          </div>
          <div className="Prices__TextIntroHeader">Ønsker du delbetaling?</div>
          <div className="Prices__TextIntro">
            Du kan nå velge å delbetale om du ønsker dette, men ingen
            bildeprodukter vil bli utlevert før siste faktura er betalt. Si ifra
            når du legger inn booking, hvis du ønsker dette.
          </div>
          <div className="Prices__TextIntroHeader">
            Ønsker du fotografering etter kl. 16.00 på en hverdag?
          </div>
          <div className="Prices__TextIntro">
            Etter kl. 16.00 på en hverdag vil det alltid tilkomme et tillegg på
            kr. 400,- for alle fotograferinger.
          </div>

          <div className="Prices__TextIntroHeader">
            Ønsker du fotografering i en helg eller på en helligdag?
          </div>
          <div className="Prices__TextIntro">
            Alle helger og helligdager vil det tilkomme et helgetillegg på kr.
            700,- (unntak ved bryllupsfotografering og ved fastsatte
            minifotograferinger med dato i helg)
          </div>
          <div className="Prices__TextIntroHeader">
            Ønsker du at jeg skal komme til deg?
          </div>
          <div className="Prices__TextIntro">
            Jeg kommer gjerne til deg, men all kjøring utover 30km fra Jessheim,
            vil faktureres med kr. 10,- per km. I tillegg vil betalt parkering
            under fotograferingen faktureres i sin helhet.
          </div>
        </div>
      </PageSection>
    </div>
  );
}

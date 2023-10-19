import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Collapsible } from "../../Components/Collapsible";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { PriceSection } from "../../Components/PriceSection";
import { NavLink } from "react-router-dom";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { Underline } from "../../Components/Underline";
import { WeddingSection } from "../../Components/WeddingSection";
import { priceList } from "../../Data/priceList";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { isWithinRange, localTime } from "../../utils";
import { IncludesList } from "../../Components/IncludesList";
import * as ids from "./Ids";
import pageName from "./PageName";
import PricesProductsRoute from "../PricesProducts/Route";
import "./Prices.css";
import * as minishoot from "./minishoots";
import BabyImg from "/src/Images/Prices/babyphotography.jpg";
import ConfirmationImg from "/src/Images/Prices/confirmation_photography.jpg";
import CoupleImg from "/src/Images/Prices/couple_photography.jpg";
import FamilyImg from "/src/Images/Prices/family_photography.jpg";
import Headshot1Img from "/src/Images/Prices/headshot_1.jpg";
import Headshot2Img from "/src/Images/Prices/headshot_2.jpg";
import NewbornImg from "/src/Images/Prices/newborn_photography.jpg";
import PregnantImg from "/src/Images/Prices/pregnancy_photography.jpg";
import WeddingImg from "/src/Images/Prices/wedding.jpg";
import ServicesImg from "/src/Images/Prices/prices.jpg";
import ProductImg from "/src/Images/Prices/photocopy.jpg";
import OneYearImg from "/src/Images/Prices/oneyear_photography.jpg";
import PortraitImg from "/src/Images/Prices/headshot_2.jpg";
import { Tabs } from "../../Components/Tabs";

export function PricesServices() {
  useDocumentTitle(pageName);
  const location = useLocation();
  const refs = Object.entries(ids).reduce(
    (acc, [key, id]) => ({ ...acc, [key]: { ref: useRef(), id: id } }),
    {}
  );
  const [open, setOpen] = useState({});
  useEffect(() => {
    const entry = Object.entries(refs).find(
      ([key, { id }]) => location.hash === `#${id}`
    );
    if (entry) {
      const [key, { ref }] = entry;
      ref.current?.scrollIntoView();
      if (!open[key]) {
        setOpen({ ...open, [key]: true });
      }
    }
  }, [location.hash]);
  const minishootsOpts = {
    siblings: {
      ref: refs.miniSessionSiblings.ref,
      open: open.miniSessionSiblings,
    },
    confirmation: {
      ref: refs.miniSessionConfirmation.ref,
      open: open.miniSessionConfirmation,
    },
    minisessions: {
      ref: refs.miniSessionMinisessions.ref,
      open: open.miniSessionMinisessions,
    },
    sunflower: {
      ref: refs.miniSessionSunflower.ref,
      open: open.miniSessionSunflower,
    },
    christmas: {
      ref: refs.miniSessionChristmas.ref,
      open: open.miniSessionChristmas,
    },
  };

  const [serviceState, setServiceState] = useState(null);
  const [productState, setProductState] = useState(null);

  const now = new Date();
  const miniSessionElements = [
    {
      el: () => minishoot.confirmation(minishootsOpts.confirmation),
      validFrom: localTime("20-08-2023 00:00"),
      validTo: localTime("26-08-2023 00:00"),
    },
    {
      el: () => minishoot.christmas(minishootsOpts.christmas),
      validFrom: localTime("23-08-2023 00:00"),
      validTo: localTime("21-10-2023 00:00"),
    },
  ].filter((s) => isWithinRange(s.validFrom, now, s.validTo));

  const serviceBackArrow = (
    <button onClick={() => setServiceState(null)}>{"<-"}</button>
  );
  const childServices = (
    <div>
      <div className="Prices__Content">
        {serviceBackArrow}
        <div className="Prices__TabsTitleKids">Barn</div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Nyfødt",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    Jeg anbefaler å ha nyfødtfotografering innen babyen har fylt
                    14 dager, men det går også fint etter dette om tiden ikke
                    strekker til. Husk bare på at jo eldre babyen blir, jo mer
                    våken blir den. Jeg har et lite utvalg av rekvisitter og
                    klær som passer til nyfødtfotograferingen, lån av disse er
                    inkludert i prisen. Denne fotograferingen inkluderer også
                    bilder med foreldre og søsken.
                    <p className="Prices__TabsContentTextOffer">
                      Ved booking av nyfødtfotografering, får man 50% avslag på
                      1-års fotografering.
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avtale antrekk og
                      lokasjon
                      <br />- Opptil 2-3 timer fotografering hjemme hos dere
                      (jeg tar med enkel styling og lys)
                      <br />- Bilder sammen med foreldre og søsken
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={NewbornImg}
                  title="Nyfødt baby med bamse"
                />
              </div>
            ),
          },
          {
            title: "1-årsfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    En viktig milepæl i ditt barns liv nærmer seg, og det er på
                    tide å fange de uforglemmelige øyeblikkene som markerer det
                    første året. Jeg anbefaler at 1-årsfotografering
                    gjennomføres rundt din baby's første bursdag, da dette ofte
                    er en tid fylt med smil, latter og nysgjerrighet. Likevel,
                    hvis tiden ikke strekker til og du ønsker å dokumentere
                    dette spesielle øyeblikket senere, er det også mulig. Det
                    vil være mulig å velge 1-års fotografering med eller uten
                    cake-smash.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Mulighet for lån av klær
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                      <br />- Valget om man ønsker cake-smash eller ikke
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={OneYearImg}
                  title="1-åring utendørs som koser seg med kake"
                />
              </div>
            ),
          },
          {
            title: "Barnefotografering (fra 6mnd)",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    En spennende reise begynner fra tidlig barndom til ung
                    voksen alder, det er ideelt å fotografere barnet ditt
                    jevnlig for å fange deres utvikling, men jeg forstår at
                    tiden kan være begrenset. Derfor tilbyr jeg
                    barnefotografering for alle alderstrinn, helt fra de er fylt
                    seks måneder og opp til konfirmasjonstid. Hver alderstrinn
                    har sin egen unike sjarm og personlighet, og jeg er dedikert
                    til å fange disse øyeblikkene på en måte som er autentisk og
                    meningsfull for deg.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Mulighet for lån av klær
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={BabyImg}
                  title="Baby utendørs i blomstereng"
                />
              </div>
            ),
          },
        ]}
        contentClassName=""
      />
    </div>
  );

  const portraitServices = (
    <div>
      <div className="Prices__Content">
        {serviceBackArrow}
        <div className="Prices__TabsTitlePortrait">Portrett</div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Portrett",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    Uansett om du er i ungdommen, midten av livet eller i en
                    spesiell fase av livet, som for eksempel forlovelse eller
                    graviditet, har hvert alderstrinn sin egen unike sjarm og
                    personlighet. Jeg er dedikert til å fange disse øyeblikkene
                    på en måte som er autentisk og meningsfull for deg.
                    Portrettfotografering handler om å reflektere din
                    personlighet, historie og følelser gjennom bilder. Hvert
                    øyeblikk jeg fanger, gir deg en mulighet til å se tilbake og
                    gjenoppleve disse viktige stadiene av livet ditt.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                      <br />- Mulighet for å booke time hos makeup-artist
                      LashBrowser før fotograferingen
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                  <img
                    className="Prices__TabsContentImg"
                    src={PortraitImg}
                    title="Portrett av en mann i naturen"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "Gravid",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    Graviditeten er en reise fylt med spennende forandringer og
                    forventning, og fra uke 30 kommer den endelige etappen i
                    denne bemerkelsesverdige reisen. Hvert stadium av
                    graviditeten har sin egen spesielle sjarm og skjønnhet, og i
                    denne fasen av graviditeten uttrykker du styrken og
                    skjønnheten ved å bære ditt kommende barn.
                    <p className="Prices__TabsContentTextOffer">
                      Ved booking og gjennomføring av ordinær
                      gravidfotografering, får du 50% rabatt på
                      nyfødtfotografering. Hver måned tilbyr jeg også en dato
                      med minifotografering av gravide.
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Mulighet for lån av gravidkjoler og hårtilbehør
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                      <br />- Bilder sammen med partner og barn
                      <br />- Mulighet for å booke time hos makeup-artist
                      LashBrowser før fotograferingen
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={OneYearImg}
                  title="1-åring utendørs som koser seg med kake"
                />
              </div>
            ),
          },
          {
            title: "Konfirmant",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    Konfirmantfotografering gir deg muligheten til å fange
                    øyeblikkene som definerer denne viktige tiden i livet ditt.
                    Uavhengig av om det er en tid preget av refleksjon, spenning
                    eller feiring, har hvert øyeblikk sin egen spesielle
                    betydning. Jeg er dedikert til å hjelpe deg med å bevare
                    denne overgangen til ung voksen alder på en måte som er
                    autentisk og meningsfull for deg. Gjennom mine bilder kan du
                    se tilbake på denne spesielle tiden og gjenoppleve
                    øyeblikkene som markerer din reise mot selvstendighet.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter
                      <br />- Mulighet for å booke time hos makeup-artist
                      LashBrowser før fotograferingen
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={BabyImg}
                  title="Baby utendørs i blomstereng"
                />
              </div>
            ),
          },
          {
            title: "Headshots / CV-foto",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentText">
                    Å søke etter jobber og karriereveier er en viktig reise, og
                    hvert øyeblikk på vei til din profesjonelle suksess har sin
                    egen unike betydning. CV-fotografering gir deg muligheten
                    til å fange bildet som representerer deg på din aller beste
                    måte. Min CV-fotografering inkluderer en 30-minutters økt,
                    hvor vi tar oss tid til å fange det beste av deg. Du vil
                    motta et digitalt bilde i både farger og sorthvitt, slik at
                    du kan velge det som passer best til din CV og profesjonelle
                    nettverk.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Opptil 30 minutter fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- 1 digital bildefil, levert i både farger og
                      sorthvitt
                      <br />- Mulighet for å booke time hos makeup-artist
                      LashBrowser før fotograferingen
                    </p>
                    <p className="Prices__TabsContentTextFees">
                      Kveldstillegg etter kl. 16.00: kr. 400,-
                      <br />
                      Helgetillegg: kr. 700,-
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={BabyImg}
                  title="Baby utendørs i blomstereng"
                />
              </div>
            ),
          },
        ]}
        contentClassName=""
      />
    </div>
  );

  const servicesMenu = (
    <div className="Prices__ButtonPricelistRow">
      <div className="Prices__ButtonPricelist">
        <button className="btn" onClick={() => setServiceState("child")}>
          <div className="backdrop color1"></div>
          <div className="text">
            <div className="Prices__ButtonText">Barn</div>
            <div className="Prices__ButtonSubText">fra kr. 1700,-</div>
          </div>
        </button>
        <button className="btn" onClick={() => setServiceState("portrait")}>
          <div className="backdrop color2"></div>
          <div className="text">
            <div className="Prices__ButtonText">Portrett</div>
            <div className="Prices__ButtonSubText">fra kr. 1000,-</div>
          </div>
        </button>
        <button className="btn" onClick={() => setServiceState("family")}>
          <div className="backdrop color3"></div>
          <div className="text">
            <div className="Prices__ButtonText">Familie</div>
            <div className="Prices__ButtonSubText">fra kr. 1700,-</div>
          </div>
        </button>
        <NavLink className="btn" to={`/${PricesProductsRoute}`}>
          <div className="backdrop color4"></div>
          <div className="text">
            <div className="Prices__ButtonText">Bryllup</div>
            <div className="Prices__ButtonSubText">fra kr. 16.000,-</div>
          </div>
        </NavLink>
        <button className="btn" onClick={() => setServiceState("businesses")}>
          <div className="backdrop color5"></div>
          <div className="text">
            <div className="Prices__ButtonText">Bedrifter og næringsliv</div>
            <div></div>
          </div>
        </button>
        <button className="btn" onClick={() => setServiceState("design")}>
          <div className="backdrop color6"></div>
          <div className="text">
            <div className="Prices__ButtonText">Design</div>
            <div></div>
          </div>
        </button>
      </div>

      <img
        className="Prices__ServicesImg"
        src={ServicesImg}
        alt="Gravid kvinne"
      ></img>
    </div>
  );

  const productBackArrow = (
    <button onClick={() => setProductState(null)}>{"<-"}</button>
  );
  const productMenu = (
    <div className="Prices__ButtonPricelistRow">
      <img
        className="Prices__ProductsImg"
        src={ProductImg}
        alt="Bildekopi"
      ></img>
      <div className="Prices__ButtonPricelist">
        <button className="btn" onClick={() => setProductState("photocopies")}>
          <div className="backdrop color1"></div>
          <div className="text">
            <div className="Prices__ButtonText">Bildekopier</div>
            <div className="Prices__ButtonSubText">fra kr. 500,-</div>
          </div>
        </button>
        <button className="btn" onClick={() => setProductState("wallphotos")}>
          <div className="backdrop color2"></div>
          <div className="text">
            <div className="Prices__ButtonText">Veggbilder</div>
            <div className="Prices__ButtonSubText">fra kr. 2000,-</div>
          </div>
        </button>
        <button className="btn" onClick={() => setProductState("album")}>
          <div className="backdrop color3"></div>
          <div className="text">
            <div className="Prices__ButtonText">Album</div>
            <div className="Prices__ButtonSubText">fra kr. 5000,-</div>
          </div>
        </button>
        <button
          className="btn"
          onClick={() => setProductState("digitalCopies")}
        >
          <div className="backdrop color4"></div>
          <div className="text">
            <div className="Prices__ButtonText">Digitale bildefiler</div>
            <div className="Prices__ButtonSubText">fra kr. 650,-</div>
          </div>
        </button>
        <button className="btn" onClick={() => setProductState("printables")}>
          <div className="backdrop color5"></div>
          <div className="text">
            <div className="Prices__ButtonText">Pakke med trykksaker</div>
            <div></div>
          </div>
        </button>
      </div>
    </div>
  );

  const photocopiesProduct = (
    <div>
      {productBackArrow}
      <div>photocopies</div>
    </div>
  );

  const wallPhotoProduct = (
    <div>
      {productBackArrow}
      <div>wallphotos</div>
    </div>
  );

  const albumProduct = (
    <div>
      {productBackArrow}
      <div>album</div>
    </div>
  );

  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        <PageSection innerClassName="Prices__Section">
          <div className="Prices__Header">Gavekort</div>
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
          <div className="Prices__Header">Fotografering og design</div>
          {(() => {
            switch (serviceState) {
              case "child":
                return childServices;
              case "portrait":
                return portraitServices;
              case "family":
                return familyServices;
              case "businesses":
                return businessServices;
              case "design":
                return designServices;
              default:
                return servicesMenu;
            }
          })()}
        </PageSection>

        <PageSection>
          <div className="Prices__Header">Bildeprodukter</div>
          {(() => {
            switch (productState) {
              case "photocopies":
                return photocopiesProduct;
              case "wallphotos":
                return wallPhotoProduct;
              case "album":
                return albumProduct;
              case "digitalCopies":
                return digitalCopiesProduct;
              case "printables":
                return printablesProduct;
              default:
                return productMenu;
            }
          })()}
        </PageSection>
        <br />

        <div className="Prices__TopSection">
          <div className="Prices__TextIntroHeader">
            Inkludert i alle mine fotograferinger:
          </div>

          <IncludesList
            className="Prices__TextIntroIncludes"
            items={[
              "Inkludert i alle mine fotograferinger er et digitalt bildegalleri hvor man selv kan velge bilder fra. (unntak ved bryllupsfotografering)",
              "Ingen bilder er inkludert i prisen med mindre annet er spesifisert, se egne priser på produkter lenger ned på siden",
              "Mulighet for å booke time hos makeup-artist LashBrowser før fotograferingen",
              "Opptil 1 time fotografering (unntak ved bryllup, nyfødt og minifotografering)",
              "Du vil motta en mail med informasjon om din fotografering på forhånd",
            ]}
          />

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
            700,- (unntak ved bryllupsfotografering og ved minifotograferinger i
            helger)
          </div>
          <div className="Prices__TextIntroHeader">
            Ønsker du at jeg skal komme til deg?{" "}
          </div>
          <div className="Prices__TextIntro">
            Jeg kommer gjerne til deg, men all kjøring utover 30km fra Jessheim,
            vil faktureres med kr. 10,- per km. I tillegg vil betalt parkering
            under fotograferingen vil faktureres i sin helhet.{" "}
          </div>
        </div>

        {/* <PageSection>
          <PriceSection
            outerClassName="Prices__Outer"
            innerClassName="Prices__Inner"
            imgSrc1={NewbornImg}
            imgAlt1="En nyfødt baby"
            imgSrc2={BabyImg}
            imgAlt2="En baby"
            title={<div className="PriceSection__Header">Barn</div>}
            price={<div className="PriceSection__PriceBox">Kr. 1700,-</div>}
            text={
              <div className="PriceSection__Text">
                Å fange øyeblikkene av de minste er så koselig, og hos meg
                handler det ikke bare om å fotografere. For meg handler det om å
                skape kunstverk som vil verdsettes i generasjoner fremover. Jeg
                fotograferer nyfødte, babyer fra 6mnd og helt opp til barna blir
                voksne, i tillegg til barnehagefotografering.
              </div>
            }
            link="http://localhost:5173/kontakt"
          />

          <PriceSection
            outerClassName="Prices__Outer"
            innerClassName="Prices__Inner"
            imgSrc1={PregnantImg}
            imgAlt1="En gravid kvinne"
            imgSrc2={ConfirmationImg}
            imgAlt2="En flott konfirmant"
            title={<div className="PriceSection__Header">Portrett</div>}
            price={<div className="PriceSection__PriceBox">Kr. 1550,-</div>}
            reverse={true}
            text={
              <div className="PriceSection__Text">
                Mitt mål er å fange essensen av hver unike person gjennom
                bilder, og jeg ønsker å skape bilder som reflekterer din
                personlighet. Jeg er opptatt av at du skal føle deg fin og
                komfortabel foran kamera. Under portrettfotografering finner du
                gravidfotografering, konfirmantfotografering og andre
                portrettfotograferinger.
              </div>
            }
            link="http://localhost:5173/kontakt"
          />

          <PriceSection
            outerClassName="Prices__Outer"
            innerClassName="Prices__Inner"
            imgSrc1={FamilyImg}
            imgAlt1="En herlig gutt som leker med sin far"
            imgSrc2={CoupleImg}
            imgAlt2="Et nydelig par"
            title={<div className="PriceSection__Header">Familie og par</div>}
            price={<div className="PriceSection__PriceBox">Kr. 1700,-</div>}
            text={
              <div className="PriceSection__Text">
                Jeg er opptatt av å fange spennende øyeblikk under en
                familiefotografering, og de romantiske øyeblikkene under en
                parfotografering. En familiefotografering kan være med den
                nærmeste familien, eller den kan bli enda mer spesiell med
                besteforeldre og resten av familien.
              </div>
            }
            link="http://localhost:5173/kontakt"
          />

          <PriceSection
            outerClassName="Prices__Outer"
            innerClassName="Prices__Inner"
            imgSrc1={Headshot1Img}
            imgAlt1="Et profesjonelt portrett av en kvinne"
            imgSrc2={Headshot2Img}
            imgAlt2="Et profesjonelt portrett av en mann"
            title={
              <div className="PriceSection__Header">
                Profesjonelle portretter
              </div>
            }
            price={<div className="PriceSection__PriceBox">Kr. 1000,-</div>}
            reverse={true}
            text={
              <div className="PriceSection__Text">
                Fotograferingen som passer deg som trenger nytt profilbilde til
                sosiale medier eller til din CV. Jeg holder av 20 minutter til
                fotograferingen, som gjennomføres ute på lokasjon. Inkludert i
                denne fotograferingen er 1 digital bildefil, levert i både
                farger og sorthvitt.
              </div>
            }
            link="http://localhost:5173/kontakt"
          />

          <div className="Prices__WeddingPackageSection">
            <WeddingSection
              outerClassName="Prices__Outer"
              innerClassName="Prices__Inner"
              title1={
                <div className="WeddingSection__Header">Bryllupspakke 1</div>
              }
              price1={
                <div className="WeddingSection__PriceBox">Kr. 16.000,-</div>
              }
              text1={
                <div className="WeddingSection__Text">
                  Dette er en ypperlig pakke for dere som kun ønsker fotografen
                  tilstede under vielsen og for å forevige portrettene deres.
                  Jeg er med dere på de viktigste øyeblikkene på deres store
                  dag, og fanger de magiske øyeblikkene når dere sier JA til
                  hverandre.
                  <p /> Vi setter av tid til et planleggingsmøte i god tid før
                  den store dagen, der vi snakker om deres ønsker til bildene og
                  for å bli litt kjent med hverandre.
                  <p />
                  Inkluderer:
                  <IncludesList
                    items={[
                      "Planleggingsmøte i god tid før den store dagen",
                      "3 timer fotografering",
                      "Fotografering under vielsen og portrettfotografering før eller etter vielsen",
                      "Ca. 70 stk. digitale bildefiler i høy oppløsning",
                      "Online bildegalleri hvor dere kan laste ned bildene",
                      "Mulighet for å kjøpe bildeprodukter",
                      "50% rabatt på forlovelsesfotografering i forkant av bryllupet",
                    ]}
                  />
                </div>
              }
              title2={
                <div className="WeddingSection__Header">Bryllupspakke 2</div>
              }
              price2={
                <div className="WeddingSection__PriceBox">Kr. 24.000,-</div>
              }
              text2={
                <div className="WeddingSection__Text">
                  Dette er pakken for dere som ønsker bilder fra litt mer enn
                  bare seremonien og bryllupsportrettene. Dere velger om jeg
                  skal fotografere dere under forberedelsene eller når dere
                  ankommer festen, i tillegg til at jeg fotograferer seremonien
                  og bryllupsportrettene før eller etter vielsen. <p />
                  Vi setter av tid til et planleggingsmøte i god tid før den
                  store dagen, der vi snakker om deres ønsker til bildene og for
                  å bli litt kjent med hverandre. I denne pakken er også
                  forlovelsesfotografering inkludert, der dere får velge 5 stk.
                  bilder i høy oppløsning.
                  <p />
                  Inkluderer:
                  <IncludesList
                    items={[
                      "Planleggingsmøte i god tid før den store dagen",
                      "5 timer fotografering",
                      "Fotografering under vielsen, portrettfotografering og fotografering av forberedelser eller når dere ankommer festen",
                      "Ca. 150 stk. digitale bildefiler i høy oppløsning",
                      "Online bildegalleri hvor dere kan laste ned bildene",
                      "Mulighet for å kjøpe bildeprodukter",
                      "Forlovelsesfotografering inkludert 5 stk. bilder i høy oppløsning",
                    ]}
                  />
                </div>
              }
            />
          </div>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            innerClassName="Prices__Inner"
            imgSrc={WeddingImg}
            imgAlt="Brudepar på vei ut av kirken"
            reverse={true}
            title={
              <div className="ProductPriceSection__Header">Bryllupspakke 3</div>
            }
            text={
              <div className="ProductPriceSection__Text">
                Denne dagen er en milepæl i deres kjærlighetshistorie, og jeg
                vil med veiledning fra dere legge min sjel i å hjelpe dere med å
                lage deres drømmedag. Jeg designer deres invitasjoner, takkekort
                og menyer før den store dagen, i tillegg til at jeg fotograferer
                under vielsen, portretter og under forberedelsene eller når dere
                ankommer festen. <p />
                Med denne pakken kan du nyte hvert øyeblikk av din store dag, og
                vite at jeg vil fange de perfekte øyeblikkene og hjelpe dere med
                å skape en minneverdig helhetsopplevelse for deg og dine
                gjester.
                <p />
                Inkluderer:
                <IncludesList
                  items={[
                    "Veiledningsmøter underveis i designprosessen",
                    "20 stk. doble invitasjoner (mulighet for å bestille fler)",
                    "20 stk. doble takkekort (mulighet for bestille fler)",
                    "Mulighet for å bestille flere trykksaker i samme design",
                    "Planleggingsmøte i god tid før den store dagen",
                    "5 timer fotografering",
                    "Fotografering under vielsen, portrettfotografering og fotografering av forberedelser eller når dere ankommer festen",
                    "Ca. 150 stk. digitale bildefiler i høy oppløsning",
                    "Online bildegalleri hvor dere kan laste ned bildene",
                    "Mulighet for å kjøpe bildeprodukter",
                    "Forlovelsesfotografering inkludert 5 stk. bilder i høy oppløsning",
                  ]}
                />
              </div>
            }
            priceText1={false}
            price1={false}
            priceText2={false}
            price2={false}
            priceText3={false}
            price3={false}
            priceText4={false}
            price4={false}
            priceText5={false}
          />

          <div className="CompanyPrice__Section">
            <div className="CompanyPrice__Header">
              For bedrifter og næringsliv
            </div>
            <div className="CompanyPrice__Textbox">
              <div className="CompanyPrice__Text">
                Jeg tilbyr en rekke ulike tjenester for bedrifter og næringsliv,
                både innen foto og design.
                <p />
                Blandt annet har jeg spesialisert meg på matfotografering og
                produktfotografering, og har tidligere jobbet som assistent for
                matfotograf Synøve Dreyer. Om din bedrift trenger bilder av
                produkter eller mat, ta gjerne kontakt. Og om dere trenger
                portrettbilder av deres ansatte, kan jeg tilby dere gunstige
                pakkepriser på portretter.
                <p />
                Jobber du i barnehage, er det bare å ta kontakt om du ønsker at
                jeg skal fotografere deres barnehage. Ta kontakt, så tar vi en
                uforpliktende prat! I 2023 har jeg fotografert gruppebilder,
                søskenbilder og portretter i en rekke barnehager i Ullensaker.
                <p />
                Driver du en bedrift, vet du sikkert at det er viktig med en
                helhetlig visuell profil eller et veletablert brand. Dette er en
                av design-tjenestene jeg tilbyr, jeg kan sette sammen en
                komplett visuell identitet som er skreddersydd for akkurat din
                bedrift- og du velger helt selv hvor mange elementer og hva
                slags elementer profilen skal bestå av. Jeg veileder dere og
                kommer gjerne med tips til hva slags elementer dere burde
                inkludere, men valget er deres!
                <p />
                Jeg kan tilby ulike tjenester, alt etter hva dere har behov for.
                Ta kontakt, så tar vi en uforpliktende prat om hva dere trenger
                og et prisestimat på et slikt oppdrag.
              </div>
            </div>
            <div className="CompanyPrice__Info">
              <div>Produktfotografering</div>
              <div>Portrettfotografering</div>
              <div>Matfotografering</div>
              <div>Barnehagefotografering</div>
              <div>Visuell identitet / Branding</div>
              <div>Logo-design</div>
              <div>UX-design</div>
              <div>Annet design</div>
            </div>
          </div>
        </PageSection> */}
      </div>
    </PageSection>
  );
}

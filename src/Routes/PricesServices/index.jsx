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
import PricesProductsRoute from "../Wedding/Route";
import "./Prices.css";
import * as minishoot from "./minishoots";
import BabyImg from "/src/Images/Prices/babyphotography.jpg";
import ConfirmationImg from "/src/Images/Prices/confirmation_photography.jpg";
import CoupleImg from "/src/Images/Prices/couple_photography.jpg";
import FamilyImg from "/src/Images/Prices/family_photography.jpg";
import Headshot1Img from "/src/Images/Prices/headshot_1.jpg";
import NewbornImg from "/src/Images/Prices/newborn_photography.jpg";
import PregnantImg from "/src/Images/Prices/pregnancy_photography.jpg";
import WeddingImg from "/src/Images/Prices/wedding.jpg";
import ServicesImg from "/src/Images/Prices/prices.jpg";
import PhotoProductImg from "/src/Images/Prices/photocopy.jpg";
import OneYearImg from "/src/Images/Prices/oneyear_photography.jpg";
import PortraitImg from "/src/Images/Prices/headshot_2.jpg";
import SiblingImg from "/src/Images/Prices/sibling_photography.jpg";
import MommyAndMeImg from "/src/Images/Prices/mommyandme_photography.jpg";
import FoodImg from "/src/Images/Prices/food_photography.jpg";
import ProductImg from "/src/Images/Prices/product_photography.jpg";
import BusinessPortraitImg from "/src/Images/Prices/business_portrait_photography.jpg";
import KindergardenImg from "/src/Images/Prices/kindergarten_photography.jpg";
import BrandingImg from "/src/Images/Prices/branding.jpg";
import UXDesignImg from "/src/Images/Prices/uxdesign.jpg";
import LogoDesignImg from "/src/Images/Prices/logo_design.jpg";
import AnnetDesignImg from "/src/Images/Prices/annet_design.jpg";
import DigitalCopyImg from "/src/Images/Prices/digital_files.jpg";
import WallPhotosImg from "/src/Images/Prices/canvas.jpg";
import AlbumImg from "/src/Images/Prices/album.jpg";
import PrintablesImg from "/src/Images/Prices/designpack.jpg";
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
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Nyfødtfotografering
                    </div>
                    <div className="Prices__TabsContentPriceKidsCopies">
                      Kr. 1700,-
                    </div>
                  </div>
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
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      1-års fotografering
                    </div>
                    <div className="Prices__TabsContentPriceKidsCopies">
                      Kr. 1700,-
                    </div>
                  </div>
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
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Barnefotografering (fra 6 mnd)
                    </div>
                    <div className="Prices__TabsContentPriceKidsCopies">
                      Kr. 1700,-
                    </div>
                  </div>
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
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Portrettfotografering
                    </div>
                    <div className="Prices__TabsContentPricePortraitWallphotos">
                      Kr. 1550,-
                    </div>
                  </div>
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
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={PortraitImg}
                  title="Portrett av en mann i naturen"
                />
              </div>
            ),
          },
          {
            title: "Gravid",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Gravidfotografering
                    </div>
                    <div className="Prices__TabsContentPricePortraitWallphotos">
                      Kr. 1550,-
                    </div>
                  </div>
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
                  src={PregnantImg}
                  title="Gravid kvinne i en sofa"
                />
              </div>
            ),
          },
          {
            title: "Konfirmant",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Konfirmantfotografering
                    </div>
                    <div className="Prices__TabsContentPricePortraitWallphotos">
                      Kr. 1550,-
                    </div>
                  </div>
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
                  src={ConfirmationImg}
                  title="Konfirmant i bunad"
                />
              </div>
            ),
          },
          {
            title: "Headshots / Profilbilde / CV-foto",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Headshots / Profilbilde / CV-foto
                    </div>
                    <div className="Prices__TabsContentPricePortraitWallphotos">
                      Kr. 1000,-
                    </div>
                  </div>
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
                  src={Headshot1Img}
                  title="Portrett av en kvinne på Operataket"
                />
              </div>
            ),
          },
        ]}
        contentClassName=""
      />
    </div>
  );

  const familyServices = (
    <div>
      <div className="Prices__Content">
        {serviceBackArrow}
        <div className="Prices__TabsTitleFamily">Familie</div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Familiefotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Familiefotografering
                    </div>
                    <div className="Prices__TabsContentPriceFamilyAlbum">
                      Kr. 1700,-
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    Familien er hjertet av livet ditt, og hvert øyeblikk sammen
                    utgjør en unik del av din reise. Familiefotografering gir
                    deg muligheten til å fange disse øyeblikkene som definerer
                    din families historie. Det handler om å formidle kjærlighet,
                    samhørighet og øyeblikk som skaper de mest dyrebare minnene.
                    Familiefotografering handler om å fange øyeblikkene som
                    definerer din families historie, uansett om det er en
                    spontan lek i parken, en hengivenhetserklæring eller en
                    enkel sammenkomst. Gjennom vårt samarbeid vil vi skape
                    minner som vil bli verdsatt i generasjoner fremover.
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
                  src={FamilyImg}
                  title="Far og sønn som leker i skogen"
                />
              </div>
            ),
          },
          {
            title: "Søskenfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Søskenfotografering
                    </div>
                    <div className="Prices__TabsContentPriceFamilyAlbum">
                      Kr. 1700,-
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    Søsken er de som deler din livsreise fra begynnelsen, og
                    hvert øyeblikk sammen utgjør en helt spesiell del av deres
                    historie. Søskenfotografering gir dere muligheten til å
                    fange disse øyeblikkene som definerer båndet mellom søsken.
                    Det handler om å formidle kjærlighet, lek og den unike
                    forbindelsen som de deler. Uavhengig av om det er spontane
                    leker i hagen, deling av hemmeligheter eller kos i sofaen,
                    har hvert øyeblikk mellom søsken sin egen unike betydning.
                    Søskenfotografering er en mulighet til å fange disse
                    øyeblikkene som definerer deres relasjon, og som vil skape
                    dyrebare minner for dere i årene som kommer.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Fotografering med 2 eller flere søsken
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
                  src={SiblingImg}
                  title="Brødre som leker sammen i skogen"
                />
              </div>
            ),
          },
          {
            title: "Parfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Parfotografering
                    </div>
                    <div className="Prices__TabsContentPriceFamilyAlbum">
                      Kr. 1700,-
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For par er kjærlighetshistorien deres en reise, og hvert
                    øyeblikk sammen utgjør en viktig del av den.
                    Parfotografering gir dere muligheten til å fange de
                    hjertevarme øyeblikkene som definerer deres unike
                    kjærlighetshistorie. Det handler om å formidle kjærlighet,
                    samhørighet og øyeblikk som skaper de mest dyrebare minner.
                    Uansett om det er en spontan klem i parken, et
                    kjærlighetsblikk som sier mer enn tusen ord eller en enkel
                    romantisk kveld sammen, har hvert øyeblikk i deres forhold
                    sin egen unike betydning. Parfotografering handler om å
                    fange disse øyeblikkene som definerer deres reise som et
                    par.
                    <p className="Prices__TabsContentTextOffer">
                      Ved booking av Bryllupspakke 1 får dere 50% rabatt på
                      forlovelsesfotografering. Ved booking av Bryllupspakke 2
                      eller Bryllupspakke 3 får du forlovelsesfotograferingen
                      inkludert i prisen.
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Opptil 1 time fotografering på lokasjon
                      <br />- Digitalt bildegalleri hvor man velger bilder
                      <br />- Ingen bilder er inkludert i prisen, se egne priser
                      på bildeprodukter (gjelder ikke ved Bryllupspakke 2 og 3)
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
                  src={CoupleImg}
                  title="Par ute i snøen"
                />
              </div>
            ),
          },
          {
            title: "Mommy & me / Daddy & me",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Mommy & me / Daddy & me
                    </div>
                    <div className="Prices__TabsContentPriceFamilyAlbum">
                      Kr. 1700,-
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For foreldre er tiden sammen med barna deres en
                    uforglemmelig reise, og hvert øyeblikk utgjør en dyrebar del
                    av den historien. Mommy & Me og Daddy & Me fotografering gir
                    dere muligheten til å fange de hjertevarme øyeblikkene som
                    definerer båndet mellom dere og barna deres. Det handler om
                    å formidle kjærlighet, samhørighet og øyeblikk som skaper
                    uforglemmelige minner. Uansett om det er en spontan klem, et
                    kjærlig smil som sier mer enn ord, eller en enkel lek
                    sammen, har hvert øyeblikk i deres forhold sin egen
                    spesielle betydning. Mommy & Me og Daddy & Me fotografering
                    handler om å fange disse øyeblikkene som definerer båndet
                    mellom forelder og barn.
                    <p className="Prices__TabsContentTextOffer">
                      Har du blitt fotografert av meg tidligere? Da får du 10%
                      rabatt på fotograferingen!
                    </p>
                    <p>
                      Inkluderer:
                      <br />- Samtale før fotografering for å avklare lokasjon
                      og klær
                      <br />- Fotografering med 1 forelder med 1 eller flere
                      barn
                      <br />- Opptil 1 time fotografering på lokasjon
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
                  src={MommyAndMeImg}
                  title="Mor og datter ute i snøen"
                />
              </div>
            ),
          },
        ]}
        contentClassName=""
      />
    </div>
  );

  const businessServices = (
    <div>
      <div className="Prices__Content">
        {serviceBackArrow}
        <div className="Prices__TabsTitleBusiness">Bedrifter og næringsliv</div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Matfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Matfotografering
                    </div>
                    <div className="Prices__TabsContentPriceBusinessPrintables">
                      Ta kontakt for pristilbud
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter i matbransjen er presentasjonen av deres
                    kulinariske mesterverk en del av deres unike reise, og hvert
                    bilde utgjør en avgjørende del av deres historie.
                    Matfotografering for bedrifter og næringsliv gir dere
                    muligheten til å fange de hjertevarme øyeblikkene som
                    formidler skjønnheten og smaken av deres kulinariske
                    kreasjoner.
                    <br />
                    <br />
                    Det handler om å formidle kvalitet, smak og øyeblikk som
                    skaper en uimotståelig appell. Uansett om det er en
                    velduftende tallerken som forfører sansene, en delikat
                    presentasjon av deilige ingredienser eller en enkel detalj
                    som setter prikken over i-en, har hvert bilde en egen
                    betydning. Matfotografering for bedrifter og næringsliv
                    handler om å fange disse øyeblikkene som formidler essensen
                    av deres kulinariske kunstverk.
                    <br />
                    <br />
                    Ta kontakt for å avklare hva din bedrift trenger, og pris.
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={FoodImg}
                  title="Granola, gresk yoghurt, bringebær og pasjonsfrukt"
                />
              </div>
            ),
          },
          {
            title: "Produktfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Produktfotografering
                    </div>
                    <div className="Prices__TabsContentPriceBusinessPrintables">
                      Ta kontakt for pristilbud
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter og næringsliv er presentasjonen av deres
                    produkter en integrert del av deres reise, og hvert bilde
                    utgjør en avgjørende del av deres historie.
                    Produktfotografering for bedrifter og næringsliv gir dere
                    muligheten til å fange de hjertevarme øyeblikkene som
                    formidler skjønnheten og funksjonaliteten av deres
                    produkter. Det handler om å formidle kvalitet,
                    funksjonalitet og øyeblikk som skaper en uimotståelig appell
                    til deres målgruppe.
                    <br />
                    <br />
                    Uansett om det er et detaljert bilde som fremhever
                    produktets unike egenskaper, en stilfull presentasjon som
                    fanger oppmerksomheten, eller en enkel detalj som gir det
                    ekstraordinære, har hvert bilde sin egen betydning.
                    Produktfotografering for bedrifter og næringsliv handler om
                    å fange disse øyeblikkene som formidler essensen av deres
                    produkter og merkevare.
                    <br />
                    <br />
                    Ta kontakt for å avklare hva din bedrift trenger, og pris.
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={ProductImg}
                  title="Produkter stylet sammen med frukt"
                />
              </div>
            ),
          },
          {
            title: "Portrettfotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Portrettfotografering for bedrifter
                    </div>
                    <div className="Prices__TabsContentPriceBusinessPrintables">
                      Ta kontakt for pristilbud
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter og næringsliv er visningen av deres team en
                    viktig del av deres reise, og hvert bilde utgjør en
                    avgjørende del av deres historie. Portrettfotografering for
                    bedrifter og næringsliv gir dere muligheten til å fange de
                    hjertevarme øyeblikkene som formidler personlighet og
                    profesjonalitet til deres team. Det handler om å formidle
                    troverdighet, kompetanse og øyeblikk som skaper en
                    uimotståelig appell til deres målgruppe.
                    <br />
                    <br />
                    Uansett om det er et detaljert portrett som fremhever hver
                    enkelt medarbeiders unike egenskaper, en profesjonell
                    presentasjon som fanger oppmerksomheten, eller en enkel
                    detalj som gir det ekstraordinære, har hvert bilde sin egen
                    betydning. Portrettfotografering for bedrifter og næringsliv
                    handler om å fange disse øyeblikkene som formidler essensen
                    av deres team og merkevare.
                    <br />
                    <br />
                    Ta kontakt for å avklare hva din bedrift trenger, og pris.
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={BusinessPortraitImg}
                  title="Portrett av daglig leder i Pent og Brukt AS"
                />
              </div>
            ),
          },
          {
            title: "Barnehagefotografering",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Barnehagefotografering
                    </div>
                    <div className="Prices__TabsContentPriceBusinessPrintables">
                      Ta kontakt for pristilbud
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For barnehager er hvert bilde en del av den unike reisen
                    dere deler med barna, og hvert bilde utgjør en viktig del av
                    deres historie. Barnehagefotografering gir dere muligheten
                    til å fange smilene og minnene som utgjør hverdagen i
                    barnehagen. Det handler om å formidle glede, vennskap og
                    øyeblikk som skaper uforglemmelige minner.
                    <br />
                    <br />
                    Uansett om det er et gruppebilde som fremhever samhørigheten
                    blant barna, portretter som fanger individuell personlighet,
                    eller miljøbilder som gir liv til barnehagens atmosfære, har
                    hvert bilde sin egen betydning. Barnehagefotografering
                    handler om å fange disse øyeblikkene som formidler essensen
                    av barnehagens fellesskap og identitet.
                    <br />
                    <br />
                    Gjennom barnehagefotografering kan dere se tilbake på disse
                    hjertevarme øyeblikkene som utgjør deres barnehages historie
                    og fylle hjertene deres med glede og stolthet.
                    <br />
                    <br />
                    Ta kontakt for å avklare hva din bedrift trenger, og pris.
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={KindergardenImg}
                  title="Portrett av et barn på lekeplassen"
                />
              </div>
            ),
          },
        ]}
        contentClassName=""
      />
    </div>
  );

  const designServices = (
    <div>
      <div className="Prices__Content">
        {serviceBackArrow}
        <div className="Prices__TabsTitleDesign">Design</div>
      </div>
      <Tabs
        tabs={[
          {
            title: "Visuell identitet / Branding",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">
                      Visuell identitet / Branding
                    </div>
                    <div className="Prices__TabsContentPriceDesign">
                      Kr. 950,- per time
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter er hvert designelement en del av den unike
                    reisen dere deler med deres merkevare, og hvert
                    designuttrykk utgjør en viktig del av deres historie.
                    Grafisk design gir dere muligheten til å forme deres
                    visuelle identitet og branding som uttrykker deres unike
                    essens. Det handler om å formidle profesjonalitet,
                    originalitet og øyeblikk som skaper en uimotståelig appell
                    til deres målgruppe.
                    <p>
                      Uansett om det er et logo som fremhever deres bedrifts
                      personlighet, en visuell identitet som fanger deres unike
                      merkevare, eller en kampanje som gir liv til deres
                      budskap, har hvert designelement sin egen betydning.
                      Grafisk design handler om å fange disse øyeblikkene som
                      formidler essensen av deres bedrifts visuelle identitet.
                    </p>
                    <p>
                      Gjennom grafisk design kan dere forme deres bedrifts
                      visuelle identitet og branding som utgjør en viktig del av
                      deres historie og fylle deres merkevare med autentisitet
                      og appell.
                    </p>
                    <p>
                      Ta gjerne kontakt for å diskutere hvordan jeg kan hjelpe
                      dere med å forme deres visuelle identitet og branding. La
                      oss sammen skape en grafisk reise som vil bli verdsatt av
                      deres bedrift og kunder.
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={BrandingImg}
                  title="Visittkort for LashBrowser"
                />
              </div>
            ),
          },
          {
            title: "UX-design",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">UX-design</div>
                    <div className="Prices__TabsContentPriceDesign">
                      Kr. 950,- per time
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter er hvert aspekt av brukeropplevelsen (UX) en
                    del av den unike reisen dere deler med deres digitale
                    plattformer, og hvert interaksjonsdesign utgjør en viktig
                    del av deres digitale historie. UX-design gir dere
                    muligheten til å forme brukeropplevelsen som uttrykker deres
                    unike essens. Det handler om å formidle brukervennlighet,
                    innovasjon og øyeblikk som skaper en uimotståelig appell til
                    deres målgruppe.
                    <p>
                      Uansett om det er en intuitiv nettsidedesign som fremhever
                      brukervennligheten, en app som fanger oppmerksomheten og
                      forbedrer brukerengasjementet, eller et digitalt produkt
                      som gir liv til deres digitale budskap, har hvert
                      UX-designelement sin egen betydning. UX-design handler om
                      å fange disse øyeblikkene som formidler essensen av en
                      sømløs og tiltalende digital opplevelse.
                    </p>
                    <p>
                      Gjennom UX-design kan dere forme en brukeropplevelse som
                      utgjør en viktig del av deres digitale historie og fylle
                      deres digitale plattformer med brukervennlighet og appell.
                    </p>
                    <p>
                      Ta gjerne kontakt for å diskutere hvordan jeg kan hjelpe
                      dere med å forme deres UX-design og skape en digital reise
                      som vil bli verdsatt av deres brukere og kunder.
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={UXDesignImg}
                  title="Kiehls webside"
                />
              </div>
            ),
          },
          {
            title: "Logo-design",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">Logo-design</div>
                    <div className="Prices__TabsContentPriceDesign">
                      Kr. 950,- per time
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For bedrifter som søker en umiddelbar visuell identitet, er
                    en logo en viktig del av reisen dere deler med deres
                    merkevare. Logo-design gir dere muligheten til å forme en
                    enestående visuell representasjon som uttrykker deres unike
                    essens. Det handler om å formidle gjenkjennelighet,
                    originalitet og øyeblikk som skaper en uimotståelig appell
                    til deres målgruppe.
                    <p>
                      Uansett om det er en logo som fremhever deres bedrifts
                      personlighet, har hver logo sin egen unike betydning.
                      Logo-design handler om å fange dette øyeblikket som
                      formidler essensen av deres merkevare og gir dere en
                      tydelig identitet.
                    </p>
                    <p>
                      Dette er pakken for deg som trenger kun logo, og som ikke
                      er interessert i en hel visuell identitet.
                    </p>
                    <p>
                      Ta gjerne kontakt for å diskutere hvordan jeg kan hjelpe
                      dere med å forme deres logo. La oss sammen skape en logo
                      som vil bli verdsatt av deres bedrift og kunder.
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={LogoDesignImg}
                  title="Logo for den fiksjonelle bedriften Naturalis"
                />
              </div>
            ),
          },
          {
            title: "Annet design",
            content: (
              <div className="Prices__Tabs">
                <div className="Prices__TabsContentBox">
                  <div className="Prices__TabsContentHeaderBox">
                    <div className="Prices__TabsContentTitle">Annet design</div>
                    <div className="Prices__TabsContentPriceDesign">
                      Ta kontakt for pristilbud
                    </div>
                  </div>
                  <div className="Prices__TabsContentText">
                    For både bedrifter og privatpersoner er design en viktig del
                    av den spennende reisen dere deler med deres merkevare eller
                    personlig prosjekt. Kreativt design gir dere muligheten til
                    å forme en rekke visuelle uttrykk som uttrykker deres unike
                    essens. Det handler om å formidle kreativitet, originalitet
                    og øyeblikk som skaper en uimotståelig appell til deres
                    målgruppe eller personlige sirkel.
                    <p>
                      Uansett om det er trykksaker som gir deres budskap en
                      fysisk tilstedeværelse, takkekort som formidler
                      takknemlighet og glede, invitasjoner som skaper
                      forventning, eller illustrasjoner som gir liv til deres
                      kreative visjoner, har hvert designelement sin egen
                      betydning. Kreativt design handler om å fange disse
                      øyeblikkene som formidler essensen av deres visuelle
                      uttrykk.
                    </p>
                    <p>
                      Gjennom kreativt design kan dere forme en visuell reise
                      som utgjør en viktig del av deres historie og fyller deres
                      merkevare eller personlige prosjekt med autentisitet og
                      appell gjennom en rekke kreative uttrykk.
                    </p>
                    <p>
                      Ta gjerne kontakt for å diskutere hvordan jeg kan hjelpe
                      dere med å forme deres kreative designprosjekter, enten
                      det er for deres bedrift eller personlige prosjekt. La oss
                      sammen skape en designreise som vil bli verdsatt av dere
                      og deres målgruppe.
                    </p>
                  </div>
                </div>
                <img
                  className="Prices__TabsContentImg"
                  src={AnnetDesignImg}
                  title="Utdrag og forside på det fiksjonelle bakemagasinet Saftig"
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
        src={PhotoProductImg}
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
      <div className="Prices__TabsProducts">
        <div className="Prices__TabsContentBoxProducts">
          <div className="Prices__TabsContentHeaderBox">
            <div className="Prices__TabsContentTitle">Bildekopier</div>
          </div>

          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={PhotoProductImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            text={
              <div className="ProductPriceSection__Text">
                Gi liv til de best dyrebare øyeblikkene med bildekopier av høy
                kvalitet. Min leverandør trykker hver enkelt bilde med
                presisjon, og kvalitetssjekker bildet før de sendes avgårde.
                Disse løse bildene er perfekte å ramme inn å gi bort i gave til
                den som har alt!
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 15x20cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 500,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 20x30cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 800,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 30x40cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1200,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 40x50cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price"> Kr. 2000,-</div>
            }
            priceText5={false}
            price5={false}
          />

          {/*  {/* {/* <div className="Prices__TabsContentText">
            Gi liv til de best dyrebare øyeblikkene med bildekopier av høy
            kvalitet. Min leverandør trykker hver enkelt bilde med presisjon, og
            kvalitetssjekker bildet før de sendes avgårde. Disse løse bildene er
            perfekte å ramme inn å gi bort i gave til den som har alt!
          </div>
          <div className="Prices__TabsContentProductPricelist">
            <div className="Prices__TabsContentTextPricelist">
              Bildekopi 15x20cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 500,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Bildekopi 20x30cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 800,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Bildekopi 30x40cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 1200,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Bildekopi 40x50cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 2000,-
            </div> *
          </div>  */}
        </div>
      </div>
    </div>
  );

  const wallPhotoProduct = (
    <div>
      {productBackArrow}
      <div className="Prices__TabsProducts">
        <div className="Prices__TabsContentBoxProducts">
          <div className="Prices__TabsContentHeaderBox">
            <div className="Prices__TabsContentTitle">Veggbilder</div>
          </div>

          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={WallPhotosImg}
            imgAlt="Veggbilder av en mor og hennes barn"
            text={
              <div className="ProductPriceSection__Text">
                Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
                Med disse filene kan du printe så mange ganger du ønsker, lagre
                som backup eller bruke som ditt profilbilde på sosiale medier,
                men husk å kreditere meg som fotograf under bildet.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Veggbilde 20x30cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 2000,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 30x40cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 3500,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 40x50cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 4800,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 50x70cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 6700,-</div>
            }
            priceText5={false}
            price5={false}
          />

          {/* <div className="Prices__TabsContentText">
            For å skape et hjem er det for mange viktig å henge opp bilder på
            veggene. Trykk på lerret og hard skumplate har samme pris, og de gir
            begge et matt utrykk. Begge typene tar seg svært bra ut på veggen,
            alene eller i klynger med flere bilder.
          </div>
          <div className="Prices__TabsContentProductPricelist">
            <div className="Prices__TabsContentTextPricelist">
              Veggbilde 20x30cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 2000,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Veggbilde 30x40cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 3500,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Veggbilde 40x50cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 4800,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Veggbilde 50x70cm
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 6700,-
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

  const albumProduct = (
    <div>
      {productBackArrow}
      <div className="Prices__TabsProducts">
        <div className="Prices__TabsContentBoxProducts">
          <div className="Prices__TabsContentHeaderBox">
            <div className="Prices__TabsContentTitle">Album</div>
          </div>

          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={AlbumImg}
            imgAlt="Et bilde av en baby i en blomstereng"
            text={
              <div className="ProductPriceSection__Text">
                Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
                Med disse filene kan du printe så mange ganger du ønsker, lagre
                som backup eller bruke som ditt profilbilde på sosiale medier,
                men husk å kreditere meg som fotograf under bildet.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                panorama liten - 20 sider
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 5000,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 20x20 cm - 20 sider
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 7000,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 25x25 cm - 20 sider
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 7700,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 30x30 cm - 20 sider
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 8500,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                panorama stor - 20 sider
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 9000,-</div>
            }
          />

          {/* <div className="Prices__TabsContentText">
            Et album er en hyllest til de uforglemmelige øyeblikkene du vil se
            igjen og igjen. Hver side er en vakker reise og en fortelling bare
            albumet og dere som var til stede kan fortelle.
          </div>
          <div className="Prices__TabsContentProductPricelist">
            <div className="Prices__TabsContentTextPricelist">
              panorama liten - 20 sider
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 5000,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              kvadratisk 20x20 cm - 20 sider
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 7000,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              kvadratisk 25x25 cm - 20 sider
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 7700,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              kvadratisk 30x30 cm - 20 sider
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 8500,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              panorama stor - 20 sider
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 9000,-
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
  const digitalCopiesProduct = (
    <div>
      {productBackArrow}
      <div className="Prices__TabsProducts">
        <div className="Prices__TabsContentBoxProducts">
          <div className="Prices__TabsContentHeaderBox">
            <div className="Prices__TabsContentTitle">Digitale bildefiler</div>
          </div>

          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={DigitalCopyImg}
            imgAlt="Et forlovet par"
            text={
              <div className="ProductPriceSection__Text">
                Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
                Med disse filene kan du printe så mange ganger du ønsker, lagre
                som backup eller bruke som ditt profilbilde på sosiale medier,
                men husk å kreditere meg som fotograf under bildet.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Minipakke med 3 digitale filer
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 3600,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Liten pakke med 5 digitale filer
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 5500,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Medium pakke med 10 digitale filer
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 6800,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Stor pakke med 15 digitale filer
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 7700,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Enkeltfiler i tillegg til pakke
              </div>
            }
            price5={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
          />

          {/* <div className="Prices__TabsContentText">
            Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning. Med
            disse filene kan du printe så mange ganger du ønsker, lagre som
            backup eller bruke som ditt profilbilde på sosiale medier, men husk
            å kreditere meg som fotograf under bildet.
          </div>
          <div className="Prices__TabsContentProductPricelist">
            <div className="Prices__TabsContentTextPricelist">
              Minipakke med 3 digitale filer
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 3600,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Liten pakke med 5 digitale filer
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 5500,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Medium pakke med 10 digitale filer
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 6800,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Stor pakke med 15 digitale filer
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 7700,-
            </div>
            <div className="Prices__TabsContentTextPricelist">
              Enkeltfiler i tillegg til pakke
            </div>
            <div className="Prices__TabsContentTextPricelistAmount">
              Kr. 650,-
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
  const printablesProduct = (
    <div>
      {productBackArrow}
      <div className="Prices__TabsProducts">
        <div className="Prices__TabsContentBoxProducts">
          <div className="Prices__TabsContentHeaderBox">
            <div className="Prices__TabsContentTitle">
              Helhetlig pakke med trykksaker til bryllup
            </div>
          </div>
          <div className="Prices__TabsContentPrintablesBox">
            <div className="Prices__TabsContentTextPrintablesBox">
              <p className="Prices__TabsContentTextPrintables">
                Jeg designer gjerne en helhetlig pakke med trykksaker til deres
                store dag, enten det er jubileum, bryllup eller noe annet! De
                mest vanlige pakkene inkluderer invitasjoner, takkekort, menyer
                og bordkort.
              </p>
              <p className="Prices__TabsContentTextPrintables">
                Priser varierer utifra hva dere ønsker i deres pakke, hvor mange
                dere ønsker av hver og om dere ønsker et spesielt materiale.Jeg
                kan hjelpe dere med kun design, eller jeg kan levere en komplett
                pakke med design og ferdig trykkede produkter.
              </p>
              <p className="Prices__TabsContentTextPrintables">
                Ta kontakt i dag for en uforpliktende prat for å avdekke deres
                ønsker, og eventuell pris.
              </p>
            </div>
          </div>
        </div>
      </div>
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

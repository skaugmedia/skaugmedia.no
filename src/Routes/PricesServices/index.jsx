import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Collapsible } from "../../Components/Collapsible";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { PriceSection } from "../../Components/PriceSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { Underline } from "../../Components/Underline";
import { WeddingSection } from "../../Components/WeddingSection";
import { priceList } from "../../Data/priceList";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { isWithinRange, localTime } from "../../utils";
import { IncludesList } from "../../Components/IncludesList";
import * as ids from "./Ids";
import pageName from "./PageName";
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

  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        {/* <div className="prices-offers-box">
          <div className="category-title-offers">
            Gratis minifotografering av gravide
          </div>
          <div className="prices-offers-next-free-date-title"></div>
          <div className="prices-offers-next-free-date-row">
            <div className="prices-offers-next-free-date-box">
              <div className="prices-offers-next-free-date">
                {" "}
                Neste ledige dato: 04.09.2023
              </div>
            </div>
          </div>
          <div className="prices-offers">
            Hver måned har jeg en dag med GRATIS utendørs minifotograferinger av
            gravide som er i uke 30-36 av svangerskapet. Begrenset kapasitet, så
            book tidlig! Følg med her på nettsiden, og i sosiale medier for å se
            neste ledige dato.
            <br />
            <br />
            Dette inkluderer:
            <br />- 20 minutters fotografering utendørs
            <br />- Online bildegalleri hvor du velger dine bilder
            <br />- 1 etterbehandlet digital bildefil
            <br />- Mulighet for å kjøpe flere bilder, og trykkede produkter
            <br />- Rabattkupong som kan brukes på valgfri fotografering
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              Fotograferingen vil foregå ved Nordbytjernet på Jessheim.
            </span>
          </div>

          <div className="discount-offer-box-title">Faste rabatter</div>

          <div className="discount-offer-box">
            <div className="pregnancy-discount-offer">
              <img
                className="discount-offer-img"
                src={pregnant_offer_img}
                alt="Gravidfotografering"
              ></img>

              <div className="discount-offer-text">
                50% avslag på nyfødtfotografering, ved booking av ordinær
                gravidfotografering.
              </div>
            </div>
            <div className="oneyear-discount_offer">
              <img
                className="discount-offer-img"
                src={oneyear_offer_img}
                alt="1-års fotografering"
              ></img>

              <div className="discount-offer-text">
                50% avslag på 1-års fotografering, etter nyfødtfotografering.
              </div>
            </div>
            <div className="always-discount-offer">
              <img
                className="discount-offer-img"
                src={always_discount_img}
                alt="Konfirmantfotografering"
              ></img>

              <div className="discount-offer-text">
                10% avslag på din neste fotografering.
                <br />
                <div className="discount-offer-special">
                  *Gjelder kun privatpersoner og kan ikke kombineres med andre
                  tilbud.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>
 */}

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
        {/* {miniSessionElements.length > 0 && (
          <>
            <div className="category-title">Minifotografering</div>
            {miniSessionElements.map(({ el: El }, i) => (
              <El key={i} />
            ))}
            <div className="section-divider"></div>
          </>
        )} */}
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

        {/* <Collapsible
          outerClassName="prices-heading"
          title="Gavekort"
          price="Valgfri sum"
        >
          Hos meg kan man kjøpe gavekort med valgfri sum, gavekortet kan brukes
          på fotograferinger, men gjelder ikke for mine designtjenester.
          Minstepris ved kjøp av gavekort er på {priceList.giftCardMinimum}
        </Collapsible> */}
        <PageSection>
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
        </PageSection>

        <Collapsible
          id={ids.newborn}
          outerRef={refs.newborn.ref}
          open={open.newborn}
          outerClassName="prices-heading"
          title="Nyfødtfotografering"
          price={priceList.newborn}
        >
          Jeg anbefaler å ha nyfødtfotografering innen babyen har fylt 14 dager,
          men det går også fint etter dette om tiden ikke strekker til. Husk
          bare på at jo eldre babyen blir, jo mer våken blir den. Jeg har et
          lite utvalg av rekvisitter og klær som passer til
          nyfødtfotograferingen, lån av disse er inkludert i prisen. Denne
          fotograferingen inkluderer også bilder med foreldre og søsken.
          <br />
          <br />
          <span className="discount-price">
            Ved booking av nyfødtfotografering gjennom meg, får man 50% avslag
            på 1-års fotografering.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 2-3 timer fotografering hjemme hos dere (jeg tar med enkel styling og lamper)",
              "Bilder sammen med foreldre og søsken",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="1-års fotografering"
          price={priceList.oneyearolds}
        >
          1-års fotografering er bilder mange per i dag ønsker å ha av sine
          barn. Dette kan innebære enkle portretter med litt styling utendørs,
          innendørs eller mer avansert med cakesmash- som navnet tilsier, der
          barnet får spise en kake mens de blir fotografert.
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Valget om man ønsker cakesmash eller ikke",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.kids}
          outerRef={refs.kids.ref}
          open={open.kids}
          outerClassName="prices-heading"
          title="Barnefotografering (6 mnd - 13 år)"
          price={priceList.kids}
        >
          Fotografering av barn i alle aldre mellom 6 måneder og 13 år.
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Barnehagefotografering"
          price="Ta kontakt for pristilbud"
        >
          Fotografering av gruppebilder, portrettbilder, søskenbilder og
          miljøbilder i barnehager.
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-title">Portrettfotografering</div>

        <Collapsible
          id={ids.portrait}
          outerRef={refs.portrait.ref}
          open={open.portrait}
          outerClassName="prices-heading"
          title="Portrettfotografering"
          price={priceList.portraits}
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.pregnant}
          outerRef={refs.pregnant.ref}
          open={open.pregnant}
          outerClassName="prices-heading"
          title="Gravidfotografering"
          price={priceList.pregnant}
        >
          Gravidfotografering blir flott både utendørs i naturen, eller hjemme
          hos dere, for eksempel i en lekker oppredd dobbeltseng eller foran
          lyse luftige gardiner med lyset fra vinduet strømmende inn bak
          gardinene. Jeg har et lite utvalg av flotte kjoler og rekvisitter som
          passer til gravidfotografering, lån av disse er inkludert i prisen.
          Denne fotograferingen inkluderer også partner og søsken.
          <br />
          <br />
          <span className="discount-price">
            Få 50% avslag på nyfødtfotografering ved booking av ordinær
            gravidfotografering. Hver måned tilbyr jeg også en dag med
            minifotograferinger av gravide. Se mer info øverst på denne siden.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
              "Bilder sammen med partner og andre barn",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.confirmation}
          outerRef={refs.confirmation.ref}
          open={open.confirmation}
          outerClassName="prices-heading"
          title="Konfirmantfotografering"
          price={priceList.confirmation}
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Profilbilde / CV-foto / Headshots"
          price={priceList.headshots}
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
              "Inkludert 1 digitalt bilde, levert både i sorthvitt og farger",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.business}
          outerRef={refs.business.ref}
          open={open.business}
          outerClassName="prices-heading"
          title="Portretter for bedrift"
          price="Ta kontakt for pristilbud"
        >
          Ta kontakt for pristilbud.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-title">Gruppefotografering</div>

        <Collapsible
          id={ids.family}
          outerRef={refs.family.ref}
          open={open.family}
          outerClassName="prices-heading"
          title="Familiefotografering / Gruppefotografering"
          price={priceList.family}
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Søskenfotografering"
          price={priceList.siblings}
        >
          Inkluderer:
          <IncludesList
            items={[
              "Fotografering med 2 eller flere søsken",
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.engagement}
          outerRef={refs.engagement.ref}
          open={open.engagement}
          outerClassName="prices-heading"
          title="Kjæreste- eller forlovelsesfotografering"
          price={priceList.engagement}
        >
          Parfotografering blir etter min mening best utendørs, men det er også
          flott innendørs om dere helst ønsker dette. Vi tilbringer mellom 1 og
          2 timer sammen, der dere er dere selv foran kamera, og viser frem
          deres kjærlighet til hverandre.
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Mommy & me / Daddy & me"
          price={priceList.mommyandme}
        >
          En koselig fotografering med mor eller far med barna. Dette blir
          hyggelige bilder å henge opp på veggen! Inkluderer:
          <IncludesList
            items={[
              "Fotografering med 2 eller flere søsken, i tillegg til mor eller far",
              "Samtale før fotografering for å avtale antrekk og lokasjon",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man velger bilder",
            ]}
          />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed eller ikke oppmøtt til avtalt tidspunkt, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>

        <div className="section-divider"></div>
        <div className="category-title">Bryllupsfotografering</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Halvdagsfotografering"
          price={priceList.wedding2}
        >
          Dette er pakken for dere som ønsker bilder fra litt mer enn bare
          seremonien og bryllupsportrettene. Ved å velge denne pakken,
          fotograferer jeg under forberedelsene på den store dagen- enten det er
          hjemme eller på lokasjon, under vielsen og fotografering av
          bryllupsportrettene etter vielsen. Dere får ca. 200 digitale
          bildefiler i høy oppløsning, til privat bruk. Vi setter av tid til et
          planleggingsmøte i god tid før den store dagen, der vi snakker om
          deres ønsker til bildene og for å bli litt kjent med hverandre.
          <br />
          <br />
          <span className="discount-price">
            Ved booking av en av bryllupsfotograferingene mine, får man 50%
            avslag på forlovelsesfotografering i forkant av bryllupet.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Planleggingsmøte i god tid før den store dagen",
              "Fotografering under forberedelser, vielse og bryllupsportretter",
              "Inntil 5 timer fotografering",
              "Ca. 200 stk. digitale bildefiler i høy oppløsning",
              "Online bildegalleri hvor dere kan laste ned bildene",
              "Mulighet for å kjøpe bildeprodukter",
            ]}
          />
          <p className="additional-prices">
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Vielse + portrettfotografering - 2,5 timer"
          price={priceList.wedding1}
        >
          Hvis man velger vielse + portrettfotografering, vil dette inkludere
          ca. 2,5 timer med fotografering totalt i tillegg til et digitalt
          planleggingsmøte i god tid før den store dagen. Jeg fotograferer
          vielsen, i tillegg til portretter rett før eller rett etter vielsen.
          Dere får ca. 100 stk. digitale bildefiler i høy oppløsning til privat
          bruk.
          <br />
          <br />
          <span className="discount-price">
            Ved booking av en av bryllupsfotograferingene mine, får man 50%
            avslag på forlovelsesfotografering i forkant av bryllupet.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Ca. 2,5 timer fotografering",
              "Digitalt planleggingsmøte i god tid før den store dagen",
              "Fotografering under vielsen og portrettfotografering rett før eller rett etter vielsen",
              "Fotografering med familie og forlovere",
              "Ca. 100 stk. digitale bildefiler i høy oppløsning",
              "Online bildegalleri hvor dere kan laste ned bildene",
              "Mulighet for å kjøpe bildeprodukter",
            ]}
          />
          <p className="additional-prices">
            Ved kansellering senere enn 48 timer før avtalt tid uten å gi
            beskjed, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering vil bli fakturert, og kjøring utover 30km
            fra Jessheim, faktureres med {priceList.driveSurcharge} per km.
          </p>
        </Collapsible>

        <div className="section-divider"></div>
        <div className="category-title">Produkt og matfotografering</div>
        <Collapsible
          id={ids.product}
          outerRef={refs.product.ref}
          open={open.product}
          outerClassName="prices-heading"
          title="Produktfotografering"
          price="Ta kontakt for pristilbud."
        >
          Ta kontakt for pristilbud.
        </Collapsible>
        <Collapsible
          id={ids.food}
          outerRef={refs.food.ref}
          open={open.food}
          outerClassName="prices-heading"
          title="Matfotografering"
          price="Ta kontakt for pristilbud."
        >
          Ta kontakt for pristilbud.
        </Collapsible>

        <div className="section-divider"></div>
        <div className="category-title">Design</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Visuell identitet / Branding"
          price={priceList.branding}
        >
          Ta kontakt for å avklare hva oppdraget går ut på, og omtrentlig hvor
          mange timer det vil ta.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="UX-design"
          price={priceList.uxDesign}
        >
          Ta kontakt for å avklare hva oppdraget går ut på, hvilke forventninger
          dere har og omtrentlig hvor mange timer det vil ta.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Logo design"
          price={priceList.logo}
        >
          Ta kontakt for å avklare hva oppdraget går ut på, og omtrentlig hvor
          mange timer det vil ta.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Trykksaker til bryllup o.l"
          price="Ta kontakt for pristilbud"
        >
          Ta kontakt for pristilbud. For å gi en pris på dette, må jeg vite hva
          dere ønsker, om det skal trykkes osv.
          <br />
          <br />
          Ønsker du trykksaker til bryllup, konfirmasjon eller dåp? For
          eksempel: Invitasjoner, program til vielse, bordkort, meny, takkekort
          og kort til kakebord, velkomsttavle, photobooth etc.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Annet design"
          price="Ta kontakt for pristilbud"
        >
          Ta kontakt for pristilbud.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-title">Bildeprodukter</div>
        <div className="category-under-title">Digitale bildefiler</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Minipakke m/ 3 digitale filer"
          price={priceList.extraPicture3}
        >
          3 stk. etterbehandlede digitale bildefiler i høy oppløsning.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Liten pakke m/ 5 digitale filer"
          price={priceList.extraPicture5}
        >
          5 stk. etterbehandlede digitale bildefiler i høy oppløsning.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Medium pakke m/ 10 digitale filer"
          price={priceList.extraPicture10}
        >
          10 stk. etterbehandlede digitale bildefiler i høy oppløsning.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Stor pakke m/ 15 digitale filer"
          price={priceList.extraPicture15}
        >
          15 stk. etterbehandlede digitale bildefiler i høy oppløsning.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildefil før pakkepris"
          price={priceList.extraPictureBefore}
        >
          1-2 stk. digital bildefil i høy oppløsning. Prisen gjelder hvis man
          kun ønsker 1 eller 2 digitale bilder.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildefil etter pakkepris"
          price={priceList.extraPictureAfter}
        >
          Ekstra digitale bildefiler i høy oppløsning. Prisen gjelder etter man
          har bestilt en pakke med digitale filer.
        </Collapsible>
        <div className="section-divider"></div>

        <div className="category-under-title">Bildekopier</div>

        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 15x20cm"
          price={priceList.copy15x20}
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 20x30cm"
          price={priceList.copy20x25}
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 30x40cm"
          price={priceList.copy30x30}
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 40x50cm"
          price={priceList.copy30x60}
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <div className="section-divider"></div>

        <div className="category-under-title">Veggbilder</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Veggbilde 20x30cm"
          price={priceList.wallPicture20x30}
        >
          Lerretsbilder og bilde trykket på skumplate har samme pris. Du velger
          derfor mellom disse. <br />
          <br />
          Lerret: Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet,
          og lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
          <br />
          Skumplate: Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Veggbilde 30x40cm"
          price={priceList.wallPicture30x40}
        >
          Lerretsbilder og bilde trykket på skumplate har samme pris. Du velger
          derfor mellom disse. <br />
          <br />
          Lerret: Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet,
          og lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
          <br />
          Skumplate: Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Veggbilde 40x50cm"
          price={priceList.wallPicture40x50}
        >
          Lerretsbilder og bilde trykket på skumplate har samme pris. Du velger
          derfor mellom disse. <br />
          <br />
          Lerret: Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet,
          og lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
          <br />
          Skumplate: Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Veggbilde 50x70cm"
          price={priceList.wallPicture50x70}
        >
          Lerretsbilder og bilde trykket på skumplate har samme pris. Du velger
          derfor mellom disse. <br />
          <br />
          Lerret: Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet,
          og lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
          <br />
          Skumplate: Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-under-title">Album</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Album kvadratisk 20x20cm - 20 sider"
          price={priceList.album20x20x20}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album kvadratisk 20x20cm - 30 sider"
          price={priceList.album20x20x30}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>

        <Collapsible
          outerClassName="prices-heading"
          title="Album kvadratisk 30x30cm - 20 sider"
          price={priceList.album30x30x20}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album kvadratisk 30x30cm - 30 sider"
          price={priceList.album30x30x30}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>

        <Collapsible
          outerClassName="prices-heading"
          title="Album panorama 30x22,5cm - 20 sider"
          price={priceList.album30x22x20}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album panorama 30x22,5cm - 30 sider"
          price={priceList.album30x22x30}
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20 eller 30 sider.
          Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
      </div>
      <Underline></Underline>
    </PageSection>
  );
}

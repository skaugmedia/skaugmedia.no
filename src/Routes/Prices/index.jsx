import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Collapsible } from "../../Components/Collapsible";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { Underline } from "../../Components/Underline";
import { priceList } from "../../Data/priceList";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import oneyear_offer_img from "../../Images/liam_1_kvadrat.jpg";
import pregnant_offer_img from "../../Images/m_gravid_kvadrat.jpg";
import always_discount_img from "../../Images/silje_konfirmant_kvadrat.jpg";
import { isWithinRange, localTime } from "../../utils";
import { IncludesList } from "./Components/IncludesList";
import * as ids from "./Ids";
import pageName from "./PageName";
import "./Prices.css";
import * as minishoot from "./minishoots";

export function Prices() {
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
  };

  const now = new Date();
  const miniSessionElements = [
    {
      el: () => minishoot.sunflower(minishootsOpts.sunflower),
      validFrom: localTime("31-07-2023 00:00"),
      validTo: localTime("22-08-2023 00:00"),
    },
  ].filter((s) => isWithinRange(s.validFrom, now, s.validTo));

  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        <div className="prices-offers-box">
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

        {miniSessionElements.length > 0 && (
          <>
            <div className="category-title">Minifotografering</div>
            {miniSessionElements.map(({ el: El }, i) => (
              <El key={i} />
            ))}
            <div className="section-divider"></div>
          </>
        )}

        <div className="category-title">Gavekort</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Gavekort"
          price="Valgfri sum"
        >
          Hos meg kan man kjøpe gavekort med valgfri sum, gavekortet kan brukes
          på fotograferinger, men gjelder ikke for mine designtjenester.
          Minstepris ved kjøp av gavekort er på {priceList.giftCardMinimum}
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-title">Barnefotografering</div>
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter kl. 16.00: {priceList.eveningSurcharge} <br />
            Helgetillegg: {priceList.weekendSurcharge}
            <br />
            <br />
            Ved kansellering under 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
          </p>
        </Collapsible>

        <div className="section-divider"></div>
        <div className="category-title">Bryllupsfotografering</div>

        <Collapsible
          outerClassName="prices-heading"
          title="Vielse + portrettfotografering - 2,5 timer"
          price={priceList.wedding1}
        >
          Hvis man velger vielse + portrettfotografering, vil dette inkludere
          ca. 2,5 timer med fotografering totalt. Da fotograferer jeg hele
          vielsen, i tillegg til portretter etter vielsen. Dere får da 35 ferdig
          redigerte bilder- som dere selv velger ut fra et online galleri. Denne
          pakken kan også tilpasses deres ønsker.
          <br />
          <br />
          <span className="discount-price">
            Ved booking av bryllupsfotografering gjennom meg, får man 50% avslag
            på forlovelsesfotografering i forkant av bryllupet.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale/møte i god tid før den store dagen for planlegging",
              "Fotografering under vielsen",
              "Portrettfotografering",
              "Fotografering med familie og forlovere etter vielsen",
              "Digitalt bildegalleri hvor man velger bilder",
              "35 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
              "Mulighet for å kjøpe flere digitale filer og bildeprodukter",
            ]}
          />
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Ved kansellering under 24 timer før avtalt tid, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Portrettfotografering - 1,5 timer"
          price={priceList.wedding2}
        >
          Hvis man velger kun portrettfotografering, vil dette inkludere ca. 1,5
          timer med fotografering. Disse bildene kan fotograferes en annen dag
          enn bryllupet, eller på selve dagen. Dere får 15 ferdig redigerte
          bilder- som dere selv velger ut fra et online galleri.
          <br />
          <br />
          <span className="discount-price">
            Ved booking av bryllupsfotografering gjennom meg, får man 50% avslag
            på forlovelsesfotografering i forkant av bryllupet.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale/møte i god tid før den store dagen for planlegging",
              "Portrettfotografering ca. 1,5 time",
              "Digitalt bildegalleri hvor man velger bilder",
              "15 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
              "Mulighet for å kjøpe flere digitale filer og bildeprodukter",
            ]}
          />
          Les mer om hvilke produkter man kan bestille etter fotograferingen,
          lenger ned på siden.
          <br />
          <p className="additional-prices">
            Ved kansellering under 24 timer før avtalt tid, vil beløpet bli
            fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering faktureres i sin helhet, og kjøring
            utover 30km fra Jessheim, faktureres med {priceList.driveSurcharge}{" "}
            per km.
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

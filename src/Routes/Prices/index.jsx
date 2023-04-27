import "./Prices.css";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Underline } from "../../Components/Underline";
import { PriceList } from "./Components/PriceList";
import { PageSection } from "../../Components/PageSection";
import { IncludesList } from "./Components/IncludesList";
import { Collapsible } from "../../Components/Collapsible";
import { Image } from "../../Components/Image";
import portrettimg from "../../Images/silje_konfirmant_3.jpg";
import newbornimg from "../../Images/newborn_liam_4.jpg";
import pregnantimg from "../../Images/gravid_4.jpg";
import coupleimg from "../../Images/forlovelse_3.jpg";
import weddingimg from "../../Images/produkt_9.jpg";
import foodimg from "../../Images/mat_12.jpg";
import designimg from "../../Images/design_prices.jpg";
import pageName from "./PageName";
import giftcardimg from "../../Images/mockup_gavekort.jpg";
import businessimg from "../../Images/stranger_as_4.jpg";
import { useState } from "react";
import { DottedLine } from "/src/Components/DottedLine";
import { useLocation } from "react-router-dom";
import * as ids from "./Ids";
import { useEffect, useRef } from "react";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import * as minishoot from "./minishoots";
import { isWithinRange, localTime } from "../../utils";

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
  };

  const now = new Date();
  const miniSessionElements = [
    {
      el: () => minishoot.minisessions(minishootsOpts.minisessions),
      validFrom: localTime("27-04-2023 00:00"),
      validTo: localTime("01-07-2023 00:00"),
    },
  ].filter((s) => isWithinRange(s.validFrom, now, s.validTo));

  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        <div className="prices-offers-box">
          <div className="category-title-offers">Tilbud</div>
          <div className="prices-offers">
            Book gravidfotografering
            <br />
            få 50% avslag på nyfødtfotografering.
          </div>
          <br />

          <div className="prices-offers">
            Book nyfødtfotografering
            <br /> få 50% avslag på babyfotografering (6mnd-12mnd).
          </div>
          <br />
          <div className="prices-offers">
            Book bryllupsfotografering
            <br />
            få 50% avslag på forlovelsesfotografering.
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
          Minstepris ved kjøp av gavekort er på kr. 100,-
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-title">Barnefotografering</div>
        <Collapsible
          id={ids.newborn}
          outerRef={refs.newborn.ref}
          open={open.newborn}
          outerClassName="prices-heading"
          title="Nyfødtfotografering"
          price="Kr. 3000,-"
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
            på babyfotografering (når babyen er mellom 6 og 12 måneder gammel.)
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 2-3 timer fotografering hjemme hos dere (jeg tar med enkel styling og lamper)",
              "Bilder sammen med foreldre og søsken",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="1-års fotografering"
          price="Kr. 2750,-"
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
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Valget om man ønsker cakesmash eller ikke",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.kids}
          outerRef={refs.kids.ref}
          open={open.kids}
          outerClassName="prices-heading"
          title="Barnefotografering (6 mnd - 13 år)"
          price="Kr. 2750,-"
        >
          Fotografering av barn i alle aldre mellom 6 måneder og 13 år.
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
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
          price="Kr. 2500,-"
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.pregnant}
          outerRef={refs.pregnant.ref}
          open={open.pregnant}
          outerClassName="prices-heading"
          title="Gravidfotografering"
          price="Kr. 2500,-"
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
            Ved booking av gravidfotografering gjennom meg, får man 50% avslag
            på nyfødtfotografering.
          </span>
          <br />
          <br />
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Bilder sammen med partner og andre barn",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.confirmation}
          outerRef={refs.confirmation.ref}
          open={open.confirmation}
          outerClassName="prices-heading"
          title="Konfirmantfotografering"
          price="Kr. 2500,-"
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Profilbilde / CV-foto / Headshots"
          price="Kr. 1500,-"
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 30 minutters fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "1 stk. redigert høyoppløselig bilde",
              "Bildet leveres digitalt",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
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
          price="Kr. 3000,-"
        >
          Inkluderer:
          <IncludesList
            items={[
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          <p>
            Jeg samarbeider tett med makeup-artist LashBrowser, som kan sminke
            før fotografering mot et tillegg i prisen. LashBrowswer holder til i
            Storgata 7B, 2050 Jessheim.
          </p>
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Søskenfotografering"
          price="Kr. 3000,-"
        >
          Inkluderer:
          <IncludesList
            items={[
              "Fotografering med 2 eller flere søsken",
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          id={ids.engagement}
          outerRef={refs.engagement.ref}
          open={open.engagement}
          outerClassName="prices-heading"
          title="Kjæreste- eller forlovelsesfotografering"
          price="Kr. 3000,-"
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
              "Samtale før fotografering for å avtale nærmere",
              "1-2 timer fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Mommy & me / Daddy & me"
          price="Kr. 2500,-"
        >
          En koselig fotografering med mor eller far med barna. Dette blir
          hyggelige bilder å henge opp på veggen! Inkluderer:
          <IncludesList
            items={[
              "Fotografering med 2 eller flere søsken, i tillegg til mor eller far",
              "Samtale før fotografering for å avtale nærmere",
              "Opptil 1 time fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>

        <div className="section-divider"></div>
        <div className="category-title">Bryllupsfotografering</div>

        <Collapsible
          outerClassName="prices-heading"
          title="Vielse + portrettfotografering - 2,5 timer"
          price="Kr. 14.000,-"
        >
          Hvis man velger vielse + portrettfotografering, vil dette inkludere
          ca. 2,5 timer med fotografering totalt. Da fotograferer jeg hele
          vielsen, i tillegg til portretter etter vielsen. Dere får da 35 ferdig
          redigerte bilder- som dere selv velger ut fra et online galleri.
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
              "Samtale før fotografering for å avtale nærmere",
              "Fotografering under vielsen",
              "1,5 timers portrettfotografering etter vielsen",
              "Fotografering med familie og forlovere etter vielsen",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "35 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
          </p>
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Portrettfotografering - 1,5 timer"
          price="Kr. 10.000,-"
        >
          Hvis man velger kun portrettfotografering, vil dette inkludere ca. 1,5
          timer med fotografering. Disse bildene kan fotograferes en annen dag
          enn bryllupet, eller på selve dagen. Dere får 10 ferdig redigerte
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
              "Samtale før fotografering for å avtale nærmere",

              "1,5 timers portrettfotografering",

              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "10 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <br />
          <p className="additional-prices">
            Kveldstillegg etter 17.00: kr. 700,-
            <br />
            Helgetillegg: kr. 1000,-
            <br />
            <br />
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
          <p>
            Eventuell betalt parkering og kjøring utover 20km fra Jessheim,
            faktureres med kr. 10,- per km.
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
          price="Kr. 950,- per time"
        >
          Ta kontakt for å avklare hva oppdraget går ut på, og omtrentlig hvor
          mange timer det vil ta.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="UX-design"
          price="Kr. 950,- per time"
        >
          Ta kontakt for å avklare hva oppdraget går ut på, hvilke forventninger
          dere har og omtrentlig hvor mange timer det vil ta.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Logo design"
          price="Kr. 950,- per time"
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
          title="1 ekstra bildefil"
          price="Kr. 600,-"
        >
          1 stk. ekstra redigert høyoppløselig bildefil
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="5 ekstra bildefiler"
          price="Kr. 2800,-"
        >
          5 stk. ekstra redigerte høyoppløselige bildefiler, Kr. 200,- i rabatt.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="10 ekstra bildefiler"
          price="Kr. 5600,-"
        >
          10 stk. ekstra redigerte høyoppløselige bildefiler, Kr. 400,- i
          rabatt.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="15 ekstra bildefiler"
          price="Kr. 8400,-"
        >
          15 stk. ekstra redigerte høyoppløselige bildefiler, Kr. 600,- i
          rabatt.
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-under-title">Bildekopier</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 10x12cm / 12x12cm"
          price="Kr. 89,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 15x20cm / 15x15cm"
          price="Kr. 119,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 20x20cm"
          price="Kr. 199,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 20x25cm / 20x30cm"
          price="Kr. 239,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 30x30cm / 30x40cm"
          price="Kr. 309,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 30x60cm / 40x40cm / 40x50cm"
          price="Kr. 415,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi 40x80cm / 50x60cm / 50x70cm"
          price="Kr. 545,-"
        >
          Bildekopi trykket på fotopapir, med blank overflate.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-under-title">Bildekopier i ramme</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi i ramme 20x25cm"
          price="Kr. 389,-"
        >
          Bildekopi trykket på fotopapir med blank overflate, som er montert i
          ramme.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Bildekopi i ramme 20x30cm"
          price="Kr. 459,-"
        >
          Bildekopi trykket på fotopapir med blank overflate, som er montert i
          ramme.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-under-title">Lerretsbilder</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Lerret med blindramme 20x25cm / 20x30cm"
          price="Kr. 889,-"
        >
          Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet, og
          lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Lerret med blindramme 30x40cm"
          price="Kr. 1045,-"
        >
          Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet, og
          lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Lerret med blindramme 30x60cm / 40x40cm / 40x50cm"
          price="Kr. 1289,-"
        >
          Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet, og
          lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Lerret med blindramme 40x60cm / 50x60cm / 50x70cm"
          price="Kr. 1489,-"
        >
          Bilder trykkes på syrefritt bomullslerret av høyeste kvalitet, og
          lamineres med satinmatt overflate for holdbarhet, før lerretet
          monteres på en blindramme.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-under-title">Album</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 20x20cm - 20 sider"
          price="Kr. 1045,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 20x20cm - 30 sider"
          price="Kr. 1389,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 20x20cm - 40 sider"
          price="Kr. 1689,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 30x30cm - 20 sider"
          price="Kr. 1345,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 30x30cm - 30 sider"
          price="Kr. 1689,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album 30x30cm - 40 sider"
          price="Kr. 1989,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album panorama 30x22,5cm - 20 sider"
          price="Kr. 1145,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album panorama 30x22,5cm - 30 sider"
          price="Kr. 1489,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Album panorama 30x22,5cm - 40 sider"
          price="Kr. 1789,-"
        >
          Her bestiller man ferdig monterte album, hvor man kan velge mellom
          kvadratisk eller panorama. Disse albumene består av 20, 30 eller 40
          sider. Det er ikke mulig å velge flere eller færre sider.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-under-title">Skumplate</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Skumplate 15x20cm / 15x15cm"
          price="Kr. 445,-"
        >
          Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Skumplate 20x25cm / 20x30cm"
          price="Kr. 689,-"
        >
          Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Skumplate 30x30cm / 30x40cm"
          price="Kr. 889,-"
        >
          Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Skumplate 30x60cm / 40x40cm / 40x50cm"
          price="Kr. 1089,-"
        >
          Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Skumplate 40x80cm / 50x60cm / 50x70cm"
          price="Kr. 1289,-"
        >
          Bildene monteres på Kapaplate, med matt overflate.
        </Collapsible>
      </div>
      <Underline></Underline>
    </PageSection>
  );
}

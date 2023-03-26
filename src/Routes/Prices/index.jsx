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

export function Prices() {
  const location = useLocation();
  const miniSessions = {
    siblings: {
      outer: useRef(),
    },
    confirmation: {
      outer: useRef(),
    },
  };
  const [open, setOpen] = useState({});
  useEffect(() => {
    switch (location.hash) {
      case `#${ids.miniSessionSiblings}`:
        miniSessions.siblings.outer.current?.scrollIntoView();
        if (!open.siblings) {
          setOpen({ ...open, siblings: true });
        }
        break;
      case `#${ids.miniSessionConfirmation}`:
        miniSessions.confirmation.outer.current?.scrollIntoView();
        if (!open.confirmation) {
          setOpen({ ...open, confirmation: true });
        }
        break;
    }
  }, [location.hash]);
  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        <div className="category-title">Tilbud</div>
        <div className="prices-offers">
          Ved booking av gravidfotografering hos meg, får du -50% avslag på
          nyfødtfotografering.
          <DottedLine className="dottedline"></DottedLine>
        </div>
        <div className="prices-offers">
          Ved booking av nyfødtfotografering hos meg, får du -50% avslag på
          babyfotografering (6mnd-12mnd).
          <DottedLine className="dottedline"></DottedLine>{" "}
        </div>
        <div className="prices-offers">
          Ved booking av bryllupsfotografering hos meg, får du -50% avslag på
          forlovelsesfotografering.
          <DottedLine className="dottedline"></DottedLine>
        </div>
        <div className="section-divider"></div>

        <div className="category-title">Minifotografering</div>
        <Collapsible
          id={ids.miniSessionSiblings}
          outerRef={miniSessions.siblings.outer}
          open={open.siblings}
          outerClassName="prices-heading"
          title="Søsken (gjelder kun fotografering i april)"
          price="Kr. 1000,-"
        >
          Minifotografering av søsken kan bookes for hele april, tilbudet
          gjelder kun fotograferinger i april. Gjelder for 2 eller flere søsken
          i aldre fra 6mnd og oppover. Kan ikke kombineres med andre tilbud.
          <p>Inkluderer:</p>
          <IncludesList
            items={[
              "Samtale før fotografering med veiledning til valg av lokasjon og anbefalte klær",
              "20 minutters fotografering på lokasjon utendørs",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
              "Mulighet for å kjøpe ekstra bilder",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <p className="additional-prices">
            Kveldstillegg etter 17.30: kr. 700,-
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
          id={ids.miniSessionConfirmation}
          outerRef={miniSessions.confirmation.outer}
          open={open.confirmation}
          outerClassName="prices-heading"
          title="Konfirmant (gjelder fotografering 20. mai)"
          price="Kr. 1000,-"
        >
          Minifotografering av konfirmanter 20. mai 2023, ved Nordbytjernet på
          Jessheim. Kun oppsatte tidspunkter kan bookes. Kan ikke kombineres med
          andre tilbud.
          <p>Inkluderer:</p>
          <IncludesList
            items={[
              "20 minutters fotografering ved Nordbytjernet på Jessheim",
              "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
              "3 stk. redigerte, høyoppløselige bilder",
              "Bildene leveres digitalt",
              "Mulighet for å kjøpe ekstra bilder",
            ]}
          />
          Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert, er
          prisen kr. 600,- per bilde.
          <p className="additional-prices">
            Ved kansellering innen 24 timer før avtalt tid eller ikke oppmøtt
            til avtalt tidspunkt, vil beløpet bli fakturert i sin helhet.
          </p>
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-title">Gavekort</div>
        <Collapsible
          outerClassName="prices-heading"
          title="Gavekort"
          price="Valgfri sum"
        >
          Hos meg kan man kjøpe gavekort med valgfri sum, gavekortet kan brukes
          på fotograferinger, men gjelder ikke for mine designtjenester.
        </Collapsible>

        <div className="section-divider"></div>

        <div className="category-title">Barnefotografering</div>
        <Collapsible
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
          title="Portretter for bedrift"
          price="Ta kontakt for pristilbud"
        >
          Ta kontakt for pristilbud.
        </Collapsible>
        <div className="section-divider"></div>
        <div className="category-title">Gruppefotografering</div>

        <Collapsible
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
          Inkluderer:
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
            Kveldstillegg etter 17.30: kr. 700,-
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
          outerClassName="prices-heading"
          title="Produktfotografering"
          price="Ta kontakt for pristilbud."
        >
          Ta kontakt for pristilbud.
        </Collapsible>
        <Collapsible
          outerClassName="prices-heading"
          title="Matfotografering"
          price="Ta kontakt for pristilbud."
        >
          Ta kontakt for pristilbud.
        </Collapsible>

        <div className="section-divider"></div>
        <div className="section-category">
          <Image
            className="category-image"
            src={designimg}
            alt="Naturalis prislapper"
          />
          <div className="section-text">
            <div className="category-title">Design</div>
            <PriceList
              items={[
                {
                  name: "Visuell identitet / Branding",
                  price: "Kr. 950,- per time",
                },
                {
                  name: "Websideutvikling",
                  price: "Kr. 950,- per time",
                },
                {
                  name: "Logo design",
                  price: "Kr. 950,- per time",
                },
                {
                  name: "Trykksaker til bryllup, konfirmasjon, dåp",
                  price: "Ta kontakt for pristilbud",
                },
                {
                  name: "Annet design",
                  price: "Ta kontakt for pristilbud",
                },
              ]}
            />
            <div className="price-info">
              Ta kontakt for å avklare omtrentlig mengde tid jeg vil bruke, hva
              du kan forvente fra meg og hva ditt prosjekt går ut på.
              <br />
              <br />
              Ønsker du trykksaker til bryllup, konfirmasjon eller dåp? Dette
              inkluderer følgende ting: Invitasjoner, program til vielse,
              bordkort, meny, takkekort og kort til kakebord, velkomsttavle,
              photobooth etc.
            </div>
          </div>
        </div>
      </div>
      <Underline></Underline>
    </PageSection>
  );
}

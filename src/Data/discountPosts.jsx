import { localTime } from "../utils";
import { freePregnancyDate } from "./FreePregnancyDate";
import { IncludesList } from "/src/Components/IncludesList";
import MinishootConfirmation from "/src/Images/Confirmation/conf_L_4.jpg";
import PregnancyFree from "/src/Images/Discounts/preg_c_10.jpg";
import MiniShootMothersday from "/src/Images/Prices/mommyandme_photography.jpg";
import ChristmasDiscount from "/src/Images/christmas_minishoot.jpg";
import ContactRoute from "/src/Routes/Contact/Route";
import DiscountRoute from "/src/Routes/Discounts/Route";

const rawDiscountPosts = [
  {
    title: "Minifotografering av konfirmanter",
    img: {
      src: MinishootConfirmation,
      alt: "En nydelig konfirmant utendørs i regnet med paraply",
    },
    banner: {
      subTitle: "Fredag 3. mai 2024",
      description: (
        <>
          Nå går det fort frem til vår og konfirmasjonstid! Jeg ønsker å sette
          opp en dato for minifotografering av konfirmanter.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">Kun kr. 1499,-</div>
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
        linkId: "konfirmant",
      },
    },
    description: (
      <>
        <div className="Discounts__FreePregnancyNextDate">
          Fredag 03. mai 2024
        </div>
        <div className="Discounts__Text">
          Nå går det fort frem til vår og konfirmasjonstid! Jeg ønsker å sette
          opp en dato for minifotografering av konfirmanter.
          <br />
          Om det er mange som booker, og det er interesse for en ekstra dag,
          setter jeg opp en dag til.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">
            Hva inkluderer det?
          </div>
          -20 minutter konfirmant-fotografering, med mulighet for noen
          familiebilder
          <br />
          - 5 valgfrie digitale bildefiler
          <br />
          - Fotografering utendørs på Jessheim <br />
          - Online bildegalleri hvor du velger bilder <br />
          - Rabattkupong til bruk på neste fotografering
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">Kun kr. 1499,-</div>
        </div>
      </>
    ),
    valid: {
      to: localTime("04.05.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
  {
    title: "MORSDAGSTILBUD",
    banner: {
      subTitle: "Minifotografering - mommy & me",
      description: (
        <>
          Den perfekte morsdagsgave til alle mammaer i alle aldre! <br />
          Gi det til din kjære fra barna deres, eller gi det til din 90 år gamle
          mamma - og ta henne med på fotografering.
          <br />
          <br />
          <div className="Home__DiscountPrice">KUN KR. 1350,-</div>
          <br />
        </>
      ),
      button: {
        text: "Les mer",
        link: `/${DiscountRoute}`,
        linkId: "morsdagstilbud",
      },
    },
    img: {
      src: MiniShootMothersday,
      alt: "En mamma med hennes sønn i en solsikkeåker",
    },
    description: (
      <>
        <div className="Discounts__FreePregnancyNextDate">
          Minifotografering - Mommy & me
        </div>
        <div className="Discounts__Text">
          Den perfekte morsdagsgave til alle mammaer i alle aldre!
          <br />
          Gi det til din kjære fra barna deres, eller gi det til din 90 år gamle
          mamma - og ta henne med på fotografering.
          <br />
          <br />
          Hva får du ut av det? <br />
          ❤ Kvalitetstid mellom mor og barn <br />
          ❤ 20 minutter mommy & me fotografering <br />
          ❤ Online bildegallei hvor du velger bilder fra <br />
          ❤ 5 valgfrie digitale bildefiler <br />
          ❤ Fotografering på Jessheim i Ullensaker <br />
          ❤ Rabattkupong du kan bruke på neste fotografering
          <br />
          ❤ Verdens mest verdifulle morsdagsgave
          <br />
          <br /> Tilbudet gjelder for booking på hverdager i uke 8 og 9.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">KUN KR. 1350,-</div>
        </div>
      </>
    ),
    valid: {
      to: localTime("03.03.2024 00:00"),
    },
    button: {
      text: "Book her",
      link: `/${ContactRoute}`,
    },
  },
  {
    img: {
      src: ChristmasDiscount,
      alt: "En baby i blomstereng",
    },
    title: "40% rabatt på alle barnefotograferinger",
    description: (
      <>
        <div className="Discounts__Text">
          <p>
            Alle ordinære barnefotograferinger som bookes med dato i januar
            2024, får 40% avslag i prisen. Tilbudet gjelder for
            nyfødtfotografering, 1-årsfotografering og barnefotografering (fra
            6mnd)
          </p>
          <p>Tilbudet gjelder til og med 15.01.2024</p>
          <p>
            *Det er ingen rabatter på tilleggspriser. Kveldstillegg,
            helgetillegg og kjøretillegg kommer utenom.
          </p>
        </div>
      </>
    ),
    valid: {
      to: localTime("03.03.2024 00:00"),
    },
    button: {
      text: "Book her",
      link: `/${ContactRoute}`,
    },
  },
  {
    img: {
      src: MiniShootMothersday,
      alt: "En mamma med hennes sønn i en solsikkeåker",
    },
    title: "MORSDAGSTILBUD",
    description: (
      <>
        <div className="Discounts__FreePregnancyNextDate">
          Minifotografering - Mommy & me
        </div>
        <div className="Discounts__Text">
          Den perfekte morsdagsgave til alle mammaer i alle aldre!
          <br />
          Gi det til din kjære fra barna deres, eller gi det til din 90 år gamle
          mamma - og ta henne med på fotografering.
          <br />
          <br />
          Hva får du ut av det? <br />
          ❤ Kvalitetstid mellom mor og barn <br />
          ❤ 20 minutter mommy & me fotografering <br />
          ❤ Online bildegallei hvor du velger bilder fra <br />
          ❤ 5 valgfrie digitale bildefiler <br />
          ❤ Fotografering på Jessheim i Ullensaker <br />
          ❤ Rabattkupong du kan bruke på neste fotografering
          <br />
          ❤ Verdens mest verdifulle morsdagsgave
          <br />
          <br /> Tilbudet gjelder for booking på hverdager i uke 8 og 9.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">KUN KR. 1350,-</div>
        </div>
      </>
    ),
    valid: {
      to: localTime("03.03.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
  {
    img: {
      src: PregnancyFree,
      alt: "En gravid kvinne",
    },
    title: "Gratis minifotografering av gravide - Hver måned",
    description: (
      <>
        <div className="Discounts__FreePregnancyNextDate">
          Neste ledige dato: {freePregnancyDate.nextDate}
        </div>
        <div className="Discounts__Text">
          <p>
            Hver måned har jeg en dato der jeg tilbyr GRATIS utendørs
            minifotografering av gravide som er i uke 30-36 av svangerskapet.
            Fotograferingen vil foregå på Jessheim i Ullensaker.
          </p>
          <p>
            Det vil fra og med nå bli rom for å ha med partner og tidligere barn
            på gratis minifotografering av gravide. Lån av gravidkjoler er ikke
            inkludert i fotograferingen, men du har mulighet til å leie en
            gravidkjole for kr. 200,- om du ønsker dette.
          </p>
          <p>
            Om du vet at du ønsker å delta på dette når det nærmer seg din
            termin, ta kontakt via kontaktskjema og fortell meg når du har
            termin- så setter jeg deg på en prioritert liste.
          </p>
          Dette inkluderer:
          <IncludesList
            items={[
              "20 minutters fotografering utendørs",
              "Fotografering med partner og tidligere barn",
              "Mulighet for å leie gravidkjole for kr. 200,-",
              "Online bildegalleri hvor du velger dine bilder",
              "1 digital bildefil i høy oppløsning",
              "Mulighet for å kjøpe flere bilder, og bildeprodukter",
              "Rabattkupong som kan brukes på valgfri fotografering senere",
            ]}
          />
          <div className="Discounts__DiscountTextImportant">
            Neste dato annonseres i slutten av måneden.
          </div>
        </div>
      </>
    ),
    valid: {
      to: freePregnancyDate.validTo,
      from: freePregnancyDate.validFrom,
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
];

export const discountPosts = rawDiscountPosts.filter((discount) => {
  const now = Date.now();
  const toValid = discount.valid?.to ? discount.valid.to >= now : true;
  const fromValid = discount.valid?.from ? discount.valid.from <= now : true;
  return fromValid && toValid;
});

import { localTime } from "../utils";
import { freePregnancyDate, freePregnancyId } from "./FreePregnancyDate";
import { IncludesList } from "/src/Components/IncludesList";
import MinishootConfirmation from "/src/Images/Confirmation/conf_L_4.jpg";
import PregnancyFree from "/src/Images/Discounts/preg_c_10.jpg";
import SpringDiscount from "/src/Images/Discounts/springoffer.jpg";
import ChristmasDiscount from "/src/Images/christmas_minishoot.jpg";
import ContactRoute from "/src/Routes/Contact/Route";
import DiscountRoute from "/src/Routes/Discounts/Route";

const rawDiscountPosts = [
  {
    id: "vaartilbud",
    title: "Vårtilbud",
    img: {
      src: SpringDiscount,
      alt: "Nydelig bukett med tulipaner",
    },
    banner: {
      subTitle: "20% rabatt på alle ordinære fotograferinger",
      description: (
        <>
          Det er endelig vår i luften, og jeg vil feire det med et vårtilbud!
          20% rabatt på alle ordinære fotograferinger.
          <br />
          <br />
          *Tilbudet gjelder bookinger innen 24.03.2024.
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
      },
    },
    description: (
      <>
        <div className="Discounts__Text">
          Det er endelig vår i luften, og jeg vil feire det med et vårtilbud!
          20% rabatt på alle ordinære fotograferinger. Ja, du leste riktig,
          tilbudet gjelder også bryllupsfotograferinger.
          <br />
          <br />
          *Tilbudet gjelder ikke minifotograferinger eller pakkepriser, kun
          ordinær fotografering. Gjelder datoer innen utgangen av april. Må
          bookes innen 24.03.2024.
          <br />
          <br />
        </div>
      </>
    ),
    valid: {
      from: localTime("09.03.2024 00:00"),
      to: localTime("25.03.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
  {
    id: "konfirmant",
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
    id: freePregnancyId,
    title: "Gratis minifotografering av gravide - Hver måned",
    img: {
      src: PregnancyFree,
      alt: "En gravid kvinne",
    },
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

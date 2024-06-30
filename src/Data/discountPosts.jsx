import { localTime } from "../utils";
import { freePregnancyDate, freePregnancyId } from "./FreePregnancyDate";
import { IncludesList } from "/src/Components/IncludesList";
import MinishootConfirmation from "/src/Images/Confirmation/conf_L_4.jpg";
import MinishootAugust from "/src/Images/Discounts/minishootaugust.jpg";
import PregnancyFree from "/src/Images/Discounts/preg_c_10.jpg";
import SpringDiscount from "/src/Images/Discounts/springoffer.jpg";
import SummerDiscount from "/src/Images/Discounts/summerdiscount.jpg";
import WeddingDiscount from "/src/Images/Discounts/weddingdiscount.jpg";
import KidsMinisession from "/src/Images/Kids/LP_2.jpg";
import ChristmasDiscount from "/src/Images/christmas_minishoot.jpg";
import ContactRoute from "/src/Routes/Contact/Route";
import DiscountRoute from "/src/Routes/Discounts/Route";

const rawDiscountPosts = [
  {
    id: "sommertilbud",
    title: "Sommertilbud",
    img: {
      src: SummerDiscount,
      alt: "Vannmelon",
    },
    banner: {
      subTitle: "20% rabatt på alle ordinære fotograferinger",
      description: (
        <>
          Book en valgfri ordinær fotografering med dato i juni, juli eller
          august og få 20% rabatt på fotograferingen.
          <br />
          <br />
          *Tilbudet gjelder ikke for pakkepriser, gjelder også for allerede
          bookede fotograferinger. Gjelder til og med 31.08.2024
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
      },
    },
    description: (
      <>
        <div className="Discounts__Text">
          <div className="Discounts__FreePregnancyNextDate">
            20% rabatt på alle ordinære fotograferinger
          </div>
          Book en valgfri ordinær fotografering med dato i juni, juli eller
          august og få 20% rabatt på fotograferingen.
          <br />
          <br />
          *Tilbudet gjelder ikke for pakkepriser, gjelder også for allerede
          bookede fotograferinger. Gjelder til og med 31.08.2024
          <br />
          <br />
        </div>
      </>
    ),
    valid: {
      from: localTime("12.06.2024 00:00"),
      to: localTime("01.09.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
  {
    id: "minifoto-august",
    title: "Valgfri minifotografering i august",
    img: {
      src: MinishootAugust,
      alt: "Portrett av en ung dame i en eng",
    },
    banner: {
      subTitle: "7. august og 10. august 2024",
      description: (
        <>
          Valgfri minifotografering 7. eller 10. august. Passer like bra for en
          søskenfotografering som en gravidfotografering.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">Kun kr. 399,-</div>
          <br />
          *Booking er bindende. Ingen bilder er inkludert i prisen, dette kommer
          i tillegg.
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
      },
    },
    description: (
      <>
        <div className="Discounts__Text">
          <div className="Discounts__FreePregnancyNextDate">
            7. august og 10. august 2024
          </div>
          <IncludesList
            items={[
              "20 minutter valgfri fotografering utendørs på Jessheim",
              "Online visningsgalleri hvor du kan velge dine bilder",
              "Mulighet for å leie gravidkjole for kr. 200,-",
              "Mulighet for en visningstime der du kan se på ulike fysiske bildeproduktene du kan bestille",
              "Gode rabatter på bilder og produkter",
              "Mulighet for å kjøpe flere bilder, og bildeprodukter",
            ]}
          />
          Her velger du helt selv hva slags fotografering som skal gjennomføres,
          men det er viktig at jeg får beskjed på forhånd- slik at jeg kan
          planlegge og ta med det jeg trenger til deres fotografering.
          <br />
          <br />
          Send en mail eller ta kontakt via kontaktskjema med ønsket dato og
          tidspunkt, samt hvilken fotografering du ønsker deg. Om timen er
          ledig, vil du motta en kontrakt som må fylles ut og signeres så snart
          som mulig, samt en faktura som må betales for at bookingen skal være
          gyldig. Om tidspunktet ikke er ledig, vil jeg gi deg beskjed og
          foreslå et annet tidspunkt om det er noen ledige tider.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">Kun kr. 399,-</div>
          <br />
          *Booking er bindende. Ingen bilder er inkludert i prisen, dette kommer
          i tillegg.
          <br />
          <br />
        </div>
      </>
    ),
    valid: {
      from: localTime("01.07.2024 00:00"),
      to: localTime("10.08.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },
  {
    id: "bryllupstilbud",
    title: "Bryllupstilbud",
    img: {
      src: WeddingDiscount,
      alt: "Brudepar",
    },
    banner: {
      subTitle: "20% rabatt på alle bryllup i 2024",
      description: (
        <>
          Jeg har fortsatt ledig tid til bryllupsfotograferinger i 2024. Alle
          bryllup som bookes med dato i 2024, får nå 20% rabatt.
          <br />
          <br />
          *Tilbudet gjelder ikke for Gallactic-pakken.
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
      },
    },
    description: (
      <>
        <div className="Discounts__Text">
          <div className="Discounts__FreePregnancyNextDate">
            20% rabatt på alle bryllup i 2024
          </div>
          Jeg har fortsatt ledig tid til bryllupsfotograferinger i 2024. Alle
          bryllup som bookes med dato i 2024, får nå 20% rabatt.
          <br />
          <br />
          *Tilbudet gjelder ikke for Gallactic-pakken.
          <br />
          <br />
        </div>
      </>
    ),
    valid: {
      from: localTime("01.06.2024 00:00"),
      to: localTime("30.12.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },

  {
    id: "barn-soskenfotografering",
    title: "Søsken og barnefotografering",
    img: {
      src: KidsMinisession,
      alt: "En gutt ute i grønne omgivelser",
    },
    banner: {
      subTitle: "Onsdag 5. juni 2024 og lørdag 8. juni 2024",
      description: (
        <>
          Blir det ikke fotografering i barnehagen deres i år, og du ønsker
          bilder av barna? Da har jeg løsningen for deg!
          <br />
          <br />I juni setter jeg av tid til utendørs fotografering av barn og
          søsken. Her blir det rom for portretter av hvert enkelt barn og
          søskenbilder sammen.
        </>
      ),
      button: {
        link: `/${DiscountRoute}`,
      },
    },
    description: (
      <>
        <div className="Discounts__Text">
          <div className="Discounts__FreePregnancyNextDate">
            Onsdag 5. juni 2024 og lørdag 8. juni 2024
          </div>
          Blir det ikke fotografering i barnehagen deres i år, og du ønsker
          bilder av barna? Da har jeg løsningen for deg!I juni setter jeg av tid
          til utendørs fotografering av barn og søsken. Her blir det rom for
          portretter av hvert enkelt barn og søskenbilder sammen.
          <br />
          <br />
          Selve fotograferingen er gratis, du betaler kun for digitale
          bildefiler eller andre bildeprodukter du ønsker å kjøpe etter
          fotograferingen. Om du ikke møter opp til avtalt tid, vil du
          faktureres kr. 500,- for uteblitt oppmøte.
          <br />
          <br />
          Det blir ca. 10-15 minutter fotografering per familie, utendørs på
          Jessheim i Ullensaker. Mer informasjon om fotograferingen og
          oppmøtested sendes ut senere.
          <br />
          <br />
          Etter fotograferingen vil dere motta et online bildegalleri hvor dere
          kan se gjennom de beste bildene fra fotograferingen, og bestemme dere
          for hvilke bilder og bildeprodukter dere ønsker å bestille. Det er
          også mulighet for å sette opp en visningstime, hvor dere kan få se og
          kjenne på de ulike bildeproduktene jeg tilbyr.
          <br />
          <br />
          Dere vil få eksklusive barnehagepriser på produktene jeg tilbyr, som
          kun vil gjelde i forbindelse med disse fotograferingene. Mer
          informasjon om disse prisene, de ulike bildepakkene og en guide med
          tips før fotografeiringen vil bli sendt ut på mail etter booking. For
          at bookingen skal være gyldig, må denne fylles ut signeres.
          <br />
          <br />
          <div className="Discounts__DiscountTextImportant">
            Hva inkluderer det?
          </div>
          - Gratis fotografering
          <br />
          - 10-15 minutter fotografering
          <br />
          - Barnehagepriser på produkter i etterkant
          <br />
          - Fotografering utendørs på Jessheim <br />
          - Online bildegalleri hvor du velger bilder <br />
        </div>
      </>
    ),
    valid: {
      from: localTime("01.05.2024 00:00"),
      to: localTime("08.06.2024 00:00"),
    },
    button: {
      link: `/${ContactRoute}`,
    },
  },

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
      to: localTime("02.05.2024 00:00"),
    },
    button: {
      link: `https://skaugmedia.pixieset.com/booking/minifotografering-av-konfirmanter`,
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

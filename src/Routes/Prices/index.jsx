import "./Prices.css";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { Underline } from "../../Components/Underline";
import { PriceList } from "./Components/PriceList";
import { PageSection } from "../../Components/PageSection";
import { IncludesList } from "./Components/IncludesList";
import { oneLine } from "common-tags";

export const route = "priser";
export const pageName = "Priser";

const portrettimg = new URL(
  "../../Images/portrett_priser.jpg",
  import.meta.url
);
const newbornimg = new URL("../../Images/newborn_prices.jpg", import.meta.url);
const pregnantimg = new URL(
  "../../Images/pregnant_prices.jpg",
  import.meta.url
);
const coupleimg = new URL("../../Images/couple_prices.jpg", import.meta.url);
const weddingimg = new URL("../../Images/wedding-prices.jpg", import.meta.url);
const foodimg = new URL("../../Images/food_prices.jpg", import.meta.url);
const designimg = new URL("../../Images/design_prices.jpg", import.meta.url);

export function Prices() {
  return (
    <PageSection innerClassName="prices">
      <div className="prices-content">
        <DesignHeading className="prices-heading">{pageName}</DesignHeading>

        <div className="section-category">
          <img
            className="category-image"
            src={portrettimg}
            alt="Konfirmanten Silje"
          ></img>
          <div className="section-text">
            <div className="category-title">
              Portrett, barn, familie og konfirmant
            </div>
            <PriceList
              items={[
                {
                  name: "Portrettfotografering",
                  price: "Kr. 2750,-",
                },
                {
                  name: "Barnefotografering",
                  price: "Kr. 2750,-",
                },
                {
                  name: "Konfirmantfotografering",
                  price: "Kr. 2750,-",
                },
                {
                  name: "Familiefotografering",
                  price: "Kr. 2750,-",
                },
                {
                  name: "Portretter bedrift",
                  price: "Ta kontakt for pristilbud",
                },
              ]}
            />

            <div className="price-info">
              Inkluderer:
              <IncludesList
                items={[
                  "Samtale før fotografering med veiledning til valg av lokasjon og anbefalte klær",
                  "1-2 timer fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
                  "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
                  "3 stk. redigerte, høyoppløselige bilder",
                  "Bildene leveres digitalt",
                ]}
              />
              Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert,
              er prisen kr. 800,- per bilde.
              <p className="price-extra-info">
                *Eventuell betalt parkering og/eller kjøring over lange
                avstander kommer i tillegg i prisen
              </p>
            </div>
          </div>
        </div>

        <div class="section-divider"></div>

        <div className="section-category">
          <img className="category-image" src={newbornimg} alt="Liam"></img>
          <div className="section-text">
            <div className="category-title">Nyfødt</div>
            <PriceList
              items={[{ name: "Nyfødtfotografering", price: "Kr. 3000,-" }]}
            />

            <div className="price-info">
              Jeg anbefaler å ha nyfødtfotografering innen babyen har fylt 14
              dager, men det går også fint etter dette om tiden ikke strekker
              til. Husk bare på at jo eldre babyen blir, jo mer våken blir den.
              Denne fotograferingen inkluderer også bilder med foreldre og
              søsken.
              <br />
              <br />
              Inkluderer:
              <IncludesList
                items={[
                  "Samtale før fotografering for å avtale nærmere",
                  "2-3 timer fotografering hjemme hos dere (jeg tar med enkel styling og lamper)",
                  "Bilder sammen med foreldre og søsken",
                  "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
                  "3 stk. redigerte, høyoppløselige bilder",
                  "Bildene leveres digitalt",
                ]}
              />
              Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert,
              er prisen kr. 800,- per bilde.
              <br />
              <br />
              <div className="price-extra-info">
                *Eventuell betalt parkering og/eller kjøring over lange
                avstander kommer i tillegg i prisen
              </div>
            </div>
          </div>
        </div>

        <div class="section-divider"></div>

        <div className="section-category">
          <img className="category-image" src={pregnantimg} alt="Tonje"></img>
          <div className="section-text">
            <div className="category-title">Gravidfotografering</div>
            <PriceList
              items={[{ name: "Gravidfotografering", price: "Kr. 2750,-" }]}
            />

            <div className="price-info">
              Gravidfotografering blir flott både utendørs i naturen, eller
              hjemme hos dere, for eksempel i en lekker oppredd dobbeltseng
              eller foran lyse luftige gardiner med lyset fra vinduet strømmende
              inn bak gardinene. Jeg har et lite utvalg av flotte kjoler og
              rekvisitter som passer til gravidfotografering, lån av disse er
              inkludert i prisen. Denne fotograferingen inkluderer også partner
              og søsken. Ved bestilling av denne fotograferingen, får du 25%
              avslag på nyfødtfotografering.
              <br />
              <br />
              Inkluderer:
              <IncludesList
                items={[
                  "Samtale før fotografering for å avtale nærmere",
                  "1-2 timer fotografering på lokasjon inne eller ute (vi blir sammen enige om hvor)",
                  "Bilder sammen med partner og barn",
                  "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
                  "3 stk. redigerte, høyoppløselige bilder",
                  "Bildene leveres digitalt",
                ]}
              />
              Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert,
              er prisen kr. 800,- per bilde.
              <br />
              <br />
              <div className="price-extra-info">
                *Eventuell betalt parkering og/eller kjøring over lange
                avstander kommer i tillegg i prisen
              </div>
            </div>
          </div>
        </div>
        <div class="section-divider"></div>

        <div className="section-category">
          <img
            className="category-image"
            src={coupleimg}
            alt="Victor og Nina"
          ></img>
          <div className="section-text">
            <div className="category-title">Parfotografering</div>
            <PriceList
              items={[
                {
                  name: "Kjæreste- eller forlovelses-fotografering",
                  price: "Kr. 4000,-",
                },
              ]}
            />

            <div className="price-info">
              Parfotografering blir etter min mening best utendørs, men det er
              også flott innendørs om dere helst ønsker dette. Vi tilbringer
              mellom 1 og 2 timer sammen, der dere er dere selv foran kamera, og
              viser frem deres kjærlighet til hverandre.
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
              Ønsker du å bestille flere bilder enn de 3 stk. som er inkludert,
              er prisen kr. 800,- per bilde.
              <br />
              <br />
              <div className="price-extra-info">
                *Eventuell betalt parkering og/eller kjøring over lange
                avstander kommer i tillegg i prisen
              </div>
            </div>
          </div>
        </div>

        <div class="section-divider"></div>

        <div className="section-category">
          <img
            className="category-image"
            src={weddingimg}
            alt="Borddekking"
          ></img>
          <div className="section-text">
            <div className="category-title">Bryllupsfotografering</div>
            <PriceList
              items={[
                {
                  name: "Vielse + portrettfotografering - 2,5 timer",
                  price: "Kr. 14.000,-",
                },
                {
                  name: "Portrettfotografering - 1,5 time",
                  price: "Kr. 10.000,-",
                },
              ]}
            />
            <div className="price-info">
              Hvis du velger vielse + portrettfotografering vil dette inkludere
              ca. 2,5 timer med fotografering. Da fotograferer jeg hele vielsen
              og portretter etter vielsen. Dere får da 35 ferdig redigerte
              bilder- som dere selv velger ut.
              <br />
              <br />
              Om dere velger kun portretter, får dere 10 ferdig redigerte
              bilder, som dere selv velger ut. Da fotograferer jeg i ca. 1,5
              time, og begge pakkene inkluderer fotografering med familie og
              forlovere etter vielsen.
              <br />
              <br />
              Inkluderer:
              <IncludesList
                items={[
                  "Samtale før fotografering for å avtale nærmere",
                  "Fotografering under vielsen (hvis du velger pakken der dette er inkludert)",
                  "1,5 timers portrettfotografering etter vielsen",
                  "Fotografering med familie og forlovere etter vielsen",
                  "Digitalt bildegalleri hvor man selv velger hvilke bilder man ønsker å bestille",
                  "35/10 stk. redigerte, høyoppløselige bilder",
                  "Bildene leveres digitalt",
                ]}
              />
              Ønsker du å bestille flere bilder enn de som er inkludert, er
              prisen kr. 800,- per bilde.
              <br />
              <br />
              <div className="price-extra-info">
                *Eventuell betalt parkering og/eller kjøring over lange
                avstander kommer i tillegg i prisen
              </div>
            </div>
          </div>
        </div>
        <div class="section-divider"></div>
        <div className="section-category">
          <img
            className="category-image"
            src={foodimg}
            alt="Rødbetesalat"
          ></img>
          <div className="section-text">
            <div className="category-title">Produkt og matfotografering</div>
            <PriceList
              items={[
                {
                  name: "Produktfotografering",
                  price: "Ta kontakt for pristilbud",
                },
                {
                  name: "Matfotografering",
                  price: "Ta kontakt for pristilbud",
                },
              ]}
            />
            <div className="price-info">
              Ta kontakt for å avklare pris, da dette avhenger av antall bilder,
              stylinger, spesielle krav og lignende.
            </div>
          </div>
        </div>
        <div class="section-divider"></div>
        <div className="section-category">
          <img
            className="category-image"
            src={designimg}
            alt="Naturalis prislapper"
          ></img>
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

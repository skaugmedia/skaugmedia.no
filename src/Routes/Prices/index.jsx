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
            <div className="category-price">
              <div className="price-category">Nyfødtfotografering</div>
              <div className="price-category-price">Kr. 3000,-</div>
            </div>
            <div className="line-between"></div>
            <div className="price-info">
              Jeg anbefaler å ha nyfødtfotografering innen babyen har fylt 14
              dager, men det går også fint etter dette om tiden ikke strekker
              til. Husk bare på at jo eldre babyen blir, jo mer våken blir den.
              Denne fotograferingen inkluderer også bilder med foreldre og
              søsken.
              <br />
              <br />
              Inkluderer:
              <br />
              - Samtale før fotografering for å avtale nærmere <br />- 2-3 timer
              fotografering hjemme hos dere (jeg tar med enkel styling og
              lamper)
              <br />- Bilder sammen med foreldre og søsken
              <br />- Digitalt bildegalleri hvor man selv velger hvilke bilder
              man ønsker å bestille
              <br />- 3 stk. redigerte, høyoppløselige bilder
              <br />- Bildene leveres digitalt
              <br />
              <br />
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
        <div className="section-category">
          <img className="category-image" src={pregnantimg} alt="Tonje"></img>
          <div className="section-text">
            <div className="category-title">Gravidfotografering</div>
            <div className="category-price">
              <div className="price-category">Gravidfotografering</div>
              <div className="price-category-price">Kr. 2750,-</div>
            </div>
            <div className="line-between"></div>
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
              <br />
              - Samtale før fotografering for å avtale nærmere
              <br />- 1-2 timer fotografering på lokasjon inne eller ute (vi
              blir sammen enige om hvor)
              <br />- Bilder sammen med partner og søsken
              <br />- Digitalt bildegalleri hvor man selv velger hvilke bilder
              man ønsker å bestille
              <br />- 3 stk. redigerte, høyoppløselige bilder
              <br />- Bildene leveres digitalt
              <br />
              <br />
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
        <div className="section-category">
          <img
            className="category-image"
            src={coupleimg}
            alt="Victor og Nina"
          ></img>
          <div className="section-text">
            <div className="category-title">Parfotografering</div>
            <div className="category-price">
              <div className="price-category">
                Kjæreste- eller forlovelses-fotografering
              </div>
              <div className="price-category-price">Kr. 4000,-</div>
            </div>
            <div className="line-between"></div>
            <div className="price-info">
              Parfotografering blir etter min mening best utendørs, men det er
              også flott innendørs om dere helst ønsker dette. Vi tilbringer
              mellom 1 og 2 timer sammen, der dere er dere selv foran kamera, og
              viser frem deres kjærlighet til hverandre.
              <br />
              <br />
              Inkluderer:
              <br />
              - Samtale før fotografering for å avtale nærmere
              <br />- 1-2 timer fotografering på lokasjon inne eller ute (vi
              blir sammen enige om hvor)
              <br />- Bilder sammen med partner og søsken
              <br />- Digitalt bildegalleri hvor man selv velger hvilke bilder
              man ønsker å bestille
              <br />- 3 stk. redigerte, høyoppløselige bilder
              <br />- Bildene leveres digitalt
              <br />
              <br />
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
              Om dere velger kun portretter, får dere 10 ferdig redigerte
              bilder, som dere selv velger ut. Da fotograferer jeg i ca. 1,5
              time, og begge pakkene inkluderer fotografering med familie og
              forlovere etter vielsen.
              <br />
              <br />
              Inkluderer:
              <br />
              - Samtale før fotografering for å avtale nærmere
              <br />
              -Fotografering under vielsen (hvis du velger pakken der dette er
              inkludert)
              <br />- 1,5 timers portrettfotografering etter vielsen
              <br />- Fotografering med familie og forlovere etter vielsen
              <br />- Digitalt bildegalleri hvor man selv velger hvilke bilder
              man ønsker å bestille
              <br />- 35/10 stk. redigerte, høyoppløselige bilder
              <br />- Bildene leveres digitalt
              <br />
              <br />
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
        <div className="section-category">
          <img
            className="category-image"
            src={foodimg}
            alt="Rødbetesalat"
          ></img>
          <div className="section-text">
            <div className="category-title">Produkt og matfotografering</div>
            <div className="category-price">
              <div className="price-category">Produktfotografering</div>
              <div className="price-category-price">
                Ta kontakt for pristilbud
              </div>
            </div>
            <div className="line-between"></div>
            <div className="price-category">Matfotografering</div>
            <div className="price-category-price">
              Ta kontakt for pristilbud
            </div>

            <div className="line-between"></div>
            <div className="price-info">
              Ta kontakt for å avklare pris, da dette avhenger av antall bilder,
              stylinger, spesielle krav og lignende.
            </div>
          </div>
        </div>
        <div className="section-category">
          <img
            className="category-image"
            src={designimg}
            alt="Naturalis prislapper"
          ></img>
          <div className="section-text">
            <div className="category-title">Design</div>
            <div className="category-price">
              <div className="price-category">Visuell identitet / Branding</div>
              <div className="price-category-price">Kr. 950,- per time</div>
            </div>
            <div className="line-between"></div>

            <div className="price-category">Websideutvikling</div>
            <div className="price-category-price">Kr. 950,- per time</div>
            <div className="line-between"></div>

            <div className="price-category">Logo design</div>
            <div className="price-category-price">Kr. 950,- per time</div>
            <div className="line-between"></div>

            <div className="price-category">
              Trykksaker til bryllup, konfirmasjon, dåp
            </div>
            <div className="price-category-price">
              Ta kontakt for pristilbud
            </div>

            <div className="line-between"></div>
            <div className="price-category">Annet design</div>
            <div className="price-category-price">
              Ta kontakt for pristilbud
            </div>
            <div className="line-between"></div>
            <div className="price-info">
              Ta kontakt for å avklare omtrentlig mengde tid jeg vil bruke, hva
              du kan forvente fra meg og hva ditt prosjekt går ut på.
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

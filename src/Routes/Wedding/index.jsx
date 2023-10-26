import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import pageName from "./PageName";
import "./Wedding.css";
import AlbumImg from "/src/Images/WeddingPrice/album.jpg";
import CanvasImg from "/src/Images/WeddingPrice/canvas.jpg";
import PrintPackImg from "/src/Images/WeddingPrice/designpack.jpg";
import DigitalImg from "/src/Images/WeddingPrice/digital_files.jpg";
import PhotocopyImg from "/src/Images/Prices/photocopy.jpg";
import WeddingTextImg from "/src/Images/WeddingPrice/wedding_text.jpg";
import WeddingText1Img from "/src/Images/WeddingPrice/wedding_text1.jpg";
import WeddingText2Img from "/src/Images/WeddingPrice/wedding_text2.jpg";

export function PricesProducts() {
  useDocumentTitle(pageName);
  return (
    <>
      <PageSection innerClassName="wedding">
        <div className="prices-content">
          <DesignHeading className="prices-heading">{pageName}</DesignHeading>
        </div>
      </PageSection>
      <PageSection>
        <div className="Wedding__TopContentHeader">Det er deres store dag,</div>
        <div className="Wedding__TopContentSubHeader">
          og dere fortjener å skinne!
        </div>

        <p className="Wedding__TopContentText">
          Et bryllup er en av de mest spesielle øyeblikkene i livet deres, og
          det fortjener å bli foreviget på en måte som fanger ekte følelser og
          skjønnheten i hvert øyeblikk. En erfaren bryllupsfotograf har evnen
          til å fange de spontane smilene, de rørende øyeblikkene, og den unike
          atmosfæren som gjør deres dag helt spesiell. Bilder fra bryllupet vil
          være arvesølvet som dere vil dele med kommende generasjoner, og derfor
          er det viktig å velge en bryllupsfotograf som kan dokumentere deres
          kjærlighetshistorie med lidenskap og dyktighet.
        </p>
        <p className="Wedding__TopContentText">
          Utforsk mine varierte bryllupspakker, skreddersydd for å passe dine
          unike behov og budsjett, slik at jeg kan fange din store dag på den
          mest minneverdige måten.
        </p>
      </PageSection>
      <PageSection>
        <div className="Wedding__PackageBoxRow">
          <div className="Wedding__PackageBox1">
            <div className="Wedding__PackageBoxHeader">Bryllupspakke 1</div>
            <div className="Wedding__PackageBoxSubHeader">
              Vielse + portretter
            </div>
            <div className="Wedding__PackageBoxText">
              Fotografering av vielse, portretter av brudeparet
            </div>
            <div className="Wedding__PackageBoxDivider"></div>

            <div className="Wedding__PackageBoxText">3 timer fotografering</div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Ca. 50 stk. digitale bildefiler{" "}
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              50% rabatt på forlovelsesfotografering{" "}
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxPrice">Kr. 16.000,-</div>
          </div>
          <div className="Wedding__PackageBox2">
            <div className="Wedding__PackageBoxHeader">Bryllupspakke 2</div>
            <div className="Wedding__PackageBoxSubHeader">
              Halvdagsfotografering
            </div>
            <div className="Wedding__PackageBoxText">
              Fotografering av forberedelser eller ankomst til festen, vielse og
              portretter
            </div>
            <div className="Wedding__PackageBoxDivider"></div>

            <div className="Wedding__PackageBoxText">5 timer fotografering</div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Ca. 150 stk. digitale bildefiler{" "}
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert
              I prisen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxPrice">Kr. 24.000,-</div>
          </div>
          <div className="Wedding__PackageBox3">
            <div className="Wedding__PackageBoxHeader">Bryllupspakke 3</div>
            <div className="Wedding__PackageBoxSubHeader">
              Halvdagsfotografering + trykksaker
            </div>
            <div className="Wedding__PackageBoxText">
              Fotografering av forberedelser eller ankomst til festen, vielse og
              portretter
            </div>
            <div className="Wedding__PackageBoxDivider"></div>

            <div className="Wedding__PackageBoxText">5 timer fotografering</div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Ca. 150 stk. digitale bildefiler{" "}
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert
              I prisen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              20 stk. doble invitasjoner (mulig å bestille flere)
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              20 stk. doble takkekort (mulig å bestille flere)
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Mulighet for å bestille flere trykksaker i samme stil
            </div>

            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxPrice">Kr. 32.000,-</div>
          </div>
        </div>
      </PageSection>
      {/* <PageSection>
        <div className="Wedding__PackageBigBox">
          <div className="Wedding__PackageBigBox1">
            <div className="Wedding__PackageBigBoxHeaderText">
              <div className="Wedding__PackageBigBoxHeader">
                <div className="Wedding__PackageBoxHeaderBigBox">
                  Bryllupspakke 1
                </div>
                <div className="Wedding__PackageBoxSubHeaderBigBox">
                  Vielse + portretter
                </div>
              </div>
              <div className="Wedding__PackageBoxPriceBigBox">Kr. 16.000,-</div>
            </div>

            <div className="Wedding__PackageBigBoxContent">
              <div className="Wedding__PackageBigBoxTextSection">
                <p className="Wedding__PackageBigBoxText">
                  Dette er en ypperlig pakke for dere som kun ønsker fotografen
                  tilstede under vielsen og for å forevige portrettene deres.
                  Jeg er med dere på de viktigste øyeblikkene på deres store
                  dag, og fanger de magiske øyeblikkene når dere sier JA til
                  hverandre.
                </p>
                <p className="Wedding__PackageBigBoxText">
                  Vi setter av tid til et planleggingsmøte i god tid før den
                  store dagen, der vi snakker om deres ønsker til bildene og for
                  å bli litt kjent med hverandre.
                </p>
                <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

                <div className="Wedding__PackageBigBoxListText">
                  Planleggingsmøte før den store dagen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Fotografering av vielse, portretter av brudeparet
                </div>
                <div className="Wedding__PackageBoxDivider"></div>

                <div className="Wedding__PackageBigBoxListText">
                  3 timer fotografering
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Ca. 70 stk. digitale bildefiler
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Online bildegalleri hvor dere kan laste ned bildene
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Mulighet for å kjøpe bildeprodukter
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  50% rabatt på forlovelsesfotografering
                </div>
              </div>
              <div className="Wedding__PackageBigBoxImgSection">
                <img
                  className="Wedding__PackageBigBoxImg"
                  src={WeddingText2Img}
                  title="Portrett av et brudepar"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection> */}

      {/* <PageSection>
        <div className="Wedding__PackageBigBox">
          <div className="Wedding__PackageBigBox1">
            <div className="Wedding__PackageBigBoxHeaderText">
              <div className="Wedding__PackageBigBoxHeader">
                <div className="Wedding__PackageBoxHeaderBigBox">
                  Bryllupspakke 2
                </div>
                <div className="Wedding__PackageBoxSubHeaderBigBox">
                  Halvdagsfotografering
                </div>
              </div>
              <div className="Wedding__PackageBoxPriceBigBox">Kr. 24.000,-</div>
            </div>

            <div className="Wedding__PackageBigBoxContent">
              <div className="Wedding__PackageBigBoxTextSection">
                <p className="Wedding__PackageBigBoxText">
                  Dette er pakken for dere som ønsker bilder fra litt mer enn
                  bare seremonien og bryllupsportrettene. Dere velger om jeg
                  skal fotografere dere under forberedelsene eller når dere
                  ankommer festen, i tillegg til at jeg fotograferer seremonien
                  og bryllupsportrettene før eller etter vielsen.
                </p>
                <p className="Wedding__PackageBigBoxText">
                  Vi setter av tid til et planleggingsmøte i god tid før den
                  store dagen, der vi snakker om deres ønsker til bildene og for
                  å bli litt kjent med hverandre. I denne pakken er også
                  forlovelsesfotografering inkludert, der dere får velge 5 stk.
                  bilder i høy oppløsning.
                </p>
                <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

                <div className="Wedding__PackageBigBoxListText">
                  Planleggingsmøte før den store dagen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Fotografering under vielsen, portrettfotografering og
                  fotografering av forberedelser eller når dere ankommer festen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>

                <div className="Wedding__PackageBigBoxListText">
                  5 timer fotografering
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Ca. 150 stk. digitale bildefiler
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Online bildegalleri hvor dere kan laste ned bildene
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Mulighet for å kjøpe bildeprodukter
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Forlovelsesfotografering inkludert 5 stk. bilder i høy
                  oppløsning
                </div>
              </div>
              <div className="Wedding__PackageBigBoxImgSection">
                <img
                  className="Wedding__PackageBigBoxImg"
                  src={WeddingText1Img}
                  title="Portrett av et brudepar"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection> */}

      {/* <PageSection>
        <div className="Wedding__PackageBigBox">
          <div className="Wedding__PackageBigBox1">
            <div className="Wedding__PackageBigBoxHeaderText">
              <div className="Wedding__PackageBigBoxHeader">
                <div className="Wedding__PackageBoxHeaderBigBox">
                  Bryllupspakke 3
                </div>
                <div className="Wedding__PackageBoxSubHeaderBigBox">
                  Halvdagsfotografering + trykksaker
                </div>
              </div>
              <div className="Wedding__PackageBoxPriceBigBox">Kr. 24.000,-</div>
            </div>

            <div className="Wedding__PackageBigBoxContent">
              <div className="Wedding__PackageBigBoxTextSection">
                <p className="Wedding__PackageBigBoxText">
                  Denne dagen er en milepæl i deres kjærlighetshistorie, og jeg
                  vil med veiledning fra dere legge min sjel i å hjelpe dere med
                  å lage deres drømmedag. Jeg designer deres invitasjoner,
                  takkekort og menyer før den store dagen, i tillegg til at jeg
                  fotograferer under vielsen, portretter og under forberedelsene
                  eller når dere ankommer festen.
                </p>
                <p className="Wedding__PackageBigBoxText">
                  Med denne pakken kan du nyte hvert øyeblikk av din store dag,
                  og vite at jeg vil fange de perfekte øyeblikkene og hjelpe
                  dere med å skape en minneverdig helhetsopplevelse for deg og
                  dine gjester.
                </p>
                <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

                <div className="Wedding__PackageBigBoxListText">
                  Planleggingsmøte før den store dagen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Fotografering under vielsen, portrettfotografering og
                  fotografering av forberedelser eller når dere ankommer festen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>

                <div className="Wedding__PackageBigBoxListText">
                  5 timer fotografering
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Ca. 150 stk. digitale bildefiler
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Online bildegalleri hvor dere kan laste ned bildene
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Mulighet for å kjøpe bildeprodukter
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Forlovelsesfotografering inkludert 5 stk. bilder i høy
                  oppløsning
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Veiledningsmøter underveis i designprosessen
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  20 stk. doble invitasjoner (mulighet for å bestille flere)
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  20 stk. doble takkekort (mulighet for å bestille flere)
                </div>
                <div className="Wedding__PackageBoxDivider"></div>
                <div className="Wedding__PackageBigBoxListText">
                  Mulighet for å bestille flere trykksaker i samme design
                </div>
              </div>
              <div className="Wedding__PackageBigBoxImgSection">
                <img
                  className="Wedding__PackageBigBoxImg"
                  src={WeddingTextImg}
                  title="Portrett av et brudepar"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection> */}

      <PageSection>
        <button className="Wedding__PackageCompareButton">
          Sammenlign bryllupspakkene her
        </button>
      </PageSection>
      <PageSection>
        <div className="Wedding__TextSectionBox">
          <div className="Wedding__TextSection">
            <div className="Wedding__TextSectionHeader">
              Viktige ting å tenke på før dere tar kontakt med meg
            </div>
            <p className="Wedding__Text">
              Når du leter etter den perfekte bryllupsfotografen, er det viktig
              å huske at bildene de tar vil være dine minner for livet. Sørg for
              at du virkelig liker fotografens tidligere arbeid ved å se gjennom
              deres portefølje. I tillegg, å ha en god kjemi med fotografen er
              nøkkelen til å få avslappede og naturlige bilder. Derfor er det
              viktig å møtes personlig før bryllupet for å sikre at dere har den
              rette kjemien. Dette vil hjelpe dere med å føle dere komfortable
              foran kameraet og sikre at fotografen kan fange de spesielle
              øyeblikkene som gjør deres dag unik.
            </p>
            <p className="Wedding__Text">
              Husk at valget av bryllupsfotograf er avgjørende for å bevare
              minnene fra denne spesielle dagen, så ta deg tid til å velge
              riktig fotograf som forstår dine ønsker og behov.
            </p>
            <div className="Wedding__TextSectionHeader">
              Hvordan booker dere meg?
            </div>
            <p className="Wedding__Text">
              For å sikre at jeg er tilgjengelig for å fange dine
              bryllupsminner, vennligst kontakt meg via kontaktskjemaet her på
              nettsiden eller send en e-post til booking@skaugmedia.no.
              Vennligst inkluder relevant kontaktinformasjon og detaljer om din
              bryllupsdato, samt annen informasjon som du anser som relevant for
              din store dag. Jeg ser frem til å høre fra dere og være en del av
              deres spesielle øyeblikk.
            </p>
            <p className="Wedding__Text">
              Dere vil få svar fra meg så snart jeg får tid.
            </p>
            <div className="Wedding__TextSectionHeader">Hva skjer nå?</div>
            <p className="Wedding__Text">
              Når jeg har bekreftet tilgjengeligheten for deres bryllupsdato,
              går vi videre med en enkel og viktig prosess. Vi vil utarbeide en
              kontrakt for fotograferingen som alle parter må signere. Etter
              kontrakten er signert, vil dere motta en faktura på 1/3 av den
              totale prisen som et reservasjonsgebyr. Dette sikrer at datoen
              deres er reservert og bookingen deres er gjennomført. Vær
              oppmerksom på at reservasjonsgebyret ikke refunderes dersom dere
              velger å ikke bruke meg som deres fotograf etter at betalingen er
              mottatt.
            </p>
            <p className="Wedding__Text">
              Etter din store dag vil du motta en ny faktura for den gjenværende
              balansen, som må være betalt i sin helhet før jeg begynner med
              etterarbeidet av deres bilder. Jeg ser frem til å være en del av
              deres bryllupseventyr og hjelpe dere med å bevare deres viktigste
              minner.
            </p>

            <div className="Wedding__TextSectionHeader">Bildeprodukter</div>
            <p className="Wedding__Text">
              I mine bryllupspakker er digitale bildefiler inkludert som
              standard. Dette gir dere friheten til å lagre og dele bildene i
              digital form. Imidlertid, for de som ønsker å ta det et skritt
              videre, er det også mulig å bestille bildeprodukter som fotoalbum
              av høy kvalitet, bildekopier og veggbilder for å gi bildene fra
              deres store dag en fysisk og varig form.
            </p>
            <p className="Wedding__Text">
              Dette gir dere muligheten til å skape vakre minner som kan vises
              frem i hjemmet, deles med familie og venner, eller gis bort som
              gaver til deres kjære. Jeg er her for å hjelpe dere med å
              skreddersy deres bryllupsfotograferingspakke slik at den passer
              best for deres behov og ønsker.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}

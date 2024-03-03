import className from "classnames";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Checkmark } from "../../Components/Checkmark";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./Wedding.css";
import WeddingImg from "/src/Images/Wedding/weddingRT_14.jpg";
import WeddingTextImg from "/src/Images/WeddingPrice/wedding_text.jpg";
import WeddingText1Img from "/src/Images/WeddingPrice/wedding_text1.jpg";
import WeddingText2Img from "/src/Images/WeddingPrice/wedding_text2.jpg";

export function Wedding() {
  const location = useLocation();
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const [menu, setMenu] = useState(null);
  const Check = () => (
    <Checkmark color="#3AC1C1" style={{ height: "24px" }}></Checkmark>
  );

  const mainMenu = (
    <PageSection>
      <div className="Wedding__PackageBoxRow">
        <div className="Wedding__PackageBox Wedding__PackageBox--Package1">
          <div className="Wedding__PackageBoxHeader">
            <div className="Wedding__PackageBoxHeading">Luminary</div>
            <div className="Wedding__PackageBoxSubHeading">
              Vielse + portretter
            </div>
          </div>
          <div className="Wedding__PackageBoxText">
            Fotografering av vielse, portretter av brudeparet
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Sneak-peak etter ca. 1 uke
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">3 timer fotografering</div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Ca. 50 stk. digitale bildefiler
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            50% rabatt på forlovelsesfotografering
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxPrice">Kr. 16.000,-</div>
          <button
            onClick={() => setMenu("b1")}
            className="Wedding__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="PhotoPrice__ResponsiveDivider"></div>
        <div className="Wedding__PackageBox Wedding__PackageBox--Package2">
          <div className="Wedding__PackageBoxHeader">
            <div className="Wedding__PackageBoxHeading">Celestial</div>
            <div className="Wedding__PackageBoxSubHeading">
              Halvdagsfotografering
            </div>
          </div>
          <div className="Wedding__PackageBoxText">
            Fotografering av forberedelser eller ankomst til festen, vielse og
            portretter
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Sneak-peak etter ca. 1 uke
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">5 timer fotografering</div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Ca. 150 stk. digitale bildefiler
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert I
            prisen
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxPrice">Kr. 24.000,-</div>
          <button
            onClick={() => setMenu("b2")}
            className="Wedding__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="PhotoPrice__ResponsiveDivider"></div>
        <div className="Wedding__PackageBox Wedding__PackageBox--Package3">
          <div className="Wedding__PackageBoxHeader">
            <div className="Wedding__PackageBoxHeading">Gallactic</div>
            <div className="Wedding__PackageBoxSubHeading">
              Halvdagsfotografering + trykksaker
            </div>
          </div>
          <div className="Wedding__PackageBoxText">
            Fotografering av forberedelser eller ankomst til festen, vielse og
            portretter
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Sneak-peak etter ca. 1 uke
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">6 timer fotografering</div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Ca. 170 stk. digitale bildefiler
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Forlovelsesfotografering inkludert 5 digitale bildefiler inkludert I
            prisen
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            20 stk. doble invitasjoner
          </div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">20 stk. doble takkekort</div>
          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxText">
            Mulighet for å bestille flere trykksaker i samme stil
          </div>

          <div className="Wedding__PackageBoxDivider"></div>
          <div className="Wedding__PackageBoxPrice">Kr. 32.000,-</div>
          <button
            onClick={() => setMenu("b3")}
            className="Wedding__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
      </div>
    </PageSection>
  );

  const package1 = (
    <PageSection>
      <div className="Wedding__PackageBigBox">
        <div className="Wedding__PackageBigBoxHeaderText">
          <div className="Wedding__PackageBigBoxHeader">
            <div className="Wedding__PackageBoxHeaderBigBox">Luminary</div>
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
              tilstede under vielsen og for å forevige portrettene deres. Jeg er
              med dere på de viktigste øyeblikkene på deres store dag, og fanger
              de magiske øyeblikkene når dere sier JA til hverandre.
            </p>
            <p className="Wedding__PackageBigBoxText">
              Vi setter av tid til et planleggingsmøte i god tid før den store
              dagen, der vi snakker om deres ønsker til bildene og for å bli
              litt kjent med hverandre.
            </p>
            <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="Wedding__PackageBigBoxListText">
              Planleggingsmøte før den store dagen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Kjøring til alle lokasjoner på Romerike
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
            <div className="Wedding__PackageBoxText">
              Sneak-peak etter ca. 1 uke (5-10 redigerte bilder)
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Ca. 50 stk. digitale bildefiler
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
            <button
              onClick={() => setMenu(null)}
              className="Wedding__ReadMoreButton"
            >
              Tilbake
            </button>
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
    </PageSection>
  );

  const package2 = (
    <PageSection>
      <div className="Wedding__PackageBigBox">
        <div className="Wedding__PackageBigBoxHeaderText">
          <div className="Wedding__PackageBigBoxHeader">
            <div className="Wedding__PackageBoxHeaderBigBox">Celestial</div>
            <div className="Wedding__PackageBoxSubHeaderBigBox">
              Halvdagsfotografering
            </div>
          </div>
          <div className="Wedding__PackageBoxPriceBigBox">Kr. 24.000,-</div>
        </div>

        <div className="Wedding__PackageBigBoxContent">
          <div className="Wedding__PackageBigBoxTextSection">
            <p className="Wedding__PackageBigBoxText">
              Dette er pakken for dere som ønsker bilder fra litt mer enn bare
              seremonien og bryllupsportrettene. Dere velger om jeg skal
              fotografere dere under forberedelsene eller når dere ankommer
              festen, i tillegg til at jeg fotograferer seremonien og
              bryllupsportrettene før eller etter vielsen.
            </p>
            <p className="Wedding__PackageBigBoxText">
              Vi setter av tid til et planleggingsmøte i god tid før den store
              dagen, der vi snakker om deres ønsker til bildene og for å bli
              litt kjent med hverandre. I denne pakken er også
              forlovelsesfotografering inkludert, der dere får velge 5 stk.
              bilder i høy oppløsning.
            </p>
            <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="Wedding__PackageBigBoxListText">
              Planleggingsmøte før den store dagen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Kjøring til alle lokasjoner på Romerike
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
            <div className="Wedding__PackageBoxText">
              Sneak-peak etter ca. 1 uke (5-10 redigerte bilder)
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
              Forlovelsesfotografering inkludert 5 stk. bilder i høy oppløsning
            </div>
            <button
              onClick={() => setMenu(null)}
              className="Wedding__ReadMoreButton"
            >
              Tilbake
            </button>
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
    </PageSection>
  );

  const package3 = (
    <PageSection>
      <div className="Wedding__PackageBigBox">
        <div className="Wedding__PackageBigBoxHeaderText">
          <div className="Wedding__PackageBigBoxHeader">
            <div className="Wedding__PackageBoxHeaderBigBox">Gallactic</div>
            <div className="Wedding__PackageBoxSubHeaderBigBox">
              Halvdagsfotografering + trykksaker
            </div>
          </div>
          <div className="Wedding__PackageBoxPriceBigBox">Kr. 32.000,-</div>
        </div>

        <div className="Wedding__PackageBigBoxContent">
          <div className="Wedding__PackageBigBoxTextSection">
            <p className="Wedding__PackageBigBoxText">
              Denne dagen er en milepæl i deres kjærlighetshistorie, og jeg vil
              med veiledning fra dere legge min sjel i å hjelpe dere med å lage
              deres drømmedag. Jeg designer deres invitasjoner, takkekort og
              menyer før den store dagen, i tillegg til at jeg fotograferer
              under vielsen, portretter og under forberedelsene eller når dere
              ankommer festen.
            </p>
            <p className="Wedding__PackageBigBoxText">
              Med denne pakken kan du nyte hvert øyeblikk av din store dag, og
              vite at jeg vil fange de perfekte øyeblikkene og hjelpe dere med å
              skape en minneverdig helhetsopplevelse for deg og dine gjester.
            </p>
            <p className="Wedding__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="Wedding__PackageBigBoxListText">
              Planleggingsmøte før den store dagen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Kjøring til alle lokasjoner på Romerike
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Fotografering under vielsen, portrettfotografering og
              fotografering av forberedelser eller når dere ankommer festen
            </div>
            <div className="Wedding__PackageBoxDivider"></div>

            <div className="Wedding__PackageBigBoxListText">
              6 timer fotografering
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBoxText">
              Sneak-peak etter ca. 1 uke (5-10 redigerte bilder)
            </div>
            <div className="Wedding__PackageBoxDivider"></div>
            <div className="Wedding__PackageBigBoxListText">
              Ca. 170 stk. digitale bildefiler
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
              Forlovelsesfotografering inkludert 5 stk. bilder i høy oppløsning
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
            <button
              onClick={() => setMenu(null)}
              className="Wedding__ReadMoreButton"
            >
              Tilbake
            </button>
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
    </PageSection>
  );

  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til bryllupsfotografi"
        canonical={location.pathname}
      />
      <PageSection innerClassName="wedding">
        <div className="prices-content">
          <DesignHeading h1 className="prices-heading Wedding__PageHeading">
            {pageName}
          </DesignHeading>
        </div>
      </PageSection>
      <PageSection>
        <div className="PhotoPrice__TopContentHeader">
          Det er deres store dag,
        </div>
        <div className="PhotoPrice__TopContentSubHeader">
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
        <img
          className="PhotoPrice__Img"
          src={WeddingImg}
          alt="Nygift brudepar på vei ut av kirken"
        ></img>
      </PageSection>
      {(() => {
        switch (menu) {
          case "b1":
            return package1;
          case "b2":
            return package2;
          case "b3":
            return package3;
          default:
            return mainMenu;
        }
      })()}
      <PageSection>
        <button
          className="Wedding__PackageCompareButton"
          onClick={() => setShowComparisonTable(!showComparisonTable)}
        >
          Sammenlign bryllupspakkene her
        </button>
        <h2
          className={className("Wedding__ComparisonTableHeader", {
            "Wedding__ComparisonTableHeader--Shown": showComparisonTable,
          })}
        >
          Sammenlign de ulike bryllupspakkene
        </h2>
        <table
          className={className("Wedding__ComparisonTable", {
            "Wedding__ComparisonTable--Shown": showComparisonTable,
          })}
        >
          <tbody>
            <tr>
              <td></td>
              <td>Luminary</td>
              <td>Celestial</td>
              <td>Gallactic</td>
            </tr>
            <tr>
              <th>Planleggingsmøte i god tid før bryllupet</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Kjøring til alle lokasjoner på Romerike</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Kjøring utover Romerike</th>
              <td>Kr. 10,- per km</td>
              <td>Kr. 10,- per km</td>
              <td>Kr. 10,- per km</td>
            </tr>
            <tr>
              <th>Fotografering av vielsen</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Fotografering av portretter</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Fotografering av forberedelser eller ankomst til festen</th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Antall timer med fotografering</th>
              <td>3 timer fotografering</td>
              <td>5 timer fotografering</td>
              <td>6 timer fotografering</td>
            </tr>
            <tr>
              <th>Sneak-peak etter ca. 1 uke</th>
              <td>5-10 redigerte bilder</td>
              <td>5-10 redigerte bilder</td>
              <td>5-10 redigerte bilder</td>
            </tr>
            <tr>
              <th>Antall bilder inkludert</th>
              <td>Ca. 50 digitale bildefiler</td>
              <td>Ca. 150 digitale bildefiler</td>
              <td>Ca. 170 digitale bildefiler</td>
            </tr>
            <tr>
              <th>Forlovelsesfotografering</th>
              <td>50% rabatt på forlovelsesfotografering</td>
              <td>Fotografering + 5 digitale bildefiler</td>
              <td>Fotografering + 5 digitale bildefiler</td>
            </tr>
            <tr>
              <th>Mulighet for å kjøpe bildeprodukter</th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Design av personlige bryllupsmateriale</th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>20 stk. doble invitasjoner (mulighet til å bestille fler)</th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>20 stk. doble takkekort (mulighet til å bestille fler)</th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Mulighet til å bestille flere trykksaker i samme design</th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Veiledningsmøter underveis i designprosessen</th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
          </tbody>
        </table>
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
            <p className="Wedding__Text">
              Jeg forbeholder meg retten til å bruke bildene fra deres bryllup
              til promotering av min bedrift på min nettside, i sosiale medier,
              i konkurranser og på trykkede flater.
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
              kontrakten er signert, vil dere motta en faktura på 30% av den
              totale prisen som et reservasjonsgebyr. Dette sikrer at datoen
              deres er reservert og bookingen deres er gjennomført. Vær
              oppmerksom på at reservasjonsgebyret ikke refunderes dersom dere
              velger å ikke bruke meg som deres fotograf etter at betalingen er
              mottatt.
            </p>
            <p className="Wedding__Text">
              1 måned før din store dag vil du motta en ny faktura for den
              gjenværende balansen, som må være betalt i sin helhet senest 1 uke
              før bryllupsdagen. Jeg ser frem til å være en del av deres
              bryllupseventyr og hjelpe dere med å bevare deres viktigste
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

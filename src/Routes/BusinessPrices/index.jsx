import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import "./BusinessPrices.css";
import { Image } from "../../Components/Image";
import pageName from "./PageName";
import FoodImg from "/src/Images/Prices/food_photography.jpg";
import ProductImg from "/src/Images/Prices/product_photography.jpg";
import BusinessPortraitImg from "/src/Images/Prices/business_portrait_photography.jpg";
import KindergardenImg from "/src/Images/Prices/kindergarten_photography.jpg"
import BusinessPricesText1Img from "/src/Images/Business/Pent_og_brukt/autumn_campaign_2.jpg";
import BusinessPricesText2Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_05.jpg";
import BusinessPricesText3Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_20.jpg";
import { useState } from "react";

export function BusinessPrices() {
  useDocumentTitle(pageName);

  const [menu, setMenu] = useState(0)
  const mainMenuCase = 0
  const package1Case = 1
  const package2Case = 2
  const package3Case = 3

  const mainMenu = (
    <PageSection>
      <div className="BusinessPrices__PackageBoxRow">
        <div className="BusinessPrices__PackageBox1">
          <div className="BusinessPrices__PackageBoxHeader">
            Bedriftsabonnement 1
          </div>
          <div className="BusinessPrices__PackageBoxSubHeader">
            Innholdsproduksjon til sosiale medier
          </div>
          <div className="BusinessPrices__PackageBoxText">
            Foto, grafikk og enkel videoproduksjon for sosiale medier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>

          <div className="BusinessPrices__PackageBoxText">
            1 dag med innholdsproduksjon hos din bedrift
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            15-25 bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            5-10 grafiske poster
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            1 video/reels
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">Kr. 10.400,- første måned</div>
          <div className="BusinessPrices__PackageBoxPrice">Kr. 16.000,- per mnd. etter første måned</div>


          <button
            onClick={() => setMenu(package1Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="BusinessPrices__PackageBox2">
          <div className="BusinessPrices__PackageBoxHeader">
            Bedriftsabonnement 2
          </div>
          <div className="BusinessPrices__PackageBoxSubHeader">
            Innholdsproduksjon til sosiale medier og publisering <br />- liten pakke
          </div>
          <div className="BusinessPrices__PackageBoxText">
            Foto, grafikk og enkel videoproduksjon for sosiale medier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>

          <div className="BusinessPrices__PackageBoxText">
            Planlegging og publisering i deres sosiale medie kanaler
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>

          <div className="BusinessPrices__PackageBoxText">
            1 dag med innholdsproduksjon hos din bedrift
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            15-25 bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            5-10 grafiske poster
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            16 innlegg i feed
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            7 stories
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            1 video/reels
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">Kr. 16.250,- første måned</div>
          <div className="BusinessPrices__PackageBoxPrice">Kr. 25.000,- per mnd. etter første måned</div>
          <button
            onClick={() => setMenu(package2Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="BusinessPrices__PackageBox3">
          <div className="BusinessPrices__PackageBoxHeader">
            Bedriftspakke 3
          </div>
          <div className="BusinessPrices__PackageBoxSubHeader">
            Innholdsproduksjon til sosiale medier og publisering <br />- stor pakke
          </div>
          <div className="BusinessPrices__PackageBoxText">
            Foto, grafikk og enkel videoproduksjon for sosiale medier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>

          <div className="BusinessPrices__PackageBoxText">
            Planlegging og publisering i deres sosiale medie kanaler
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>

          <div className="BusinessPrices__PackageBoxText">
            1-2 dag med innholdsproduksjon hos din bedrift
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            35-50 bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            10-15 grafiske poster
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            23 innlegg i feed
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            15 stories
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            2 video/reels
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">Kr. 22.100,- første måned</div>
          <div className="BusinessPrices__PackageBoxPrice">Kr. 34.000,- per mnd. etter første måned</div>
          <button
            onClick={() => setMenu(package3Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
      </div>
    </PageSection>
  )

  const package1 = (<PageSection>
    <div className="BusinessPrices__PackageBigBox">
      <div className="BusinessPrices__PackageBigBox1">
        <div className="BusinessPrices__PackageBigBoxHeaderText">
          <div className="BusinessPrices__PackageBigBoxHeader">
            <div className="BusinessPrices__PackageBoxHeaderBigBox">
              Bedriftsabonnement 1
            </div>
            <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
              Innholdsproduksjon til sosiale medier
            </div>
          </div>
          <div className="BusinessPrices__PackageBoxPriceSectionBox">
            <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">Kr. 10.400,- første måned</div>
            <div className="BusinessPrices__PackageBoxPriceBigBox">Kr. 16.000,- per mnd etter første måned</div>
          </div></div>

        <div className="BusinessPrices__PackageBigBoxContent">
          <div className="BusinessPrices__PackageBigBoxTextSection">
            <p className="BusinessPrices__PackageBigBoxText">
              Ønsker du en kostnadseffektiv måte å opprettholde en engasjerende tilstedeværelse
              på sosiale medier? Mitt rimeligste bedriftsabonnement gir deg variert, skreddersydd
              innhold tilpasset dine ønsker og behov. I denne pakken må du selv poste i sosiale
              medier, men du vil motta ferdige bilder, grafisk materiell og én video eller reels.
              Det er ingen bindingstid.
            </p>
            <p className="BusinessPrices__PackageBigBoxText">
              Den første måneden får dere en rabattert pris, deretter er det en fast månedlig pris.
              Abonnementet kan tilpasses din bedrifts behov. Ta kontakt med meg for å diskutere
              hvordan dette abonnementet kan styrke din sosiale mediestrategi og hjelpe din bedrift
              å skinne online!
            </p>
            <p className="BusinessPrices__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="BusinessPrices__PackageBigBoxListText">
              Foto, grafikk og enkel videoproduksjon for sosiale medier
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              1 dag med innholdsproduksjon hos din bedrift
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBigBoxListText">
              Mulighet for å skreddersy pakken som passer dere
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              5-10 grafiske poster
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              1 video/reels
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              15-25 bilder            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              Ingen bindingstid            </div>
            <button
              onClick={() => setMenu(null)}
              className="BusinessPrices__ReadMoreButton"
            >
              Tilbake
            </button>
          </div>
          <div className="BusinessPrices__PackageBigBoxImgSection">
            <img
              className="BusinessPrices__PackageBigBoxImg"
              src={BusinessPricesText1Img}
              title="Bilde av grønnsaker på et stettfat"
            />
          </div>
        </div>
      </div>
    </div>
  </PageSection>)

  const package2 = (<PageSection>
    <div className="BusinessPrices__PackageBigBox">
      <div className="BusinessPrices__PackageBigBox1">
        <div className="BusinessPrices__PackageBigBoxHeaderText">
          <div className="BusinessPrices__PackageBigBoxHeader">
            <div className="BusinessPrices__PackageBoxHeaderBigBox">
              Bedriftsabonnement 2
            </div>
            <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
              Innholdsproduksjon til sosiale medier og publisering - liten pakke
            </div>
          </div>
          <div className="BusinessPrices__PackageBoxPriceSectionBox">
            <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">Kr. 16.250,- første måned</div>
            <div className="BusinessPrices__PackageBoxPriceBigBox">Kr. 25.000,- per mnd etter første måned</div>
          </div></div>

        <div className="BusinessPrices__PackageBigBoxContent">
          <div className="BusinessPrices__PackageBigBoxTextSection">
            <p className="BusinessPrices__PackageBigBoxText">
              Ønsker du en enkel og kostnadseffektiv måte å opprettholde en engasjerende tilstedeværelse på sosiale medier?
              Ditt abonnement gir deg variert, skreddersydd innhold tilpasset dine ønsker og behov, og jeg tar også hånd om
              all publisering. Denne pakken inkluderer hele 16 innlegg i feed og 7 stories i løpet av en måned.
            </p>
            <p className="BusinessPrices__PackageBigBoxText">
              Jeg forstår viktigheten av fleksibilitet, derfor tilbyr jeg ingen bindingstid. Dette gir deg full frihet til å
              tilpasse og avslutte abonnementet etter behov. Jeg sørger for at du alltid har ferskt og relevant innhold å dele,
              samtidig som du sparer tid og maksimerer effekten av din sosiale mediestrategi. Ta kontakt med meg i dag for å
              diskutere hvordan ditt abonnement kan være den perfekte løsningen for å oppnå suksess på sosiale medier og hjelpe
              din bedrift å skinne online!
            </p>
            <p className="BusinessPrices__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="BusinessPrices__PackageBigBoxListText">
              Foto, grafikk og enkel videoproduksjon for sosiale medier
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              Planlegging og publisering i deres sosiale medie kanaler
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              1 dag med innholdsproduksjon hos din bedrift
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBigBoxListText">
              Mulighet for å skreddersy pakken som passer dere
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              5-10 grafiske poster
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              16 innlegg i feed
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              1 video/reels
            </div>

            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              15-25 bilder            </div><div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              7 stories
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              Ingen bindingstid            </div>
            <button
              onClick={() => setMenu(null)}
              className="BusinessPrices__ReadMoreButton"
            >
              Tilbake
            </button>
          </div>
          <div className="BusinessPrices__PackageBigBoxImgSection">
            <img
              className="BusinessPrices__PackageBigBoxImg"
              src={BusinessPricesText2Img}
              title="Bilde av grønnsaker på et stettfat"
            />
          </div>
        </div>
      </div>
    </div>
  </PageSection>)

  const package3 = (<PageSection>
    <div className="BusinessPrices__PackageBigBox">
      <div className="BusinessPrices__PackageBigBox1">
        <div className="BusinessPrices__PackageBigBoxHeaderText">
          <div className="BusinessPrices__PackageBigBoxHeader">
            <div className="BusinessPrices__PackageBoxHeaderBigBox">
              Bedriftsabonnement 3
            </div>
            <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
              Innholdsproduksjon til sosiale medier og publisering - stor pakke
            </div>
          </div>
          <div className="BusinessPrices__PackageBoxPriceSectionBox">
            <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">Kr. 22.100,- første måned</div>
            <div className="BusinessPrices__PackageBoxPriceBigBox">Kr. 34.000,- per mnd etter første måned</div>
          </div></div>

        <div className="BusinessPrices__PackageBigBoxContent">
          <div className="BusinessPrices__PackageBigBoxTextSection">
            <p className="BusinessPrices__PackageBigBoxText">
              Ønsker du å ta din sosiale mediestrategi til et nytt nivå? Min største abonnementspakke gir deg en bred variasjon av
              skreddersydd innhold, inkludert 23 innlegg i feed, 2 videoer/reels og 15 stories i løpet av en måned. Jeg tar det enda
              lenger ved å tilby 2 dager med innholdsproduksjon hos din bedrift, noe som gir deg autentisk innhold som fanger essensen
              av din virksomhet.
            </p>
            <p className="BusinessPrices__PackageBigBoxText">
              Med ingen bindingstid har du full frihet til å tilpasse og avslutte abonnementet etter behov, slik at du har full kontroll
              over din investering i din online tilstedeværelse. La meg hjelpe deg maksimere effekten av din sosiale mediestrategi. Ta
              kontakt med meg i dag for å diskutere hvordan min største abonnementspakke kan styrke din online tilstedeværelse og hjelpe
              din bedrift å skinne på sosiale medier!
            </p>
            <p className="BusinessPrices__PackageBigBoxListHeader">Inkluderer:</p>

            <div className="BusinessPrices__PackageBigBoxListText">
              Foto, grafikk og enkel videoproduksjon for sosiale medier
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              Planlegging og publisering i deres sosiale medie kanaler
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              1-2 dager med innholdsproduksjon hos din bedrift
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>

            <div className="BusinessPrices__PackageBigBoxListText">
              Mulighet for å skreddersy pakken som passer dere
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              10-15 grafiske poster
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              23 innlegg i feed
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              2 video/reels
            </div>

            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              35-50 bilder            </div><div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              7 stories
            </div>
            <div className="BusinessPrices__PackageBoxDivider"></div>
            <div className="BusinessPrices__PackageBigBoxListText">
              Ingen bindingstid            </div>
            <button
              onClick={() => setMenu(null)}
              className="BusinessPrices__ReadMoreButton"
            >
              Tilbake
            </button>
          </div>
          <div className="BusinessPrices__PackageBigBoxImgSection">
            <img
              className="BusinessPrices__PackageBigBoxImg"
              src={BusinessPricesText3Img}
              title="Bilde av grønnsaker på et stettfat"
            />
          </div>
        </div>
      </div>
    </div>
  </PageSection>)

  const packages = (() => {
    switch (menu) {
      case package1Case:
        return package1
      case package2Case:
        return package2
      case package3Case:
        return package3
      default:
        return mainMenu
    }
  })()
  return (
    <>
      <PageSection
        outerClassName="BusinessPrices__Outer"
        innerClassName="BusinessPrices__Inner"
      >
        <DesignHeading>Bedrifter og næringsliv</DesignHeading>
      </PageSection>
      <PageSection>
        <p className="BusinessPrices__TopContentText">
          På jakt etter skreddersydde løsninger for din bedrift? Jeg tilbyr tre
          ulike bedriftsabonnement tilpasset ulike prisklasser og behov for
          næringslivet. Mine tjenester spenner fra portretter av ansatte til en
          komplett pakke med innholdsproduksjon, sosiale medier og
          designtjenester, og jeg tilbyr en løsning som passer perfekt for din
          virksomhet.
        </p>
        <p className="BusinessPrices__TopContentText">
          Mine pakker kan skreddersys nøyaktig etter din bedrifts behov. Uansett
          om du er ute etter en pakkeløsning på innholdsproduksjon eller design,
          har jeg det rette elementet for dere. Jeg er her for å hjelpe din
          bedrift med å lykkes, og mine skreddersydde abonnementer er en nøkkel
          til deres suksess.
        </p>
      </PageSection>
      {packages}

      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Mine tjenester for bedrifter og næringsliv

              </div>
              <div className="BusinessPrices__ContentElements">
                <div className="BusinessPrices__ContentElement">
                  Matfotografering
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                </div>
                <div className="BusinessPrices__ContentElement">
                  Produktfotografering
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                </div>
                <div className="BusinessPrices__ContentElement">
                  Bedriftsportretter
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                </div>
                <div className="BusinessPrices__ContentElement">
                  Barnehagefotografering
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                </div>
                <div className="BusinessPrices__ContentElement">
                  Utvikling av en visuell identitet
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                </div>
                <div className="BusinessPrices__ContentElement">
                  Design av trykksaker og lignende
                  <p className="BusinessPrices__ContentElementText">

                  </p>
                  <div className="BusinessPrices__ContentElement">
                    UX-design
                    <p className="BusinessPrices__ContentElementText">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Sosiale medier veiledning
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              Ønsker din bedrift å utnytte kraften og potensialet til sosiale medier
              for å nå ut til en bredere målgruppe, øke merkevarebevisstheten og generere
              vekst? Vel, du er på rett sted! Jeg tilbyr skreddersydde veiledningstjenester
              som hjelper bedrifter med å mestre kunsten å utnytte sosiale medier for å oppnå
              målene sine.
              <br />
              <br />
              Sosiale medier har raskt blitt en integrert del av vår digitale hverdag, og det
              er her kundene dine er. Mine tjenester gir deg muligheten til å forstå og engasjere
              din målgruppe på Facebook og Instagram. Med riktig tilnærming kan du bygge lojalitet,
              oppnå økt synlighet og oppleve en betydelig økning i inntektene.
              <br />
              <br />
              Å produsere engasjerende innhold for sosiale medier kan være en utfordring, men frykt
              ikke, for jeg kan hjelpe deg med å utnytte kunstig intelligens for å optimalisere din
              innholdsproduksjon. Et av mine hemmelige våpen er ChatGPT, en kraftig AI-modell som er
              skapt for å generere kreativt og relevant innhold.
              <p className="BusinessPrices__ContentSubHeaderText">Hvordan hjelper dette deres bedrift?</p>

              Under veiledningen vil jeg demonstrere hvordan du kan
              bruke ChatGPT for å forbedre din innholdsproduksjon. Sammen vil vi skape en strategi som
              kombinerer menneskelig kreativitet med AI-teknologi for å oppnå de beste resultatene.
              <br />
              <br />
              Kontakt meg i dag for å lære mer om hvordan du kan dra nytte av ChatGPT for å optimalisere
              deres tilstedeværelse på sosiale medier. La oss sammen skape innhold som begeistrer og
              konverterer følgere til kunder!
            </div>
          </div>

        </div>
      </PageSection>



      {/* <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Matfotografering
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter i matbransjen er presentasjonen av deres kulinariske
              mesterverk en del av deres unike reise, og hvert bilde utgjør en
              avgjørende del av deres historie. Matfotografering for bedrifter
              og næringsliv gir dere muligheten til å fange de hjertevarme
              øyeblikkene som formidler skjønnheten og smaken av deres
              kulinariske kreasjoner.
              <br />
              <br />
              Det handler om å formidle kvalitet, smak og øyeblikk som skaper en
              uimotståelig appell. Uansett om det er en velduftende tallerken
              som forfører sansene, en delikat presentasjon av deilige
              ingredienser eller en enkel detalj som setter prikken over i-en,
              har hvert bilde en egen betydning. Matfotografering for bedrifter
              og næringsliv handler om å fange disse øyeblikkene som formidler
              essensen av deres kulinariske kunstverk.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            src={FoodImg}
            title="Granola, gresk yoghurt, bringebær og pasjonsfrukt"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Produktfotografering
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter og næringsliv er presentasjonen av deres produkter
              en integrert del av deres reise, og hvert bilde utgjør en
              avgjørende del av deres historie. Produktfotografering for
              bedrifter og næringsliv gir dere muligheten til å fange de
              hjertevarme øyeblikkene som formidler skjønnheten og
              funksjonaliteten av deres produkter. Det handler om å formidle
              kvalitet, funksjonalitet og øyeblikk som skaper en uimotståelig
              appell til deres målgruppe.
              <br />
              <br />
              Uansett om det er et detaljert bilde som fremhever produktets
              unike egenskaper, en stilfull presentasjon som fanger
              oppmerksomheten, eller en enkel detalj som gir det ekstraordinære,
              har hvert bilde sin egen betydning. Produktfotografering for
              bedrifter og næringsliv handler om å fange disse øyeblikkene som
              formidler essensen av deres produkter og merkevare.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            className="BusinessPrices__ContentImgProduct"
            src={ProductImg}
            title="Produkter stylet sammen med frukt"
          />
        </div>
      </PageSection>
      <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Portrettfotografering for bedrifter
              </div>
            </div>
            <div className="BusinessPrices__ContentText">
              For bedrifter og næringsliv er visningen av deres team en viktig
              del av deres reise, og hvert bilde utgjør en avgjørende del av
              deres historie. Portrettfotografering for bedrifter og næringsliv
              gir dere muligheten til å fange de hjertevarme øyeblikkene som
              formidler personlighet og profesjonalitet til deres team. Det
              handler om å formidle troverdighet, kompetanse og øyeblikk som
              skaper en uimotståelig appell til deres målgruppe.
              <br />
              <br />
              Uansett om det er et detaljert portrett som fremhever hver enkelt
              medarbeiders unike egenskaper, en profesjonell presentasjon som
              fanger oppmerksomheten, eller en enkel detalj som gir det
              ekstraordinære, har hvert bilde sin egen betydning.
              Portrettfotografering for bedrifter og næringsliv handler om å
              fange disse øyeblikkene som formidler essensen av deres team og
              merkevare.
              <br />
              <br />
              Ta kontakt for å avklare hva din bedrift trenger, og pris.
            </div>
          </div>
          <Image
            className="BusinessPrices__ContentImgBusiness"
            src={BusinessPortraitImg}
            title="Portrett av daglig leder i Pent og Brukt AS"
          />
        </div>
      </PageSection> */}
    </>
  );
}

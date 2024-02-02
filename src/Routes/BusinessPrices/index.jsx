import className from "classnames";
import { useState } from "react";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { projects } from "../../Data/Business/GraphicalDesign";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import GraphicalDesignRoute from "../GraphicalDesign/Route";
import "./BusinessPrices.css";
import pageName from "./PageName";
import { galleries as plainGalleries } from "/src/Data/Business/Galleries";
import BusinessPricesText1Img from "/src/Images/Business/Pent_og_brukt/autumn_campaign_2.jpg";
import BusinessPricesText2Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_05.jpg";
import BusinessPricesText3Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_20.jpg";

import { Checkmark } from "../../Components/Checkmark";
import { GalleryBrowser } from "../../Components/GalleryBrowser";

export function BusinessPrices() {
  useDocumentTitle(pageName);
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const Check = () => (
    <Checkmark color="#3AC1C1" style={{ height: "24px" }}></Checkmark>
  );
  const [menu, setMenu] = useState(null);
  const package1Case = 1;
  const package2Case = 2;
  const package3Case = 3;
  const galleries = plainGalleries.concat([
    {
      ...projects[0],
      title: "Grafisk design",
      id: GraphicalDesignRoute,
    },
  ]);

  const mainMenu = (
    <PageSection>
      <div className="BusinessPrices__PackageBoxRow">
        <div className="BusinessPrices__PackageBox1">
          <div className="BusinessPrices__PackageBoxHeader">Social-pakken</div>
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
            15-25 fotografier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            5-10 grafiske bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">5 stories</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">1 video/reels</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            40% rabatt første måned
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">
            Kr. 8399,- første måned
          </div>
          <div className="BusinessPrices__PackageBoxPrice">
            Kr. 13.999,- per mnd. etter første måned
          </div>

          <button
            onClick={() => setMenu(package1Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="PhotoPrice__ResponsiveDivider"></div>
        <div className="BusinessPrices__PackageBox2">
          <div className="BusinessPrices__PackageBoxHeader">
            Strategy-pakken
          </div>
          <div className="BusinessPrices__PackageBoxSubHeader">
            Innholdsproduksjon til sosiale medier og publisering <br />- liten
            pakke
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
            2 dager med innholdsproduksjon hos din bedrift
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            25-40 fotografier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            8-15 grafiske bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            16 innlegg i feed
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">12 stories</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">2 video/reels</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            40% rabatt første måned
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">
            Kr. 11.399,- første måned
          </div>
          <div className="BusinessPrices__PackageBoxPrice">
            Kr. 18.999,- per mnd. etter første måned
          </div>
          <button
            onClick={() => setMenu(package2Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
        <div className="PhotoPrice__ResponsiveDivider"></div>
        <div className="BusinessPrices__PackageBox3">
          <div className="BusinessPrices__PackageBoxHeader">Impact-pakken</div>
          <div className="BusinessPrices__PackageBoxSubHeader">
            Innholdsproduksjon til sosiale medier og publisering <br />- stor
            pakke
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
            2-3 dager med innholdsproduksjon hos din bedrift
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            35-50 fotografier
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            10-20 grafiske bilder
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            25 innlegg i feed
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">17 stories</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">3 video/reels</div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            40% rabatt første måned
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxText">
            Ingen bindingstid
          </div>
          <div className="BusinessPrices__PackageBoxDivider"></div>
          <div className="BusinessPrices__PackageBoxDiscountPrice">
            Kr. 19.799,- første måned
          </div>
          <div className="BusinessPrices__PackageBoxPrice">
            Kr. 32.999,- per mnd. etter første måned
          </div>
          <button
            onClick={() => setMenu(package3Case)}
            className="BusinessPrices__ReadMoreButton"
          >
            Les mer
          </button>
        </div>
      </div>
    </PageSection>
  );

  const package1 = (
    <PageSection>
      <div className="BusinessPrices__PackageBigBox">
        <div className="BusinessPrices__PackageBigBox1">
          <div className="BusinessPrices__PackageBigBoxHeaderText">
            <div className="BusinessPrices__PackageBigBoxHeader">
              <div className="BusinessPrices__PackageBoxHeaderBigBox">
                Social-pakken
              </div>
              <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
                Innholdsproduksjon til sosiale medier
              </div>
            </div>
            <div className="BusinessPrices__PackageBoxPriceSectionBox">
              <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">
                Kr. 8399,- første måned
              </div>
              <div className="BusinessPrices__PackageBoxPriceBigBox">
                Kr. 13.999,- per mnd etter første måned
              </div>
            </div>
          </div>

          <div className="BusinessPrices__PackageBigBoxContent">
            <div className="BusinessPrices__PackageBigBoxTextSection">
              <p className="BusinessPrices__PackageBigBoxText">
                Ønsker du en kostnadseffektiv måte å opprettholde en
                engasjerende tilstedeværelse på sosiale medier? Mitt rimeligste
                bedriftsabonnement gir deg variert, skreddersydd innhold
                tilpasset dine ønsker og behov. I denne pakken må du selv poste
                i sosiale medier, men du vil motta ferdige bilder, grafisk
                materiell, materiell til å bruke i stories og én video eller
                reels. Det er ingen bindingstid.
              </p>
              <p className="BusinessPrices__PackageBigBoxText">
                Den første måneden får dere en rabattert pris med hele 40% i
                avslag, deretter er det en fast månedlig pris. Abonnementet kan
                tilpasses din bedrifts behov. Ta kontakt med meg for å diskutere
                hvordan dette abonnementet kan styrke din sosiale mediestrategi
                og hjelpe din bedrift å skinne online!
              </p>
              <p className="BusinessPrices__PackageBigBoxListHeader">
                Inkluderer:
              </p>

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
                5-10 grafiske bilder
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                1 video/reels
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                15-25 fotografier
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                5 stories
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                40% rabatt første måned
              </div>

              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                Ingen bindingstid{" "}
              </div>
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
    </PageSection>
  );

  const package2 = (
    <PageSection>
      <div className="BusinessPrices__PackageBigBox">
        <div className="BusinessPrices__PackageBigBox1">
          <div className="BusinessPrices__PackageBigBoxHeaderText">
            <div className="BusinessPrices__PackageBigBoxHeader">
              <div className="BusinessPrices__PackageBoxHeaderBigBox">
                Strategy-pakken
              </div>
              <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
                Innholdsproduksjon til sosiale medier og publisering - liten
                pakke
              </div>
            </div>
            <div className="BusinessPrices__PackageBoxPriceSectionBox">
              <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">
                Kr. 11.399,- første måned
              </div>
              <div className="BusinessPrices__PackageBoxPriceBigBox">
                Kr. 18.999,- per mnd etter første måned
              </div>
            </div>
          </div>

          <div className="BusinessPrices__PackageBigBoxContent">
            <div className="BusinessPrices__PackageBigBoxTextSection">
              <p className="BusinessPrices__PackageBigBoxText">
                Ønsker du en enkel og kostnadseffektiv måte å opprettholde en
                engasjerende tilstedeværelse på sosiale medier? Ditt abonnement
                gir deg variert, skreddersydd innhold tilpasset dine ønsker og
                behov, og jeg tar også hånd om all publisering. Denne pakken
                inkluderer hele 16 innlegg i feed, 12 stories og 2 videoer eller
                reels, i løpet av en måned.
              </p>
              <p className="BusinessPrices__PackageBigBoxText">
                Jeg forstår viktigheten av fleksibilitet, derfor tilbyr jeg
                ingen bindingstid. Dette gir deg full frihet til å tilpasse og
                avslutte abonnementet etter behov. Den første måneden får dere
                en rabattert pris med hele 40% i avslag, deretter er det en fast
                månedlig pris. Jeg sørger for at du alltid har ferskt og
                relevant innhold å dele, samtidig som du sparer tid og
                maksimerer effekten av din SOME-strategi. Ta kontakt med meg i
                dag for å diskutere hvordan ditt abonnement kan være den
                perfekte løsningen for å oppnå suksess på sosiale medier og
                hjelpe din bedrift å skinne online!
              </p>
              <p className="BusinessPrices__PackageBigBoxListHeader">
                Inkluderer:
              </p>

              <div className="BusinessPrices__PackageBigBoxListText">
                Foto, grafikk og enkel videoproduksjon for sosiale medier
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                Planlegging og publisering i deres sosiale medie kanaler
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                2 dager med innholdsproduksjon hos din bedrift
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>

              <div className="BusinessPrices__PackageBigBoxListText">
                Mulighet for å skreddersy pakken som passer dere
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                8-15 grafiske bilder
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                16 innlegg i feed
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                2 video/reels
              </div>

              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                25-40 fotografier
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                12 stories
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                40% rabatt første måned
              </div>

              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                Ingen bindingstid{" "}
              </div>
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
    </PageSection>
  );

  const package3 = (
    <PageSection>
      <div className="BusinessPrices__PackageBigBox">
        <div className="BusinessPrices__PackageBigBox1">
          <div className="BusinessPrices__PackageBigBoxHeaderText">
            <div className="BusinessPrices__PackageBigBoxHeader">
              <div className="BusinessPrices__PackageBoxHeaderBigBox">
                Impact-pakken
              </div>
              <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
                Innholdsproduksjon til sosiale medier og publisering - stor
                pakke
              </div>
            </div>
            <div className="BusinessPrices__PackageBoxPriceSectionBox">
              <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">
                Kr. 19.799,- første måned
              </div>
              <div className="BusinessPrices__PackageBoxPriceBigBox">
                Kr. 32.999,- per mnd etter første måned
              </div>
            </div>
          </div>

          <div className="BusinessPrices__PackageBigBoxContent">
            <div className="BusinessPrices__PackageBigBoxTextSection">
              <p className="BusinessPrices__PackageBigBoxText">
                Ønsker du å ta din SOME-strategi til et nytt nivå? Min største
                abonnementspakke gir deg en bred variasjon av skreddersydd
                innhold, inkludert 25 innlegg i feed, 3 videoer/reels og 17
                stories i løpet av en måned. Jeg tar det enda lenger ved å tilby
                2-3 dager med innholdsproduksjon hos din bedrift, noe som gir
                deg autentisk innhold som fanger essensen av din virksomhet.
              </p>
              <p className="BusinessPrices__PackageBigBoxText">
                Med ingen bindingstid har du full frihet til å tilpasse og
                avslutte abonnementet etter behov, slik at du har full kontroll
                over din investering i din online tilstedeværelse. Den første
                måneden får dere en rabattert pris med hele 40% i avslag,
                deretter er det en fast månedlig pris. La meg hjelpe deg
                maksimere effekten av bruken av sosiale medier! Ta kontakt med
                meg i dag for å diskutere hvordan min største abonnementspakke
                kan styrke din online tilstedeværelse og hjelpe din bedrift å
                skinne på sosiale medier!
              </p>
              <p className="BusinessPrices__PackageBigBoxListHeader">
                Inkluderer:
              </p>

              <div className="BusinessPrices__PackageBigBoxListText">
                Foto, grafikk og enkel videoproduksjon for sosiale medier
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                Planlegging og publisering i deres sosiale medie kanaler
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                2-3 dager med innholdsproduksjon hos din bedrift
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>

              <div className="BusinessPrices__PackageBigBoxListText">
                Mulighet for å skreddersy pakken som passer dere
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                10.20 grafiske bilder
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                25 innlegg i feed
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                3 video/reels
              </div>

              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                35-50 bilder{" "}
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                17 stories
              </div>
              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                40% rabatt første måned
              </div>

              <div className="BusinessPrices__PackageBoxDivider"></div>
              <div className="BusinessPrices__PackageBigBoxListText">
                Ingen bindingstid{" "}
              </div>
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
    </PageSection>
  );

  const packages = (() => {
    switch (menu) {
      case package1Case:
        return package1;
      case package2Case:
        return package2;
      case package3Case:
        return package3;
      default:
        return mainMenu;
    }
  })();
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

      <PageSection>
        <div className="BusinessPrices__ContentBoxList">
          <div className="BusinessPrices__ContentHeaderListBox">
            <div className="BusinessPrices__ContentElementsBox">
              <div className="BusinessPrices__ContentSubHeader">
                Sosiale medier veiledning
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Jeg tilbyr skreddersydde veiledningstjenester for bedrifter som
                ønsker å utnytte sosiale medier for økt vekst og
                merkevarebevissthet. Med fokus på Facebook og Instagram, hjelper
                jeg deg med å engasjere målgruppen og optimalisere
                innholdsproduksjon ved å bruke ChatGPT, en kraftig AI-modell.
                Sammen skaper vi en strategi som kombinerer menneskelig
                kreativitet med AI-teknologi for å oppnå de beste resultatene.
                Kontakt meg i dag for å lære mer!
              </p>

              <div className="BusinessPrices__ContentSubHeader">
                Utvikling av en visuell identitet
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Grafisk design er avgjørende for å formidle profesjonalitet,
                originalitet og uimotståelig appell for bedrifter. Hvert
                designelement, enten det er logo, visuell identitet eller
                kampanje, har sin egen betydning og hjelper med å formidle
                essensen av bedriftens visuelle identitet. Kontakt meg for å
                diskutere hvordan jeg kan hjelpe dere med å forme deres unike
                branding og visuell identitet. Sammen kan vi skape en grafisk
                reise som beriker deres merkevare.
              </p>
              <div className="BusinessPrices__ContentSubHeader">
                Logo-design
              </div>
              <p className="BusinessPrices__ContentElementsText">
                For bedrifter som søker en rask etablering av en visuell
                identitet, spiller logoen en sentral rolle i den unike reisen
                dere deler med deres merkevare. Logo-design gir dere muligheten
                til å forme en fremtredende visuell representasjon som uttrykker
                deres særegne essens. Det handler om å formidle
                gjenkjennelighet, originalitet og øyeblikk som skaper en
                uimotståelig tiltrekningskraft for deres målgruppe. Uansett om
                det er en logo som fremhever deres bedrifts personlighet, har
                hver logo sin egen unike betydning. Logo-design handler om å
                fange dette øyeblikket som formidler essensen av deres merkevare
                og gir dere en tydelig identitet.
              </p>
              <div className="BusinessPrices__ContentSubHeader">UX-design</div>
              <p className="BusinessPrices__ContentElementsText">
                UX-design gir bedrifter muligheten til å forme en uimotståelig
                brukeropplevelse som uttrykker deres essens. Enten det er
                nettsidedesign, app eller digitalt produkt, hvert
                UX-designelement har sin egen betydning i å formidle
                brukervennlighet og innovasjon. Kontakt meg for å diskutere
                hvordan jeg kan hjelpe dere med å skape en tiltalende digital
                reise. Sammen kan vi berike deres digitale plattformer med
                brukervennlighet og appell.
              </p>
              <div className="BusinessPrices__ContentSubHeader">
                Produktfotografering
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Produktfotografering for bedrifter og næringsliv er avgjørende
                for å formidle skjønnheten og funksjonaliteten av produkter,
                samt skape uimotståelig appell. Hvert bilde fanger øyeblikk som
                definerer produktene og merkevaren, enten det er detaljer, stil
                eller unike egenskaper.
              </p>
              <div className="BusinessPrices__ContentSubHeader">
                Matfotografering
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Matfotografering for bedrifter i matbransjen handler om å fange
                hjertevarme øyeblikk som formidler skjønnheten og smaken av
                kulinariske kreasjoner, med mål om å formidle kvalitet og
                uimotståelig appell i hvert bilde.
              </p>
              <div className="BusinessPrices__ContentSubHeader">
                Barnehagefotografering
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Barnehagefotografering fanger smilene og minnene som utgjør
                barnehagens hverdag, formidler glede, vennskap og uforglemmelige
                øyeblikk. Uansett om det er gruppebilder, portretter eller
                miljøbilder, hvert bilde har sin egen betydning og formidler
                barnehagens fellesskap og identitet.
              </p>
              <div className="BusinessPrices__ContentSubHeader">
                Bedriftsportretter
              </div>
              <p className="BusinessPrices__ContentElementsText">
                Portrettfotografering for bedrifter og næringsliv er avgjørende
                for å formidle personlighet og profesjonalitet i teamet, skape
                troverdighet og kompetanse, og appellere til målgruppen. Hvert
                bilde fanger øyeblikk som definerer teamet og merkevaren, enten
                det er detaljerte portretter, profesjonelle presentasjoner eller
                subtile detaljer som gir ekstraordinær betydning.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
      {packages}
      <PageSection>
        <button
          className="BusinessPrices__PackageCompareButton"
          onClick={() => setShowComparisonTable(!showComparisonTable)}
        >
          Sammenlign bedriftsabonnementer
        </button>
        <h2
          className={className("BusinessPrices__ComparisonTableHeader", {
            "BusinessPrices__ComparisonTableHeader--Shown": showComparisonTable,
          })}
        >
          Sammenlign de ulike bedriftsabonnementene her
        </h2>
        <table
          className={className("BusinessPrices__ComparisonTable", {
            "BusinessPrices__ComparisonTable--Shown": showComparisonTable,
          })}
        >
          <tbody>
            <tr>
              <td></td>
              <td>Social-pakken</td>
              <td>Strategy-pakken</td>
              <td>Impact-pakken</td>
            </tr>
            <tr>
              <th>Innholdsproduksjon til sosiale medier</th>
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
              <th>Foto, grafikk og enkel videoproduksjon</th>
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
              <th>Ingen bindingstid</th>
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
              <th>Antall dager med innholdsproduksjon</th>
              <td>1 dag med innholdsproduksjon</td>
              <td>2 dager med innholdsproduksjon</td>
              <td>2-3 dager med innholdsproduksjon</td>
            </tr>
            <tr>
              <th>Antall fotografier</th>
              <td>15-25 stk. fotografier</td>
              <td>25-40 stk. fotografier</td>
              <td>35-50 stk. fotografier</td>
            </tr>
            <tr>
              <th>Antall grafiske bilder</th>
              <td>5-10 stk. grafiske bilder</td>
              <td>8-15 stk. grafiske bilder</td>
              <td>10-20 stk. grafiske bilder</td>
            </tr>
            <tr>
              <th>Antall stories</th>
              <td>5 stories</td>
              <td>12 stories</td>
              <td> stories</td>
            </tr>
            <tr>
              <th>Antall video/reels</th>
              <td>1 video/reels</td>
              <td>2 video/reels</td>
              <td>3 video/reels</td>
            </tr>
            <tr>
              <th>Planlegging og publisering i deres kanaler</th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th>Antall innlegg i feed</th>
              <td></td>
              <td>16 innlegg</td>
              <td>25 innlegg</td>
            </tr>
          </tbody>
        </table>
      </PageSection>
      {/*  <PageSection>
        <div className="BusinessPrices__ContentBox">
          <div className="BusinessPrices__ContentTextBox">
            <div className="BusinessPrices__ContentHeaderBox">
              <div className="BusinessPrices__ContentHeader">
                Sosiale medier veiledning
              </div>
            </div>

            <div className="BusinessPrices__ContentText">
              Ønsker din bedrift å utnytte kraften og potensialet til sosiale
              medier for å nå ut til en bredere målgruppe, øke
              merkevarebevisstheten og generere vekst? Vel, du er på rett sted!
              Jeg tilbyr skreddersydde veiledningstjenester som hjelper
              bedrifter med å mestre kunsten å utnytte sosiale medier for å
              oppnå målene sine.
              <br />
              <br />
              Sosiale medier har raskt blitt en integrert del av vår digitale
              hverdag, og det er her kundene dine er. Mine tjenester gir deg
              muligheten til å forstå og engasjere din målgruppe på Facebook og
              Instagram. Med riktig tilnærming kan du bygge lojalitet, oppnå økt
              synlighet og oppleve en betydelig økning i inntektene.
              <br />
              <br />Å produsere engasjerende innhold for sosiale medier kan være
              en utfordring, men frykt ikke, for jeg kan hjelpe deg med å
              utnytte kunstig intelligens for å optimalisere din
              innholdsproduksjon. Et av mine hemmelige våpen er ChatGPT, en
              kraftig AI-modell som er skapt for å generere kreativt og relevant
              innhold.
              <p className="BusinessPrices__ContentSubHeaderText">
                Hvordan hjelper dette deres bedrift?
              </p>
              Under veiledningen vil jeg demonstrere hvordan du kan bruke
              ChatGPT for å forbedre din innholdsproduksjon. Sammen vil vi skape
              en strategi som kombinerer menneskelig kreativitet med
              AI-teknologi for å oppnå de beste resultatene.
              <br />
              <br />
              Kontakt meg i dag for å lære mer om hvordan du kan dra nytte av
              ChatGPT for å optimalisere deres tilstedeværelse på sosiale
              medier. La oss sammen skape innhold som begeistrer og konverterer
              følgere til kunder!
            </div>
          </div>
        </div>
      </PageSection> */}

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
      <GalleryBrowser
        title="Gallerier"
        hideNumImages={true}
        galleries={galleries}
      />
    </>
  );
}

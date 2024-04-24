import { useState } from "react";
import { Package } from "../Package";
import "./Packages.css";
import { PageSection } from "/src/Components/PageSection";
import BusinessPricesText1Img from "/src/Images/Business/Pent_og_brukt/autumn_campaign_2.jpg";
import BusinessPricesText2Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_05.jpg";
import BusinessPricesText3Img from "/src/Images/Business/Pent_og_brukt/business_pogb_sommer_20.jpg";

export function Packages() {
  const [menu, setMenu] = useState(null);
  const package1Case = 1;
  const package2Case = 2;
  const package3Case = 3;

  const mainMenu = (
    <PageSection>
      <div className="Packages__MainMenu">
        <Package
          className="Packages__PackageOverview"
          heading="Social-pakken"
          subHeading="Innholdsproduksjon til sosiale medier"
          paragraphs={[
            "Foto, grafikk og enkel videoproduksjon for sosiale medier",
            "1 dag med innholdsproduksjon hos din bedrift",
            "15-25 fotografier",
            "5-10 grafiske bilder",
            "5 stories",
            "1 video/reels",
            "40% rabatt første måned",
            "Ingen bindingstid",
          ]}
          discountPrice="Kr. 8399,- første måned"
          fullPrice="Kr. 13.999,- per mnd. etter første måned"
          onReadMore={() => setMenu(package3Case)}
        />
        <div className="Packages__Divider"></div>
        <Package
          className="Packages__PackageHeading"
          heading="Strategy-pakken"
          subHeading={
            <>
              Innholdsproduksjon til sosiale medier og publisering <br />- liten
              pakke
            </>
          }
          paragraphs={[
            "Foto, grafikk og enkel videoproduksjon for sosiale medier",
            "Planlegging og publisering i deres sosiale medie kanaler",
            "2 dager med innholdsproduksjon hos din bedrift",
            "25-40 fotografier",
            "8-15 grafiske bilder",
            "16 innlegg i feed",
            "12 stories",
            "2 video/reels",
            "40% rabatt første måned",
            "Ingen bindingstid",
          ]}
          discountPrice="Kr. 11.399,- første måned"
          fullPrice="Kr. 18.999,- per mnd. etter første måned"
          onReadMore={() => setMenu(package2Case)}
        />
        <div className="Packages__Divider"></div>
        <Package
          heading="Impact-pakken"
          subHeading={
            <>
              Innholdsproduksjon til sosiale medier og publisering <br />- stor
              pakke
            </>
          }
          paragraphs={[
            "Foto, grafikk og enkel videoproduksjon for sosiale medier",
            "Planlegging og publisering i deres sosiale medie kanaler",
            "2-3 dager med innholdsproduksjon hos din bedrift",
            "35-50 fotografier",
            "10-20 grafiske bilder",
            "25 innlegg i feed",
            "17 stories",
            "3 video/reels",
            "40% rabatt første måned",
            "Ingen bindingstid",
          ]}
          discountPrice="Kr. 19.799,- første måned"
          fullPrice="Kr. 32.999,- per mnd. etter første måned"
          onReadMore={() => setMenu(package3Case)}
        />
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
                Ingen bindingstid
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
                Ingen bindingstid
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
                35-50 bilder
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
                Ingen bindingstid
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

  return <>{packages}</>;
}

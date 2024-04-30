import "./PackageInfo.css";

export function PackageInfo({ heading, subHeading, discountPrice, fullPrice }) {
  return (
    <PageSection>
      <div className="BusinessPrices__PackageBigBox">
        <div className="BusinessPrices__PackageBigBox1">
          <div className="BusinessPrices__PackageBigBoxHeaderText">
            <div className="BusinessPrices__PackageBigBoxHeader">
              <div className="BusinessPrices__PackageBoxHeaderBigBox">
                {heading}
              </div>
              <div className="BusinessPrices__PackageBoxSubHeaderBigBox">
                {subHeading}
              </div>
            </div>
            <div className="BusinessPrices__PackageBoxPriceSectionBox">
              <div className="BusinessPrices__PackageBoxDiscountPriceBigBox">
                {discountPrice}
              </div>
              <div className="BusinessPrices__PackageBoxPriceBigBox">
                {fullPrice}
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
}

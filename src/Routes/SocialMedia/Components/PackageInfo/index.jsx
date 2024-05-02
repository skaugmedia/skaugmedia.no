import "./PackageInfo.css";

export function PackageInfo({
  heading,
  subHeading,
  discountPrice,
  fullPrice,
  includes,
  paragraphs,
  imgSrc,
  imgAlt,
  onReturnClick,
}) {
  const fullIncludes = includes
    .map((incl) => (
      <div key={`${incl}`} className="PackageInfo__IncludedItem">
        {incl}
      </div>
    ))
    .reduce(
      (acc, curr, i) => [
        ...acc,
        curr,
        <div key={`${-i}`} className="PackageInfo__IncludedItemDivider" />,
      ],
      [],
    )
    .slice(0, -1);
  return (
    <div className="PackageInfo">
      <div className="PackageInfo__Header">
        <div>
          <div className="PackageInfo__Heading">{heading}</div>
          <div className="PackageInfo__SubHeading">{subHeading}</div>
        </div>
        <div className="PackageInfo__Prices">
          <div className="PackageInfo__DiscountPrice">{discountPrice}</div>
          <div className="PackageInfo__FullPrice">{fullPrice}</div>
        </div>
      </div>

      <div className="PackageInfo__Body">
        <div className="PackageInfo__Text">
          {paragraphs.map((p, i) => (
            <p key={i} className="PackageInfo__Paragraph">
              {p}
            </p>
          ))}
          <p className="PackageInfo__IncludedHeader">Inkluderer:</p>
          {fullIncludes}
          <button
            onClick={onReturnClick}
            className="PackageInfo__ReadMoreButton"
          >
            Tilbake
          </button>
        </div>
        <div className="PackageInfo__Image">
          <img className="PackageInfo__ImageImg" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
}

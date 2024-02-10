import { Helmet } from "react-helmet-async";
import { mkTitle } from "../../utils";

export function SkaugHelmet({ title, canonical, noIndex }) {
  const canonicalLink = canonical && (
    <link rel="canonical" href={`https://www.skaugmedia.no${canonical}`} />
  );
  const noIndexEl = noIndex && (
    <meta name="robots" content="noindex, nofollow" />
  );

  return (
    <Helmet>
      <title>{mkTitle(title)}</title>
      {canonicalLink}
      {noIndexEl}
    </Helmet>
  );
}

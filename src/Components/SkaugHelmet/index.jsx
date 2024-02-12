import { Helmet } from "react-helmet-async";
import { mkTitle } from "../../utils";

export function SkaugHelmet({ title, description, canonical, noIndex }) {
  const canonicalLink = canonical && (
    <link rel="canonical" href={`https://www.skaugmedia.no${canonical}`} />
  );
  const noIndexEl = noIndex && (
    <meta name="robots" content="noindex, nofollow" />
  );
  const desc = description && <meta name="description" content={description} />;

  return (
    <Helmet>
      {desc}
      <title>{mkTitle(title)}</title>
      {canonicalLink}
      {noIndexEl}
    </Helmet>
  );
}

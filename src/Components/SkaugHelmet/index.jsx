import { Helmet } from "react-helmet-async";

export function SkaugHelmet({ title, description, canonical, noIndex }) {
  const canonicalLink = canonical && (
    <link rel="canonical" href={`https://www.skaugmedia.no${canonical}`} />
  );
  const noIndexEl = noIndex && (
    <meta name="robots" content="noindex, nofollow" />
  );
  const desc = description && <meta name="description" content={description} />;

  return (
    <Helmet
      prioritizeSeoTags
      titleTemplate="%s - Skaug Media"
      defaultTitle="Skaug Media"
    >
      <html lang="no" />
      {desc}
      <title>{title}</title>
      {canonicalLink}
      {noIndexEl}
    </Helmet>
  );
}

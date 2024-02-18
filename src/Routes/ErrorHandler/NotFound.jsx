import { NavLink } from "react-router-dom";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { PageSection } from "/src/Components/PageSection";

export function NotFound() {
  return (
    <PageSection>
      <SkaugHelmet title="Ukjent side" canonical="/404" noIndex={true} />
      <meta name="robots" content="noindex" />
      <h1>404 - Fant ikke siden!</h1>
      <p>Siden du prøver å se finnes ikke.</p>
      <NavLink to="/">Gå tilbake</NavLink>
    </PageSection>
  );
}

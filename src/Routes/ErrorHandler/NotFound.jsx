import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useNoIndex } from "../../Hooks/useNoIndex";
import { PageSection } from "/src/Components/PageSection";

export function NotFound() {
  useDocumentTitle("Ukjent side");
  useNoIndex();

  return (
    <PageSection>
      <meta name="robots" content="noindex" />
      <h1>404 - Fant ikke siden!</h1>
      <p>Siden du prøver å se finnes ikke.</p>
      <NavLink to="/">Gå tilbake</NavLink>
    </PageSection>
  );
}

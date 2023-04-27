import { NavLink, useRouteError } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { PageSection } from "/src/Components/PageSection";

export function NotFound() {
  useDocumentTitle("Ukjent side");
  const error = useRouteError();
  console.error(error);
  return (
    <PageSection>
      <meta name="robots" content="noindex" />
      <h1>404 - Fant ikke siden!</h1>
      <p>Siden du prøver å se finnes ikke.</p>
      <NavLink to="/">Gå tilbake</NavLink>
      <p>Intern feilmelding: {error.message}</p>
    </PageSection>
  );
}

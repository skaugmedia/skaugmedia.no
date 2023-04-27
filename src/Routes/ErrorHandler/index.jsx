import { NavLink, useRouteError } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { PageSection } from "/src/Components/PageSection";
import { NotFound } from "./NotFound";

export function ErrorHandler() {
  const error = useRouteError();
  if (error.status === 404) {
    return <NotFound />;
  }

  useDocumentTitle("Ukjent feil");
  return (
    <PageSection>
      <meta name="robots" content="noindex" />
      <h1>En ukjent feil oppstod!</h1>
      <p>En ukjent feil har oppstått.</p>
      <NavLink to="/">Gå tilbake</NavLink>
      {error && (
        <p>Intern feilmelding: {error?.error?.message ?? error.message}</p>
      )}
    </PageSection>
  );
}

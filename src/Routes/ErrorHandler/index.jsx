import { NavLink, useRouteError } from "react-router-dom";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import { NotFound } from "./NotFound";
import { PageSection } from "/src/Components/PageSection";

export function ErrorHandler() {
  const error = useRouteError();
  if (error.status === 404) {
    return <NotFound />;
  }

  return (
    <PageSection>
      <SkaugHelmet title="Ukjent feil" canonical="/feil" noIndex />
      <h1>En ukjent feil oppstod!</h1>
      <p>En ukjent feil har oppstått.</p>
      <NavLink to="/">Gå tilbake</NavLink>
      {error && (
        <p>Intern feilmelding: {error?.error?.message ?? error.message}</p>
      )}
    </PageSection>
  );
}

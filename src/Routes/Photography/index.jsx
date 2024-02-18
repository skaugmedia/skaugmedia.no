import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import Route from "./Route";

export function Photography() {
  const location = useLocation();
  const { categories } = useLoaderData();
  if (!location.pathname.endsWith(Route)) {
    return <Outlet />;
  }
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Oversikt over kategorier med fotografi"
        canonical={location.pathname}
      />
      <GalleryBrowser title={pageName} galleries={categories} />
    </>
  );
}

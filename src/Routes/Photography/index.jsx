import { useLoaderData, useLocation } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";

export function Photography() {
  const location = useLocation();
  const { categories } = useLoaderData();
  return (
    <>
      <SkaugHelmet title={pageName} canonical={location.pathname} />
      <GalleryBrowser title={pageName} galleries={categories} />
    </>
  );
}

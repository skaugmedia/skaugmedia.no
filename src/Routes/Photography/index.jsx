import { useLoaderData } from "react-router-dom";
import { GalleryBrowser } from "../../Components/GalleryBrowser";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import pageName from "./PageName";

export function Photography() {
  useDocumentTitle(pageName);
  const { categories } = useLoaderData();
  return <GalleryBrowser title={pageName} galleries={categories} />;
}

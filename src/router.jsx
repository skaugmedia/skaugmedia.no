import { createBrowserRouter } from "react-router-dom";
import { About } from "./Routes/About";
import AboutRoute from "./Routes/About/Route";
import { BusinessPrices } from "./Routes/BusinessPrices";
import BusinessPricesRoute from "./Routes/BusinessPrices/Route";
import { Children } from "./Routes/Children";
import ChildrenRoute from "./Routes/Children/Route";
import { Confirmation } from "./Routes/Confirmation";
import ConfirmationRoute from "./Routes/Confirmation/Route";
import { Contact } from "./Routes/Contact";
import ContactRoute from "./Routes/Contact/Route";
import { Discounts } from "./Routes/Discounts";
import DiscountsRoute from "./Routes/Discounts/Route";
import { ErrorHandler } from "./Routes/ErrorHandler";
import { Family } from "./Routes/Family";
import FamilyRoute from "./Routes/Family/Route";
import { FirstYear } from "./Routes/FirstYear";
import FirstYearRoute from "./Routes/FirstYear/Route";
import { GraphicalDesign } from "./Routes/GraphicalDesign";
import GraphicalDesignLoader from "./Routes/GraphicalDesign/Loader";
import GraphicalDesignRoute from "./Routes/GraphicalDesign/Route";
import { GraphicalDesignProject } from "./Routes/GraphicalDesignProject";
import GraphicalDesignProjectLoader from "./Routes/GraphicalDesignProject/Loader";
import GraphicalDesignProjectRoute from "./Routes/GraphicalDesignProject/Route";
import { Headshots } from "./Routes/Headshots";
import HeadshotsRoute from "./Routes/Headshots/Route";
import { Home } from "./Routes/Home";
import HomeLoader from "./Routes/Home/Loader";
import HomeRoute from "./Routes/Home/Route";
import { Maternity } from "./Routes/Maternity";
import MaternityRoute from "./Routes/Maternity/Route";
import { Newborn } from "./Routes/Newborn";
import NewbornRoute from "./Routes/Newborn/Route";
import { PhotoProducts } from "./Routes/PhotoProducts";
import PhotoProductsRoute from "./Routes/PhotoProducts/Route";
import { Photography } from "./Routes/Photography";
import PhotographyLoader from "./Routes/Photography/Loader";
import PhotographyRoute from "./Routes/Photography/Route";
import { PhotographyCategory } from "./Routes/PhotographyCategory";
import PhotographyCategoryLoader from "./Routes/PhotographyCategory/Loader";
import PhotographyCategoryRoute from "./Routes/PhotographyCategory/Route";
import { PricesServices } from "./Routes/PricesServices";
import PricesRoute from "./Routes/PricesServices/Route";
import { Root } from "./Routes/Root";
import { Wedding } from "./Routes/Wedding";
import WeddingRoute from "./Routes/Wedding/Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorHandler />,
    children: [
      {
        children: [
          { index: true, loader: HomeLoader, element: <Home /> },
          { path: HomeRoute, element: <Home /> },
          { path: AboutRoute, element: <About /> },
          { path: ContactRoute, element: <Contact /> },
          {
            path: GraphicalDesignRoute,
            loader: GraphicalDesignLoader,
            element: <GraphicalDesign />,
          },
          {
            path: GraphicalDesignProjectRoute,
            loader: GraphicalDesignProjectLoader,
            element: <GraphicalDesignProject />,
          },
          {
            path: PhotographyRoute,
            loader: PhotographyLoader,
            element: <Photography />,
          },
          {
            path: PhotographyCategoryRoute,
            loader: PhotographyCategoryLoader,
            element: <PhotographyCategory />,
          },
          { path: PricesRoute, element: <PricesServices /> },
          {
            path: `${PricesRoute}/${WeddingRoute}`,
            element: <Wedding />,
          },
          { path: DiscountsRoute, element: <Discounts /> },
          { path: BusinessPricesRoute, element: <BusinessPrices /> },
          { path: `${PricesRoute}/${NewbornRoute}`, element: <Newborn /> },
          { path: `${PricesRoute}/${MaternityRoute}`, element: <Maternity /> },
          { path: `${PricesRoute}/${ChildrenRoute}`, element: <Children /> },
          { path: `${PricesRoute}/${FirstYearRoute}`, element: <FirstYear /> },
          {
            path: `${PricesRoute}/${ConfirmationRoute}`,
            element: <Confirmation />,
          },
          { path: `${PricesRoute}/${HeadshotsRoute}`, element: <Headshots /> },
          { path: `${PricesRoute}/${FamilyRoute}`, element: <Family /> },
          {
            path: `${PricesRoute}/${PhotoProductsRoute}`,
            element: <PhotoProducts />,
          },
        ],
      },
    ],
  },
]);

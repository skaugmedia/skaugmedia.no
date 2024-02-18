import { createBrowserRouter } from "react-router-dom";
import { About } from "./Routes/About";
import AboutPageName from "./Routes/About/PageName";
import AboutRoute from "./Routes/About/Route";
import { BusinessPrices } from "./Routes/BusinessPrices";
import BusinessPricesPageName from "./Routes/BusinessPrices/PageName";
import BusinessPricesRoute from "./Routes/BusinessPrices/Route";
import { Children } from "./Routes/Children";
import ChildrenPageName from "./Routes/Children/PageName";
import ChildrenRoute from "./Routes/Children/Route";
import { Confirmation } from "./Routes/Confirmation";
import ConfirmationPageName from "./Routes/Confirmation/PageName";
import ConfirmationRoute from "./Routes/Confirmation/Route";
import { Contact } from "./Routes/Contact";
import ContactPageName from "./Routes/Contact/PageName";
import ContactRoute from "./Routes/Contact/Route";
import { Couples } from "./Routes/Couples";
import CouplesPageName from "./Routes/Couples/PageName";
import CouplesRoute from "./Routes/Couples/Route";
import { Discounts } from "./Routes/Discounts";
import DiscountsPageName from "./Routes/Discounts/PageName";
import DiscountsRoute from "./Routes/Discounts/Route";
import { ErrorHandler } from "./Routes/ErrorHandler";
import { Family } from "./Routes/Family";
import FamilyPageName from "./Routes/Family/PageName";
import FamilyRoute from "./Routes/Family/Route";
import { FirstYear } from "./Routes/FirstYear";
import FirstYearPageName from "./Routes/FirstYear/PageName";
import FirstYearRoute from "./Routes/FirstYear/Route";
import { GraphicalDesign } from "./Routes/GraphicalDesign";
import GraphicalDesignLoader from "./Routes/GraphicalDesign/Loader";
import GraphicalDesignPageName from "./Routes/GraphicalDesign/PageName";
import GraphicalDesignRoute from "./Routes/GraphicalDesign/Route";
import { GraphicalDesignProject } from "./Routes/GraphicalDesignProject";
import GraphicalDesignProjectLoader from "./Routes/GraphicalDesignProject/Loader";
import { Headshots } from "./Routes/Headshots";
import HeadshotsPageName from "./Routes/Headshots/PageName";
import HeadshotsRoute from "./Routes/Headshots/Route";
import { Home } from "./Routes/Home";
import HomePageName from "./Routes/Home/PageName";
import HomeRoute from "./Routes/Home/Route";
import { Maternity } from "./Routes/Maternity";
import MaternityPageName from "./Routes/Maternity/PageName";
import MaternityRoute from "./Routes/Maternity/Route";
import { Newborn } from "./Routes/Newborn";
import NewbornPageName from "./Routes/Newborn/PageName";
import NewbornRoute from "./Routes/Newborn/Route";
import { PhotoProducts } from "./Routes/PhotoProducts";
import PhotoProductsPageName from "./Routes/PhotoProducts/PageName";
import PhotoProductsRoute from "./Routes/PhotoProducts/Route";
import { Photography } from "./Routes/Photography";
import PhotographyLoader from "./Routes/Photography/Loader";
import PhotographyPageName from "./Routes/Photography/PageName";
import PhotographyRoute from "./Routes/Photography/Route";
import { PhotographyCategory } from "./Routes/PhotographyCategory";
import PhotographyCategoryLoader from "./Routes/PhotographyCategory/Loader";
import { PricesServices } from "./Routes/PricesServices";
import PricesPageName from "./Routes/PricesServices/PageName";
import PricesRoute from "./Routes/PricesServices/Route";
import { Root } from "./Routes/Root";
import { Wedding } from "./Routes/Wedding";
import WeddingPageName from "./Routes/Wedding/PageName";
import WeddingRoute from "./Routes/Wedding/Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorHandler />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Home />,
            handle: { pageName: HomePageName },
          },
          {
            path: HomeRoute,
            element: <Home />,
            handle: { pageName: HomePageName },
          },
          {
            path: AboutRoute,
            element: <About />,
            handle: { pageName: AboutPageName },
          },
          {
            path: ContactRoute,
            element: <Contact />,
            handle: { pageName: ContactPageName },
          },
          {
            path: BusinessPricesRoute,
            element: <BusinessPrices />,
            handle: { pageName: BusinessPricesPageName },
            children: [
              {
                path: GraphicalDesignRoute,
                loader: GraphicalDesignLoader,
                element: <GraphicalDesign />,
                handle: { pageName: GraphicalDesignPageName },
                children: [
                  {
                    path: ":projectId",
                    loader: GraphicalDesignProjectLoader,
                    element: <GraphicalDesignProject />,
                    handle: { pageName: (data) => data.title },
                  },
                ],
              },
              {
                path: ":categoryId",
                loader: PhotographyCategoryLoader(true),
                element: <PhotographyCategory />,
                handle: { pageName: (data) => data.title },
              },
            ],
          },
          {
            path: PhotographyRoute,
            loader: PhotographyLoader,
            element: <Photography />,
            handle: { pageName: PhotographyPageName },
            children: [
              {
                path: ":categoryId",
                loader: PhotographyCategoryLoader(false),
                element: <PhotographyCategory />,
                handle: { pageName: (data) => data.title },
              },
            ],
          },
          {
            path: PricesRoute,
            element: <PricesServices />,
            handle: { pageName: PricesPageName },
            children: [
              {
                path: WeddingRoute,
                element: <Wedding />,
                handle: { pageName: WeddingPageName },
              },
              {
                path: NewbornRoute,
                element: <Newborn />,
                handle: { pageName: NewbornPageName },
              },
              {
                path: MaternityRoute,
                element: <Maternity />,
                handle: { pageName: MaternityPageName },
              },
              {
                path: ChildrenRoute,
                element: <Children />,
                handle: { pageName: ChildrenPageName },
              },
              {
                path: FirstYearRoute,
                element: <FirstYear />,
                handle: { pageName: FirstYearPageName },
              },
              {
                path: ConfirmationRoute,
                element: <Confirmation />,
                handle: { pageName: ConfirmationPageName },
              },
              {
                path: HeadshotsRoute,
                element: <Headshots />,
                handle: { pageName: HeadshotsPageName },
              },
              {
                path: FamilyRoute,
                element: <Family />,
                handle: { pageName: FamilyPageName },
              },
              {
                path: CouplesRoute,
                element: <Couples />,
                handle: { pageName: CouplesPageName },
              },
              {
                path: PhotoProductsRoute,
                element: <PhotoProducts />,
                handle: { pageName: PhotoProductsPageName },
              },
            ],
          },
          {
            path: DiscountsRoute,
            element: <Discounts />,
            handle: { pageName: DiscountsPageName },
          },
        ],
      },
    ],
  },
]);

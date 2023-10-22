import { createBrowserRouter } from "react-router-dom";
import { About } from "./Routes/About";
import AboutRoute from "./Routes/About/Route";
import { Contact } from "./Routes/Contact";
import ContactRoute from "./Routes/Contact/Route";
import { Discounts } from "./Routes/Discounts";
import DiscountsRoute from "./Routes/Discounts/Route";
import { ErrorHandler } from "./Routes/ErrorHandler";
import { GraphicalDesign } from "./Routes/GraphicalDesign";
import GraphicalDesignLoader from "./Routes/GraphicalDesign/Loader";
import GraphicalDesignRoute from "./Routes/GraphicalDesign/Route";
import { GraphicalDesignProject } from "./Routes/GraphicalDesignProject";
import GraphicalDesignProjectLoader from "./Routes/GraphicalDesignProject/Loader";
import GraphicalDesignProjectRoute from "./Routes/GraphicalDesignProject/Route";
import { Home } from "./Routes/Home";
import HomeLoader from "./Routes/Home/Loader";
import HomeRoute from "./Routes/Home/Route";
import { Photography } from "./Routes/Photography";
import PhotographyLoader from "./Routes/Photography/Loader";
import PhotographyRoute from "./Routes/Photography/Route";
import { PhotographyCategory } from "./Routes/PhotographyCategory";
import PhotographyCategoryLoader from "./Routes/PhotographyCategory/Loader";
import PhotographyCategoryRoute from "./Routes/PhotographyCategory/Route";
import { PricesServices } from "./Routes/PricesServices";
import PricesRoute from "./Routes/PricesServices/Route";
import { PricesProducts } from "./Routes/Wedding";
import PricesProductsRoute from "./Routes/Wedding/Route";
import { Root } from "./Routes/Root";

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
          { path: PricesProductsRoute, element: <PricesProducts /> },
          { path: DiscountsRoute, element: <Discounts /> },
        ],
      },
    ],
  },
]);

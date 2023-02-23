import { Root } from "./Routes/Root";
import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Routes/Home/Route";
import { Home } from "./Routes/Home";
import AboutRoute from "./Routes/About/Route";
import { About } from "./Routes/About";
import ContactRoute from "./Routes/Contact/Route";
import { Contact } from "./Routes/Contact";
import GraphicalDesignRoute from "./Routes/GraphicalDesign/Route";
import { GraphicalDesign } from "./Routes/GraphicalDesign";
import GraphicalDesignLoader from "./Routes/GraphicalDesign/Loader";
import PhotographyLoader from "./Routes/Photography/Loader";
import PhotographyRoute from "./Routes/Photography/Route";
import { Photography } from "./Routes/Photography";
import PricesRoute from "./Routes/Prices/Route";
import { Prices } from "./Routes/Prices";
import GraphicalDesignProjectRoute from "./Routes/GraphicalDesignProject/Route";
import GraphicalDesignProjectLoader from "./Routes/GraphicalDesignProject/Loader";
import { GraphicalDesignProject } from "./Routes/GraphicalDesignProject";
import { PhotographyCategory } from "./Routes/PhotographyCategory";
import PhotographyCategoryLoader from "./Routes/PhotographyCategory/Loader";
import PhotographyCategoryRoute from "./Routes/PhotographyCategory/Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // errorElement: <div>Oh no!</div>,
        children: [
          { index: true, element: <Home /> },
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
          { path: PricesRoute, element: <Prices /> },
        ],
      },
    ],
  },
]);

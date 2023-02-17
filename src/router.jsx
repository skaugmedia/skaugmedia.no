import React from "react";
import Root from "./Routes/Root";
import { createBrowserRouter } from "react-router-dom";
import * as Home from "./Routes/Home";
import * as About from "./Routes/About";
import * as Contact from "./Routes/Contact";
import * as GraphicalDesign from "./Routes/GraphicalDesign";
import * as Photography from "./Routes/Photography";
import * as Prices from "./Routes/Prices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // errorElement: <div>Oh no!</div>,
        children: [
          { index: true, element: <Home.Home /> },
          { path: Home.route, element: <Home.Home /> },
          { path: About.route, element: <About.About /> },
          { path: Contact.route, element: <Contact.Contact /> },
          {
            path: GraphicalDesign.route,
            element: <GraphicalDesign.GraphicalDesign />,
          },
          { path: Photography.route, element: <Photography.Photography /> },
          { path: Prices.route, element: <Prices.Prices /> },
        ],
      },
    ],
  },
]);

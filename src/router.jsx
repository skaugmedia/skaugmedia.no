import { createBrowserRouter } from "react-router-dom";
import { AI } from "./Routes/AI";
import AIPageName from "./Routes/AI/PageName";
import AIRoute from "./Routes/AI/Route";
import { About } from "./Routes/About";
import AboutPageName from "./Routes/About/PageName";
import AboutRoute from "./Routes/About/Route";
import { BusinessPortraits } from "./Routes/BusinessPortraits";
import BusinessPortraitsPageName from "./Routes/BusinessPortraits/PageName";
import BusinessPortraitsRoute from "./Routes/BusinessPortraits/Route";
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
import { Coop } from "./Routes/Coop";
import CoopPageName from "./Routes/Coop/PageName";
import CoopRoute from "./Routes/Coop/Route";
import { Couples } from "./Routes/Couples";
import CouplesPageName from "./Routes/Couples/PageName";
import CouplesRoute from "./Routes/Couples/Route";
import { DesignInfo } from "./Routes/DesignInfo";
import DesignInfoLoader from "./Routes/DesignInfo/Loader";
import DesignInfoPageName from "./Routes/DesignInfo/PageName";
import DesignInfoRoute from "./Routes/DesignInfo/Route";
import { Discounts } from "./Routes/Discounts";
import DiscountsPageName from "./Routes/Discounts/PageName";
import DiscountsRoute from "./Routes/Discounts/Route";
import { ErrorHandler } from "./Routes/ErrorHandler";
import { Family } from "./Routes/Family";
import FamilyPageName from "./Routes/Family/PageName";
import FamilyRoute from "./Routes/Family/Route";
import { FoodPhotography } from "./Routes/FoodPhotography";
import FoodPhotographyPageName from "./Routes/FoodPhotography/PageName";
import FoodPhotographyRoute from "./Routes/FoodPhotography/Route";
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

import { Kiehls } from "./Routes/Kiehls";
import KiehlsPageName from "./Routes/Kiehls/PageName";
import KiehlsRoute from "./Routes/Kiehls/Route";
import { KindergartenPhotography } from "./Routes/KindergartenPhotography";
import KindergartenPhotographyPageName from "./Routes/KindergartenPhotography/PageName";
import KindergartenPhotographyRoute from "./Routes/KindergartenPhotography/Route";
import { Lashbrowser } from "./Routes/Lashbrowser";
import LashbrowserPageName from "./Routes/Lashbrowser/PageName";
import LashbrowserRoute from "./Routes/Lashbrowser/Route";
import { Maternity } from "./Routes/Maternity";
import MaternityPageName from "./Routes/Maternity/PageName";
import MaternityRoute from "./Routes/Maternity/Route";
import { Naturalis } from "./Routes/Naturalis";
import NaturalisPageName from "./Routes/Naturalis/PageName";
import NaturalisRoute from "./Routes/Naturalis/Route";
import { Newborn } from "./Routes/Newborn";
import NewbornPageName from "./Routes/Newborn/PageName";
import NewbornRoute from "./Routes/Newborn/Route";
import { PentOgBrukt } from "./Routes/PentOgBrukt";
import PentOgBruktPageName from "./Routes/PentOgBrukt/PageName";
import PentOgBruktRoute from "./Routes/PentOgBrukt/Route";
import { PhotoProducts } from "./Routes/PhotoProducts";
import PhotoProductsPageName from "./Routes/PhotoProducts/PageName";
import PhotoProductsRoute from "./Routes/PhotoProducts/Route";
import { Photography } from "./Routes/Photography";
import PhotographyLoader from "./Routes/Photography/Loader";
import PhotographyPageName from "./Routes/Photography/PageName";
import PhotographyRoute from "./Routes/Photography/Route";
import { PhotographyCategory } from "./Routes/PhotographyCategory";
import PhotographyCategoryLoader from "./Routes/PhotographyCategory/Loader";
import { Plantlife } from "./Routes/Plantlife";
import PlantlifePageName from "./Routes/Plantlife/PageName";
import PlantlifeRoute from "./Routes/Plantlife/Route";
import { PricesServices } from "./Routes/PricesServices";
import PricesPageName from "./Routes/PricesServices/PageName";
import PricesRoute from "./Routes/PricesServices/Route";
import { ProductPhotography } from "./Routes/ProductPhotography";
import ProductPhotographyPageName from "./Routes/ProductPhotography/PageName";
import ProductPhotographyRoute from "./Routes/ProductPhotography/Route";
import { Root } from "./Routes/Root";
import { Saftig } from "./Routes/Saftig";
import SaftigPageName from "./Routes/Saftig/PageName";
import SaftigRoute from "./Routes/Saftig/Route";
import { SocialMedia } from "./Routes/SocialMedia";
import SocialMediaPageName from "./Routes/SocialMedia/PageName";
import SocialMediaRoute from "./Routes/SocialMedia/Route";
import { TeamHelse } from "./Routes/TeamHelse";
import TeamHelsePageName from "./Routes/TeamHelse/PageName";
import TeamHelseRoute from "./Routes/TeamHelse/Route";
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
                path: ProductPhotographyRoute,
                element: <ProductPhotography />,
                handle: { pageName: ProductPhotographyPageName },
              },
              {
                path: FoodPhotographyRoute,
                element: <FoodPhotography />,
                handle: { pageName: FoodPhotographyPageName },
              },
              {
                path: BusinessPortraitsRoute,
                element: <BusinessPortraits />,
                handle: { pageName: BusinessPortraitsPageName },
              },
              {
                path: KindergartenPhotographyRoute,
                element: <KindergartenPhotography />,
                handle: { pageName: KindergartenPhotographyPageName },
              },
              {
                path: DesignInfoRoute,
                element: <DesignInfo />,
                loader: DesignInfoLoader,
                handle: { pageName: DesignInfoPageName },
                children: [
                  {
                    path: TeamHelseRoute,
                    element: <TeamHelse />,
                    handle: { pageName: TeamHelsePageName },
                  },
                  {
                    path: LashbrowserRoute,
                    element: <Lashbrowser />,
                    handle: { pageName: LashbrowserPageName },
                  },
                  {
                    path: PentOgBruktRoute,
                    element: <PentOgBrukt />,
                    handle: { pageName: PentOgBruktPageName },
                  },
                  {
                    path: NaturalisRoute,
                    element: <Naturalis />,
                    handle: { pageName: NaturalisPageName },
                  },
                  {
                    path: SaftigRoute,
                    element: <Saftig />,
                    handle: { pageName: SaftigPageName },
                  },
                  {
                    path: KiehlsRoute,
                    element: <Kiehls />,
                    handle: { pageName: KiehlsPageName },
                  },
                  {
                    path: PlantlifeRoute,
                    element: <Plantlife />,
                    handle: { pageName: PlantlifePageName },
                  },
                  {
                    path: CoopRoute,
                    element: <Coop />,
                    handle: { pageName: CoopPageName },
                  },

                  {
                    path: ":projectId",
                    loader: GraphicalDesignProjectLoader,
                    element: <GraphicalDesignProject />,
                    handle: { pageName: (data) => data.project.title },
                  },
                ],
              },
              {
                path: SocialMediaRoute,
                element: <SocialMedia />,
                handle: { pageName: SocialMediaPageName },
              },
              {
                path: AIRoute,
                element: <AI />,
                handle: { pageName: AIPageName },
              },
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
                    handle: { pageName: (data) => data.project.title },
                  },
                ],
              },
              {
                path: ":categoryId",
                loader: PhotographyCategoryLoader(true),
                element: <PhotographyCategory />,
                handle: { pageName: (data) => data.category.title },
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
                handle: { pageName: (data) => data.category.title },
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

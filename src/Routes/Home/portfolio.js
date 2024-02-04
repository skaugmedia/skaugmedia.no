import Confirmation from "../../Data/Photography/Confirmation";
import Engagement from "../../Data/Photography/Engagement";
import Family from "../../Data/Photography/Family";
import Kids from "../../Data/Photography/Kids";
import Mommyandme from "../../Data/Photography/Mommyandme";
import Newborn from "../../Data/Photography/Newborn";
import Portrait from "../../Data/Photography/Portrait";
import Pregnant from "../../Data/Photography/Pregnant";
import Wedding from "../../Data/Photography/Wedding";
import BusinessPortfolioImg from "../../Images/Home/portfolio_business.jpg";
import ConfirmationPortfolioImg from "../../Images/Home/portfolio_conf.jpg";
import CouplePortfolioImg from "../../Images/Home/portfolio_couple.jpg";
import FamilyPortfolioImg from "../../Images/Home/portfolio_family.jpg";
import KidsPortfolioImg from "../../Images/Home/portfolio_kids.jpg";
import MommyMePortfolioImg from "../../Images/Home/portfolio_mom.jpg";
import NewbornPortfolioImg from "../../Images/Home/portfolio_newborn.jpg";
import PortraitPortfolioImg from "../../Images/Home/portfolio_portrait.jpg";
import PregPortfolioImg from "../../Images/Home/portfolio_preg.jpg";
import WeddingPortfolioImg from "../../Images/Home/portfolio_wed.jpg";
import PhotographyRoute from "../../Routes/Photography/Route";
import BusinessPricesRoute from "/src/Routes/BusinessPrices/Route";

export const portfolio = [
  {
    link: `/${PhotographyRoute}/${Pregnant.id}`,
    imgSrc: PregPortfolioImg,
    imgAlt: "Nydelig gravid",
    title: "Gravid",
  },
  {
    link: `/${PhotographyRoute}/${Newborn.id}`,
    imgSrc: NewbornPortfolioImg,
    imgAlt: "Nyfødt baby",
    title: "Nyfødt",
  },

  {
    link: `/${PhotographyRoute}/${Kids.id}`,
    imgSrc: KidsPortfolioImg,
    imgAlt: "1-åring",
    title: "Barn",
  },
  {
    link: `/${PhotographyRoute}/${Family.id}`,
    imgSrc: FamilyPortfolioImg,
    imgAlt: "Familie",
    title: "Familie",
  },
  {
    link: `/${PhotographyRoute}/${Confirmation.id}`,
    imgSrc: ConfirmationPortfolioImg,
    imgAlt: "Konfirmant",
    title: "Konfirmant",
  },
  {
    link: `/${PhotographyRoute}/${Wedding.id}`,
    imgSrc: WeddingPortfolioImg,
    imgAlt: "Brudepar",
    title: "Bryllup",
  },
  {
    link: `/${PhotographyRoute}/${Mommyandme.id}`,
    imgSrc: MommyMePortfolioImg,
    imgAlt: "Mor og barn",
    title: "Mommy & me / daddy & me",
  },
  {
    link: `/${PhotographyRoute}/${Portrait.id}`,
    imgSrc: PortraitPortfolioImg,
    imgAlt: "Portrett",
    title: "Portrett",
  },
  {
    link: `/${PhotographyRoute}/${Engagement.id}`,
    imgSrc: CouplePortfolioImg,
    imgAlt: "Et forlovet par",
    title: "Par",
  },

  {
    link: `/${BusinessPricesRoute}`,
    imgSrc: BusinessPortfolioImg,
    imgAlt: "Innholdsproduksjon for bedrift",
    title: "Bedrift",
  },
];

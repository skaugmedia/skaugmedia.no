import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, ScrollRestoration, useMatches } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { MobileNav } from "../../Components/MobileNav";
import "./Root.css";

export function Root() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const matches = useMatches();
  const breadcrumbs = matches
    .filter((x) => x.handle?.pageName)
    .map((match, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name:
        typeof match.handle?.pageName === "string"
          ? match.handle?.pageName
          : match.handle?.pageName(match.data),
      item: `https://www.skaugmedia.no${match.pathname}`,
    }));

  return (
    <HelmetProvider>
      <Helmet>
        prettier-ignore
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": ${JSON.stringify(breadcrumbs)}
          }`}
        </script>
      </Helmet>
      <div className="Root">
        <Header
          isMobile={isMobile}
          hamburgerToggled={showNav}
          hamburgerOnClick={() => setShowNav(!showNav)}
        />

        {/* {discounts.map((discount) => (
          <DiscountBanner
            key={`${discount.title}${discount.validFrom}${discount.link}`}
            {...discount}
          />
        ))} */}

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
      <MobileNav
        show={showNav}
        hamburgerToggled={showNav}
        hamburgerOnClick={() => setShowNav(!showNav)}
        onClick={() => setShowNav(false)}
      />
      <ScrollRestoration />
    </HelmetProvider>
  );
}

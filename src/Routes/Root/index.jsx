import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { MobileNav } from "../../Components/MobileNav";
import "./Root.css";

export function Root() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <HelmetProvider>
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

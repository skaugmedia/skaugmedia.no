import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import { DiscountBanner } from "../../Components/DiscountBanner";
import { discounts } from "../../Data/discounts";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { MobileNav } from "../../Components/MobileNav";
import "./Root.css";

export function Root() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <>
      <div className="Root">
        <Header isMobile={isMobile} />

        {discounts.map((discount) => (
          <DiscountBanner
            key={`${discount.title}${discount.validFrom}${discount.link}`}
            {...discount}
          />
        ))}

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
      <MobileNav show={showNav} onClick={() => setShowNav(false)} />
    </>
  );
}

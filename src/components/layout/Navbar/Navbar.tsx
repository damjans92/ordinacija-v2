"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { routeMap } from "../../../../lib/routeMap";
import HeaderTop from "./HeaderTop";
import NavbarLinksRight from "./NavbarLinksRight";
import NavbarMobile from "./NavbarMobile";
import Logo from "./Logo";
import { useNavbar } from "./useNavbar";
import NavbarLinksLeft from "./NavbarLinksLeft";

function Navbar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "sr";
  const routes = routeMap[lang];
  const { navOpen, handleClose, handleToggle } = useNavbar();

  const navLinks = [
    {
      href: routes.about,
      label: lang === "en" ? "Your Dentist" : "Vaš stomatolog",
    },
    {
      href: routes.gallery,
      label: lang === "en" ? "Photo Gallery" : "Foto galerija",
    },
    { href: routes.services, label: lang === "en" ? "Services" : "Usluge" },
    { href: routes.faq, label: lang === "en" ? "FAQ" : "Najčešća pitanja" },
    {
      href: routes.testimonials,
      label: lang === "en" ? "Testimonials" : "Utisci",
    },
    { href: routes.contact, label: lang === "en" ? "Contact" : "Kontakt" },
  ];

  return (
    <>
      <header>
        <HeaderTop />
        <div className="px-4 py-8 lg:py-12 bg-background2">
          <div className="container mx-auto flex items-center justify-between ">
            <button className=" flex lg:hidden" onClick={handleToggle}>
              <FaBars className="w-full h-full" size={28} />
            </button>
            <NavbarLinksLeft navLinks={navLinks} pathname={pathname} />
            <Logo lang={lang} />
            <NavbarLinksRight navLinks={navLinks} pathname={pathname} />
            <button className=" flex lg:hidden">
              <FaPhoneAlt className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <NavbarMobile
        navLinks={navLinks}
        pathname={pathname}
        navOpen={navOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default Navbar;

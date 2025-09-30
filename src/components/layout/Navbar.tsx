"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaInstagram, FaBars } from "react-icons/fa";

const navLinks = [
  { href: "/o-osnivacu", label: "Vaš stomatolog" },
  { href: "/galerija", label: "Foto galerija" },
  { href: "/terapijske-usluge", label: "Usluge" },
  { href: "/najcesca-pitanja", label: "Najčešća pitanja" },
  { href: "/utisci", label: "Utisci" },
  { href: "/kontakt", label: "Kontakt" },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleClose = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }
  }, [navOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <div className="bg-black flex justify-center py-2 lg:py-4 text-white font-quicksand text-sm font-medium tracking-widest ">
          <span>RADOVANA SIMICA CIGE 7, BEOGRAD</span>
        </div>
        <div className="px-4 py-8 lg:py-12 bg-background2">
          <div className="container mx-auto flex items-center justify-between ">
            <button className=" flex lg:hidden" onClick={handleToggle}>
              <FaBars className="w-full h-full" size={28} />
            </button>
            <nav className="hidden lg:flex flex-1 font-quicksand font-extrabold text-sm tracking-widest ">
              <ul className="flex items-center justify-center gap-8 uppercase col-">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`pb-1 hover:border-b-1 hover:border-black ${
                        pathname === link.href ? "border-b-2 border-black" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
              <Link href="/">
                <Image
                  src="/LogoNewBlack.svg"
                  alt="Logo"
                  width={250} // base size
                  height={60}
                  className="w-42 sm:w-45 md:w-45 lg:w-58 h-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden lg:flex flex-1 justify-end font-quicksand font-extrabold text-sm tracking-widest ">
              <ul className="flex items-center justify-center gap-8 uppercase">
                {navLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`pb-1 hover:border-b-1 hover:border-black ${
                        pathname === link.href ? "border-b-2 border-black" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div></div>
            </nav>
            <button className=" flex lg:hidden">
              <FaPhoneAlt className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`flex flex-col fixed top-[135px] w-full bg-[var(--background2)] min-h-full overflow-y-auto z-50 ${navOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 ease-in-out
      `}
      >
        <nav className="flex w-full justify-center">
          <ul className="flex flex-col w-full h-full border-t-1 text-center font-quicksand font-bold text-md tracking-widest uppercase">
            {navLinks.map((link) => (
              <li key={link.href} className="py-6 border-b border-black">
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className={`${
                    pathname === link.href ? "text-green-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center py-6">
          <Link href="#">
            <FaInstagram className="w-6 h-6" size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

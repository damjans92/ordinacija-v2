"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaInstagram, FaBars } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }
  }, [navOpen]);

  return (
    <>
      <header>
        <div className="bg-black flex justify-center py-2 lg:py-4 text-white font-quicksand text-sm font-medium tracking-widest ">
          <span>RADOVANA SIMICA CIGE 7, BEOGRAD</span>
        </div>
        <div className="px-4 py-8 lg:py-12 bg-background2">
          <div className="container mx-auto flex items-center justify-between ">
            <button
              className=" flex lg:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              <FaBars className="w-full h-full" size={28} />
            </button>
            <nav className="hidden lg:flex flex-1 font-quicksand font-bold text-sm tracking-widest ">
              <ul className="flex items-center justify-center gap-8 uppercase col-">
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    The doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    Photo gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    Patient stories
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={220} // base size
                height={40}
                className="w-34 sm:w-38 md:w-45 lg:w-48 h-auto"
                priority
              />
            </div>
            <nav className="hidden lg:flex flex-1 justify-end font-quicksand font-bold text-sm tracking-widest ">
              <ul className="flex items-center justify-center gap-8 uppercase">
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:border-b-1 hover:border-black pb-1"
                  >
                    Contact
                  </Link>
                </li>
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
        className={`flex flex-col fixed top-[148px] w-full bg-white min-h-full overflow-y-auto z-50 ${navOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 ease-in-out
      `}
      >
        <nav className="flex w-full justify-center">
          <ul className="flex flex-col w-full h-full border-t-1 text-center font-quicksand font-bold text-md tracking-widest uppercase">
            <li className="py-6 border-b-1 border-black">
              <Link href="#"> The doctors</Link>
            </li>

            <li className="py-6 border-b-1 border-black">
              <Link href="#">Photo gallery</Link>
            </li>
            <li className="py-6 border-b-1 border-black">
              <Link href="#">Patient stories</Link>
            </li>
            <li className="py-6 border-b-1 border-black">
              <Link href="#">Services</Link>
            </li>
            <li className="py-6 border-b-1 border-black">
              <Link href="#"> FAQS</Link>
            </li>
            <li className="py-6 border-b-1 border-black">
              <Link href="#"> Reviews</Link>
            </li>
            <li className="py-6 border-b-1 border-black">
              <Link href="#"> Contact</Link>
            </li>
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

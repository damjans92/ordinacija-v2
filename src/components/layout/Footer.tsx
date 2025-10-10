"use client";
import { footerData } from "@/data/footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();

  const lang = pathname.startsWith("/en") ? "en" : "sr";
  const t = footerData[lang];

  return (
    <footer className="bg-background2 text-black py-6 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="order-4 lg:order-1">
            <div className="py-12 lg:py-0 text-5xl lg:text-7xl font-extrabold  text-center">
              <Image
                src="/LogoNewBlack.svg"
                alt="Logo"
                width={220}
                height={40}
                className="w-40 md:w-45 lg:w-48 h-auto mx-auto"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex gap-12 mb-12 lg:mb-30">
            <div className="lg:mx-auto">
              <h3 className="text-lg font-semibold mb-6   uppercase">
                {t.quickLinks}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-12 ">
                <ul className="space-y-2">
                  <li>
                    <a
                      href={t.link1.href}
                      className="underline hover:no-underline"
                    >
                      {t.link1.text}
                    </a>
                  </li>
                  <li>
                    <a
                      href={t.link2.href}
                      className="underline hover:no-underline"
                    >
                      {t.link2.text}
                    </a>
                  </li>
                  <li>
                    <a
                      href={t.link3.href}
                      className="underline hover:no-underline"
                    >
                      {t.link3.text}
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={t.link4.href}
                      className="underline hover:no-underline"
                    >
                      {t.link4.text}
                    </a>
                  </li>
                  <li>
                    <a
                      href={t.link5.href}
                      className="underline hover:no-underline"
                    >
                      {t.link5.text}
                    </a>
                  </li>
                  <li>
                    <a
                      href={t.link6.href}
                      className="underline hover:no-underline"
                    >
                      {t.link6.text}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:order-3"> </div>
          <div className="order-2 lg:order-4 border-b-1 border-black lg:border-none pb-6">
            <h5 className="text-lg uppercase mb-6 font-semibold ">
              {t.followUs}
            </h5>
            <div className="flex gap-4">
              <div>
                <FaSquareFacebook size={30} />
              </div>
              <div>
                <FaSquareInstagram size={30} />
              </div>
              <div>
                <FaSquareYoutube size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-black pt-6">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Dr Savkovic Dental Office |{" "}
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

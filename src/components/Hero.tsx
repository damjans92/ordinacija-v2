"use client";

import Image from "next/image";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

type HeroProps = {
  title: string;
  moreBtn: string;
  location: string;
  scrollBtn: string;
  imageSrc?: string;
};

const Hero = ({ title, moreBtn, location, scrollBtn, imageSrc }: HeroProps) => {
  const scrollNext = (e: React.MouseEvent) => {
    e.preventDefault();

    const currentSection = (e.target as HTMLElement).closest("section");
    const nextSection =
      currentSection?.nextElementSibling as HTMLElement | null;
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="container !px-0 mx-auto ml-[-15px] lg:ml-[15px]"
    >
      <div className="flex flex-wrap border-b-1 lg:border-1 border-black">
        <div className="w-full lg:w-1/2">
          <Image
            src={imageSrc || "/banner-home2.jpg"}
            alt="Hero Image"
            width={450}
            height={800}
            className="w-full h-full object-cover"
            placeholder="blur"
            blurDataURL="/banner-home2.jpg"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12">
          {/* H1 fills top space */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl font-normal tracking-widest mb-4 uppercase lg:leading-13 max-w-[70%]">
              {/* THE ART OF <br /> THE SMILE */}
              {/* Vaš osmeh, <br /> naša briga */}
              {title}
            </h1>
            <a
              href="#"
              className="uppercase tracking-widest link-underline text-sm"
              onClick={scrollNext}
            >
              {moreBtn}
            </a>
          </div>

          {/* Paragraph sticks to bottom */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="mt-4 text-md font-bold uppercase tracking-widest font-quicksand text-center md:text-left">
              {location.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5 mt-8 lg:mt-0">
              <Image
                src="/LogoNewBlack.svg"
                alt="Logo"
                width={220} // base size
                height={40}
                className="w-34 sm:w-38 md:w-45 lg:w-48 h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:flex-1 text-gray-600">
          <Breadcrumbs />
        </div>
        <div className="w-full text-center py-3 md:flex-1 justify-center">
          <a
            href="#"
            className="link-underline tracking-widest uppercase text-sm"
            onClick={scrollNext}
          >
            {scrollBtn}
          </a>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Hero;

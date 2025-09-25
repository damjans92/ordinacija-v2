"use client";

import Image from "next/image";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

type HeroProps = {
  title: string;
  imageSrc?: string;
};

const Hero = ({ title, imageSrc }: HeroProps) => {
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
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12">
          {/* H1 fills top space */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl font-normal tracking-widest mb-4 uppercase lg:leading-16 max-w-[70%]">
              {/* THE ART OF <br /> THE SMILE */}
              {/* Vaš osmeh, <br /> naša briga */}
              {title}
            </h1>
            <a href="#" className="uppercase tracking-widest link-underline">
              Pročitaj više
            </a>
          </div>

          {/* Paragraph sticks to bottom */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="mt-4 text-md font-bold uppercase tracking-widest font-quicksand text-center md:text-left">
              nađite nas na adresi
              <br /> Radovana Simića Cige 7
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
              {/* <Image
                src="/LogoBlue.svg"
                alt="Logo"
                width={220} // base size
                height={40}
                className="w-34 sm:w-38 md:w-45 lg:w-48 h-auto"
                priority
              />
              <Image
                src="/LogoNew2.svg"
                alt="Logo"
                width={220} // base size
                height={40}
                className="w-42 sm:w-45 md:w-45 lg:w-58 h-auto"
                priority
              />
              <Image
                src="/LogoNewGreen.svg"
                alt="Logo"
                width={250} // base size
                height={60}
                className="w-42 sm:w-45 md:w-45 lg:w-58 h-auto"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Breadcrumbs />
        <div className="text-center py-3 flex-1">
          <a
            href="#"
            className="link-underline tracking-widest uppercase"
            onClick={scrollNext}
          >
            Skroluj dole
          </a>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Hero;

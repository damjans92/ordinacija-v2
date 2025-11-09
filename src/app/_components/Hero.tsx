import Image from "next/image";
import React from "react";
import { homeData } from "@/data/home";

const Hero = () => {
  return (
    <section id="hero" className="container  mx-auto">
      <div className="flex flex-wrap border-1 border-black">
        <div className="w-full lg:w-1/2">
          <Image
            src="/banner-home.jpg"
            alt="Hero Image"
            width={450}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl font-medium tracking-widest mb-4 uppercase leading-16">
              {/* Vaš osmeh, <br /> naša briga */}
              {homeData.sr.hero.title.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <a href="#" className="uppercase tracking-widest link-underline">
              {homeData.sr.hero.moreBtn}
            </a>
          </div>

          {/* Paragraph sticks to bottom */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="mt-4 text-md font-bold uppercase tracking-widest font-redhat text-center md:text-left">
              {homeData.sr.hero.location.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
              <Image
                src="/LogoBlue.svg"
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
      <div className="text-center py-3">
        <a href="#" className="link-underline tracking-widest uppercase">
          {homeData.sr.hero.scrollBtn}
        </a>
      </div>
    </section>
  );
};

export default Hero;

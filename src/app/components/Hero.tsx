import Image from "next/image";
import React from "react";

type HeroProps = {
  imageSrc?: string;
};

const Hero = ({ imageSrc }: HeroProps) => {
  return (
    <section id="hero" className="container mx-auto">
      <div className="flex flex-wrap border-1 border-black">
        <div className="w-full lg:w-1/2">
          <Image
            src={imageSrc || "/banner-home.jpg"}
            alt="Hero Image"
            width={450}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12">
          {/* H1 fills top space */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl font-normal tracking-widest mb-4 uppercase leading-16">
              {/* THE ART OF <br /> THE SMILE */}
              {/* Vaš osmeh, <br /> naša briga */}
              Zdrav osmeh
              <br /> za ceo život
            </h1>
            <a href="#" className="uppercase tracking-widest link-underline">
              Pročitaj više
            </a>
          </div>

          {/* Paragraph sticks to bottom */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="mt-4 text-md font-bold uppercase tracking-widest font-quicksand text-center md:text-left">
              nađite nas na adresi
              <br /> Radovana Simića Cige 7<br /> 11000 Beograd
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
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <a
          href="#"
          className="link-underline tracking-widest uppercase font-light"
        >
          Skroluj dole
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.conservativeDentistry.title,
  description: seoData.sr.servicePages.conservativeDentistry.description,
};

const ServiceConservative = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="  max-auto">
        {/* <ServiceHeading title={t.conservative.title} /> */}
        <PageHeader title={t.conservative.title} />
      </div>
      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle1}
            </h2>
            <p>{t.conservative.description.text1}</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle2}
            </h2>
            <p>{t.conservative.description.text2}</p>
          </div>
        </div>
      </div> */}
      <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32 lg:space-y-40">
            {/* Svaka sekcija ide jedna ispod druge – savršeno za duže naslove i tekstove */}
            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.conservative.description.subTitle1}
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.conservative.description.text1}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.conservative.description.subTitle2}
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.conservative.description.text2}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceConservative;

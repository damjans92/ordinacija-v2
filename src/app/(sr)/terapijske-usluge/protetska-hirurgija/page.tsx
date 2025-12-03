import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.prostheticSurgery.title,
  description: seoData.sr.servicePages.prostheticSurgery.description,
};
const ServiceProstetics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      {/* <ServiceHeading title={t.prosthetics.title} /> */}
      <PageHeader title={t.prosthetics.title} />
      <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32 lg:space-y-40">
            {/* Svaka sekcija ide jedna ispod druge – savršeno za duže naslove i tekstove */}
            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle1}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text1}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle2}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text2}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle3}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text3}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceProstetics;

import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.orthodontics.title,
  description: seoData.sr.servicePages.orthodontics.description,
};

const ServiceOrthodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <PageHeader title={t.ortodontics.title} />
      {/* <div className="container max-auto">
        <ServiceHeading title={t.ortodontics.title} />
      </div> */}
      <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32 lg:space-y-40">
            {/* Svaka sekcija ide jedna ispod druge – savršeno za duže naslove i tekstove */}
            <article className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.ortodontics.description.subTitle1}
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.ortodontics.description.text1}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.ortodontics.description.subTitle2}
              </h2>

              {t.ortodontics.description.text2.split("\n").map((line, idx) => (
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0"
                  key={idx}
                >
                  {line}
                  <br />
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>
      {/* <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
              <article className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-widest text-[#171717] mb-8">
                  {t.ortodontics.description.subTitle1}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light">
                  {t.ortodontics.description.text1}
                </p>
              </article>

              <article className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-widest text-[#171717] mb-8">
                  {t.ortodontics.description.subTitle2}
                </h2>
                {t.ortodontics.description.text2
                  .split("\n")
                  .map((line, idx) => (
                    <p
                      className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light mt-4"
                      key={idx}
                    >
                      {line}
                      <br />
                    </p>
                  ))}
              </article>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.ortodontics.description.subTitle1}
            </h2>
            <p>{t.ortodontics.description.text1}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.ortodontics.description.subTitle2}
            </h2>
            {t.ortodontics.description.text2.split("\n").map((line, idx) => (
              <p className="mt-4" key={idx}>
                {line}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default ServiceOrthodontics;

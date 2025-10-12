import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.orthodontics.title,
  description: seoData.en.servicePages.orthodontics.description,
};

const ServicePageEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <ServiceHeading title={t.ortodontics.title} />

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
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
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServicePageEN;

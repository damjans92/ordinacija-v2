import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.conservativeDentistry.title,
  description: seoData.sr.servicePages.conservativeDentistry.description,
};

const ServiceConservative = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container max-auto">
        <ServiceHeading title={t.conservative.title} />
      </div>
      <div className="container mx-auto">
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
      </div>
    </main>
  );
};

export default ServiceConservative;

import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: seoData.en.servicePages.teethWhitening.title,
  description: seoData.en.servicePages.teethWhitening.description,
};

const ServiceWhiteningEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container max-auto">
        <ServiceHeading title={t.whitening.title} />
      </div>
      <div className="container max-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.whitening.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceWhiteningEN;

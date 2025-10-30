import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";
import { seoData } from "@/data/seoData";
import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";

export const metadata: Metadata = {
  title: seoData.en.servicePages.endodontics.title,
  description: seoData.en.servicePages.endodontics.description,
};
const ServiceEndodonticsEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container max-auto">
        <ServiceHeading title={t.endodontics.title} />
      </div>
      <div className="container max-auto">
        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.endodontics.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceEndodonticsEN;

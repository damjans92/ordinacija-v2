import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.tmjTherapy.title,
  description: seoData.sr.servicePages.tmjTherapy.description,
};

const ServiceTMJ = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];
  return (
    <main>
      <div className="container max-auto">
        <ServiceHeading title={t.TMJ.title} />
      </div>
      <div className="container mx-auto ">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.TMJ.description.text1}</p>
          </div>
          <div>
            <p>{t.TMJ.description.text2}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceTMJ;

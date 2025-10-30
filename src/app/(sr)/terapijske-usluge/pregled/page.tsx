import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.examination.title,
  description: seoData.sr.servicePages.examination.description,
};

const ServiceAppointment = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container max-auto">
        <ServiceHeading title={t.examination.title} />
      </div>
      <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.examination.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceAppointment;

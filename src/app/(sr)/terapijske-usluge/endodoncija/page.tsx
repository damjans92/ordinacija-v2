import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.endodontics.title,
  description: seoData.sr.servicePages.endodontics.description,
};

const ServiceEndodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-12">
        <ServiceHeading title={t.endodontics.title} />
        {/* <div className="py-10"></div> */}

        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.endodontics.description}</p>
          </div>

          <div>
            <img src="/Infekcija-zuba.jpg" alt="Infekcija zuba" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceEndodontics;

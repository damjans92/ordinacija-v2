import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Izbeljivanje",
  description: "DrSavkovic Dental Office ",
};

const ServiceWhiteningEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-12">
        <ServiceHeading title={t.whitening.title} />

        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.whitening.description}</p>
          </div>

          <div>
            <img src="/Izbeljivanje2.webp" alt={t.whitening.title} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceWhiteningEN;

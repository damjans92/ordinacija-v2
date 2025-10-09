import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { getMetadata } from "../../../../../lib/getMetadata";

export const metadata = getMetadata("sr", "servicePages.whitening");

const ServiceWhitening = () => {
  const lang = "sr";
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
            <img src="/Izbeljivanje2.webp" alt="Izbeljivanje" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceWhitening;

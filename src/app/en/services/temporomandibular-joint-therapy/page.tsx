import { Metadata } from "next";
import React from "react";
import { servicesTextsData } from "@/data/servicesTexts";
import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";

export const metadata: Metadata = {
  title: "Terapija donjoviličnog zgloba",
  description: "DrSavkovic Dental Office ",
};

const ServicePages = () => {
  const lang = "en";
  const t = servicesTextsData[lang];
  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <ServiceHeading title={t.TMJ.title} />

        <div className="grid md:grid-cols-3 gap-8 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <p>{t.TMJ.description.text1}</p>
          </div>
          <div>
            <p>{t.TMJ.description.text2}</p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServicePages;

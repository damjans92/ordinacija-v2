import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pregled",
  description: "DrSavkovic Dental Office ",
};

const ServiceAppointment = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <ServiceHeading title={t.examination.title} />

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <p>{t.examination.description}</p>
          </div>

          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceAppointment;

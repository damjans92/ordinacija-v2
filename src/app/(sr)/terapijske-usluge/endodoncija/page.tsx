import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Endodoncija",
  description: "DrSavkovic Dental Office ",
};

const ServiceEndodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="uppercase text-4xl font-extralight font-outfit mb-12 leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          Endodoncija
          <br /> Lečenje zuba
        </h1>
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

import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.prostheticSurgery.title,
  description: seoData.sr.servicePages.prostheticSurgery.description,
};
const ServiceProstetics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-8 lg:py-12">
        <ServiceHeading title={t.prosthetics.title} />

        <div className="grid md:grid-cols-3 gap-4 p-10 px-8 mt-12 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle1}
            </h2>
            <p>{t.prosthetics.description.text1}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle2}
            </h2>
            <p>{t.prosthetics.description.text2}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle3}
            </h2>
            <p>{t.prosthetics.description.text3}</p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceProstetics;

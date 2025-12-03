import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.examination.title,
  description: seoData.sr.servicePages.examination.description,
};

const ServiceAppointment = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <PageHeader title={t.examination.title} />
      {/* <div className="container max-auto">
        <ServiceHeading title={t.examination.title} />
      </div> */}
      <section className=" py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl leading-relaxed text-[#171717]/80 tracking-wide font-light">
              {t.endodontics.description}
            </p>
          </article>
        </div>
      </section>
      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.examination.description}</p>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default ServiceAppointment;

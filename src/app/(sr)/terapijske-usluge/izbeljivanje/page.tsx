import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.teethWhitening.title,
  description: seoData.sr.servicePages.teethWhitening.description,
};

const ServiceWhitening = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  return (
    <main>
      <PageHeader title={t.whitening.title} />
      <div className="container mx-auto py-12">
        {/* <ServiceHeading title={t.whitening.title} /> */}
        <section className=" py-16 lg:py-18">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto text-center">
              <p
                dangerouslySetInnerHTML={{ __html: t.whitening.description }}
                className="text-xl lg:text-2xl leading-relaxed text-[#171717]/80 tracking-wide font-light"
              ></p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServiceWhitening;

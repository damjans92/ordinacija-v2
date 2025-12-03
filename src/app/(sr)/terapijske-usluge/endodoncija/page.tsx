import { servicesTextsData } from "@/data/servicesTexts";
import React from "react";
import ServiceHeading from "../_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.endodontics.title,
  description: seoData.sr.servicePages.endodontics.description,
};

const ServiceEndodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  // const services = {
  //   endodontics: {
  //     title: "Endodoncija",
  //     description:
  //       "Savremena mašinska endodoncija predstavlja zlatni standard u lečenju korenskih kanala...",
  //     benefits: [
  //       "Bezbolna intervencija",
  //       "Trajno rešenje",
  //       "Minimalno invazivno",
  //       "Garancija 5 godina",
  //     ],
  //     price: "od 8.500 RSD",
  //   },
  // };
  return (
    <main>
      <div className="max-auto">
        {/* <ServiceHeading title={t.endodontics.title} /> */}
        <PageHeader title={t.endodontics.title} />
      </div>
      <section className=" py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl leading-relaxed text-[#171717]/80 tracking-wide font-light">
              {t.endodontics.description}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ServiceEndodontics;

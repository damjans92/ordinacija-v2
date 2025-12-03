import WhatWeDo from "@/app/_components/WhatWeDo";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PageHeader from "@/components/PageHeader";
import { homeData } from "@/data/home";
import { seoData } from "@/data/seoData";
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: seoData.en.services.title,
  description: seoData.en.services.description,
};

const ServicesPage = () => {
  return (
    <main>
      {/* <Hero {...servicesData.en.hero} /> */}
      <PageHeader title="Services" />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo
        {...homeData.en.whatWeDo}
        showDesc={false}
        servicesList={servicesData.en.servicesList}
        btnText={servicesData.en.btnText}
      />
      <Contact />
    </main>
  );
};

export default ServicesPage;

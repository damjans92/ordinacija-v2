import WhatWeDo from "@/app/_components/WhatWeDo";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services",
  description: "DrSavkovic Dental Office ",
};

const ServicesPage = () => {
  return (
    <main>
      <Hero {...servicesData.en.hero} />
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

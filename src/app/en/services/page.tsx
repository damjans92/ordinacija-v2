import WhatWeDo from "@/app/_components/WhatWeDo";
import Hero from "@/components/Hero";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import React from "react";

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
    </main>
  );
};

export default ServicesPage;

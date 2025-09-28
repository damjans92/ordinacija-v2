import React from "react";
import Hero from "../../components/Hero";
import WhatWeDo from "../_components/WhatWeDo";
import { homeData } from "@/data/home";
import { serviceList } from "@/data/services";

const ServicesPage = () => {
  return (
    <main>
      <Hero {...homeData.sr.hero} title="Usluge" />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo
        {...homeData.sr.whatWeDo}
        showDesc={false}
        serviceList={serviceList}
      />
    </main>
  );
};

export default ServicesPage;

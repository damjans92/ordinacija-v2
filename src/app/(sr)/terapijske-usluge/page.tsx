import React from "react";
import Hero from "../../../components/Hero";
import WhatWeDo from "../../_components/WhatWeDo";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import Contact from "@/components/Contact";
import { getMetadata } from "../../../../lib/getMetadata";

export const metadata = getMetadata("sr", "services");
const ServicesPage = () => {
  const lang = "sr";
  const t = homeData[lang];
  const tServices = servicesData[lang];

  return (
    <main>
      <Hero {...t.hero} title="Usluge" />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo
        {...t.whatWeDo}
        showDesc={false}
        servicesList={tServices.servicesList}
        btnText={tServices.btnText}
      />
      <Contact />
    </main>
  );
};

export default ServicesPage;

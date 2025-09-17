import React from "react";
import Hero from "../../components/Hero";
import WhatWeDo from "../_components/WhatWeDo";

const ServicesPage = () => {
  return (
    <main>
      <Hero title="Usluge" />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo showDesc={false} />
    </main>
  );
};

export default ServicesPage;

import React from "react";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";

const ServicesPage = () => {
  return (
    <main>
      <Hero />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo showDesc={false} />
    </main>
  );
};

export default ServicesPage;

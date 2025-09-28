import React from "react";
import { homeData } from "@/data/home";
import Hero from "@/components/Hero";
import Doctor from "../_components/Doctor";
import WhatWeDo from "../_components/WhatWeDo";
import Office from "../_components/Office";
import { serviceListEN } from "@/data/services";

const HomePageEN = () => {
  return (
    <main>
      <h1 className="sr-only">
        Dr Savković – dentist in Belgrade, a healthy smile for a lifetime
      </h1>
      <Hero {...homeData.en.hero} imageSrc="/banner-home2.jpg" />
      <Doctor {...homeData.en.doctor} />

      <div className="border-t-1 border-black"></div>
      <WhatWeDo {...homeData.en.whatWeDo} serviceList={serviceListEN} />
      <Office {...homeData.en.office} />
    </main>
  );
};

export default HomePageEN;

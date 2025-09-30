"use client";

import Doctor from "./_components/Doctor";
import Stories from "./_components/Stories";
import WhatWeDo from "./_components/WhatWeDo";
import Office from "./_components/Office";
import Hero from "../components/Hero";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import { useLang } from "@/providers/LanguageProvider";

export default function Home() {
  const lang = useLang();
  const t = homeData[lang];
  const servicesT = servicesData[lang];

  return (
    <main>
      <h1 className="sr-only">
        Dr Savković – stomatolog u Beogradu, zdrav osmeh za ceo život
      </h1>
      <Hero {...t.hero} imageSrc="/banner-home2.jpg" />
      <Doctor {...t.doctor} />

      <div className="border-t-1 border-black"></div>
      <WhatWeDo
        {...t.whatWeDo}
        servicesList={servicesT.servicesList}
        btnText={servicesT.btnText}
      />
      <Office {...t.office} />
    </main>
  );
}

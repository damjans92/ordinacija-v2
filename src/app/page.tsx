import Doctor from "./_components/Doctor";
import WhatWeDo from "./_components/WhatWeDo";
import Office from "./_components/Office";
import Hero from "../components/Hero";
import Contact from "@/components/Contact";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.sr.home.title,
  description: seoData.sr.home.description,
};

export default function Home() {
  const lang = "sr";
  const t = homeData[lang];
  const servicesT = servicesData[lang];

  return (
    <main>
      <h1 className="sr-only">
        Dr Savković – stomatolog u Beogradu, zdrav osmeh za ceo život
      </h1>
      <Hero {...t.hero} imageSrc="/banner-home3-1.jpg" />
      <Doctor {...t.doctor} />

      <div className="border-t-1 border-black"></div>
      <WhatWeDo
        {...t.whatWeDo}
        servicesList={servicesT.servicesList}
        btnText={servicesT.btnText}
      />
      {/* <Office {...t.office} /> */}
      <Contact />
    </main>
  );
}

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

  const BASE_URL = "https://drsavkovic.rs";

  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        url: BASE_URL,
        name: "Dr Savković Dental Office",
        description:
          "Stomatolog na Medakoviću, Beograd – Implanti, protetika, estetska stomatologija.",
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: lang,
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}#organization`,
        name: "Dr Savković Dental Office",
        url: BASE_URL,
        logo: `${BASE_URL}/dr-savkovic-dental-logo.jpg`,
        sameAs: ["https://www.instagram.com/drsavkovic/"],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
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

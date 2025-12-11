import { homeData } from "@/data/home";
import Hero from "@/components/Hero";
import Doctor from "../_components/Doctor";
import WhatWeDo from "../_components/WhatWeDo";
import Office from "../_components/Office";
import { servicesData } from "@/data/services";
import Contact from "@/components/Contact";

const HomePageEN = () => {
  const BASE_URL = "https://drsavkovic.rs";
  const EN_URL = `${BASE_URL}/en`;

  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        url: EN_URL,
        name: "Dr Savković Dental Office",
        description:
          "Dentist in Medaković, Belgrade – Implants, prosthetics, aesthetic dentistry.",
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}#organization`,
        name: "Dr Savković Dental Office",
        url: EN_URL,
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
        Dr Savković – dentist in Belgrade, a healthy smile for a lifetime
      </h1>
      <Hero {...homeData.en.hero} imageSrc="/banner-home3-1.jpg" />
      <Doctor {...homeData.en.doctor} />

      <div className="border-t-1 border-black"></div>
      <WhatWeDo
        {...homeData.en.whatWeDo}
        servicesList={servicesData.en.servicesList}
        btnText={servicesData.en.btnText}
      />
      {/* <Office {...homeData.en.office} /> */}
      <Contact />
    </main>
  );
};

export default HomePageEN;

import WhatWeDo from "../../_components/WhatWeDo";
import { homeData } from "@/data/home";
import { servicesData } from "@/data/services";
import Contact from "@/components/Contact";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.services.title,
  description: seoData.sr.services.description,

  alternates: {
    canonical: "https://drsavkovic.rs/usluge",
  },

  openGraph: {
    title: seoData.sr.services.title,
    description: seoData.sr.services.description,
  },
};

const ServicesPage = () => {
  const lang = "sr";
  const t = homeData[lang];
  const tServices = servicesData[lang];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: seoData.sr.services.title,
    description: seoData.sr.services.description,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://drsavkovic.rs/terapijske-usluge/protetska-hirurgija",
        name: "Zubni Implanti i Protetika",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://drsavkovic.rs/terapijske-usluge/terapija-folijama",
        name: "High Align Folije (Nevidljivi Aparatić)",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://drsavkovic.rs/terapijske-usluge/izbeljivanje",
        name: "Profesionalno Izbeljivanje Zuba",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://drsavkovic.rs/terapijske-usluge/endodoncija",
        name: "Endodoncija i Lečenje Korena Zuba",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://drsavkovic.rs/terapijske-usluge/konzervativna-stomatologija",
        name: "Konzervativna Stomatologija",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://drsavkovic.rs/terapijske-usluge/pregled",
        name: "Stomatološki Pregled i Dijagnostika",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <PageHeader title="Usluge" />
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

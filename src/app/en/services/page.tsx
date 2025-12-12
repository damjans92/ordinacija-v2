import WhatWeDo from "@/app/_components/WhatWeDo";
import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import { homeData } from "@/data/home";
import { seoData } from "@/data/seoData";
import { servicesData } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.en.services.title,
  description: seoData.en.services.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services",
  },

  openGraph: {
    title: seoData.en.services.title,
    description: seoData.en.services.description,
  },
};

const ServicesPage = () => {
  const itemListSchemaEn = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: seoData.en.services.title,
    description: seoData.en.services.description,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://drsavkovic.rs/en/services/prosthetic-surgery",
        name: "Dental Implants and Prosthetics",
      },

      {
        "@type": "ListItem",
        position: 2,
        url: "https://drsavkovic.rs/en/services/foil-therapy",
        name: "High Align Clear Aligners (Invisible Braces)",
      },

      {
        "@type": "ListItem",
        position: 3,
        url: "https://drsavkovic.rs/en/services/whitening",
        name: "Professional Teeth Whitening",
      },

      {
        "@type": "ListItem",
        position: 4,
        url: "https://drsavkovic.rs/en/services/endodontics",
        name: "Endodontics and Root Canal Treatment",
      },

      {
        "@type": "ListItem",
        position: 5,
        url: "https://drsavkovic.rs/en/services/conservative-dentistry",
        name: "Conservative Dentistry",
      },

      {
        "@type": "ListItem",
        position: 6,
        url: "https://drsavkovic.rs/en/services/examination",
        name: "Dental Examination and Diagnostics",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchemaEn) }}
      />
      <PageHeader title="Services" />
      <div className="border-t-1 border-gray-300 mt-12"></div>
      <WhatWeDo
        {...homeData.en.whatWeDo}
        showDesc={false}
        servicesList={servicesData.en.servicesList}
        btnText={servicesData.en.btnText}
      />
      <Contact />
    </main>
  );
};

export default ServicesPage;

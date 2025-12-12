import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.examination.title,
  description: seoData.en.servicePages.examination.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services/examination",
  },
};

const ServiceAppointment = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const examinationServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/en/services/examination",
    serviceType: "Dental Examination and Diagnostics",
    name: seoData.en.servicePages.examination.title,
    description:
      "Detailed dental examination, diagnostic imaging, and planning for all types of treatment. The essential first step toward a healthy smile.",

    provider: {
      "@type": "Dental",
      name: "Dr Savković Dental Office",
      url: "https://drsavkovic.rs/",
      image: "https://drsavkovic.rs/dr-savkovic-dental-logo.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Radovana Simića Cige 7, stan 4",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
        postalCode: "11010",
        addressCountry: "RS",
      },
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "RSD",
      availability: "https://schema.org/InStock",
      description:
        "The price for the examination and diagnostics is available upon request. Book an appointment for a detailed assessment of your oral health.",
    },

    areaServed: {
      "@type": "City",
      name: "Belgrade",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(examinationServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.examination.title} />
      </div>
      <div className="container mx-auto ">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.examination.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceAppointment;

import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";
import { seoData } from "@/data/seoData";
import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";

export const metadata: Metadata = {
  title: seoData.en.servicePages.endodontics.title,
  description: seoData.en.servicePages.endodontics.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services/endodontics",
  },
};

const ServiceEndodonticsEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const endodonticsServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Endodontics",
    name: seoData.en.servicePages.endodontics.title,
    description:
      "Professional endodontics and root canal therapy using precise diagnostics, ensuring a pain-free and effective treatment aimed at preserving the natural tooth.",

    provider: {
      "@type": "Dental",
      name: "Dr Savković Dental Office",
      url: "https://drsavkovic.rs/",
      image: "https://drsavkovic.rs/logo.png",
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
        "Price depends on the complexity of the case. Contact us for a precise quote and consultation.",
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
          __html: JSON.stringify(endodonticsServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.endodontics.title} />
      </div>
      <div className="container max-auto">
        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.endodontics.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceEndodonticsEN;

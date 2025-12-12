import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { seoData } from "@/data/seoData";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.en.servicePages.teethWhitening.title,
  description: seoData.en.servicePages.teethWhitening.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services/whitening",
  },
};

const ServiceWhiteningEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const teethWhiteningServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/en/services/whitening",
    serviceType: "Cosmetic Dentistry / Teeth Whitening",
    name: seoData.en.servicePages.teethWhitening.title,
    description:
      "Professional and safe teeth whitening using the latest methods. Quickly and effectively achieve a bright, radiant smile.",

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
        "Price depends on the desired shade and method required. Contact us for a precise quote and consultation.",
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
          __html: JSON.stringify(teethWhiteningServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.whitening.title} />
      </div>
      <div className="container max-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: t.whitening.description }}
            ></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceWhiteningEN;

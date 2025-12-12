import { Metadata } from "next";
import { servicesTextsData } from "@/data/servicesTexts";
import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.conservativeDentistry.title,
  description: seoData.en.servicePages.conservativeDentistry.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services/conservative-dentistry",
  },
};

const ServiceConservativeEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const conservativeDentistryServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/en/services/conservative-dentistry",
    serviceType: "Restorative Dentistry / Tooth Filling",
    name: seoData.en.servicePages.conservativeDentistry.title,
    description:
      "Professional tooth repair, cavity treatment, and filling using minimally invasive and modern techniques. Preservation of teeth and oral health.",

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
        "The price depends on the size of the cavity and the type of filling required. Contact us for a precise estimate and booking.",
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
          __html: JSON.stringify(conservativeDentistryServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.conservative.title} />
      </div>
      <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle1}
            </h2>
            <p>{t.conservative.description.text1}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle2}
            </h2>
            <p>{t.conservative.description.text2}</p>
          </div>
          <div>{/* <img src="" alt="" /> */}</div>
        </div>
      </div>
    </main>
  );
};

export default ServiceConservativeEN;

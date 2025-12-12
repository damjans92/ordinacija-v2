import { Metadata } from "next";
import { servicesTextsData } from "@/data/servicesTexts";
import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.prostheticSurgery.title,
  description: seoData.en.servicePages.prostheticSurgery.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/services/prosthetic-surgery",
  },
};
const ServiceProstetics = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const prostheticsServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/en/services/prosthetic-surgery",
    serviceType: "Dental Prosthetics / Crowns and Bridges",
    name: seoData.en.servicePages.prostheticSurgery.title,
    description:
      "Fabrication of all types of dental restorations: zirconia and porcelain fused to metal crowns, bridges, and complete/partial dentures. Functionality and aesthetics by the highest standards.",

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
        "The price of prosthetic work depends on the type of material (zirconia, metal, ceramic) and the scope of work. Contact us for a precise quote and consultation.",
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
          __html: JSON.stringify(prostheticsServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.prosthetics.title} />
      </div>
      <div className="container max-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle1}
            </h2>
            <p>{t.prosthetics.description.text1}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle2}
            </h2>
            <p>{t.prosthetics.description.text2}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.prosthetics.description.subTitle3}
            </h2>
            <p>{t.prosthetics.description.text3}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceProstetics;

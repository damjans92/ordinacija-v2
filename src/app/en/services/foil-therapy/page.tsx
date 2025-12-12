import ServiceHeading from "@/app/(sr)/terapijske-usluge/_components/ServiceHeading";
import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.orthodontics.title,
  description: seoData.en.servicePages.orthodontics.description,
  alternates: {
    canonical: "https://drsavkovic.rs/en/services/foil-therapy",
  },
};

const ServicePageEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  const orthodonticsServiceSchemaEn = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/en/services/foil-therapy",
    serviceType: "Orthodontic Treatment / Teeth and Jaw Alignment",
    name: seoData.en.servicePages.orthodontics.title,
    description:
      "Modern orthodontic treatment for children and adults, including fixed and removable braces, as well as clear aligners. Achieve a proper bite and aesthetic smile.",

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
        "The price of orthodontic treatment depends on the type of appliance and the duration of the therapy. Schedule a consultation for an accurate cost estimate.",
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
          __html: JSON.stringify(orthodonticsServiceSchemaEn),
        }}
      />
      <div className="container max-auto">
        <ServiceHeading title={t.ortodontics.title} />
      </div>
      <div className="container max-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.ortodontics.description.subTitle1}
            </h2>
            <p>{t.ortodontics.description.text1}</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.ortodontics.description.subTitle2}
            </h2>
            {t.ortodontics.description.text2.split("\n").map((line, idx) => (
              <p className="mt-4" key={idx}>
                {line}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePageEN;

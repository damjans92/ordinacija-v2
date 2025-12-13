import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.conservativeDentistry.title,
  description: seoData.sr.servicePages.conservativeDentistry.description,

  alternates: {
    canonical:
      "https://drsavkovic.rs/terapijske-usluge/konzervativna-stomatologija",
  },
};

const ServiceConservative = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const conservativeDentistryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/terapijske-usluge/konzervativna-stomatologija",
    serviceType: "Restorative Dentistry / Popravka Zuba",
    name: seoData.sr.servicePages.conservativeDentistry.title,
    description:
      "Profesionalna popravka zuba, lečenje karijesa i plombiranje uz minimalno invazivne metode. Očuvanje zuba i oralnog zdravlja.",

    provider: {
      "@type": "Dental",
      name: "Dr Savković Dental Office",
      url: "https://drsavkovic.rs/",
      image: "https://drsavkovic.rs/dr-savkovic-dental-logo.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Radovana Simića Cige 7, stan 4",
        addressLocality: "Beograd",
        addressRegion: "Srbija",
        postalCode: "11010",
        addressCountry: "RS",
      },
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "RSD",
      availability: "https://schema.org/InStock",
      description:
        "Cena zavisi od obima kvara i vrste plombe. Kontaktirajte nas za preciznu procenu i zakazivanje.",
    },

    areaServed: {
      "@type": "City",
      name: "Beograd",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(conservativeDentistryServiceSchema),
        }}
      />
      <div className="  max-auto">
        <PageHeader title={t.conservative.title} />
      </div>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <div className="group cursor-default">
              <div
                className="p-8 border-2 border-[#84b788] rounded-3xl 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-500 bg-white shadow-lg h-full"
              >
                <h3 className="text-2xl font-semibold text-[#84b788] mb-4">
                  {t.conservative.description.subTitle1}
                </h3>

                <p className="text-base lg:text-lg text-[#171717]/80 font-light leading-relaxed">
                  {t.conservative.description.text1}
                </p>
              </div>
            </div>

            <div className="group cursor-default">
              <div
                className="p-8 border-2 border-[#84b788] rounded-3xl 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-500 bg-white shadow-lg h-full"
              >
                <h3 className="text-2xl font-semibold text-[#84b788] mb-4">
                  {t.conservative.description.subTitle2}
                </h3>
                <p className="text-base lg:text-lg text-[#171717]/80 font-light leading-relaxed">
                  {t.conservative.description.text2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ServiceConservative;

import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.orthodontics.title,
  description: seoData.sr.servicePages.orthodontics.description,

  alternates: {
    canonical: "https://drsavkovic.rs/terapijske-usluge/terapija-folijama",
  },
};

const ServiceOrthodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const orthodonticsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/terapijske-usluge/terapija-folijama",
    serviceType: "Ortodontska Terapija / Ispravljanje Zuba i Vilice",
    name: seoData.sr.servicePages.orthodontics.title,
    description:
      "Moderna ortodontska terapija za decu i odrasle, uključujući fiksne i mobilne aparatiće, kao i prozirne folije (alignere). Postignite pravilan zagriz i estetski osmeh.",

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
        "Cena ortodontske terapije zavisi od vrste aparatića i trajanja tretmana. Zakažite konsultacije za preciznu procenu troškova.",
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
          __html: JSON.stringify(orthodonticsServiceSchema),
        }}
      />
      <PageHeader title={t.ortodontics.title} />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 lg:space-y-16">
            <div className="group cursor-default">
              <div
                className="p-12 lg:p-16 border-2 border-[#84b788] rounded-3xl 
                     hover:shadow-2xl hover:-translate-y-2 
                     transition-all duration-500 bg-white shadow-lg"
              >
                <h3 className="text-3xl font-semibold text-[#84b788] mb-8 text-center">
                  {t.ortodontics.description.subTitle1}
                </h3>

                <p className="text-lg lg:text-xl text-[#171717]/80 font-light leading-relaxed">
                  {t.ortodontics.description.text1}
                </p>
              </div>
            </div>

            <div className="group cursor-default">
              <div
                className="p-12 lg:p-16 border-2 border-[#84b788] rounded-3xl 
                     hover:shadow-2xl hover:-translate-y-2 
                     transition-all duration-500 bg-white shadow-lg"
              >
                <h3 className="text-3xl font-semibold text-[#84b788] mb-8 text-center">
                  {t.ortodontics.description.subTitle2}
                </h3>

                {t.ortodontics.description.text2
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-lg lg:text-xl text-[#171717]/80 font-light leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ServiceOrthodontics;

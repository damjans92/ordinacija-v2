import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.prostheticSurgery.title,
  description: seoData.sr.servicePages.prostheticSurgery.description,

  alternates: {
    canonical: "https://drsavkovic.rs/terapijske-usluge/protetska-hirurgija",
  },
};
const ServiceProstetics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const prostheticsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/terapijske-usluge/protetska-hirurgija",
    serviceType: "Zubna Protetika / Izrada Krunica i Mostova",
    name: seoData.sr.servicePages.prostheticSurgery.title,
    description:
      "Izrada svih vrsta zubnih nadoknada: bezmetalne i metalokeramičke krunice, mostovi i totalne/parcijalne proteze. Funkcionalnost i estetika po najvišim standardima.",

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
        "Cena protetskih radova zavisi od vrste materijala (cirkon, metal, keramika) i obima posla. Kontaktirajte nas za preciznu procenu i konsultacije.",
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
          __html: JSON.stringify(prostheticsServiceSchema),
        }}
      />
      <PageHeader title={t.prosthetics.title} />
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group cursor-default">
              <div
                className="p-8 border-2 border-[#84b788] rounded-3xl 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-500 bg-white shadow-lg h-full"
              >
                <h3 className="text-2xl font-semibold text-[#84b788] mb-4">
                  {t.prosthetics.description.subTitle1}
                </h3>
                <p className="text-base lg:text-lg text-[#171717]/80 font-light leading-relaxed">
                  {t.prosthetics.description.text1}
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
                  {t.prosthetics.description.subTitle2}
                </h3>
                <p className="text-base lg:text-lg text-[#171717]/80 font-light leading-relaxed">
                  {t.prosthetics.description.text2}
                </p>
              </div>
            </div>

            <div className="group cursor-default md:col-span-2">
              <div
                className="p-8 border-2 border-[#84b788] rounded-3xl 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-500 bg-white shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-[#84b788] mb-4">
                  {t.prosthetics.description.subTitle3}
                </h3>
                <p className="text-base lg:text-lg text-[#171717]/80 font-light leading-relaxed">
                  {t.prosthetics.description.text3}
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

export default ServiceProstetics;

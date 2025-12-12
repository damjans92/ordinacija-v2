import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

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
      <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32 lg:space-y-40">
            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle1}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text1}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle2}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text2}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.prosthetics.description.subTitle3}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.prosthetics.description.text3}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceProstetics;

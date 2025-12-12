import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.endodontics.title,
  description: seoData.sr.servicePages.endodontics.description,

  alternates: {
    canonical: "https://drsavkovic.rs/terapijske-usluge/endodoncija",
  },
};

const ServiceEndodontics = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const endodonticsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Endodoncija",
    name: seoData.sr.servicePages.endodontics.title,
    description:
      "Profesionalna endodoncija i terapija korenskog kanala zuba uz preciznu dijagnostiku, garantujući bezbolan i efikasan tretman sa ciljem očuvanja zuba.",

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
        "Cena zavisi od složenosti slučaja. Kontaktirajte nas za preciznu procenu i konsultacije.",
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
          __html: JSON.stringify(endodonticsServiceSchema),
        }}
      />
      <div className="max-auto">
        <PageHeader title={t.endodontics.title} />
      </div>
      <section className=" py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl leading-relaxed text-[#171717]/80 tracking-wide font-light">
              {t.endodontics.description}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ServiceEndodontics;

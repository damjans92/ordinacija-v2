import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.teethWhitening.title,
  description: seoData.sr.servicePages.teethWhitening.description,

  alternates: {
    canonical: "https://drsavkovic.rs/terapijske-usluge/izbeljivanje",
  },
};

const ServiceWhitening = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const teethWhiteningServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/terapijske-usluge/izbeljivanje",
    serviceType: "Estetska Stomatologija / Izbeljivanje Zuba",
    name: seoData.sr.servicePages.teethWhitening.title,
    description:
      "Profesionalno i bezbedno izbeljivanje zuba najnovijim metodama. Brzo i efikasno do blistavog osmeha.",

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
        "Cena zavisi od željene nijanse i potrebne metode. Kontaktirajte nas za preciznu procenu i konsultacije.",
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
          __html: JSON.stringify(teethWhiteningServiceSchema),
        }}
      />
      <PageHeader title={t.whitening.title} />
      <div className="container mx-auto py-12">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto group cursor-default">
              <div
                className="p-12 lg:p-16 border-2 border-[#84b788] rounded-3xl 
                   hover:shadow-2xl hover:-translate-y-2 
                   transition-all duration-500 bg-white shadow-lg"
              >
                <p
                  dangerouslySetInnerHTML={{ __html: t.whitening.description }}
                  className="text-lg lg:text-xl text-[#171717]/80 font-light leading-relaxed"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </main>
  );
};

export default ServiceWhitening;

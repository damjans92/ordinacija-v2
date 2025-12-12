import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

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
      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle1}
            </h2>
            <p>{t.conservative.description.text1}</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light font-outfit  mb-4 uppercase">
              {t.conservative.description.subTitle2}
            </h2>
            <p>{t.conservative.description.text2}</p>
          </div>
        </div>
      </div> */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <div className="group cursor-default">
              <div className="p-12 lg:p-16 border border-[#84b788]/20 rounded-3xl hover:border-[#84b788]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-px bg-[#84b788] mb-8" />
                <h2 className="text-4xl lg:text-5xl font-normal tracking-wider text-[#171717] mb-6">
                  {t.conservative.description.subTitle1}
                </h2>
                <p className="text-lg text-[#171717]/70 font-light">
                  {t.conservative.description.text1}
                </p>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="p-12 lg:p-16 border border-[#84b788]/20 rounded-3xl hover:border-[#84b788]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-px bg-[#84b788] mb-8" />
                <h2 className="text-4xl lg:text-5xl font-normal tracking-wider text-[#171717] mb-6">
                  {t.conservative.description.subTitle2}
                </h2>
                <p className="text-lg text-[#171717]/70 font-light">
                  {t.conservative.description.text2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceConservative;

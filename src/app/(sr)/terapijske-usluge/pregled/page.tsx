import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: seoData.sr.servicePages.examination.title,
  description: seoData.sr.servicePages.examination.description,

  alternates: {
    canonical: "https://drsavkovic.rs/terapijske-usluge/pregled",
  },
};

const ServiceAppointment = () => {
  const lang = "sr";
  const t = servicesTextsData[lang];

  const examinationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    url: "https://drsavkovic.rs/terapijske-usluge/pregled",
    serviceType: "Dental Examination and Diagnostic Imaging",
    name: seoData.sr.servicePages.examination.title,
    description:
      "Detaljan stomatološki pregled, radiografska dijagnostika i planiranje svih vrsta terapije. Prvi korak ka zdravom osmehu.",

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
        "Cena pregleda i dijagnostike dostupna na zahtev. Zakažite termin za detaljnu procenu Vašeg oralnog zdravlja.",
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
          __html: JSON.stringify(examinationServiceSchema),
        }}
      />
      <PageHeader title={t.examination.title} />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto group cursor-default">
            <div
              className="p-12 lg:p-16 border-2 border-[#84b788] rounded-3xl 
                   hover:shadow-2xl hover:-translate-y-2 
                   transition-all duration-500 bg-white shadow-lg"
            >
              <p className="text-lg lg:text-xl text-[#171717]/80 font-light leading-relaxed">
                {t.examination.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ServiceAppointment;

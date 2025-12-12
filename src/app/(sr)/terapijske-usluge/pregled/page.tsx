import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

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

      <section className=" py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl leading-relaxed text-[#171717]/80 tracking-wide font-light">
              {t.examination.description}
            </p>
          </article>
        </div>
      </section>
      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.examination.description}</p>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default ServiceAppointment;

import { servicesTextsData } from "@/data/servicesTexts";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

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

      <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32 lg:space-y-40">
            <article className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.ortodontics.description.subTitle1}
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0">
                {t.ortodontics.description.text1}
              </p>
            </article>

            <article className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-light uppercase tracking-widest text-[#171717] mb-8">
                {t.ortodontics.description.subTitle2}
              </h2>

              {t.ortodontics.description.text2.split("\n").map((line, idx) => (
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light max-w-4xl mx-auto lg:mx-0"
                  key={idx}
                >
                  {line}
                  <br />
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>
      {/* <section className="py-16 lg:py-18">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
              <article className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-widest text-[#171717] mb-8">
                  {t.ortodontics.description.subTitle1}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light">
                  {t.ortodontics.description.text1}
                </p>
              </article>

              <article className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-widest text-[#171717] mb-8">
                  {t.ortodontics.description.subTitle2}
                </h2>
                {t.ortodontics.description.text2
                  .split("\n")
                  .map((line, idx) => (
                    <p
                      className="text-lg lg:text-xl leading-relaxed text-[#171717]/80 font-light mt-4"
                      key={idx}
                    >
                      {line}
                      <br />
                    </p>
                  ))}
              </article>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="container mx-auto">
        <div className="grid  lg:grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
              {t.ortodontics.description.subTitle1}
            </h2>
            <p>{t.ortodontics.description.text1}</p>
          </div>
          <div>
            <h2 className="text-2xl   font-light font-outfit  mb-4 uppercase">
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
      </div> */}
    </main>
  );
};

export default ServiceOrthodontics;

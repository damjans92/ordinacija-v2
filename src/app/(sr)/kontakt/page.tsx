import Contact from "@/components/Contact";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.sr.contact.title,
  description: seoData.sr.contact.description,

  keywords: [
    "kontakt stomatolog Beograd",
    "radno vreme zubara Medaković",
    "adresa ordinacije Savković",
    "zakazivanje pregleda",
  ],

  alternates: {
    canonical: "https://drsavkovic.rs/kontakt",
  },

  openGraph: {
    title: seoData.sr.contact.title,
    description: seoData.sr.contact.description,
  },
};

const ContactPage = () => {
  const BASE_URL = "https://drsavkovic.rs";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE_URL}/kontakt`,
    mainContentOfPage: {
      "@type": "WebPageElement",
      name: "Mapa, Kontakt detalji i Podaci o Ordinaciji",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Contact headingAsMain={true} />
    </>
  );
};

export default ContactPage;

import Contact from "@/components/Contact";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.contact.title,
  description: seoData.en.contact.description,

  keywords: [
    "contact dentist Belgrade",
    "opening hours dentist Medaković",
    "Savković office address",
    "book appointment",
  ],

  alternates: {
    canonical: "https://drsavkovic.rs/en/contact",
  },

  openGraph: {
    title: seoData.en.contact.title,
    description: seoData.en.contact.description,
  },
};
const ContactPageEN = () => {
  const BASE_URL = "https://drsavkovic.rs";
  const EN_URL = `${BASE_URL}/en/contact`;

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: EN_URL,
    mainContentOfPage: {
      "@type": "WebPageElement",
      name: "Map, Contact Details, and Office Details",
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

export default ContactPageEN;

const SR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr Savković Dental Office",
  logo: "https://drsavkovic.rs/dr-savkovic-dental-logo.jpg",
  telephone: "+381691986900",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Radovana Simića Cige 7",
    addressLocality: "Beograd",
    addressRegion: "RS",
    postalCode: "11000",
    addressCountry: "RS",
  },
  url: "https://drsavkovic.rs",
  priceRange: "$$",
  inLanguage: "sr",
};

const EN_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr Savković Dental Office",
  logo: "https://drsavkovic.rs/dr-savkovic-dental-logo.jpg",
  telephone: "+381691986900",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Radovana Simića Cige 7",
    addressLocality: "Belgrade",
    addressRegion: "RS",
    postalCode: "11000",
    addressCountry: "RS",
  },
  url: "https://drsavkovic.rs/en",

  inLanguage: "en",
};

export const getLocalBusinessSchema = (locale: "sr" | "en") => {
  if (locale === "en") {
    return EN_SCHEMA;
  }
  return SR_SCHEMA;
};

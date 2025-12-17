import React from "react";
import About from "./About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.about.title,
  description: seoData.sr.about.description,
  keywords: [
    "Dr Savković stomatolog",
    "stomatološka ordinacija Medaković",
    "najbolji stomatolog Beograd",
    "iskusan zubar Beograd",
    "stomatološki pregled cena",
  ],
  alternates: {
    canonical: "https://drsavkovic.rs/o-osnivacu",
  },
  openGraph: {
    title: seoData.sr.about.title,
    description: seoData.sr.about.description,
  },
};

const AboutPage = () => {
  const BASE_URL = "https://drsavkovic.rs";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr Savković",
    jobTitle: "Stomatolog i Osnivač",
    image: `${BASE_URL}/osnivac.jpg`,
    url: `${BASE_URL}/o-osnivacu`,
    alumniOf: "Stomatološki fakultet, Univerzitet u Beogradu",
    sameAs: ["https://www.instagram.com/drsavkovic/"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PageHeader title={aboutData.sr.aboutTitle} />
      <About {...aboutData.sr} />
      <Contact />
    </main>
  );
};

export default AboutPage;

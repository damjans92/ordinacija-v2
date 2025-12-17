import React from "react";
import About from "@/app/(sr)/o-osnivacu/About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.en.about.title,
  description: seoData.en.about.description,
  keywords: [
    "Dr Savkovic dentist Belgrade",
    "dentist in Medakovic Belgrade",
    "dental clinic Belgrade Serbia",
    "best English speaking dentist Belgrade",
    "Dr Savkovic biography",
    "experienced dentist Belgrade",
  ],
  alternates: {
    canonical: "https://drsavkovic.rs/en/about",
  },
  openGraph: {
    title: seoData.en.about.title,
    description: seoData.en.about.description,
  },
};

const AboutPageEN = () => {
  const BASE_URL = "https://drsavkovic.rs";
  const EN_URL = `${BASE_URL}/en/about`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr Savković",
    jobTitle: "Dentist and Founder",
    image: `${BASE_URL}/osnivac.jpg`,
    url: EN_URL,
    alumniOf: "Faculty of Dentistry, University of Belgrade",
    sameAs: ["https://www.instagram.com/drsavkovic/"],
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PageHeader title={aboutData.en.aboutTitle} />
      <About {...aboutData.en} />
      <Contact />
    </main>
  );
};

export default AboutPageEN;

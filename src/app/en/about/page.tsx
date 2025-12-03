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
};

const AboutPageEN = () => {
  return (
    <main>
      <PageHeader title={aboutData.en.aboutTitle} />
      <About {...aboutData.en} />
      <Contact />
    </main>
  );
};

export default AboutPageEN;

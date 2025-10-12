import React from "react";
import About from "./About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.sr.about.title,
  description: seoData.sr.about.description,
};

const AboutPage = () => {
  return (
    <main>
      <About {...aboutData.sr} />
      <Contact />
    </main>
  );
};

export default AboutPage;

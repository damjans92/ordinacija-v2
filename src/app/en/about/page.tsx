import React from "react";
import About from "@/app/(sr)/o-osnivacu/About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Doctor",
  description: "DrSavkovic Dental Office ",
};

const AboutPageEN = () => {
  return (
    <main>
      <About {...aboutData.en} />
      <Contact />
    </main>
  );
};

export default AboutPageEN;

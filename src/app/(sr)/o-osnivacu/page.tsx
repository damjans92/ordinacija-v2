import React from "react";
import About from "./About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O osnivaču",
  description: "DrSavkovic Dental Office ",
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

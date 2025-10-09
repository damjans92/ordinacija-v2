import React from "react";
import About from "@/app/(sr)/o-osnivacu/About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { getMetadata } from "../../../../lib/getMetadata";

export const metadata = getMetadata("en", "about");

const AboutPageEN = () => {
  return (
    <main>
      <About {...aboutData.en} />
      <Contact />
    </main>
  );
};

export default AboutPageEN;

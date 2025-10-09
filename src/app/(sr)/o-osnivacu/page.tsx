import React from "react";
import About from "./About";
import { aboutData } from "@/data/about";
import Contact from "@/components/Contact";
import { getMetadata } from "../../../../lib/getMetadata";

export const metadata = getMetadata("sr", "about");

const AboutPage = () => {
  return (
    <main>
      <About {...aboutData.sr} />
      <Contact />
    </main>
  );
};

export default AboutPage;

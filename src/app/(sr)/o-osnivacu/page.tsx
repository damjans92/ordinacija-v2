import React from "react";
import About from "./About";
import { aboutData } from "@/data/about";

const AboutPage = () => {
  return <About {...aboutData.sr} />;
};

export default AboutPage;

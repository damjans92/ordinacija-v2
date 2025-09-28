import React from "react";
import About from "@/app/o-osnivacu/About";
import { aboutData } from "@/data/about";

const AboutPageEN = () => {
  return <About {...aboutData.en} />;
};

export default AboutPageEN;

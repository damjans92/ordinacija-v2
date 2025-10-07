import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "DrSavkovic Dental Office ",
};

const ContactPageEN = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPageEN;

import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "DrSavkovic Dental Office ",
};
const ContactPage = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPage;

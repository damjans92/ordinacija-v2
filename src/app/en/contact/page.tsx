import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.contact.title,
  description: seoData.en.contact.description,
};

const ContactPageEN = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPageEN;

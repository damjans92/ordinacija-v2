import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.sr.contact.title,
  description: seoData.sr.contact.description,
};

const ContactPage = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPage;

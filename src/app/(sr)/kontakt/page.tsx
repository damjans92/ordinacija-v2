import Contact from "@/components/Contact";
import React from "react";
import { getMetadata } from "../../../../lib/getMetadata";

export const metadata = getMetadata("sr", "kontakt");

const ContactPage = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPage;

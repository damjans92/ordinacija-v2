import Contact from "@/components/Contact";
import React from "react";
import { getMetadata } from "../../../../lib/getMetadata";

export const metadata = getMetadata("sr", "contact");

const ContactPageEN = () => {
  return <Contact headingAsMain={true} />;
};

export default ContactPageEN;

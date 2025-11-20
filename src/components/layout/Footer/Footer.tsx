"use client";
import { footerData } from "@/data/footer";
import { usePathname } from "next/navigation";
import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "sr";
  const t = footerData[lang];

  return (
    <footer className="bg-background2 text-black py-6 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <FooterLogo tData={t.logoAlt} />
          <FooterLinks tData={t.quickLinks} />
          <div className="lg:order-3"> </div>
          {/* <FooterSocial title={t.followUs} /> */}
        </div>
      </div>
      <div className="border-t-1 border-black pt-6">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Dr Savkovic Dental Office |{" "}
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

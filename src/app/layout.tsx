import type { Metadata } from "next";
import {
  Noto_Sans,
  Lora,
  Comfortaa,
  Quicksand,
  Outfit,
  Baskervville,
  Red_Hat_Display,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { headers } from "next/headers";
import LangUpdater from "@/components/LangUpdater";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-noto",
});

const lora = Lora({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-lora",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-comfortaa",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-quicksand",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-outfit",
});

const baskervvile = Baskervville({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-baskervville",
});

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-redhat",
});

export const metadata: Metadata = {
  title: {
    default: "Dr Savković Dental Office",
    template: "%s | Dr Savković Dental Office",
  },
  description:
    "Dr Savković Dental Office – stomatolog u Beogradu, zdrav osmeh za ceo život",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-site-locale") || "sr";

  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang="sr" href="https://drsavkovic.rs" />
        <link rel="alternate" hrefLang="en" href="https://drsavkovic.rs/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://drsavkovic.rs"
        />
      </head>
      <body
        className={`${redhat.variable} ${baskervvile.variable} ${outfit.variable} ${comfortaa.variable} ${quicksand.variable} ${notoSans.variable} ${lora.variable} antialiased`}
      >
        <LangUpdater />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

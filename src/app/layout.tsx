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
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { headers } from "next/headers";

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
  title: "DrSavkovic Dental Office",
  description: "DrSavkovic Dental Office",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-site-locale") || "sr";

  return (
    <html lang={locale}>
      <body
        className={`${redhat.variable} ${baskervvile.variable} ${outfit.variable} ${comfortaa.variable} ${quicksand.variable} ${notoSans.variable} ${lora.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

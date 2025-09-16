import type { Metadata } from "next";
import {
  Noto_Sans,
  Lora,
  Comfortaa,
  Quicksand,
  Outfit,
  Baskervville,
} from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/home/Contact";

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

export const metadata: Metadata = {
  title: "DrSavkovic Dental Office",
  description: "DrSavkovic Dental Office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baskervvile.variable} ${outfit.variable} ${comfortaa.variable} ${quicksand.variable} ${notoSans.variable} ${lora.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}

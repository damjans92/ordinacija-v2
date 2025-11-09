import type { Metadata } from "next";
import { Comfortaa, Red_Hat_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { headers } from "next/headers";
import LangUpdater from "@/components/LangUpdater";
import { Analytics } from "@/components/Analytics";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-comfortaa",
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
  const rawLocale = (await headers()).get("x-site-locale");
  const locale: "sr" | "en" = rawLocale === "en" ? "en" : "sr";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${redhat.variable} ${comfortaa.variable}   antialiased`}
      >
        {process.env.NODE_ENV === "production" && <Analytics />}
        <LangUpdater />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

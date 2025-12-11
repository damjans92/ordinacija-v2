import type { Metadata } from "next";
import { Comfortaa, Red_Hat_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { headers } from "next/headers";
import LangUpdater from "@/components/LangUpdater";
import { Analytics } from "@/components/Analytics";
import { getLocalBusinessSchema } from "@/data/schema";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Dr Savković Dental Office | Stomatolog Medaković, Beograd",
      template: "%s | Dr Savković Dental Office",
    },
    description:
      "Dr Savković Dental Office – Vaš pouzdani stomatolog na Medakoviću, Beograd. Nudimo sve usluge moderne stomatologije: implanti, protetika, estetska stomatologija.",
    authors: [{ name: "Dr Savković" }, { name: "Dr Savković Dental Office" }],
    creator: "Dr Savković Dental Office",
    keywords: [
      "stomatolog Medaković",
      "zubari Beograd",
      "implanti Medaković",
      "protetika",
      "estetska stomatologija",
    ],
    alternates: {
      canonical: `https://drsavkovic.rs`,
    },
    openGraph: {
      title: "Dr Savković Dental Office | Stomatolog Medaković, Beograd",
      description:
        "Dr Savković Dental Office – Vaš pouzdani stomatolog na Medakoviću, Beograd. Nudimo sve usluge moderne stomatologije: implanti, protetika, estetska stomatologija.",
      url: `https://drsavkovic.rs`,
      siteName: "Dr Savković Dental Office",
      images: [
        {
          url: `https://drsavkovic.rs/stomatolog-beograd-open-graph.jpg`,
          width: 1200,
          height: 630,
          alt: "Dr Savković Dental Office – Stomatolog Medaković, Beograd",
        },
      ],
      locale: "sr_RS",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Dr Savković Dental Office | Stomatolog Beograd | Implanti & Protetika",
      description:
        "Dr Savković Dental Office – Vaš pouzdani stomatolog na Medakoviću, Beograd. Nudimo sve usluge moderne stomatologije: implanti, protetika, estetska stomatologija.",
      images: [`https://drsavkovic.rs/stomatolog-beograd-open-graph.jpg`],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawLocale = (await headers()).get("x-site-locale");
  const locale: "sr" | "en" = rawLocale === "en" ? "en" : "sr";

  const currentSchema = getLocalBusinessSchema(locale);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(currentSchema) }}
        />
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

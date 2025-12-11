import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Dr Savković Dental Office | Dentist Medaković, Belgrade",
      template: "%s | Dr Savković Dental Office",
    },
    description:
      "Dr Savković Dental Office – Your trusted dentist in Medaković, Belgrade. We offer all modern dentistry services: implants, prosthetics, aesthetic dentistry.",
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
      canonical: `https://drsavkovic.rs/en"}`,
    },
    openGraph: {
      title: "Dr Savković Dental Office | Dentist Medaković, Belgrade",
      description:
        "Dr Savković Dental Office – Your trusted dentist in Medaković, Belgrade. We offer all modern dentistry services: implants, prosthetics, aesthetic dentistry.",
      url: `https://drsavkovic.rs/en`,
      siteName: "Dr Savković Dental Office",
      images: [
        {
          url: `https://drsavkovic.rs/stomatolog-beograd-open-graph.jpg`,
          width: 1200,
          height: 630,
          alt: "Dr Savković Dental Office – Dentist Medaković, Belgrade",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Dr Savković Dental Office | Dentist Belgrade | Implants & Prosthetics",
      description:
        "Dr Savković Dental Office – Your trusted dentist in Medaković, Belgrade. We offer all modern dentistry services: implants, prosthetics, aesthetic dentistry.",
      images: [`https://drsavkovic.rs/stomatolog-beograd-open-graph.jpg`],
    },
  };
}

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

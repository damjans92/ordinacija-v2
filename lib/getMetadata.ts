import type { Metadata } from "next";
import { seoData } from "@/data/seoData";

export function getMetadata(lang: "sr" | "en", path: string): Metadata {
  const getNested = (obj: any, keyPath: string) =>
    keyPath.split(".").reduce((acc, key) => acc?.[key], obj);

  const data = getNested(seoData[lang], path);

  if (!data) {
    console.warn(`SEO data not found for path: ${path}`);
    return {
      title: "Dr Savković Dental Office",
      description:
        "Stomatolog u Beogradu – zdrav osmeh za ceo život. Ordinacija Dr Savković pruža vrhunsku stomatološku negu.",
    };
  }

  return {
    title: `${data.title}`,
    description: data.description,
  };
}

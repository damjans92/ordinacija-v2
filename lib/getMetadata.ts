import type { Metadata } from "next";
import { seoData } from "@/data/seoData";

export function getMetadata(lang: "sr" | "en", path: string): Metadata {
  const getNested = (obj: unknown, keyPath: string) =>
    keyPath
      .split(".")
      .reduce(
        (acc, key) =>
          acc && typeof acc === "object" ? (acc as any)[key] : undefined,
        obj
      );

  const data = getNested(seoData[lang], path);

  if (!data) {
    console.warn(`SEO data not found for path: ${path}`);
    return {
      title: "Dr Savković Dental Office",
      description:
        "Stomatolog u Beogradu – zdrav osmeh za ceo život. Ordinacija Dr Savković pruža vrhunsku stomatološku negu.",
    };
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "title" in data &&
    "description" in data
  ) {
    return {
      title: `${(data as { title: string }).title}`,
      description: (data as { description: string }).description,
    };
  } else {
    return {
      title: "Dr Savković Dental Office",
      description:
        "Stomatolog u Beogradu – zdrav osmeh za ceo život. Ordinacija Dr Savković pruža vrhunsku stomatološku negu.",
    };
  }
}

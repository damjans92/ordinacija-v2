import type { Metadata } from "next";
import { seoData } from "@/data/seoData";

// Tipovi
type Lang = keyof typeof seoData;

type SeoEntry = {
  title: string;
  description: string;
};

// Tipizirana funkcija za do 3 nivoa ugnježdenja
function getNested(
  obj: (typeof seoData)[Lang],
  keyPath: string
): SeoEntry | undefined {
  const keys = keyPath.split("."); // npr. "home", "pages.usluge", "pages.contact.subpage"

  if (keys.length === 1) {
    return obj[keys[0] as keyof typeof obj] as SeoEntry | undefined;
  } else if (keys.length === 2) {
    const first = obj[keys[0] as keyof typeof obj] as
      | Record<string, SeoEntry>
      | undefined;
    return first?.[keys[1]];
  } else if (keys.length === 3) {
    const first = obj[keys[0] as keyof typeof obj] as unknown as
      | Record<string, Record<string, SeoEntry>>
      | undefined;
    const second = first?.[keys[1]];
    return second?.[keys[2]];
  }

  return undefined;
}

// Funkcija koja vraća Metadata
export function getMetadata(lang: Lang, path: string): Metadata {
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
    title: data.title,
    description: data.description,
  };
}

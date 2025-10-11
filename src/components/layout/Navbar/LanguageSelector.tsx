"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeMap } from "@/../lib/routeMap";

export default function LanguageSelector() {
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const currentLang = isEnglish ? "en" : "sr";
  const targetLang = isEnglish ? "sr" : "en";

  // pokušavamo da nađemo koji je key trenutne stranice
  const currentKey = Object.keys(routeMap[currentLang]).find(
    (key) => routeMap[currentLang][key] === pathname
  );

  // ako smo našli parnu rutu, koristimo je
  const targetPath = currentKey
    ? routeMap[targetLang][currentKey]
    : routeMap[targetLang].home; // fallback ako ne postoji match

  return (
    <Link href={targetPath} className="px-3 py-1 border rounded text-xs">
      {targetLang.toUpperCase()}
    </Link>
  );
}

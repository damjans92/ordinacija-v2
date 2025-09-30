"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

type Lang = "sr" | "en";

const LangContext = createContext<Lang>("sr");

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "sr";

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

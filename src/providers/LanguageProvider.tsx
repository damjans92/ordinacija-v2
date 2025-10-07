"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Lang = "sr" | "en";

const LangContext = createContext<Lang>("sr");

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>("sr");

  useEffect(() => {
    if (!pathname) return;
    setLang(pathname.startsWith("/en") ? "en" : "sr");
  }, [pathname]);

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

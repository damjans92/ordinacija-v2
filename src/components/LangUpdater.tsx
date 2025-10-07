"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangUpdater() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "sr";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}

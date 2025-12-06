// components/ui/PageHeader.tsx
"use client";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-[#fffdf9] overflow-hidden py-16 lg:py-18">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#84b788]/6 via-[#84b788]/3 to-[] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-[#171717]/50 mb-16"
          >
            <Breadcrumbs />
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl  font-light uppercase tracking-[0.15em] text-[#171717] leading-tight text-center"
          >
            {title.split("\n").map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line
                  .trim()
                  .split("")
                  .map((letter, i) => {
                    const globalIndex =
                      title.split("\n").slice(0, lineIndex).join("").length + i;

                    return (
                      <motion.span
                        key={globalIndex}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + globalIndex * 0.025,
                          ease: "easeOut",
                        }}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    );
                  })}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="mt-16 w-32 lg:w-48 h-px bg-[#84b788] mx-auto origin-left"
          />

          <div className="hidden lg:block mt-4 w-48 h-px bg-[#84b788]/20 mx-auto blur-sm" />
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" /> */}
    </section>
  );
}

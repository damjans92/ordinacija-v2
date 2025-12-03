"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/en") return null;

  const isEn = pathname.startsWith("/en");
  const homeLabel = isEn ? "Home" : "Početna";
  const homeHref = isEn ? "/en" : "/";

  const segments = pathname
    .replace(/^\/en\/?/, "/")
    .split("/")
    .filter(Boolean);
  return (
    // <nav className=" text-sm uppercase mt-4 ml-4 ">
    //   <ol className="flex items-center space-x-2">
    //     {segments.length > 0 && (
    //       <li>
    //         <Link href="/" className="hover:underline">
    //           Home
    //         </Link>
    //       </li>
    //     )}

    //     {segments.map((segment, idx) => {
    //       const href = "/" + segments.slice(0, idx + 1).join("/");
    //       console.log("segment", segment);

    //       let label = segment.includes("-")
    //         ? segment.replace(/-/g, " ")
    //         : segment;

    //       if (segment.includes("terapijske-usluge")) {
    //         label = "usluge";
    //       }
    //       if (segment.includes("konzervativna-stomatologija")) {
    //         label = "konzervativna";
    //       }
    //       if (segment.includes("terapija-donjovilicnog-zgloba")) {
    //         label = "terapija d.v. zgloba";
    //       }

    //       return (
    //         <li key={idx} className="flex items-center">
    //           <span className="mx-2">/</span>
    //           <Link href={href} className="hover:underline tracking-wider">
    //             {label}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ol>
    // </nav>
    <nav className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-[#171717]/60 mb-12">
      {/* 1. Početna / Home */}
      <Link href={homeHref} className="hover:text-[#84b788] transition">
        {homeLabel}
      </Link>
      <BiChevronRight className="w-4 h-4 text-[#84b788]" />

      {/* 2. Ostali segmenti */}
      {segments.map((segment, i) => {
        const isLast = i === segments.length - 1;
        const href =
          (isEn ? "/en" : "") + "/" + segments.slice(0, i + 1).join("/");

        let label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
        if (segment === "terapijske-usluge")
          label = isEn ? "Services" : "Usluge";

        return (
          <div key={i} className="flex items-center">
            {isLast ? (
              <span className="text-[#171717] font-medium">{label}</span>
            ) : (
              <Link href={href} className="hover:text-[#84b788] transition">
                {label}
              </Link>
            )}
            {i < segments.length - 1 && (
              <BiChevronRight className="w-4 h-4 mx-2 text-[#84b788]" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

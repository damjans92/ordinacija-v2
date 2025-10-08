"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((seg) => seg);
  return (
    <nav className=" text-sm uppercase mt-4 ml-4 ">
      <ol className="flex items-center space-x-2">
        {segments.length > 0 && (
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
        )}

        {segments.map((segment, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          console.log("segment", segment);

          const label = segment.includes("-")
            ? segment.replace(/-/g, " ")
            : segment;

          return (
            <li key={idx} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((seg) => seg);
  console.log(segments);
  return (
    <nav className="text-sm font-extralight text-gray-600 uppercase mt-4 ml-4">
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
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);

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

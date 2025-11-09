import Link from "next/link";
import React from "react";
import { NavbarLinksProps } from "../../../../lib/types";

const NavbarLinksLeft = ({ navLinks, pathname }: NavbarLinksProps) => {
  return (
    <nav className="hidden lg:flex flex-1 font-extrabold text-sm tracking-widest ">
      <ul className="flex items-center justify-center gap-8 uppercase col-">
        {navLinks.slice(0, 3).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`pb-1 hover:border-b-1 hover:border-black ${
                pathname === link.href ? "border-b-2 border-black" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinksLeft;

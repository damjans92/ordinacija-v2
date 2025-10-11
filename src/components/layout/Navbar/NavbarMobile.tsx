import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { NavbarLink } from "../../../../lib/types";

interface NavbarLinksProps {
  navLinks: NavbarLink[];
  pathname: string;
  navOpen: boolean;
  onClose: () => void;
}

const NavbarMobile = ({
  navLinks,
  pathname,
  navOpen,
  onClose,
}: NavbarLinksProps) => {
  return (
    <div
      className={`flex flex-col fixed top-[135px] w-full bg-[var(--background2)] min-h-full overflow-y-auto z-50 ${navOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 ease-in-out
      `}
    >
      <nav className="flex w-full justify-center">
        <ul className="flex flex-col w-full h-full border-t-1 text-center font-quicksand font-bold text-md tracking-widest uppercase">
          {navLinks.map((link) => (
            <li key={link.href} className="py-6 border-b border-black">
              <Link
                href={link.href}
                onClick={onClose}
                className={`${pathname === link.href ? "text-green-600" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center py-6">
        <Link href="#">
          <FaInstagram className="w-6 h-6" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobile;

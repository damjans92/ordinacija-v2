import Image from "next/image";
import Link from "next/link";
import React from "react";
import { routeMap } from "../../../../lib/routeMap";
import { aboutData } from "@/data/about";

interface LogoProps {
  lang: "sr" | "en";
}

const Logo = ({ lang }: LogoProps) => {
  return (
    <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
      <Link href={routeMap[lang].home}>
        <Image
          src="/LogoNewBlack.svg"
          alt={aboutData[lang].logoAlt}
          width={250} // base size
          height={60}
          className="w-42 sm:w-45 md:w-45 lg:w-58 h-auto"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;

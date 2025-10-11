import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <div className="order-4 lg:order-1">
      <div className="py-12 lg:py-0 text-5xl lg:text-7xl font-extrabold  text-center">
        <Image
          src="/LogoNewBlack.svg"
          alt="Logo"
          width={220}
          height={40}
          className="w-40 md:w-45 lg:w-48 h-auto mx-auto"
          priority
        />
      </div>
    </div>
  );
};

export default FooterLogo;

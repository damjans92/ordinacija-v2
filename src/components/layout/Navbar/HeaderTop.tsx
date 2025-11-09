import React from "react";
import LanguageSelector from "./LanguageSelector";

const HeaderTop = () => {
  return (
    <div className="bg-black flex justify-center py-2 lg:py-4 text-white font-redhat text-sm font-medium tracking-widest">
      <div className="container flex justify-between items-center">
        <div className="flex-1" />

        <span className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-xs md:text-sm">
          RADOVANA SIMIĆA CIGE 7, BEOGRAD
        </span>

        <div className="flex justify-end w-fit">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

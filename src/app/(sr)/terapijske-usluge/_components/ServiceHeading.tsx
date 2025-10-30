import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

const ServiceHeading = ({ title }: { title: string }) => {
  return (
    <>
      <div className="w-full md:flex-1 text-gray-600 mb-12">
        <Breadcrumbs />
      </div>
      <h1 className="uppercase text-2xl md:text-4xl flex justify-center items-center font-extralight font-outfit h-[112px] md:h-[160px]  mb-4 mt-4 md:leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
        {title.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </>
  );
};

export default ServiceHeading;

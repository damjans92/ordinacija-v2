"use client";
import React, { useState } from "react";

type OfficeProps = {
  title: string;
  location: string;
  description: string;
};

const Office = ({ title, location, description }: OfficeProps) => {
  const [showControls, setShowControls] = useState(false);

  return (
    <section id="office" className="py-12 bg-background2 text-black border-t">
      <div className="container mx-auto pt-10">
        <div className="text-center">
          <h2 className="uppercase pb-7 md:text-4xl tracking-[7px] ">
            {title}
          </h2>
          <p className="">{location}</p>
        </div>
        <div
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            loop
            muted
            playsInline
            controls={showControls}
            className="w-full h-full object-cover mt-6 border-10 border-black"
          >
            <source src="/office.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-10 px-4 lg:px-20">
          <p className="font-redhat font-extralight tracking-[4px] py-6 text-center uppercase">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Office;

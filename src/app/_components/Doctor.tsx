import Link from "next/link";
import React from "react";

type DoctorProps = {
  title: string;
  description: string;
  moreBtn: {
    text: string;
    href: string;
  };
};

const Doctor = ({ title, description, moreBtn }: DoctorProps) => {
  return (
    <section id="doctor" className="container mx-auto py-12">
      <div className="flex flex-wrap">
        <div className="order-2 lg:order-1 lg:w-5/12 flex flex-col md:text-center lg:justify-center lg:items-center">
          <h2 className="uppercase pb-7 text-2xl lg:text-4xl tracking-[7px]">
            {title.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="pb-6 md:px-10">{description}</p>
          <Link
            href={moreBtn.href}
            className="uppercase tracking-widest pb-6 link-underline"
          >
            {moreBtn.text}
          </Link>
        </div>
        <div className="order-1 lg:order-2 lg:w-7/12 mb-6 lg:mb-0 bg-gray-400 h-full w-full border-1">
          <img src="/drsavkovic-wide.jpg" alt="" className="grayscale" />
        </div>
      </div>
    </section>
  );
};

export default Doctor;

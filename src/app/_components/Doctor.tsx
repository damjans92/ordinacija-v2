import Link from "next/link";
import React from "react";

const Doctor = () => {
  return (
    <section id="doctor" className="container mx-auto py-12">
      <div className="flex flex-wrap">
        <div className="order-2 lg:order-1 lg:w-5/12 flex flex-col md:text-center lg:justify-center lg:items-center">
          <h2 className="uppercase pb-7 text-2xl lg:text-4xl font-light tracking-widest">
            Vaš <br />
            Stomatolog
          </h2>
          <p className="pb-6 md:px-10">
            Diplomirao na Stomatološkom fakultetu Univerziteta u Beogradu 2013.
            godine, a 2014. nakon završenog staža otpočinje rad u privatnoj
            praksi. Usavršava se u oblasti endodontologije, konzervativne
            stomatologije i stomatološke protetike. Paralelno sa radom učestvuje
            u sertifikovanim kursevima domaćih i stranih predavača iz pomenutih
            oblasti, kao i iz oblasti terapije poremećaja u radu donjoviličnog
            zgloba i estetske medicine uz primenu hijaluronskih preparata.
          </p>
          <Link
            href="/about"
            className="uppercase tracking-widest pb-6 link-underline font-light"
          >
            Pročitaj više
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

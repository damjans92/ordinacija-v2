import { servicesTextsData } from "@/data/servicesTexts";
import { Metadata } from "next";
import React from "react";
import { seoData } from "@/data/seoData";

export const metadata: Metadata = {
  title: seoData.en.servicePages.endodontics.title,
  description: seoData.en.servicePages.endodontics.description,
};
const ServiceEndodonticsEN = () => {
  const lang = "en";
  const t = servicesTextsData[lang];

  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="uppercase text-4xl font-extralight font-outfit mb-12 leading-14 tracking-widest bg-foreground2 text-white text-center p-6">
          {t.endodontics.title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        {/* <div className="py-10"></div> */}

        <div className="grid grid-cols-3 gap-4 p-10 px-8 border-1 border-foreground2">
          <div>
            <p>{t.endodontics.description}</p>
          </div>

          <div>
            <img src="/Infekcija-zuba.jpg" alt="Infekcija zuba" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceEndodonticsEN;

import React from "react";
import Hero from "../../../components/Hero";
import Accordion from "@/app/(sr)/najcesca-pitanja/Accordion";
import { faqsData } from "@/data/faqs";

const FaqsPage = () => {
  return (
    <main>
      <Hero {...faqsData.sr.hero} title={faqsData.sr.hero.title} />
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-20 px-6 py-12">
            <div className="lg:flex-1">
              <Accordion questions={faqsData.sr.questions} />
            </div>
            <div className="lg:flex-1 py-4">
              <h3 className="uppercase mb-6 pl-6 font-light">
                {faqsData.sr.doctor.title}
              </h3>
              <div>
                <p className="pl-6">{faqsData.sr.doctor.description}</p>
              </div>
              <div className="flex-1 items-center justify-center p-6">
                <img
                  src="/osnivac.jpg"
                  alt="Dr Savkovic"
                  className="w-full grayscale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqsPage;

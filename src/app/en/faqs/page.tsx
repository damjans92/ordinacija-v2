import Accordion from "@/app/(sr)/najcesca-pitanja/Accordion";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { faqsData } from "@/data/faqs";
import React from "react";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.en.faq.title,
  description: seoData.en.faq.description,
};

const FAQsPage = () => {
  return (
    <main>
      {/* <Hero {...faqsData.en.hero} title={faqsData.en.hero.title} /> */}
      <PageHeader title={faqsData.en.hero.title} />
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-20 px-6 py-12">
            <div className="lg:flex-1">
              <Accordion questions={faqsData.en.questions} />
            </div>
            <div className="lg:flex-1 py-4">
              <h3 className="uppercase mb-6 pl-6 font-light">
                {faqsData.en.doctor.title}
              </h3>
              <div>
                <p className="pl-6">{faqsData.en.doctor.description}</p>
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
      <Contact />
    </main>
  );
};

export default FAQsPage;

import Accordion from "@/app/(sr)/najcesca-pitanja/Accordion";
import Contact from "@/components/Contact";
import { faqsData } from "@/data/faqs";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import PageHeader from "@/components/PageHeader";

const BASE_URL = "https://drsavkovic.rs";
const EN_URL = `${BASE_URL}/en/faqs`;

export const metadata: Metadata = {
  title: seoData.en.faq.title,
  description: seoData.en.faq.description,

  keywords: [
    "dentist faq",
    "dental implants questions",
    "prosthetics answers",
    "dental office questions",
  ],

  alternates: {
    canonical: EN_URL,
  },

  openGraph: {
    title: seoData.en.faq.title,
    description: seoData.en.faq.description,
  },
};
const FAQsPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.en.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

import Accordion from "@/app/(sr)/najcesca-pitanja/Accordion";
import { faqsData } from "@/data/faqs";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import PageHeader from "@/components/PageHeader";

const BASE_URL = "https://drsavkovic.rs";
export const metadata: Metadata = {
  title: seoData.sr.faq.title,
  description: seoData.sr.faq.description,

  keywords: [
    "faq stomatolog",
    "najčešća pitanja implanti",
    "pitanja o protetici",
    "stomatološki odgovori",
  ],

  alternates: {
    canonical: `${BASE_URL}/najcesca-pitanja`,
  },

  openGraph: {
    title: seoData.sr.faq.title,
    description: seoData.sr.faq.description,
  },
};

const FaqsPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.sr.questions.map((item) => ({
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
      <PageHeader title={faqsData.sr.hero.title} />
      <section className="lg:py-16">
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
      <Contact />
    </main>
  );
};

export default FaqsPage;

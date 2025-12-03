import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { reviewsData } from "@/data/reviews";
import React from "react";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import ReviewsGrid from "@/app/(sr)/utisci/_components/ReviewGrid";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.en.testimonials.title,
  description: seoData.en.testimonials.description,
};

const TestimonialsPageEN = () => {
  const lang = "en";
  const t = reviewsData[lang];

  return (
    <main>
      {/* <Hero {...t.hero} imageSrc="/banner-home3-1.jpg" /> */}
      <PageHeader title={t.hero.title} />
      <section id="reviews" className="lg:py-16 lg:pb-20">
        <div className="container mx-auto">
          <ReviewsGrid reviews={t.reviewsList} />
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default TestimonialsPageEN;

import React from "react";
import Hero from "../../../components/Hero";
import { reviewsData } from "@/data/reviews";
import ReviewCard from "./_components/ReviewCard";
import Contact from "@/components/Contact";

import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import ReviewsGrid from "./_components/ReviewGrid";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.testimonials.title,
  description: seoData.sr.testimonials.description,
};

const TestimonialsPage = () => {
  const lang = "sr";
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

export default TestimonialsPage;

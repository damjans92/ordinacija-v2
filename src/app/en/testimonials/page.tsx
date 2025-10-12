import ReviewCard from "@/app/(sr)/utisci/_components/ReviewCard";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { reviewsData } from "@/data/reviews";
import React from "react";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seoData.en.testimonials.title,
  description: seoData.en.testimonials.description,
};

const TestimonialsPageEN = () => {
  return (
    <main>
      <Hero {...reviewsData.en.hero} imageSrc="/banner-home2.jpg" />
      <section id="reviews">
        <div className="container mx-auto ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
            {reviewsData.en.reviewsList.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default TestimonialsPageEN;

import React from "react";
import Hero from "../../../components/Hero";
import { reviewsData } from "@/data/reviews";
import ReviewCard from "./_components/ReviewCard";
import Contact from "@/components/Contact";

const ReviewsPage = () => {
  const lang = "sr";
  const t = reviewsData[lang];

  return (
    <main>
      <Hero {...t.hero} imageSrc="/banner-home2.jpg" />
      <section id="reviews" className="lg:py-16 lg:pb-20">
        <div className="container mx-auto ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
            {t.reviewsList.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ReviewsPage;

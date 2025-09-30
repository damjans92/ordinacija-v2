import ReviewCard from "@/app/(sr)/utisci/_components/ReviewCard";
import Hero from "@/components/Hero";
import { reviewsData } from "@/data/reviews";
import React from "react";

const ReviewsPageEN = () => {
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
    </main>
  );
};

export default ReviewsPageEN;

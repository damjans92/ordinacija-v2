import React from "react";
import Hero from "../../../components/Hero";
import { reviewsData } from "@/data/reviews";
import ReviewCard from "./_components/ReviewCard";

const ReviewsPage = () => {
  return (
    <main>
      <Hero
        {...reviewsData.sr.hero}
        title="Utisci"
        imageSrc="/banner-home2.jpg"
      />
      <section id="reviews">
        <div className="container mx-auto ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
            {reviewsData.sr.reviewsList.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;

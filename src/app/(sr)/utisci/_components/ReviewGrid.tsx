"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "../../../../../lib/types";

interface ReviewsGridProps {
  reviews: Review[];
}

const ReviewsGrid = ({ reviews }: ReviewsGridProps) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
        {reviews.map((review) => (
          <ReviewCard
            review={review}
            key={review.id}
            onClick={() => setSelectedReview(review)}
          />
        ))}
      </div>

      {selectedReview && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white p-8 rounded-2xl max-w-lg w-full relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {selectedReview.author}
            </h2>
            <p>{selectedReview.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsGrid;

import React from "react";
import { Review } from "../../../../../lib/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col justify-between border-1 p-10">
      <p>{review.text}</p>
      <span className="uppercase">{review.author}</span>
    </div>
  );
};

export default ReviewCard;

import React from "react";
import { Review } from "../../../../../lib/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-col justify-between border-1 p-10">
      <p className="mb-3">{truncateText(review.text, 230)}</p>
      <span className="uppercase">{review.author}</span>
    </div>
  );
};

export default ReviewCard;

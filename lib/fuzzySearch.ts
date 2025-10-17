import { faqsData } from "@/data/faqs";
import stringSimilarity from "string-similarity";

interface FaqItem {
  question: string;
  answer: string;
}

interface BestMatch {
  item: FaqItem | null;
  rating: number;
}

const NO_MATCH_MESSAGE = {
  sr: "Nisam siguran na šta mislite, pokušajte da precizirate pitanje.",
  en: "I am not sure what you mean, please try to specify your question.",
};

export function findBestAnswer(userQuestion: string, lang: "sr" | "en") {
  const allFaqs = faqsData[lang].questions;
  let bestMatch: BestMatch = {
    item: null,
    rating: 0,
  };

  if (!allFaqs || allFaqs.length === 0) {
    return NO_MATCH_MESSAGE[lang];
  }

  for (const item of allFaqs) {
    // Calculate similarity for both the question and the answer
    const questionRating = stringSimilarity.compareTwoStrings(
      userQuestion,
      item.question
    );
    const answerRating = stringSimilarity.compareTwoStrings(
      userQuestion,
      item.answer
    );

    // Take the maximum of the two scores for the best possible match
    const combinedRating = Math.max(questionRating, answerRating);

    // Update the best match if the current one is better
    if (combinedRating > bestMatch.rating) {
      bestMatch = { item: item, rating: combinedRating };
    }
  }

  // Return the best match if its rating exceeds a certain threshold
  // A threshold of 0.3 is often a good starting point but can be adjusted.
  if (bestMatch.rating > 0.3) {
    return bestMatch.item?.answer || NO_MATCH_MESSAGE[lang];
  }

  // Return the language-specific "no match" message
  return NO_MATCH_MESSAGE[lang];
}

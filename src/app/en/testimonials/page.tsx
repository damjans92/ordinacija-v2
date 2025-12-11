import Contact from "@/components/Contact";
import { reviewsData } from "@/data/reviews";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import ReviewsGrid from "@/app/(sr)/utisci/_components/ReviewGrid";
import PageHeader from "@/components/PageHeader";

const BASE_URL = "https://drsavkovic.rs";
const EN_URL = `${BASE_URL}/en/testimonials`;

export const metadata: Metadata = {
  title: seoData.en.testimonials.title,
  description: seoData.en.testimonials.description,

  keywords: [
    "patient testimonials dentist",
    "google reviews dentist Belgrade",
    "implant patient experiences",
    "dentist recommendations",
  ],

  alternates: {
    canonical: EN_URL,
  },

  openGraph: {
    title: seoData.en.testimonials.title,
    description: seoData.en.testimonials.description,
  },
};
const TestimonialsPageEN = () => {
  const lang = "en";
  const t = reviewsData[lang];

  const sampleReview = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Dentist",
      name: "Dr Savković Dental Office",
      url: BASE_URL,
    },
    author: {
      "@type": "Person",
      name: "Momčilo M.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    reviewBody:
      "I’m residing between Canada and Middle East. I've just had an unforgettable experience with Dr. Savković, a dentist I found by chance at Radovana Simica Cige 7, apartment 4, near the apartment I rented for a few days. I can’t recommend him highly enough! I had a broken tooth requiring immediate attention. Dr. Savković handled the emergency with remarkable expertise, providing top-notch care at an incredibly reasonable cost for an urgent visit. I showed up without calling, simply buzzing his office/apartment, and he kindly explained that it’s better to reach him by phone to schedule an appointment. After expertly treating my tooth, he took an additional 10 minutes to thoroughly discuss my periodontitis condition and offer insightful advice on potential implants in Belgrade. His knowledge, compassion, and genuine care made me feel truly valued. Dr. Savković is not only an exceptional dentist but also an incredible person. Outstanding service—highly recommend!",
    datePublished: "2023-11-20",
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData.en.testimonials.title,
    description: seoData.en.testimonials.description,
    mainEntity: {
      "@type": "AggregateRating",
      itemReviewed: {
        "@type": "Dentist",
        name: "Dr Savković Dental Office",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sampleReview) }}
      />
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

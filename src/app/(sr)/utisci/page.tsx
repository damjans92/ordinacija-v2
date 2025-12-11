import { reviewsData } from "@/data/reviews";
import Contact from "@/components/Contact";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import ReviewsGrid from "./_components/ReviewGrid";
import PageHeader from "@/components/PageHeader";

const BASE_URL = "https://drsavkovic.rs";
export const metadata: Metadata = {
  title: seoData.sr.testimonials.title,
  description: seoData.sr.testimonials.description,

  keywords: [
    "utisci pacijenata stomatolog",
    "google recenzije zubari",
    "iskustva pacijenata implanti",
    "preporuke stomatolog Beograd",
  ],

  alternates: {
    canonical: `${BASE_URL}/utisci`,
  },

  openGraph: {
    title: seoData.sr.testimonials.title,
    description: seoData.sr.testimonials.description,
  },
};

const TestimonialsPage = () => {
  const lang = "sr";
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
      "Nastanjen sam između Kanade i Bliskog Istoka. Upravo sam imao nezaboravno iskustvo sa dr Savkovićem, stomatologom kojeg sam slučajno pronašao na adresi Radovana Simića Cige 7, stan 4, blizu stana koji sam iznajmio na nekoliko dana. Ne mogu ga dovoljno preporučiti! Imao sam polomljen zub koji je zahtevao hitnu pažnju. Dr Savković je rešio hitan slučaj sa izuzetnom stručnošću, pružajući vrhunsku negu po neverovatno povoljnoj ceni za hitnu posetu. Došao sam bez poziva, jednostavno zujeći njegovu kancelariju/stan, i ljubazno mi je objasnio da je bolje da ga kontaktiram telefonom kako bih zakazao termin. Nakon što je stručno lečio moj zub, odvojio je dodatnih 10 minuta da detaljno razgovara o mom stanju parodontitisa i ponudi korisne savete o potencijalnim implantatima u Beogradu. Njegovo znanje, saosećanje i iskrena briga učinili su da se osećam zaista cenjeno. Dr Savković nije samo izuzetan stomatolog već i neverovatna osoba. Izvanredna usluga—topla preporuka!",
    datePublished: "2025-08",
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData.sr.testimonials.title,
    description: seoData.sr.testimonials.description,
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

export default TestimonialsPage;

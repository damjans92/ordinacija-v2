import Contact from "@/components/Contact";
import { client } from "../../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import Hero from "../../../components/Hero";
import GalleryContainer from "./_components/GalleryContainer";
import GalleryText from "./_components/GalleryText";
import { galleryData } from "@/data/gallery";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.sr.gallery.title,
  description: seoData.sr.gallery.description,

  alternates: {
    canonical: "https://drsavkovic.rs/galerija",
  },
};

const GalleryPage = async () => {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData.sr.gallery.title,
    description:
      "Pogledajte galeriju naše ordinacije i primera radova koji oslikavaju posvećenost kvalitetu i estetici.",
    url: "https://drsavkovic.rs/galerija",
    mainEntity: {
      "@type": "ImageObject",

      name: "Galerija radova Dr Savković Dental Office",
      contentUrl:
        "https://cdn.sanity.io/images/uda5ioy3/production/8c96872fab12bec51d2eccc8d668fea5b749b450-1080x589.jpg",
    },

    publisher: {
      "@type": "Dental",
      name: "Dr Savković Dental Office",
      url: "https://drsavkovic.rs/",
    },
  };

  const lang = "sr";
  const t = galleryData[lang];

  let data = null;

  try {
    data = await client.fetch(mainGalleryQuery);
    console.log("Fetched gallery data:", data);
  } catch (err) {
    throw new Error("Failed to fetch gallery data", { cause: err });
  }

  const gallery = data;

  if (!gallery) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />
      <PageHeader {...t.hero} />
      <GalleryText galleryText={t.galleryText} />
      <div className="border-t-1 border-gray-300"></div>
      <GalleryContainer
        gallery={gallery}
        beforeText={t.beforeText}
        afterText={t.afterText}
        lang={lang}
      />
      <Contact />
    </main>
  );
};

export default GalleryPage;

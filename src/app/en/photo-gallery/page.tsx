import GalleryContainer from "@/app/(sr)/galerija/_components/GalleryContainer";
import GalleryText from "@/app/(sr)/galerija/_components/GalleryText";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";
import { galleryData } from "@/data/gallery";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: seoData.en.gallery.title,
  description: seoData.en.gallery.description,

  alternates: {
    canonical: "https://drsavkovic.rs/en/photo-gallery",
  },
};

const GalleryPageEN = async () => {
  const gallerySchemaEn = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData.en.gallery.title,
    description:
      "Take a look at our dental office and examples of work that reflect our dedication to quality and aesthetics.",
    url: "https://drsavkovic.rs/en/gallery",
    mainEntity: {
      "@type": "ImageObject",
      name: "Dr Savković Dental Office Work Portfolio Gallery",
      contentUrl:
        "https://cdn.sanity.io/images/uda5ioy3/production/8c96872fab12bec51d2eccc8d668fea5b749b450-1080x589.jpg",
    },

    publisher: {
      "@type": "Dental",
      name: "Dr Savković Dental Office",
      url: "https://drsavkovic.rs/",
    },
  };

  const lang = "en";
  const t = galleryData[lang];

  let data = null;

  try {
    data = await client.fetch(mainGalleryQuery);
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
          __html: JSON.stringify(gallerySchemaEn),
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

export default GalleryPageEN;

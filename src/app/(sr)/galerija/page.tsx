import Contact from "@/components/Contact";
import { client } from "../../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { PhotoGallery } from "../../../../lib/types";
import Hero from "../../../components/Hero";
import GalleryContainer from "./_components/GalleryContainer";
import GalleryText from "./_components/GalleryText";
import { galleryData } from "@/data/gallery";
import { Metadata } from "next";
import { seoData } from "@/data/seoData";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: seoData.sr.gallery.title,
  description: seoData.sr.gallery.description,
};

const GalleryPage = async () => {
  const lang = "sr";
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
      <Hero {...t.hero} imageSrc="/banner-gallery2.jpg" />
      <GalleryText galleryText={t.galleryText} />
      <div className="border-t-1 border-gray-300"></div>
      <GalleryContainer
        gallery={gallery}
        beforeText={t.beforeText}
        afterText={t.afterText}
      />
      <Contact />
    </main>
  );
};

export default GalleryPage;

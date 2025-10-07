import Contact from "@/components/Contact";
import { client } from "../../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { PhotoGallery } from "../../../../lib/types";
import Hero from "../../../components/Hero";
import GalleryContainer from "./_components/GalleryContainer";
import GalleryText from "./_components/GalleryText";
import { galleryData } from "@/data/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foto galerija | Dr Savković",
  description: "Pogledajte fotografije ordinacije i naših pacijenata.",
};

const GalleryPage = async () => {
  const lang = "sr";
  const t = galleryData[lang];

  const data: PhotoGallery = await client.fetch(mainGalleryQuery);
  const gallery = data;

  if (!gallery) {
    return <p className="text-center py-10">No gallery found.</p>;
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

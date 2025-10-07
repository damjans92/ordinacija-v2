import React from "react";
import GalleryContainer from "@/app/(sr)/galerija/_components/GalleryContainer";
import GalleryText from "@/app/(sr)/galerija/_components/GalleryText";
import Hero from "@/components/Hero";

import { PhotoGallery } from "../../../../lib/types";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";
import { galleryData } from "@/data/gallery";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "DrSavkovic Dental Office ",
};

const GalleryPageEN = async () => {
  const lang = "en";
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

export default GalleryPageEN;

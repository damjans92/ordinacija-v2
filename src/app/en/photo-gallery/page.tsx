import React from "react";
import GalleryContainer from "@/app/galerija/_components/GalleryContainer";
import GalleryText from "@/app/galerija/_components/GalleryText";
import Hero from "@/components/Hero";

import { PhotoGallery } from "../../../../lib/types";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";
import { galleryData } from "@/data/gallery";

const GalleryPageEN = async () => {
  const data: PhotoGallery = await client.fetch(mainGalleryQuery);
  const gallery = data;

  if (!gallery) {
    return <p className="text-center py-10">No gallery found.</p>;
  }

  return (
    <main>
      <Hero {...galleryData.en.hero} imageSrc="/banner-gallery2.jpg" />
      <GalleryText galleryText={galleryData.en.galleryText} />
      <div className="border-t-1 border-gray-300"></div>
      <GalleryContainer
        gallery={gallery}
        beforeText={galleryData.en.beforeText}
        afterText={galleryData.en.afterText}
      />
    </main>
  );
};

export default GalleryPageEN;

import React from "react";
import GalleryContainer from "@/app/(sr)/galerija/_components/GalleryContainer";
import GalleryText from "@/app/(sr)/galerija/_components/GalleryText";
import Hero from "@/components/Hero";
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
};

const GalleryPageEN = async () => {
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
      {/* <Hero {...t.hero} imageSrc="/banner-gallery2.jpg" /> */}
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

import { client } from "../../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../../lib/sanity.queries";
import { PhotoGallery } from "../../../../lib/types";
import Hero from "../../../components/Hero";
import GalleryContainer from "./_components/GalleryContainer";
import GalleryText from "./_components/GalleryText";
import { galleryData } from "@/data/gallery";

const GalleryPage = async () => {
  const data: PhotoGallery = await client.fetch(mainGalleryQuery);
  const gallery = data;

  if (!gallery) {
    return <p className="text-center py-10">No gallery found.</p>;
  }

  return (
    <main>
      <Hero {...galleryData.sr.hero} imageSrc="/banner-gallery2.jpg" />
      <GalleryText galleryText={galleryData.sr.galleryText} />
      <div className="border-t-1 border-gray-300"></div>
      <GalleryContainer
        gallery={gallery}
        beforeText={galleryData.sr.beforeText}
        afterText={galleryData.sr.afterText}
      />
    </main>
  );
};

export default GalleryPage;

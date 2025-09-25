import { client } from "../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../lib/sanity.queries";
import { PhotoGallery } from "../../../lib/types";
import Hero from "../../components/Hero";
import GalleryContainer from "./_components/GalleryContainer";

const GalleryPage = async () => {
  const data: PhotoGallery = await client.fetch(mainGalleryQuery);
  const gallery = data;

  if (!gallery) {
    return <p className="text-center py-10">No gallery found.</p>;
  }

  return (
    <main>
      <Hero title="Foto galerija" imageSrc="/banner-gallery2.jpg" />

      <div className="py-12 px-6 mt-6">
        <p className="max-w-2xl mx-auto text-center">
          Success and celebrity is not what defines LLK; the doctor’s commitment
          to their patients and to each other is the true hallmark of the LLK
          philosophy. Doctors Marc Lowenberg, Gregg Lituchy and Brian Kantor are
          partners and best friends, and the key to this triumvirate’s success
          is their shared value system which places patient care above all else.
          They have done more than perfect the art of the smile; they have found
          a way to individualize the art of dental care and treatment so that
          each patient’s result reflects how they want to be seen, and
          ultimately how they see themselves.
        </p>
      </div>

      <div className="border-t-1 border-gray-300"></div>

      <GalleryContainer gallery={gallery} />
    </main>
  );
};

export default GalleryPage;

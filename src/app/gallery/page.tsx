"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../lib/sanity.queries";
import Hero from "../components/Hero";

type SanityImage = {
  asset: { _id: string; url: string };
  alt?: string;
};

type BeforeAfterPair = {
  _key: string;
  before: SanityImage;
  after: SanityImage;
};

type PhotoGallery = {
  _id: string;
  title: string;
  pairs: BeforeAfterPair[];
};

const GalleryPage = () => {
  const [gallery, setGallery] = useState<PhotoGallery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(mainGalleryQuery);
        console.log(data);
        setGallery(data || null);

        console.log(gallery?.pairs);
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching photos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <main>
      <Hero imageSrc="/banner-gallery2.jpg" />
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

      <section>
        <div>
          {gallery?.pairs?.map((pair) => (
            <div key={pair._key}>
              <div className="container mx-auto flex gap-4 ">
                <div className="flex flex-col flex-1  justify-center py-6">
                  <img
                    src={urlFor(pair.before).url()}
                    alt={pair.before.alt || ""}
                  />
                  <span className="mt-3 font-bold uppercase">Pre</span>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div className="flex flex-col  flex-1  justify-center py-6 ">
                  <img
                    src={urlFor(pair.after).url()}
                    alt={pair.after.alt || ""}
                  />
                  <span className="mt-3 font-bold uppercase text-right">
                    Posle
                  </span>
                </div>
              </div>
              <div className="border-t-1 border-gray-300"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;

"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../../lib/sanity.client";
import { mainGalleryQuery } from "../../../lib/sanity.queries";
import Image from "next/image";

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
    <section>
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap border-1 border-black">
          <div className="w-full lg:w-1/2">
            <Image
              src="/banner-image-left.jpg"
              alt="Hero Image"
              width={450}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col p-12">
            {/* H1 fills top space */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <h1 className="text-3xl lg:text-5xl font-medium tracking-widest mb-4">
                THE ART OF <br /> THE SMILE
              </h1>
              <a
                href="#"
                className="uppercase tracking-widest link-underline font-light"
              >
                Pročitajte više
              </a>
            </div>

            {/* Paragraph sticks to bottom */}
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <p className="mt-4 text-md font-bold uppercase tracking-widest font-quicksand text-center md:text-left">
                nađite nas na adresi
                <br /> Radovana Simića Cige 7<br /> 11000 Beograd
              </p>
              <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5">
                VTR
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <a href="#" className="link-underline font-light">
            SCROLL DOWN
          </a>
        </div>
        <div className="py-12 px-6 mt-6">
          <p className="max-w-2xl mx-auto text-center">
            Success and celebrity is not what defines LLK; the doctor’s
            commitment to their patients and to each other is the true hallmark
            of the LLK philosophy. Doctors Marc Lowenberg, Gregg Lituchy and
            Brian Kantor are partners and best friends, and the key to this
            triumvirate’s success is their shared value system which places
            patient care above all else. They have done more than perfect the
            art of the smile; they have found a way to individualize the art of
            dental care and treatment so that each patient’s result reflects how
            they want to be seen, and ultimately how they see themselves.
          </p>
        </div>
      </div>
      <div className="border-t-1 border-gray-300"></div>

      <div>
        {gallery?.pairs?.map((pair) => (
          <>
            <div key={pair._key} className="container mx-auto flex gap-4 ">
              <div className="flex flex-col flex-1  justify-center py-6">
                <img
                  src={urlFor(pair.before).url()}
                  alt={pair.before.alt || ""}
                />
                <span className="mt-3 font-bold uppercase">Before</span>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex flex-col  flex-1  justify-center py-6 ">
                <img
                  src={urlFor(pair.after).url()}
                  alt={pair.after.alt || ""}
                />
                <span className="mt-3 font-bold uppercase text-right">
                  After
                </span>
              </div>
            </div>
            <div className="border-t-1 border-gray-300"></div>
          </>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;

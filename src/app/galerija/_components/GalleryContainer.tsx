import React from "react";
import { urlFor } from "../../../../lib/sanity.client";
import { BeforeAfterPair, PhotoGallery } from "../../../../lib/types";

function BeforeAndAfterCard({ pair }: { pair: BeforeAfterPair }) {
  return (
    <div className="container mx-auto flex gap-4 ">
      <div className="flex flex-col flex-1  justify-center py-6">
        <img src={urlFor(pair.before).url()} alt={pair.before.alt || ""} />
        <span className="mt-3 font-bold uppercase">Pre</span>
      </div>
      <div className="w-px bg-gray-200"></div>
      <div className="flex flex-col  flex-1  justify-center py-6 ">
        <img src={urlFor(pair.after).url()} alt={pair.after.alt || ""} />
        <span className="mt-3 font-bold uppercase text-right">Posle</span>
      </div>
    </div>
  );
}

const GalleryContainer = ({ gallery }: { gallery: PhotoGallery }) => {
  return (
    <section>
      <div>
        {gallery.pairs.map((pair) => (
          <div key={pair._key}>
            <BeforeAndAfterCard pair={pair} />
            <div className="border-t-1 border-gray-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryContainer;

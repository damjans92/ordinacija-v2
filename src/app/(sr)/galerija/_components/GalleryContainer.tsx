import React from "react";
import { Lang, PhotoGallery } from "../../../../../lib/types";
import BeforeAndAfterPair from "./BeforeAndAfterPair";

type GalleryContainerProps = {
  gallery: PhotoGallery;
  beforeText: string;
  afterText: string;
  lang: Lang;
};

const GalleryContainer = ({
  gallery,
  beforeText,
  afterText,
  lang,
}: GalleryContainerProps) => {
  return (
    <section>
      <div>
        {gallery.pairs.map((pair) => (
          <div key={pair._key}>
            <BeforeAndAfterPair
              pair={pair}
              beforeText={beforeText}
              afterText={afterText}
              lang={lang}
            />
            <div className="border-t-1 border-gray-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryContainer;

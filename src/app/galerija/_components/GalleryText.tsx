import React from "react";

type GalleryTextProps = {
  galleryText: string;
};

const GalleryText = ({ galleryText }: GalleryTextProps) => {
  return (
    <div className="py-12 px-6 mt-6">
      <p className="max-w-2xl mx-auto text-center">
        {galleryText.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default GalleryText;

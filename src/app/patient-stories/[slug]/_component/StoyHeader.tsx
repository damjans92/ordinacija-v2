import React from "react";
import { PatientStorySingle } from "../../../../../lib/types";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";

interface StoryHeaderProps {
  story: PatientStorySingle;
}

const StoryHeader = ({ story }: StoryHeaderProps) => {
  const optimizedImageUrl = urlFor(story.image).width(600).url();

  return (
    <div className="flex flex-wrap border-1">
      <div className="order-2 lg:order-1 w-full lg:w-[400px] flex flex-col justify-center px-8 py-8 ">
        <h1 className="text-3xl font-normal uppercase mb-6 tracking-widest">
          <span className="border-b-6 border-[var(--foreground2)] inline-block mb-6">
            {story.patientName}
          </span>
          <br />
          <span className="text-2xl font-light leading-8">{story.title}</span>
        </h1>
        <a
          href=""
          className="uppercase link-underline inline-block w-auto self-start"
        >
          Opširnije
        </a>
      </div>
      <div className="order-1 lg:order-2 w-full lg:flex-1 realtive">
        <Image
          src={optimizedImageUrl}
          alt={story.title}
          width={800}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default StoryHeader;

import { PortableText } from "next-sanity";
import React from "react";
import { PatientStorySingle } from "../../../../../lib/types";

interface StoryHeaderProps {
  story: PatientStorySingle;
}

const StoryTextSection = ({ story }: StoryHeaderProps) => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className=" flex flex-col gap-8 max-w-[700px] mx-auto">
          <h2 className="text-xl font-light uppercase tracking-wide ">
            Priča pacijenta
          </h2>
          <div className="flex gap-17 flex-col lg:flex-row">
            <div className="  ">
              <PortableText value={story.story} />
            </div>
            <div className=" ">
              <PortableText value={story.story} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTextSection;

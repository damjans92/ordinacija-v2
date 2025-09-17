import React from "react";
import { PatientStory } from "../../../../lib/types";
import { urlFor } from "../../../../lib/sanity.client";
import Link from "next/link";

interface PatientStoriesListProps {
  stories: PatientStory[];
}

const PatientStoriesList = ({ stories }: PatientStoriesListProps) => {
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-16">
        {stories.map((patient: PatientStory) => {
          return (
            <div className="flex flex-col justify-top" key={patient._id}>
              <img
                src={urlFor(patient.image).width(600).height(300).url()}
                alt={patient.title}
                className="grayscale hover:grayscale-1 transition-all duration-300"
              />
              <h4 className="text-xl uppercase font-outfit font-light mt-6 tracking-widest text-center">
                {patient.patientName} <br />
                {patient.title}
              </h4>
              <Link
                href={`/patient-stories/${patient.slug}`}
                className="font-light uppercase self-center link-underline mt-6 tracking-widest inline-block"
              >
                Opširnije
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientStoriesList;

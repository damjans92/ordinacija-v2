import React from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import { patients } from "@/data/patients";
import Image from "next/image";
import { getPatientStories } from "../../../lib/sanity.queries";
import { client } from "../../../lib/sanity.client";

type PatientStory = {
  _id: string;
  title: string;
  patientName: string;
  slug: string;
  imageUrl: string;
};

const PatientStoriesPage = async () => {
  const patientStories = await client.fetch(getPatientStories);
  console.log(patientStories);
  return (
    <main>
      <Hero title="Priče pacijenata" />
      <section>
        <div className="container mx-auto py-8 lg:py-12 text-center">
          <h3 className="uppercase text-3xl tracking-widest leading-12 font-light">
            CLICK TO VIEW
            <br /> A STORY BELOW
          </h3>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          <p className="text-center">
            Uspeh i slava nisu ono što definiše ASDF; prava odlika ASDF
            filozofije jeste posvećenost lekara svojim pacijentima i jedni
            drugima. Doktori ASDF, ASF ASF su partneri i najbolji prijatelji, a
            ključ uspeha ovog trijumvirata jeste njihov zajednički sistem
            vrednosti koji stavlja brigu o pacijentima iznad svega. Oni su
            učinili više od usavršavanja umetnosti osmeha; pronašli su način da
            individualizuju umetnost stomatološke nege i tretmana tako da
            rezultat kod svakog pacijenta odražava to kako želi da bude viđen, a
            na kraju i kako vidi samog sebe.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-16">
            {patientStories.map((patient: PatientStory) => (
              <div className="flex flex-col justify-top" key={patient._id}>
                <img
                  src={patient.imageUrl}
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PatientStoriesPage;

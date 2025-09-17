import React from "react";
import Hero from "../../components/Hero";
import { getPatientStories } from "../../../lib/sanity.queries";
import { client } from "../../../lib/sanity.client";
import AboutText from "./_components/AboutText";
import Heading from "./_components/Heading";
import PatientStoriesList from "./_components/PatientStoriesList";

const PatientStoriesPage = async () => {
  const patientStories = await client.fetch(
    getPatientStories,
    {},
    {
      cache: "no-store",
    }
  );
  console.log(patientStories);
  return (
    <main>
      <Hero title="Priče pacijenata" />
      <section>
        <Heading />
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          <AboutText />
        </div>
        <PatientStoriesList stories={patientStories} />
      </section>
    </main>
  );
};

export default PatientStoriesPage;

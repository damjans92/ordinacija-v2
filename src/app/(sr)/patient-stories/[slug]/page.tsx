import { notFound } from "next/navigation";
import { getPatientStoryBySlug } from "../../../../../lib/sanity.queries";
import { client } from "../../../../../lib/sanity.client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PatientStorySingle } from "../../../../../lib/types";
import StoryHeader from "./_component/StoyHeader";
import StoryTextSection from "./_component/StoryTextSection";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Priče Pacijenata | NoIndex",
  description: "Ova stranica se ne indeksira.",

  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PatientPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const story: PatientStorySingle = await client.fetch(
    getPatientStoryBySlug,
    {
      slug,
    },
    { cache: "no-store" }
  );

  if (!story) return <p>Story not found</p>;

  return (
    <main>
      <div className="container mx-auto p-8">
        <StoryHeader story={story} />
        <Breadcrumbs />
      </div>
      <StoryTextSection story={story} />
    </main>
  );
};
export default PatientPage;

import { notFound } from "next/navigation";
import { PortableTextBlock } from "@portabletext/types";
import { getPatientStoryBySlug } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "next-sanity";

type PatientStory = {
  _id: string;
  title: string;
  patientName: string;
  slug: string;
  story: PortableTextBlock[];
  imageUrl: string;
};

const PatientPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const story = await client.fetch(getPatientStoryBySlug, {
    slug,
  });
  console.log(story);
  if (!story) return <p>Story not found</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{story.patientName}</h1>
      <h1 className="text-3xl font-bold">{story.title}</h1>
      <img src={story.imageUrl} alt={story.title} className="my-4 w-20" />

      <PortableText value={story.story} />
    </div>
  );
};
export default PatientPage;

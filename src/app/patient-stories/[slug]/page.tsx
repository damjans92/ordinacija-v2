import { notFound } from "next/navigation";
import { getPatientStoryBySlug } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "next-sanity";
import { urlFor } from "../../../../lib/sanity.client";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PatientStorySingle } from "../../../../lib/types";

export const dynamic = "force-dynamic";

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
  const optimizedImageUrl = urlFor(story.image).width(600).url();

  if (!story) return <p>Story not found</p>;

  return (
    <main>
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap border-1">
          <div className="order-2 lg:order-1 w-full lg:w-[400px] flex flex-col justify-center px-8 py-8 ">
            <h1 className="text-3xl font-normal uppercase mb-6 tracking-widest">
              <span className="border-b-6 border-[var(--foreground2)] inline-block mb-6">
                {story.patientName}
              </span>
              <br />
              <span className="text-2xl font-light leading-8">
                {story.title}
              </span>
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
            {/* <img src={optimizedImageUrl} alt={story.title} /> */}
          </div>
        </div>
        <Breadcrumbs />
      </div>
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
    </main>
  );
};
export default PatientPage;

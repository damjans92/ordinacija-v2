import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01", // use current date
  useCdn: false, // true for public, faster, cacheable
});

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source as object);
}

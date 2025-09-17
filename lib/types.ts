import { PortableTextBlock } from "next-sanity";

export type SanityImage = {
  asset: { _id: string; url: string };
  alt?: string;
};

export type BeforeAfterPair = {
  _key: string;
  before: SanityImage;
  after: SanityImage;
};

export type PhotoGallery = {
  _id: string;
  title: string;
  pairs: BeforeAfterPair[];
};

export type PatientStory = {
  _id: string;
  title: string;
  patientName: string;
  slug: string;
  image: object;
};

export type PatientStorySingle = {
  _id: string;
  title: string;
  patientName: string;
  slug: string;
  image: object;
  story: PortableTextBlock[];
};

export type Review = {
  id: number;
  text: string;
  author: string;
};

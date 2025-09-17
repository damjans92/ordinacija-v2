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

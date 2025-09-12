export const galleryQuery = `*[_type == "photoGallery"]{
  _id,
  title,
  images[]{
    _key,
    alt,
    caption,
    asset->{_id, url}
  }
}`;

export const mainGalleryQuery = `*[_type == "photoGallery" && title == "Photo gallery main"][0]{
  _id,
  title,
  pairs[]{
    _key,
    before{
      _key,
      asset->{_id, url},
      alt
    },
    after{
      _key,
      asset->{_id, url},
      alt
    }
  }
}`;

export const getPatientStories = `*[_type == "patientStory"][0]{
  _id,
  title,
  "slug":slug.current,
  "imageUrl":image.asset->url
  }`;

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
    title{
      sr,
      en
    },
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

export const getPatientStories = `*[_type == "patientStory"]{
  _id,
  title,
  patientName,
  "slug":slug.current,
  image
  }`;

export const getPatientStoryBySlug = `*[_type == "patientStory" && slug.current == $slug][0]{
    _id,
    title,
    patientName,
    story,
    "slug":slug.current,
    image
    }`;

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.REACT_APP_ENVIRONMENT || "production", // this is from those question during 'sanity init'
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (src) => {
  return builder
    .image(src)
    .dataset(process.env.REACT_APP_ENVIRONMENT)
    .projectId(process.env.REACT_APP_PROJECT_ID);
};

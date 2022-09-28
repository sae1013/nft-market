import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_ENVIRONMENT || "production",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (src) => {
  return builder
    .image(src)
    .dataset(process.env.REACT_APP_ENVIRONMENT)
    .projectId(process.env.REACT_APP_PROJECT_ID);
};

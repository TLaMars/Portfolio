import AndCImage from "../../assets/images/andc.webp";
import AndCHeroImage from "../../assets/images/andc-hero.webp";
import type { Work } from "../../models/work";

export const andC: Work = {
  slug: "and-c",
  name: "&C",
  featured: true,
  shortDescription: "The lifestyle brand of Chantal Janzen",
  image: AndCImage,
  imagePosition: "fill",
  variant: "blue",
  modules: [
    {
      moduleType: "InfoModule",
      info: [
        {
          title: "Timeline",
          description: "2021 - 2022",
        },
        {
          title: "Type",
          description: "Web platform",
        },
        {
          title: "Employer",
          description: "Triple",
        },
      ],
    },
    {
      moduleType: "ImageModule",
      src: AndCHeroImage,
      alt: "&C",
    },
    {
      moduleType: "ContentModule",
      title: "Summary",
      paragraphs: [
        "&C is the lifestyle brand of Chantal Janzen. The website is built with SvelteKit and is used to share the latest news, fashion, and lifestyle tips.",
        "The website has a large collection of articles, videos, and interviews. The website is also used to promote the &C magazine and the &C shop.",
      ],
    },
  ],
};

import AndCImage from "../../assets/images/andc.webp";
import AndCHeroImage from "../../assets/images/andc-hero.webp";
import type { Work } from "../../models/work";

export const fmGroup: Work = {
  slug: "fm-group",
  name: "FM Group",
  shortDescription: "",
  image: AndCImage,
  imagePosition: "fill",
  variant: "blue",
  modules: [
    {
      moduleType: "InfoModule",
      info: [
        {
          title: "Timeline",
          description: "2024 - current",
        },
        {
          title: "Type",
          description: "Web / App",
        },
        {
          title: "Employer",
          description: "Triple x Fleurametz",
        },
      ],
    },
    {
      moduleType: "ImageModule",
      src: AndCHeroImage,
      alt: "Fleurametz",
    },
    {
      moduleType: "ContentModule",
      title: "Summary",
      paragraphs: [
        "FM Group is an umbrella company for several brands in the flower industry, covering flowers, plants, and accessories. They offer a mix of white-label and custom solutions tailored to their clients’ needs.",
        "I’m part of the Front-End team, mainly working with React Native. I enjoy tackling technical challenges, improving code quality, and making sure the user experience stays smooth. I also help the team understand why changes are needed by providing context and exploring different options, so we can make smart, informed decisions together.",
        "I’ve contributed to a range of projects: a white-label React Native app, a white-label React web app, the Verdel Merchandise app, a marketing website, and a shared React Native component library. Each project has been an opportunity to grow, collaborate, and support the team in getting the best possible results.",
      ],
    },
  ],
};

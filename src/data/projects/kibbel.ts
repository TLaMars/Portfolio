import KibbelHeroImage from "../../assets/images/kibbel-hero.webp";
import KibbelQuestionImage from "../../assets/images/kibbel-question.webp";
import type { Work } from "../../models/work";

export const kibbel: Work = {
  slug: "kibbel",
  name: "Kibbel",
  shortDescription: "Your conversation starter",
  image: KibbelQuestionImage,
  imagePosition: "center",
  variant: "purple",
  modules: [
    {
      moduleType: "InfoModule",
      info: [
        {
          title: "Timeline",
          description: "2023",
        },
        {
          title: "Type",
          description: "App",
        },
        {
          title: "Employer",
          description: "Triple",
        },
      ],
    },
    {
      moduleType: "ImageModule",
      src: KibbelHeroImage,
      alt: "Kibbel Question",
    },
    {
      moduleType: "ContentModule",
      title: "Summary",
      paragraphs: [
        "Kibbel is a mobile app that helps you start a conversation with your friends, family, or colleagues. The app is available for both iOS and Android and is built with React Native.",
        "The app contains a large collection of questions that you can ask to start conversations. If you don't like the question you can swipe to the next one. When you are done with the normal questions you can also use the spicy questions to get the conversation going.",
      ],
    },
  ],
};

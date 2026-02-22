import VfzDashboardImage from "../../assets/images/vfz-dashboard.webp";
import VfzHeroImage from "../../assets/images/vfz-hero.webp";
import type { Work } from "../../models/work";

export const vfzApp: Work = {
  slug: "vfz-app",
  name: "VFZ App",
  featured: true,
  shortDescription: "Combined Vodafone and Ziggo app",
  image: VfzDashboardImage,
  imagePosition: "center",
  variant: "green",
  modules: [
    {
      moduleType: "InfoModule",
      info: [
        {
          title: "Timeline",
          description: "2022 - current",
        },
        {
          title: "Type",
          description: "iOS/Android app",
        },
        {
          title: "Employer",
          description: "Triple x VFZ",
        },
      ],
    },
    {
      moduleType: "ImageModule",
      src: VfzHeroImage,
      alt: "VFZ App Dashboard",
    },
    {
      moduleType: "ContentModule",
      title: "Summary",
      paragraphs: [
        "The VFZ app is a combined app for Vodafone and Ziggo customers. The app is available for both iOS and Android. The app is built with React Native and is available in the App Store and Google Play Store.",
        "The app is used by more than a million customers to manage their subscriptions, view their invoices, and contact customer service. But also to do things like checking their data usage, changing their subscription, and manage their modem.",
      ],
    },
    {
      moduleType: "ContentModule",
      title: "My role",
      paragraphs: [
        "The VFZ app is split up in multiple feature teams, with one platform team that is responsible for the maintainability, core functionality and standardization of the app.",
        "I'm part of the platform team and am responsible to make the developer experience as smooth as possible. This includes things like improving the code quality, looking at performance issues, and migrating to new technologies.",
        "A few examples of my work are:",
        "- Automating the release process by creating CI/CD that automates the build and release process.",
        "- Leading the FE members in the platform team by being the main point of contact for the team.",
        "- Rebranding the app to the new Ziggo brand.",
        "- Supporting other teams by providing technical guidance and helping them with their issues.",
      ],
    },
  ],
};

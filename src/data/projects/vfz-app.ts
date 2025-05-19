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
          description: "2022 - 2024",
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
  ],
};

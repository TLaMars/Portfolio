import VfzDashboardImage from "../../assets/images/vfz-dashboard.webp";
import WandrdImage from "../../assets/images/wandrd.avif";
import type { Work } from "../../models/work";

export const wandrd: Work = {
  slug: "wandrd",
  name: "Wandrd",
  featured: true,
  comingSoon: true,
  shortDescription: "Track Every Country You've Explored",
  image: WandrdImage,
  imagePosition: "center",
  variant: "purple",
  modules: [],
  externalUrl: "https://wandrd.app",
};

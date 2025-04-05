import type { PageModule } from "./page-module";

export type Work = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  imagePosition: ImagePosition;
  modules: PageModule[];
  variant: CardVariant;
};

export type CardVariant = "blue" | "green" | "purple";
export type ImagePosition = "fill" | "center";

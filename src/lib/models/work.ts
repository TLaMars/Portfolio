import type { PageModule } from "./page-module";

export type Work = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  imagePosition: ImagePosition;
  modules: PageModule[];
};

export type ImagePosition = "fill" | "center";

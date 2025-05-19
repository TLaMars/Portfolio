import type { PageModule } from "./page-module";
import type { ImageMetadata } from "astro";

export type Work = {
  slug: string;
  name: string;
  featured?: boolean;
  shortDescription: string;
  image: ImageMetadata;
  imagePosition: ImagePosition;
  modules: PageModule[];
  variant: CardVariant;
};

export type CardVariant = "blue" | "green" | "purple";
export type ImagePosition = "fill" | "center";

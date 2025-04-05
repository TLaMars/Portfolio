import type { Info } from "./info";

type ContentModule = {
  moduleType: "ContentModule";
  title?: string;
  paragraphs?: string[];
};

type ImageModule = {
  moduleType: "ImageModule";
  src: string;
  alt: string;
};

type InfoModule = {
  moduleType: "InfoModule";
  info: Info[];
};

export type PageModule = ContentModule | ImageModule | InfoModule;

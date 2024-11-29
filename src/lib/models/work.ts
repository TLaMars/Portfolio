export type Work = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  imagePosition: ImagePosition;
  timeline: string;
  type: string;
  projectUrl: string;
  projectUrlLabel: string;
  summary: {
    paragraphs: string[];
  };
};

export type ImagePosition = "fill" | "center";

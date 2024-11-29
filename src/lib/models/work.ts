export type Work = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  timeline: string;
  type: string;
  projectUrl: string;
  projectUrlLabel: string;
  summary: {
    paragraphs: string[];
  };
};

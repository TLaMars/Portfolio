import GitbarImage from "../../assets/images/gitbar.webp";
import type { Work } from "../../models/work";

export const gitbar: Work = {
  slug: "gitbar",
  name: "GitBar",
  shortDescription: "Your new mac PR tool",
  image: GitbarImage,
  imagePosition: "fill",
  variant: "blue",
  modules: [
    {
      moduleType: "InfoModule",
      info: [
        {
          title: "Timeline",
          description: "2024 - present",
        },
        {
          title: "Type",
          description: "macOS app",
        },
        {
          title: "Product",
          description: "Download Gitbar",
          href: "https://gitbar.lamars.io",
        },
      ],
    },
    {
      moduleType: "ImageModule",
      src: GitbarImage,
      alt: "GitBar Dashboard",
    },
    {
      moduleType: "ContentModule",
      title: "Summary",
      paragraphs: [
        "GitBar is a macOS app that helps developers keep track of all their open pull requests in a single view. This will result in a more organized workflow.",
        "The app is easily accessible from the macOS menubar, where a Pull Request icon shows what the amount of Pull Requests are that you still have to look at ;). It doesn't matter if it is a GitLab, GitHub or Azure account they are all supported. You can even login with multiple accounts.",
      ],
    },
  ],
};

export interface AuthorHomepageConfig {
  tag: string;
  heading: string;
  leadParagraph: string;
  biographyParagraphs: string[];
  authorPortrait: {
    src: string;
    alt: string;
    caption?: string;
  };
  workspaceImage: {
    src: string;
    alt: string;
    caption: string;
  };
  link: {
    label: string;
    href: string;
  };
}

export const authorHomepageData: AuthorHomepageConfig = {
  tag: "Oral Historian & Author",
  heading: "Aanchal Malhotra",
  leadParagraph:
    "Aanchal Malhotra is an award-winning oral historian and author based in New Delhi, India. She writes fiction and non-fiction and is the co-founder of the Museum of Material Memory.",
  biographyParagraphs: [
    "Malhotra is the author of the non-fiction books, Remnants of A Separation: A History of Partition through Material Memory (2017) and In the Language of Remembering: The Inheritance of Partition (2022), which together trace the long-term, cross-border, generational impact of the 1947 Partition.",
    "Her debut novel titled The Book of Everlasting Things was listed in NPR’s Best Books of 2022. Her work has won the Council for Museum Anthropology Book Award and been shortlisted for the British Academy Book Prize and Sahitya Akademi Yuva Puraskar, among other honours.",
  ],
  authorPortrait: {
    src: "/images/author-portrait.webp",
    alt: "Aanchal Malhotra, oral historian and writer",
    caption: "Aanchal Malhotra",
  },
  workspaceImage: {
    src: "/images/workspace-delhi-2026.webp",
    alt: "Aanchal Malhotra's writing workspace with research pinboard, notebooks, and library",
    caption: "Workspace, New Delhi",
  },
  link: {
    label: "Read full Biography & background",
    href: "/about",
  },
};

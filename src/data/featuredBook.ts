import { Book } from "./types";

export interface FeaturedHomepageSection {
  tag: string;
  badge?: string;
  releaseDate?: string;
  leadParagraph: string;
  fullDescription: string[];
  illustratorCredit?: string;
  note?: string;
  ctaLink?: {
    label: string;
    href: string;
  };
}

export interface FeaturedBookConfig {
  bookSlug: string;
  customDetails?: FeaturedHomepageSection;
}

/**
 * Homepage Featured Spotlight Configuration
 * Enables effortless updating when A Handful of Home is published in May 2026,
 * or swapping to a different featured work without altering the JSX component structure.
 */
export const featuredBookConfig: FeaturedBookConfig = {
  bookSlug: "a-handful-of-home",
  customDetails: {
    tag: "Forthcoming Publication",
    badge: "May 2026",
    releaseDate: "Expected May 2026",
    leadParagraph: "A Handful of Home is a museum you can hold in your hands.",
    fullDescription: [
      "Containing 100 objects from the Partition of India, oral historian and expert Aanchal Malhotra transforms a complex history into a gentle and accessible introduction for younger readers.",
      "Vividly brought to life by Bangladeshi-British illustrator Maryam Huq, this book is a testament to the things we keep, the things we remember, and the stories that connect us all — no matter where we call home."
    ],
    illustratorCredit: "Vividly brought to life by Bangladeshi-British illustrator Maryam Huq",
    note: "Work-in-progress cover artwork shown above; final cover design to be revealed ahead of release.",
    ctaLink: {
      label: "View Book Details & Editions",
      href: "/books/a-handful-of-home",
    },
  },
};

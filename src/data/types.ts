export interface BookEdition {
  id: string;
  title: string;
  region: string;
  language: string;
  publisher: string;
  year?: string | number;
  coverImage?: string;
  format?: string;
}

export interface BookPraise {
  quote: string;
  author: string;
  titleOrRole?: string;
}

export interface BookReview {
  quote: string;
  reviewer?: string;
  source: string;
  isStarred?: boolean;
}

export interface BookExcerptOrWriting {
  title: string;
  publication: string;
  year?: string | number;
  url?: string;
}

export interface BookRelatedMedia {
  title: string;
  outlet: string;
  year?: string | number;
  url: string;
  type?: "video" | "podcast" | "interview" | "article";
}

export interface Book {
  id: string;
  slug: string;
  order: number;
  title: string;
  subtitle?: string;
  tagline?: string;
  authorCredit: string;
  publisherCredit: string;
  synopsis: string[];
  coverImage: string;
  coverAlt: string;
  accentColor?: string;
  awards?: string[];
  accolades?: string[];
  editions?: BookEdition[];
  praise?: BookPraise[];
  reviews?: BookReview[];
  excerptsAndWriting?: BookExcerptOrWriting[];
  relatedMedia?: BookRelatedMedia[];
  readingGuideUrl?: string;
  galleryImages?: { src: string; caption?: string; alt: string }[];
  prologue?: {
    title: string;
    text: string[];
    byline?: string;
    dateLocation?: string;
  };
}

export interface Anthology {
  id: string;
  chapterTitle: string;
  bookTitle: string;
  editors: string;
  publisherYear: string;
  coverImage?: string;
  excerptUrl?: string;
}

export interface EssayArticle {
  id: string;
  title: string;
  publication: string;
  year?: string | number;
  url?: string;
}

export interface VisualProject {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  images: { src: string; caption?: string; alt: string }[];
  year?: string | number;
}

export interface PressItem {
  id: string;
  category: "interview" | "podcast-video" | "other";
  title: string;
  outlet: string;
  authorOrInterviewer?: string;
  year?: string | number;
  url: string;
  quote?: string;
}

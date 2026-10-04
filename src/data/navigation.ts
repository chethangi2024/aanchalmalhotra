import { getAllBooks } from "./books";

export interface NavChildItem {
  id: string;
  label: string;
  href: string;
  subtitle?: string;
  order?: number;
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
  children?: NavChildItem[];
}

export const getNavItems = (): NavItem[] => {
  const books = getAllBooks();

  return [
    {
      id: "books",
      label: "Books",
      href: "/books",
      children: books.map((book) => ({
        id: book.id,
        label: book.title,
        subtitle: book.subtitle,
        href: `/books/${book.slug}`,
        order: book.order,
      })),
    },
    {
      id: "other-writing",
      label: "Other Writing",
      href: "/other-writing",
    },
    {
      id: "visual-art-and-research",
      label: "Visual Art & Research",
      href: "/visual-art-and-research",
    },
    {
      id: "press-and-interviews",
      label: "Press & Interviews",
      href: "/press-and-interviews",
    },
    {
      id: "about",
      label: "About",
      href: "/about",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
    /*
      Adding "News" or any future navigation tab is as simple as un-commenting or inserting:
      {
        id: "news",
        label: "News",
        href: "/news"
      }
    */
  ];
};

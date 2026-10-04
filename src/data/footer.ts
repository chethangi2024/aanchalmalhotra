export interface FooterLinkItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  sublabel?: string;
  ariaLabel?: string;
}

export interface FooterSection {
  id: string;
  title: string;
  items: FooterLinkItem[];
}

export interface FooterConfig {
  variant: "light" | "warm-mustard";
  archiveHighlight: {
    tag: string;
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    isExternal: boolean;
  };
  navigationSections: FooterSection[];
  socialLinks: FooterLinkItem[];
  colophon: {
    author: string;
    roles: string;
    location: string;
    copyrightYear: number;
    tagline: string;
  };
}

export const footerData: FooterConfig = {
  // Can easily toggle to "warm-mustard" or "light"
  variant: "light",
  archiveHighlight: {
    tag: "Digital Archive & Repository",
    title: "Museum of Material Memory",
    description:
      "A crowdsourced digital repository of South Asian material culture, family heirlooms, and generational recollections.",
    href: "https://museumofmaterialmemory.com/",
    linkLabel: "Explore the Archive",
    isExternal: true,
  },
  socialLinks: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/aanchalmalhotra",
      isExternal: true,
      ariaLabel: "Aanchal Malhotra on Instagram",
    },
    {
      id: "twitter",
      label: "Twitter / X",
      href: "https://twitter.com/AanchalMalhotra",
      isExternal: true,
      ariaLabel: "Aanchal Malhotra on Twitter / X",
    },
  ],
  navigationSections: [
    {
      id: "works",
      title: "Selected Works",
      items: [
        {
          id: "handful-of-home",
          label: "A Handful of Home",
          sublabel: "Forthcoming May 2026",
          href: "/books/a-handful-of-home",
        },
        {
          id: "bahrisons",
          label: "Bahrisons: Chronicle of a Bookshop",
          sublabel: "2023",
          href: "/books/bahrisons-chronicle-of-a-bookshop",
        },
        {
          id: "book-of-everlasting-things",
          label: "The Book of Everlasting Things",
          sublabel: "2022",
          href: "/books/the-book-of-everlasting-things",
        },
        {
          id: "in-the-language-of-remembering",
          label: "In the Language of Remembering",
          sublabel: "2022",
          href: "/books/in-the-language-of-remembering",
        },
        {
          id: "remnants-of-a-separation",
          label: "Remnants of a Separation",
          sublabel: "2017",
          href: "/books/remnants-of-a-separation",
        },
      ],
    },
    {
      id: "explore",
      title: "Index",
      items: [
        { id: "other-writing", label: "Other Writing", href: "/other-writing" },
        { id: "visual-art", label: "Visual Art & Research", href: "/visual-art-and-research" },
        { id: "press", label: "Press & Interviews", href: "/press-and-interviews" },
        { id: "about", label: "About", href: "/about" },
        { id: "contact", label: "Contact & Representation", href: "/contact" },
      ],
    },
  ],
  colophon: {
    author: "Aanchal Malhotra",
    roles: "Oral Historian & Writer",
    location: "New Delhi, India",
    copyrightYear: new Date().getFullYear(),
    tagline: "Designed as an enduring literary and cultural archive.",
  },
};

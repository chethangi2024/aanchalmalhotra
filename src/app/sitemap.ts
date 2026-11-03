import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllBooks } from "@/data/books";

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://aanchalmalhotra.com"
).replace(/\/$/, "");

function getFileLastModified(relativeFilePath: string): Date | undefined {
  try {
    const fullPath = path.join(process.cwd(), relativeFilePath);
    const stats = fs.statSync(fullPath);
    return stats.mtime;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{
    route: string;
    sourceFile: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    {
      route: "",
      sourceFile: "src/app/page.tsx",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      route: "/books",
      sourceFile: "src/app/books/page.tsx",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      route: "/books/remnants-of-a-separation/reading-guide",
      sourceFile: "src/app/books/remnants-of-a-separation/reading-guide/page.tsx",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      route: "/other-writing",
      sourceFile: "src/app/other-writing/page.tsx",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      route: "/visual-art-and-research",
      sourceFile: "src/app/visual-art-and-research/page.tsx",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      route: "/visual-art-and-research/the-book-of-everlasting-things",
      sourceFile:
        "src/app/visual-art-and-research/the-book-of-everlasting-things/page.tsx",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      route: "/visual-art-and-research/in-praise-of-shadows",
      sourceFile:
        "src/app/visual-art-and-research/in-praise-of-shadows/page.tsx",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      route: "/press-and-interviews",
      sourceFile: "src/app/press-and-interviews/page.tsx",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      route: "/about",
      sourceFile: "src/app/about/page.tsx",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      route: "/contact",
      sourceFile: "src/app/contact/page.tsx",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      route: "/privacy-policy",
      sourceFile: "src/app/privacy-policy/page.tsx",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      route: "/terms-of-use",
      sourceFile: "src/app/terms-of-use/page.tsx",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const booksLastModified = getFileLastModified("src/data/books.ts");

  const bookEntries: MetadataRoute.Sitemap = getAllBooks().map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    ...(booksLastModified ? { lastModified: booksLastModified } : {}),
    changeFrequency: "yearly",
    priority: 0.9,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => {
    const lastModified = getFileLastModified(page.sourceFile);
    return {
      url: `${BASE_URL}${page.route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });

  return [...staticEntries, ...bookEntries];
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBooks } from "@/data/books";

export const metadata: Metadata = {
  title: "Books | Aanchal Malhotra",
  description:
    "Explore the published and forthcoming works by oral historian and writer Aanchal Malhotra.",
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              BOOKS
            </h1>
            <p className="mt-3 text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] italic">
              Non-fiction, fiction, and oral histories of memory, material culture, and belonging.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {books.map((book) => (
              <div
                key={book.id}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-xs bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] transition-all duration-300 shadow-[0_4px_16px_rgba(28,27,26,0.03)]"
              >
                <Link
                  href={`/books/${book.slug}`}
                  className="relative w-[140px] sm:w-[150px] aspect-[2/3] shrink-0 mx-auto sm:mx-0 shadow-[0_8px_20px_rgba(28,27,26,0.08)] group-hover:shadow-[0_12px_28px_rgba(28,27,26,0.14)] transition-shadow duration-300 overflow-hidden rounded-xs"
                >
                  <Image
                    src={book.coverImage}
                    alt={book.coverAlt || book.title}
                    fill
                    sizes="(max-width: 640px) 140px, 150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.15em] text-[var(--color-accent-mustard)] font-medium">
                      {book.publisherCredit || "Publication"}
                    </span>
                    <h2 className="text-[22px] sm:text-[24px] font-normal leading-snug mt-1 text-[var(--color-text-primary)]">
                      <Link
                        href={`/books/${book.slug}`}
                        className="hover:text-[var(--color-accent-mustard)] transition-colors"
                      >
                        {book.title}
                      </Link>
                    </h2>
                    {book.subtitle && (
                      <p className="text-[16px] sm:text-[17px] text-[var(--color-text-muted)] italic mt-0.5">
                        {book.subtitle}
                      </p>
                    )}
                    <p className="text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] mt-3 line-clamp-3">
                      {book.synopsis?.[0]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <Link
                      href={`/books/${book.slug}`}
                      className="text-[13px] tracking-wider uppercase underline underline-offset-4 hover:text-[var(--color-accent-mustard)] transition-colors"
                    >
                      View Details &rarr;
                    </Link>
                    {book.slug === "remnants-of-a-separation" && (
                      <Link
                        href="/books/remnants-of-a-separation/reading-guide"
                        className="text-[12px] tracking-wider uppercase text-[var(--color-accent-mustard)] hover:underline"
                      >
                        Reading Guide
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

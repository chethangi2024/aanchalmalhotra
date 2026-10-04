import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/types";

interface BookCoverProps {
  book: Book;
  index: number;
  priority?: boolean;
  className?: string;
}

export default function BookCover({
  book,
  index,
  priority = false,
  className = "",
}: BookCoverProps) {
  return (
    <article
      className={`group relative flex flex-col focus-within:ring-1 focus-within:ring-[var(--color-accent-mustard)] rounded-xs ${className}`}
      aria-labelledby={`book-title-${book.id}`}
    >
      <Link
        href={`/books/${book.slug}`}
        className="block focus:outline-none"
        tabIndex={0}
        aria-label={`${book.title} - View Book Details`}
      >
        {/* Cover Canvas Container */}
        <div className="relative w-full aspect-[2/3] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_8px_24px_rgba(28,27,26,0.06)] group-hover:shadow-[0_16px_36px_rgba(28,27,26,0.12)] transition-all duration-700 ease-[var(--ease-editorial)]">
          <Image
            src={book.coverImage}
            alt={book.coverAlt || `Front cover of ${book.title}`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 360px"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
          />
          {/* Subtle archival tactile overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </Link>

      {/* Book Metadata Below Cover */}
      <div className="mt-5 text-left">
        <h2
          id={`book-title-${book.id}`}
          className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-mustard)] transition-colors duration-300 leading-snug"
        >
          <Link href={`/books/${book.slug}`} className="hover:underline focus:outline-none">
            {book.title}
          </Link>
        </h2>
        {book.subtitle && (
          <p className="mt-1 text-[var(--text-xs)] font-[family-name:var(--font-serif-body)] italic text-[var(--color-text-secondary)] line-clamp-1">
            {book.subtitle}
          </p>
        )}
      </div>
    </article>
  );
}

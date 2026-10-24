import type { Metadata } from "next";
import Image from "next/image";
import { anthologiesData, selectedEssaysArticlesData } from "@/data/otherWritingData";

export const metadata: Metadata = {
  title: "Other Writing | Aanchal Malhotra",
  description:
    "Anthologies, book chapters, selected essays, and articles by oral historian and writer Aanchal Malhotra.",
};

export default function OtherWritingPage() {
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
              OTHER WRITING
            </h1>
          </div>

          {/* Section 1: Selected Essays & Articles */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-[20px] sm:text-[22px] font-normal tracking-[0.08em] text-[var(--color-text-primary)] pb-3 mb-6 border-b border-[var(--color-border-subtle)] leading-snug">
              Selected Essays &amp; Articles
            </h2>

            <div className="space-y-2.5">
              {selectedEssaysArticlesData.map((essay) => (
                <p
                  key={essay.id}
                  className="m-0 font-[family-name:var(--font-serif-body)] text-[18px] sm:text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums]"
                >
                  {essay.url ? (
                    <a
                      href={essay.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                      style={{ color: "#947D53", textDecoration: "none" }}
                    >
                      {essay.title}
                    </a>
                  ) : (
                    <span className="text-[var(--color-text-primary)]">
                      {essay.title}
                    </span>
                  )}
                  <span>, </span>
                  <em className="italic">{essay.publication}</em>
                  <span>, </span>
                  <span>{essay.year}</span>
                </p>
              ))}
            </div>
          </section>

          {/* Section 2: Anthologies */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-normal tracking-[0.08em] text-[var(--color-text-primary)] pb-3 mb-8 border-b border-[var(--color-border-subtle)] leading-snug">
              Anthologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {anthologiesData.map((item) => (
                <div key={item.id} className="flex items-start gap-5 group">
                  {item.coverImage ? (
                    <div className="relative w-[90px] sm:w-[105px] aspect-[2/3] shrink-0 overflow-hidden shadow-[0_2px_12px_rgba(28,27,26,0.08)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)]">
                      <Image
                        src={item.coverImage}
                        alt={`Cover of ${item.bookTitle}`}
                        fill
                        sizes="110px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-[16px] sm:text-[17.6px] font-normal text-[var(--color-text-primary)] leading-[1.3] [font-variant-numeric:oldstyle-nums]">
                      &ldquo;{item.chapterTitle}&rdquo;
                    </h3>
                    <p className="text-[16px] sm:text-[17px] text-[var(--color-text-secondary)] italic mt-1.5 leading-snug">
                      in {item.bookTitle}
                    </p>
                    <p className="text-[14px] sm:text-[14.5px] text-[var(--color-text-muted)] mt-1.5 leading-normal">
                      {item.editors} · {item.publisherYear}
                    </p>
                    {item.excerptUrl && (
                      <div className="mt-2.5">
                        <a
                          href={item.excerptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[12.5px] tracking-[0.1em] uppercase font-medium text-[var(--color-accent-mustard)] hover:underline underline-offset-4"
                        >
                          {item.excerptLabel || "Read an Excerpt"} &rarr;
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

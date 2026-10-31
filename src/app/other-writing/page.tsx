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
                fontSize: "24px",
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
            <h2
              className="font-normal text-[var(--color-text-primary)] pb-3 mb-6 border-b border-[var(--color-border-subtle)] leading-snug"
              style={{ fontSize: "22px" }}
            >
              Selected Essays &amp; Articles
            </h2>

            <div className="space-y-2.5">
              {selectedEssaysArticlesData.map((essay) => (
                <p
                  key={essay.id}
                  className="m-0 font-[family-name:var(--font-serif-body)] text-[17px] leading-[24.2px] text-[#000000] [font-variant-numeric:oldstyle-nums]"
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
            <h2
              className="font-normal text-[var(--color-text-primary)] pb-3 mb-8 border-b border-[var(--color-border-subtle)] leading-snug"
              style={{ fontSize: "22px" }}
            >
              Anthologies
            </h2>

            <div className="flex flex-col space-y-10 md:space-y-12">
              {anthologiesData.map((item) => (
                <div key={item.id} className="flex items-start gap-5 sm:gap-6 group">
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
                    {/* Title block: Essay Title directly followed by Anthology Book Title without extra gap */}
                    <div className="leading-snug">
                      <div
                        className="text-[16px] sm:text-[17px] font-normal text-[var(--color-text-primary)] italic m-0 p-0"
                        style={{ fontStyle: "italic", margin: 0, padding: 0 }}
                      >
                        <em className="italic">
                          {item.id === "material-memory-partition" ||
                          item.chapterTitle ===
                            "Material Memory and the Partition of India: A Narrative Interview with Aanchal Malhotra by E. Dawson Varughese" ? (
                            <>
                              Material Memory and the Partition of India:
                              <br />
                              A Narrative Interview with Aanchal Malhotra by E. Dawson Varughese
                            </>
                          ) : (
                            item.chapterTitle
                          )}
                        </em>
                      </div>
                      <div
                        className="text-[16px] sm:text-[17px] font-normal text-[var(--color-text-secondary)] not-italic m-0 p-0"
                        style={{ fontStyle: "normal", margin: 0, padding: 0 }}
                      >
                        {item.bookTitle}
                      </div>
                    </div>

                    {/* Publication block: Small consistent gap only above editor, publisher directly below */}
                    <div className="mt-3 leading-snug" style={{ marginTop: "12px" }}>
                      <div
                        className="text-[16px] sm:text-[17px] font-normal text-[var(--color-text-secondary)] not-italic m-0 p-0"
                        style={{ fontStyle: "normal", margin: 0, padding: 0 }}
                      >
                        {item.editors}
                      </div>
                      <div
                        className="text-[16px] sm:text-[17px] font-normal text-[var(--color-text-secondary)] not-italic m-0 p-0"
                        style={{ fontStyle: "normal", margin: 0, padding: 0 }}
                      >
                        {item.publisherYear}
                      </div>
                    </div>

                    {item.excerptUrl && (
                      <div className="mt-3" style={{ marginTop: "12px" }}>
                        <a
                          href={item.excerptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[12.5px] tracking-[0.1em] font-medium text-[var(--color-accent-mustard)] no-underline hover:opacity-80 transition-opacity"
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

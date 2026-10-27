"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/types";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface BookDetailClientProps {
  book: Book;
}

interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

const COVER_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "a-handful-of-home": { width: 1458, height: 1716 },
  "bahrisons-chronicle-of-a-bookshop": { width: 776, height: 1188 },
  "the-book-of-everlasting-things": { width: 1857, height: 2787 },
  "in-the-language-of-remembering": { width: 1890, height: 2787 },
  "remnants-of-a-separation": { width: 1871, height: 2757 },
};

export default function BookDetailClient({ book }: BookDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverDim = COVER_DIMENSIONS[book.slug] || { width: 800, height: 1200 };
  const isBahrisons = book.slug === "bahrisons-chronicle-of-a-bookshop";
  const isLanguageOfRemembering = book.slug === "in-the-language-of-remembering";
  const isEverlastingThings = book.slug === "the-book-of-everlasting-things";
  const isRemnants = book.slug === "remnants-of-a-separation";
  const isCollapsibleBook =
    isBahrisons ||
    isLanguageOfRemembering ||
    isEverlastingThings ||
    isRemnants;
  const hasRefinedQuoteSpacing =
    isLanguageOfRemembering ||
    isEverlastingThings ||
    isRemnants;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    gallery: false,
    prologue: false,
    excerpts: false,
    editions: false,
    praise: false,
    reviews: false,
    relatedMedia: false,
  });

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
    setTimeout(() => {
      const { ScrollTrigger } = registerGSAP();
      ScrollTrigger?.refresh();
    }, 100);
  };

  const [activeLightboxItem, setActiveLightboxItem] = useState<{
    items: LightboxItem[];
    index: number;
  } | null>(null);

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxItem(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    setActiveLightboxItem((prev) => {
      if (!prev || prev.items.length <= 1) return prev;
      return {
        ...prev,
        index: (prev.index - 1 + prev.items.length) % prev.items.length,
      };
    });
  }, []);

  const handleNextImage = useCallback(() => {
    setActiveLightboxItem((prev) => {
      if (!prev || prev.items.length <= 1) return prev;
      return {
        ...prev,
        index: (prev.index + 1) % prev.items.length,
      };
    });
  }, []);

  useEffect(() => {
    if (!activeLightboxItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeLightboxItem, handleCloseLightbox, handlePrevImage, handleNextImage]);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".book-reveal-section");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to format text with italics for known book titles
  const formatTextWithItalics = (text: string) => {
    const titlesToItalicize = [
      "The Book of Everlasting Things",
      "Bahrisons: Chronicle of a Bookshop",
      "Chronicle of a Bookshop",
      "Remnants of a Separation",
      "Remnants of Partition",
      "In the Language of Remembering",
      "Language of Remembering",
      "A Handful of Home",
      "The Mountains Sing",
      "Narcopolis",
      "Four Treasures of the Sky",
      "The Association of Small Bombs",
      "The Heart Asks Pleasure First",
      "Partition Voices",
      "The Secrets We Kept",
      "The Yellow Bird Sings",
      "Once We Were Home",
    ];

    // Regex that matches any of the titles
    const pattern = new RegExp(`(${titlesToItalicize.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      if (titlesToItalicize.includes(part)) {
        return <em key={i} className="italic">{part}</em>;
      }
      return part;
    });
  };

  const galleryLightboxItems: LightboxItem[] = (book.galleryImages || []).map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }));

  const editionLightboxItems: LightboxItem[] = (book.editions || [])
    .filter((ed) => ed.coverImage)
    .map((ed) => ({
      src: ed.coverImage!,
      alt: `${ed.region} edition of ${book.title}`,
      caption: `${ed.region} — ${ed.publisher}${ed.year ? ` (${ed.year})` : ""}${ed.title && ed.title !== book.title ? ` [${ed.title}]` : ""}`,
    }));

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[calc(100vh-var(--header-height)-180px)] bg-[#FAF8F5] pt-10 md:pt-14 pb-20 md:pb-28"
    >
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)] text-left">
          
          {/* SECTION 1: BOOK OPENING (TITLE, BYLINE, BALANCED TWO-COLUMN COVER & SYNOPSIS) */}
          <div className="book-reveal-section book-opening-section">
            {/* Title & Author Byline across top */}
            <div className="book-title-header text-left">
              <h1 className="book-title-heading text-[#222222] uppercase font-normal font-[family-name:var(--font-serif-display)] m-0">
                {book.title}
              </h1>
              {book.authorCredit && (
                <p className="book-author-byline text-[16px] sm:text-[18px] text-[var(--color-text-secondary)] font-normal italic leading-relaxed m-0 mt-3">
                  {book.authorCredit}
                </p>
              )}
            </div>

            {/* Two-Column Layout below title/byline: 375px cover column, expanded text column */}
            <div className="book-opening-columns items-start">
              {/* Left Column: Book Cover Image & Caption */}
              <div className="book-opening-cover-col flex flex-col items-center sm:items-start">
                <div className="book-cover-wrapper">
                  <div className="w-full relative overflow-hidden rounded-xs shadow-[0_10px_28px_rgba(28,27,26,0.08)] bg-[var(--color-bg-muted)]">
                    <Image
                      src={book.coverImage}
                      alt={book.coverAlt || `Front cover of ${book.title}`}
                      width={coverDim.width}
                      height={coverDim.height}
                      priority
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 315px, 375px"
                      className="w-full h-auto block object-contain"
                    />
                  </div>
                  {/* Caption directly beneath the cover */}
                  {book.publisherCredit && (
                    <p className="book-cover-caption">
                      {book.publisherCredit}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column: Awards & Opening Book Content */}
              <div className="book-opening-text-col flex flex-col justify-start text-left pt-0">
                {/* Awards if any */}
                {book.awards && book.awards.length > 0 && (
                  <div className="book-awards-section">
                    <h2>AWARDS &amp; RECOGNITION</h2>
                    <div className="book-awards-list">
                      {book.awards.map((award, i) => (
                        <p key={i} className="m-0">
                          {award}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* About the Book / Synopsis */}
                <div className="book-synopsis-content font-normal text-[var(--color-text-secondary)]">
                  {book.synopsis.map((paragraph, index) => (
                    <p key={index} className="m-0">
                      {formatTextWithItalics(paragraph)}
                    </p>
                  ))}
                </div>

                {/* Visual Research Guide / Reading Guide Link if specified */}
                {book.readingGuideUrl && (
                  <div className="mt-4 pt-1">
                    <Link
                      href={book.readingGuideUrl}
                      className="inline-block text-[13px] tracking-wider uppercase underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                      style={{
                        color: "#947D53",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      {book.readingGuideLabel || "TO VIEW A VISUAL RESEARCH GUIDE, CLICK HERE"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 2: GALLERY (If present, e.g. Bahrisons: Chronicle of a Bookshop) */}
          {book.galleryImages && book.galleryImages.length > 0 && (
            <div className={`book-reveal-section ${isBahrisons ? "mt-8 md:mt-10" : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isBahrisons ? (
                <button
                  type="button"
                  onClick={() => toggleSection("gallery")}
                  aria-expanded={openSections.gallery}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Gallery
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.gallery ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-8">
                  GALLERY
                </h2>
              )}

              {(!isBahrisons || openSections.gallery) && (
                <div className={`${isBahrisons ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start`}>
                  {book.galleryImages.map((image, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveLightboxItem({ items: galleryLightboxItems, index: idx })}
                      className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] cursor-pointer w-full"
                      aria-label={`View enlarged image: ${image.caption || image.alt}`}
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center p-0 transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-contain"
                        />
                      </div>
                      {image.caption && (
                        <p
                          className="text-center text-[var(--color-text-secondary)] font-normal leading-snug line-clamp-3 group-hover:text-[var(--color-text-primary)] transition-colors w-full"
                          style={
                            isBahrisons
                              ? {
                                  fontSize: "clamp(13px, 1vw, 14px)",
                                  marginTop: "14px",
                                  lineHeight: "1.35",
                                }
                              : {
                                  fontSize: "14px",
                                  marginTop: "10px",
                                }
                          }
                        >
                          {image.caption}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 3: PROLOGUE (If present, e.g. Bahrisons) */}
          {book.prologue && (
            <div className={`book-reveal-section ${isBahrisons ? "mt-0" : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              <div className="w-full">
                {isBahrisons ? (
                  <button
                    type="button"
                    onClick={() => toggleSection("prologue")}
                    aria-expanded={openSections.prologue}
                    className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                  >
                    <h2
                      className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                      style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                    >
                      Prologue
                    </h2>
                    <span className="w-8 h-8 flex items-center justify-center shrink-0">
                      <svg
                        className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                          openSections.prologue ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-6">
                    {book.prologue.title}
                  </h2>
                )}

                {(!isBahrisons || openSections.prologue) && (
                  <div className={isBahrisons ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""}>
                    <div className="space-y-4 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] font-normal text-left sm:text-justify [text-align-last:left] [hyphens:none] [word-break:normal] [overflow-wrap:normal]">
                      {book.prologue.text.map((pText, pIdx) => (
                        <p
                          key={pIdx}
                          className="m-0"
                          style={isBahrisons ? { lineHeight: "26px" } : undefined}
                        >
                          {formatTextWithItalics(pText)}
                        </p>
                      ))}
                    </div>
                    {(book.prologue.byline || book.prologue.dateLocation) && (
                      <div className="mt-6 text-[15px] sm:text-[16px] text-[var(--color-text-primary)] font-normal">
                        {book.prologue.byline && <p className="m-0 font-medium">{book.prologue.byline}</p>}
                        {book.prologue.dateLocation && <p className="m-0 text-[var(--color-text-muted)] italic">{book.prologue.dateLocation}</p>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SECTION 4: EDITIONS (If present) */}
          {book.editions && book.editions.length > 0 && (
            <div className={`book-reveal-section ${isCollapsibleBook ? (isBahrisons ? "mt-0" : "mt-8 md:mt-10") : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isCollapsibleBook ? (
                <button
                  type="button"
                  onClick={() => toggleSection("editions")}
                  aria-expanded={openSections.editions}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Editions
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.editions ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-8">
                  EDITIONS
                </h2>
              )}

              {(!isCollapsibleBook || openSections.editions) && (
                <div className={isCollapsibleBook ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""}>
                  {/* If editions have cover images, display as interactive gallery grid */}
                  {book.editions.some((ed) => ed.coverImage) ? (
                    <div>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
                        {book.editions.map((ed, edIdx) => {
                          const lightboxIdx = editionLightboxItems.findIndex(
                            (item) => item.src === ed.coverImage
                          );

                          return (
                            <div key={ed.id} className="flex flex-col items-center text-center w-full">
                              {ed.coverImage ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (lightboxIdx !== -1) {
                                      setActiveLightboxItem({
                                        items: editionLightboxItems,
                                        index: lightboxIdx,
                                      });
                                    }
                                  }}
                                  className="group w-full max-w-[200px] flex flex-col items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] cursor-pointer"
                                  aria-label={`View enlarged edition: ${ed.region} - ${ed.publisher}`}
                                >
                                  <div className="relative w-full aspect-[2/3] overflow-hidden flex items-center justify-center p-0 transition-transform duration-300 group-hover:scale-[1.02] shadow-[0_8px_24px_rgba(28,27,26,0.08)]">
                                    <Image
                                      src={ed.coverImage}
                                      alt={`${ed.region} edition of ${book.title}`}
                                      fill
                                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
                                      className="object-contain"
                                    />
                                  </div>
                                </button>
                              ) : (
                                <div className="w-full aspect-[2/3] bg-[var(--color-bg-muted)] flex items-center justify-center p-4 border border-[var(--color-border-subtle)]">
                                  <span className="text-[14px] text-[var(--color-text-muted)] italic">{ed.title}</span>
                                </div>
                              )}

                              {/* Caption beneath cover */}
                              <div className="mt-3 text-center w-full">
                                <p className="text-[15px] sm:text-[16px] text-[var(--color-text-primary)] italic font-normal leading-snug m-0">
                                  {ed.region} — {ed.publisher}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Forthcoming editions notice from client doc comment 6 */}
                      {book.forthcomingEditionsNotice && (
                        <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] text-center md:text-left">
                          <p className="text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] italic font-normal m-0">
                            {book.forthcomingEditionsNotice}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {book.editions.map((ed) => (
                        <div key={ed.id} className="p-4 bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
                          <p className="font-semibold text-[17px] text-[var(--color-text-primary)] m-0">{ed.region}</p>
                          <p className="text-[17px] text-[var(--color-text-secondary)] m-0">{ed.publisher} {ed.year ? `(${ed.year})` : ""}</p>
                          {ed.language && <p className="text-[16px] text-[var(--color-text-muted)] italic m-0">{ed.language}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* SECTION 5: PRAISE (If present) */}
          {book.praise && book.praise.length > 0 && (
            <div className={`book-reveal-section ${isCollapsibleBook ? (isLanguageOfRemembering ? "mt-8 md:mt-10" : "mt-0") : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isCollapsibleBook ? (
                <button
                  type="button"
                  onClick={() => toggleSection("praise")}
                  aria-expanded={openSections.praise}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Praise
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.praise ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-8">
                  PRAISE
                </h2>
              )}
              {(!isCollapsibleBook || openSections.praise) && (
                <div className={`${isCollapsibleBook ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""} space-y-6 w-full`}>
                  {book.praise.map((p, idx) => (
                    <div key={idx} className="m-0">
                      <p
                        className="text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] not-italic m-0 mb-1.5"
                        style={hasRefinedQuoteSpacing ? { marginBottom: "4px" } : undefined}
                      >
                        “{formatTextWithItalics(p.quote)}”
                      </p>
                      <p
                        className="text-[14px] sm:text-[15px] text-[var(--color-text-primary)] not-italic m-0"
                        style={hasRefinedQuoteSpacing ? { marginBottom: idx === book.praise!.length - 1 ? "0px" : "22px" } : undefined}
                      >
                        — {p.author}{p.titleOrRole && <>, {formatTextWithItalics(p.titleOrRole)}</>}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 6: REVIEWS (If present) */}
          {book.reviews && book.reviews.length > 0 && (
            <div className={`book-reveal-section ${isCollapsibleBook ? "mt-0" : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isCollapsibleBook ? (
                <button
                  type="button"
                  onClick={() => toggleSection("reviews")}
                  aria-expanded={openSections.reviews}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Reviews
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.reviews ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-8">
                  REVIEWS
                </h2>
              )}
              {(!isCollapsibleBook || openSections.reviews) && (
                <div className={`${isCollapsibleBook ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""} space-y-6 w-full`}>
                  {book.reviews.map((rev, idx) => (
                    <div key={idx} className="m-0">
                      <p
                        className="text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] m-0 mb-1.5"
                        style={hasRefinedQuoteSpacing ? { marginBottom: "4px" } : undefined}
                      >
                        “{formatTextWithItalics(rev.quote)}”
                      </p>
                      <p
                        className="text-[14px] sm:text-[15px] text-[var(--color-text-primary)] m-0"
                        style={hasRefinedQuoteSpacing ? { marginBottom: idx === book.reviews!.length - 1 ? "0px" : "22px" } : undefined}
                      >
                        — {rev.reviewer ? `${rev.reviewer}, ` : ""}
                        <em className="italic">{rev.source}</em>
                        {rev.isStarred && <span className="ml-1 text-[var(--color-accent-mustard)] not-italic">(starred review)</span>}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 7: EXCERPTS & OTHER WRITING / INTERVIEWS & RELATED WRITING */}
          {book.excerptsAndWriting && book.excerptsAndWriting.length > 0 && (
            <div className={`book-reveal-section ${isCollapsibleBook ? "mt-0" : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isCollapsibleBook ? (
                <button
                  type="button"
                  onClick={() => toggleSection("excerpts")}
                  aria-expanded={openSections.excerpts}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Excerpts &amp; Other Writing
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.excerpts ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-6">
                  EXCERPTS &amp; OTHER WRITING
                </h2>
              )}

              {(!isCollapsibleBook || openSections.excerpts) && (
                <div className={`${isCollapsibleBook ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""} space-y-2.5 w-full text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums]`}>
                  {book.excerptsAndWriting.map((item, idx) => (
                    <p key={idx} className="m-0">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isCollapsibleBook
                              ? "no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                              : "underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          }
                          style={{
                            color: "#947D53",
                            textDecoration: isCollapsibleBook ? "none" : "underline",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span>{item.title}</span>
                      )}
                      {item.publication && (
                        isCollapsibleBook ? (
                          <>
                            {", "}
                            <span className="italic text-[var(--color-text-muted)]">
                              {item.publication}
                            </span>
                          </>
                        ) : (
                          <span className="italic text-[var(--color-text-muted)]">
                            {" "}({item.publication}{item.year ? `, ${item.year}` : ""})
                          </span>
                        )
                      )}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 8: RELATED MEDIA (If present) */}
          {book.relatedMedia && book.relatedMedia.length > 0 && (
            <div className={`book-reveal-section ${isCollapsibleBook ? "mt-0" : "mt-16 md:mt-20 pt-12 md:pt-14"} border-t border-[var(--color-border)]`}>
              {isCollapsibleBook ? (
                <button
                  type="button"
                  onClick={() => toggleSection("relatedMedia")}
                  aria-expanded={openSections.relatedMedia}
                  className="w-full flex items-center justify-between text-left group transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] py-2.5 sm:py-3"
                >
                  <h2
                    className="font-normal text-[#222222] m-0 group-hover:text-[var(--color-accent-mustard)] transition-colors"
                    style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
                  >
                    Related Media
                  </h2>
                  <span className="w-8 h-8 flex items-center justify-center shrink-0">
                    <svg
                      className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                        openSections.relatedMedia ? "rotate-90 text-[var(--color-text-primary)]" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ) : (
                <h2 className="text-[22px] sm:text-[24px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-6">
                  RELATED MEDIA
                </h2>
              )}
              {(!isCollapsibleBook || openSections.relatedMedia) && (
                <div className={`${isCollapsibleBook ? "pt-4 pb-8 sm:pt-5 sm:pb-10" : ""} space-y-3 w-full text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] leading-relaxed`}>
                  {book.relatedMedia.map((media, idx) => (
                    <p key={idx} className="m-0">
                      <a
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          isCollapsibleBook
                            ? "no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                            : "underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                        }
                        style={{
                          color: "#947D53",
                          textDecoration: isCollapsibleBook ? "none" : "underline",
                          textUnderlineOffset: "3px",
                        }}
                      >
                        {media.title}
                      </a>
                      <span className="italic text-[var(--color-text-muted)]">
                        {", "}{media.outlet}{media.year ? `, ${media.year}` : ""}
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && activeLightboxItem.items.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged view"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Top Actions: Counter & Close button */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-10 text-white/80 font-[family-name:var(--font-serif-body)]">
            <span className="text-[17px] sm:text-[19px] tracking-[0.1em] uppercase">
              {activeLightboxItem.index + 1} / {activeLightboxItem.items.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseLightbox();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[16px] sm:text-[18px] tracking-[0.1em] uppercase text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded border border-white/20 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Close enlarged view"
            >
              <span className="text-[20px] leading-none">✕</span>
              <span>Close</span>
            </button>
          </div>

          {/* Navigation: Previous Button */}
          {activeLightboxItem.items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Modal Content: Image + Caption */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center">
              <img
                src={activeLightboxItem.items[activeLightboxItem.index].src}
                alt={activeLightboxItem.items[activeLightboxItem.index].alt}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain shadow-2xl rounded-xs bg-[#1A1918]"
              />
            </div>
            {activeLightboxItem.items[activeLightboxItem.index].caption && (
              <p className="mt-4 max-w-2xl text-center text-[17px] sm:text-[19px] md:text-[20px] text-white/95 font-[family-name:var(--font-serif-body)] font-normal leading-[1.35]">
                {activeLightboxItem.items[activeLightboxItem.index].caption}
              </p>
            )}
          </div>

          {/* Navigation: Next Button */}
          {activeLightboxItem.items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

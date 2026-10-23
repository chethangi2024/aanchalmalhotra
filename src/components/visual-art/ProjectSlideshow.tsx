"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import type { GallerySlide } from "@/data/visualArtData";

interface ProjectSlideshowProps {
  slides: GallerySlide[];
  projectTitle: string;
  projectSubtitle?: string;
  aboutSection?: {
    title: string;
    text?: string;
    content?: React.ReactNode;
  };
}

export default function ProjectSlideshow({
  slides,
  projectTitle,
  projectSubtitle,
  aboutSection,
}: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full pt-8 md:pt-12 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Breadcrumb near upper-left content margin */}
          <div className="mb-6 md:mb-8">
            <Link
              href="/visual-art-and-research"
              className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors tracking-[0.05em]"
            >
              <span aria-hidden="true">&larr;</span> Visual Art &amp; Research
            </Link>
          </div>

          {/* Centered Project Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                letterSpacing: "0.15em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              {projectTitle}
            </h1>
            {projectSubtitle && (
              <p className="mt-2 text-[16px] sm:text-[18px] text-[var(--color-text-secondary)] italic leading-relaxed">
                {projectSubtitle}
              </p>
            )}
          </div>

          {/* Gallery Presentation - Centered container approx 680-720px wide on desktop */}
          <div
            className="w-full max-w-[720px] mx-auto select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col items-center">
              <div className="inline-block max-w-full">
                {/* Main Gallery Image Frame with subtle light-neutral border hugging image */}
                <div className="relative border border-[var(--color-border-subtle)] overflow-hidden shadow-[0_1px_6px_rgba(28,27,26,0.03)] bg-[var(--color-bg)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt || currentSlide.title}
                    className="block max-h-[68vh] w-auto max-w-full object-contain mx-auto"
                  />

                  {/* Circular Previous Arrow Control Overlaid on Left Edge */}
                  <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous image"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-[var(--color-text-primary)] shadow-sm hover:shadow transition-all opacity-85 hover:opacity-100 z-10 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 -translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Circular Next Arrow Control Overlaid on Right Edge */}
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next image"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-[var(--color-text-primary)] shadow-sm hover:shadow transition-all opacity-85 hover:opacity-100 z-10 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Title and Tagline positioned neatly beneath image, left-aligned with image left edge */}
                <div className="mt-4 sm:mt-5 text-left">
                  <h2 className="text-[18px] sm:text-[20px] italic font-normal text-[var(--color-text-primary)] leading-snug font-[family-name:var(--font-serif-display)]">
                    {currentSlide.title}
                  </h2>
                  {currentSlide.caption ? (
                    <p className="mt-1.5 text-[18px] sm:text-[19px] not-italic font-normal font-[family-name:var(--font-serif-body)] text-[var(--color-text-secondary)] leading-[26px] whitespace-pre-line [font-variant-numeric:oldstyle-nums]">
                      {currentSlide.caption}
                    </p>
                  ) : null}
                </div>

                {/* Expand / Collapse "About" section with clearly visible arrow indicator */}
                {aboutSection && (
                  <div className="mt-8 sm:mt-10 border-t border-[var(--color-border-subtle)] pt-4">
                    <button
                      type="button"
                      onClick={() => setIsAboutOpen((prev) => !prev)}
                      aria-expanded={isAboutOpen}
                      className="w-full flex items-center justify-between py-2 text-left group transition-colors cursor-pointer select-none"
                    >
                      <span className="text-[17px] sm:text-[18px] font-normal tracking-[0.05em] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-mustard)] transition-colors">
                        {aboutSection.title}
                      </span>
                      {/* Arrow indicator: 18-20px visual size with a comfortable 36x36px clickable area */}
                      <span className="w-9 h-9 -mr-2 flex items-center justify-center shrink-0">
                        <svg
                          className={`w-[18px] h-[18px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-transform duration-300 ${
                            isAboutOpen
                              ? "rotate-90 text-[var(--color-text-primary)]"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isAboutOpen
                          ? "max-h-[800px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 text-[17px] sm:text-[18.6px] leading-[26px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] font-normal not-italic text-justify [text-align-last:left] space-y-4">
                        {aboutSection.content ? aboutSection.content : aboutSection.text}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";
import RemnantsReadingGuide from "@/components/books/RemnantsReadingGuide";

interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

export default function ReadingGuidePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
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
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[calc(100vh-var(--header-height)-180px)] bg-[#FAF8F5] pt-10 md:pt-14 pb-20 md:pb-28"
    >
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)] text-left">
          
          {/* Breadcrumb / Back link */}
          <div className="mb-6">
            <Link
              href="/books/remnants-of-a-separation"
              className="inline-flex items-center text-[13px] tracking-wider uppercase underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
              style={{
                color: "#947D53",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              ← Back to Remnants of a Separation
            </Link>
          </div>

          {/* Reading Guide Content */}
          <RemnantsReadingGuide
            onOpenLightbox={(items, index) => setActiveLightboxItem({ items, index })}
          />

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
              <p className="mt-4 max-w-2xl text-center text-[18px] sm:text-[20px] md:text-[21px] text-white/95 font-[family-name:var(--font-serif-body)] font-normal leading-[1.35]">
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

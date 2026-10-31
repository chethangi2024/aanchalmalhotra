"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";
import { LightboxItem } from "@/data/types";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import RemnantsReadingGuide from "@/components/books/RemnantsReadingGuide";

export default function ReadingGuidePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<{
    items: LightboxItem[];
    index: number;
  } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

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
      className="w-full bg-[#FAF8F5] pt-6 sm:pt-8 md:pt-10 pb-20 md:pb-28"
    >
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)] text-left">
          {/* Reading Guide Content */}
          <RemnantsReadingGuide
            onOpenLightbox={(items, index) =>
              setActiveLightboxItem({ items, index })
            }
          />
        </div>
      </div>

      {/* SHARED GALLERY LIGHTBOX */}
      <GalleryLightbox
        isOpen={Boolean(activeLightboxItem && activeLightboxItem.items.length > 0)}
        items={activeLightboxItem ? activeLightboxItem.items : []}
        currentIndex={activeLightboxItem ? activeLightboxItem.index : 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* FLOATING BACK-TO-TOP BUTTON */}
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#FAF8F5]/90 hover:bg-[#FFFFFF] text-[#222222] hover:text-[#947D53] border border-[#E5E1D8] shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53] ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 -translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

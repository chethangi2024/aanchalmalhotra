"use client";

import { useEffect } from "react";
import { LightboxItem } from "@/data/types";

export interface GalleryLightboxProps {
  isOpen: boolean;
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function renderFormattedCaption(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export default function GalleryLightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!isOpen || items.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, items.length, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged gallery view"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Actions: Image counter in top-left & Simple × close control in top-right */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20 text-white/80 font-[family-name:var(--font-serif-body)]">
        <span
          className="text-[17px] sm:text-[19px] tracking-[0.1em] uppercase font-[family-name:var(--font-serif-body)]"
          style={{ fontFamily: "var(--font-serif-body)" }}
        >
          {currentIndex + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white bg-transparent border-none"
          aria-label="Close enlarged view"
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation: Previous Arrow Control */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Modal Content: Image + Caption */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain shadow-2xl rounded-xs bg-[#1A1918]"
          />
        </div>
        {currentItem.caption && (
          <div
            className="image-caption-gap w-full flex justify-center text-center"
            style={{ marginTop: "var(--spacing-image-to-caption, 14px)" }}
          >
            <p
              className="max-w-2xl text-center text-[17px] sm:text-[19px] md:text-[20px] font-[family-name:var(--font-serif-body)] font-normal leading-[1.35] m-0 whitespace-pre-line"
              style={{
                color: "#FFFFFF",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {renderFormattedCaption(currentItem.caption)}
            </p>
          </div>
        )}
      </div>

      {/* Navigation: Next Arrow Control */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-colors z-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

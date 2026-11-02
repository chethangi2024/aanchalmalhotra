"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { inPraiseOfShadowsSlides } from "@/data/visualArtData";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import { LightboxItem } from "@/data/types";

export default function InPraiseOfShadowsClient() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = inPraiseOfShadowsSlides.map((slide) => ({
    src: slide.image,
    alt: slide.alt || slide.title,
    caption: `*In Praise of Shadows* after Jun'ichirō Tanizaki, 2014`,
  }));

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + lightboxItems.length) % lightboxItems.length;
    });
  }, [lightboxItems.length]);

  const handleNextImage = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % lightboxItems.length;
    });
  }, [lightboxItems.length]);

  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Centered Project Header */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "24px",
                letterSpacing: "0.15em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              In Praise of Shadows
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 4-Image Grid matching Remnants of a Separation editions styling */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
              {inPraiseOfShadowsSlides.map((slide, idx) => (
                <div key={slide.id} className="flex flex-col items-center text-center w-full">
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(idx)}
                    className="group w-full max-w-[200px] flex flex-col items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#222222] cursor-pointer"
                    aria-label={`View enlarged print: ${slide.title} (${idx + 1} of ${inPraiseOfShadowsSlides.length})`}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center p-0 transition-transform duration-300 group-hover:scale-[1.02] shadow-[0_8px_24px_rgba(28,27,26,0.08)] bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
                      <Image
                        src={slide.image}
                        alt={slide.alt || slide.title}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
                        className="object-contain"
                        priority={idx <= 1}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* About Section - Directly beneath gallery, non-collapsible, no arrow */}
            <div className="mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-[var(--color-border-subtle)] text-left">
              <h2
                className="font-normal text-[#222222] m-0 mb-5 font-[family-name:var(--font-serif-display)]"
                style={{ fontSize: "22px" }}
              >
                About
              </h2>
              <div className="text-[17px] leading-[26px] text-[#000000] [font-variant-numeric:oldstyle-nums] font-normal not-italic text-justify [text-align-last:left] space-y-5">
                <p className="m-0 leading-relaxed text-left">
                  <em className="italic">In Praise of Shadows</em> after Jun&apos;ichirō Tanizaki, 2014<br />
                  Limited edition intaglio on copper<br />
                  8.5 x 11 inch plate on 11 x 15 inch Arches paper
                </p>

                <p className="m-0 leading-[26px]">
                  The title of this series is borrowed from and dedicated to the seminal work,{" "}
                  <em className="italic">In Praise of Shadows</em> by Jun&apos;ichirō Tanizaki, written in 1933, on
                  traditional oriental aesthetics contrasted against modern society and change. In it, Tanizaki
                  ruminates on themes of darkness and shadow, subtlety and cloudiness, once significant in
                  conventional Japanese architecture, but that are slowly being replaced by gleam, shine,
                  brightness and opacity. He describes the quieter nuances of everyday life like the smells and
                  sounds of rain, the ambience of dark alcoves, the richness of gold embroidery, the aged
                  delicacy of patina and the discovery of beauty in shadow and shade. And through perceptive
                  examples comparing the light and dark, he makes a contrast between Eastern and Western
                  societies. Inspired by the essay, this series seeks to establish the same — it aims to find
                  the silence of dark places, the subtleties of texture, the quietness of low light through
                  imagery.
                </p>

                <p className="m-0 leading-[26px]">
                  This series was created as a part Val David&apos;s Atelier de l&apos;île&apos;s{" "}
                  <em className="italic">Residency for Artists Early in Their Career</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Lightbox with captions */}
      <GalleryLightbox
        isOpen={activeLightboxIndex !== null}
        items={lightboxItems}
        currentIndex={activeLightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}

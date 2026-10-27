import type { Metadata } from "next";
import Image from "next/image";
import { inPraiseOfShadowsSlides } from "@/data/visualArtData";

export const metadata: Metadata = {
  title: "In Praise of Shadows | Visual Art & Research | Aanchal Malhotra",
  description:
    "Limited edition intaglio on copper after Jun'ichirō Tanizaki, 2014, by Aanchal Malhotra.",
};

const aboutSection = {
  title: "About",
  content: (
    <>
      <p>
        The title of this series is borrowed from and dedicated to the seminal work,{" "}
        <em className="italic">In Praise of Shadows</em> by Jun&apos;ichirō Tanizaki, written in 1933, on
        traditional oriental aesthetics contrasted against modern society and change.
        In it, Tanizaki ruminates on themes of darkness and shadow, subtlety and
        cloudiness, once significant in conventional Japanese architecture, but that
        are slowly being replaced by gleam, shine, brightness and opacity. He
        describes the quieter nuances of everyday life like the smells and sounds of
        rain, the ambience of dark alcoves, the richness of gold embroidery, the aged
        delicacy of patina and the discovery of beauty in shadow and shade. And
        through perceptive examples comparing the light and dark, he makes a
        contrast between Eastern and Western societies. Inspired by the essay, this
        series seeks to establish the same — it aims to find the silence of
        dark places, the subtleties of texture, the quietness of low light through
        imagery.
      </p>
      <p>
        It was created as a part Val David&apos;s Atelier de l&apos;île&apos;s{" "}
        <em className="italic">Residency for Artists Early in Their Career</em>
      </p>
    </>
  ),
};

export default function InPraiseOfShadowsPage() {
  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Centered Project Header */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                letterSpacing: "0.15em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              In Praise of Shadows
            </h1>
          </div>

          {/* Static Image Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {inPraiseOfShadowsSlides.map((slide) => (
                <div key={slide.id} className="flex flex-col text-left">
                  {/* Image Frame preserving full uncropped aspect ratio */}
                  <div className="relative border border-[var(--color-border-subtle)] bg-[var(--color-bg)] shadow-[0_1px_6px_rgba(28,27,26,0.03)]">
                    <Image
                      src={slide.image}
                      alt={slide.alt || slide.title}
                      width={952}
                      height={730}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className="w-full h-auto block object-contain"
                      priority={slide.id <= 2}
                    />
                  </div>

                  {/* Title and Caption */}
                  <div className="mt-3.5 sm:mt-4 text-left">
                    <h2 className="text-[17px] sm:text-[18px] italic font-normal text-[var(--color-text-primary)] leading-snug font-[family-name:var(--font-serif-display)]">
                      {slide.title}
                    </h2>
                    {slide.caption && (
                      <p className="mt-1.5 text-[14px] sm:text-[15px] not-italic font-normal font-[family-name:var(--font-serif-body)] text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line [font-variant-numeric:oldstyle-nums]">
                        {slide.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* About Section - Normal, fully expanded section without accordion or arrow */}
            <div className="mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-[var(--color-border-subtle)] text-left">
              <h2
                className="font-normal text-[#222222] m-0 mb-4 font-[family-name:var(--font-serif-display)]"
                style={{ fontSize: "clamp(20px, 1.65vw, 22px)" }}
              >
                {aboutSection.title}
              </h2>
              <div className="text-[17px] sm:text-[18.6px] leading-[26px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] font-normal not-italic text-justify [text-align-last:left] space-y-4">
                {aboutSection.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import readingGuideData from "@/data/remnantsReadingGuide.json";

interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface RemnantsReadingGuideProps {
  onOpenLightbox: (items: LightboxItem[], index: number) => void;
}

export default function RemnantsReadingGuide({ onOpenLightbox }: RemnantsReadingGuideProps) {
  // Collect all images in the reading guide for lightbox navigation if desired
  const allImages: LightboxItem[] = [];

  // Helper to register an image into allImages and return its index
  const registerImage = (src: string, alt: string, caption?: string): number => {
    const idx = allImages.length;
    allImages.push({ src, alt, caption });
    return idx;
  };

  return (
    <section id="reading-guide" className="book-reveal-section mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[var(--color-border)]">
      {/* Main Section Header */}
      <div className="mb-10 md:mb-12">
        <h2 className="text-[22px] sm:text-[24px] font-normal uppercase leading-snug tracking-[0.06em] text-[#222222] m-0 mb-3">
          {readingGuideData.title}
        </h2>
        <div className="w-12 h-[1px] bg-[#947D53] mt-2 mb-6" />
      </div>

      <div className="space-y-16 md:space-y-20">
        {readingGuideData.subsections.map((sub, sIdx) => {
          // Render each subsection
          if (sub.id === "introduction") {
            const introImg = (sub as any).leadImage;
            const imgIdx = introImg ? registerImage(introImg.src, introImg.alt, introImg.caption) : -1;
            return (
              <div key={sub.id} className="book-reveal-section pt-4">
                <h3 className="text-[20px] sm:text-[22px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5 leading-snug">
                  1. {sub.title}
                </h3>
                
                {/* Intro paragraphs */}
                <div className="reading-guide-intro-text text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums]">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {/* Lead Images (South Asia and UK covers side by side or single) */}
                {(sub as any).leadImages && (
                  <div className="my-8 reading-guide-gallery reading-guide-gallery-2 max-w-2xl mx-auto items-end">
                    {(sub as any).leadImages.map((img: any, iIdx: number) => {
                      const imgIdx = registerImage(img.src, img.alt, img.caption);
                      return (
                        <div key={iIdx} className="flex flex-col items-center w-full">
                          <button
                            type="button"
                            onClick={() => onOpenLightbox(allImages, imgIdx)}
                            className="group block relative w-full cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                            aria-label={`View enlarged image: ${img.caption}`}
                          >
                            <div className="relative w-full aspect-[2/3] max-w-[260px] mx-auto overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 300px"
                                className="object-contain"
                              />
                            </div>
                          </button>
                          {img.caption && (
                            <p
                              className="mt-3.5 mb-2 w-full max-w-[260px] mx-auto text-center text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug"
                              style={{ fontFamily: "var(--font-serif-body)", textAlign: "center" }}
                            >
                              {img.caption}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                {!(sub as any).leadImages && introImg && (
                  <div className="my-8 flex flex-col items-center max-w-2xl mx-auto w-full">
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(allImages, imgIdx)}
                      className="group block relative w-full cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                      aria-label={`View enlarged image: ${introImg.caption}`}
                    >
                      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]">
                        <Image
                          src={introImg.src}
                          alt={introImg.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="object-contain"
                        />
                      </div>
                    </button>
                    {introImg.caption && (
                      <p
                        className="mt-3.5 mb-2 w-full text-center text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug"
                        style={{ fontFamily: "var(--font-serif-body)", textAlign: "center" }}
                      >
                        {introImg.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Paragraphs after image */}
                {(sub as any).paragraphsAfterImage && (
                  <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left">
                    {(sub as any).paragraphsAfterImage.map((p: string, pIdx: number) => (
                      <p key={pIdx} className="m-0">{p}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          if (sub.id === "a-subcontinent-divided") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  2. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {/* 3 Photos */}
                <div className="reading-guide-gallery reading-guide-gallery-3">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, (sub as any).caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image ${iIdx + 1}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption || (sub as any).caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {(sub as any).seeMoreUrl && (
                  <p className="mt-2 text-left text-[15px] sm:text-[16px] leading-snug">
                    <a
                      href={(sub as any).seeMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-opacity hover:opacity-80"
                      style={{ color: "#947D53", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      See more photographs by Margaret Bourke-White here
                    </a>
                  </p>
                )}
              </div>
            );
          }

          if (sub.id === "a-family-history") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  3. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {/* 4 Grandparents Portraits in a grid */}
                <div className="reading-guide-gallery reading-guide-gallery-4">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged portrait: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[3/4] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "the-partition-line") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  4. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {/* 12 Partition Line stories: 3 columns on tablet/desktop */}
                <div className="reading-guide-gallery reading-guide-gallery-3">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "oral-history-and-the-lived-archive") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  5. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                <div className="reading-guide-gallery reading-guide-gallery-2 max-w-3xl mx-auto">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "material-memory") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  6. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {/* 18 Material Memory items: 3 columns */}
                <div className="reading-guide-gallery reading-guide-gallery-3">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-contain"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "ways-to-return-ways-to-hold-on") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  7. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                <div className="reading-guide-gallery reading-guide-gallery-3">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "generational-memory") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  8. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                <div className="reading-guide-gallery reading-guide-gallery-3">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "a-single-line-a-single-word") {
            const singleImg = (sub as any).image;
            const imgIdx = singleImg ? registerImage(singleImg.src, singleImg.alt, singleImg.caption) : -1;
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  9. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {singleImg && (
                  <div className="flex flex-col items-start max-w-xl mx-auto w-full">
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(allImages, imgIdx)}
                      className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                      aria-label={`View enlarged image: ${singleImg.caption}`}
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                          src={singleImg.src}
                          alt={singleImg.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover"
                        />
                      </div>
                    </button>
                    <p
                      className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                      style={{ fontFamily: "var(--font-serif-body)" }}
                    >
                      {singleImg.caption}
                    </p>
                  </div>
                )}
              </div>
            );
          }

          if (sub.id === "book-chapters") {
            const chapters = (sub as any).chapters || [];
            return (
              <div key={sub.id} id="book-chapters" className="book-reveal-section pt-10 border-t border-[var(--color-border)]">
                {/* Heading: Book Chapters */}
                <div className="mb-3 text-left">
                  <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-normal text-[#1A1A1A] m-0" style={{ fontFamily: "var(--font-serif-body)" }}>
                    Book Chapters
                  </h3>
                </div>

                {/* Individual Chapter blocks with thin grey horizontal divider between them */}
                <div className="space-y-10">
                  {chapters.map((ch: any, cIdx: number) => {
                    const is4ImageChapter = ch.images && (ch.images.length === 4 || ch.images.length === 8);
                    
                    return (
                      <div
                        key={cIdx}
                        className={`${cIdx === 0 ? "pt-1" : "pt-10 border-t border-[#A0A0A0]/30"}`}
                      >
                        {/* Chapter Title: exact order and wording */}
                        <h4
                          className="text-[16px] sm:text-[18px] font-semibold text-[#1A1A1A] leading-snug m-0 mb-4 text-left"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          <span className="italic">{ch.title}</span>
                        </h4>

                        {/* If single image */}
                        {ch.image && (
                          <div className="flex flex-col items-start max-w-lg mx-auto my-4 w-full">
                            {(() => {
                              const imgIdx = registerImage(ch.image.src, ch.image.alt, ch.image.caption);
                              return (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => onOpenLightbox(allImages, imgIdx)}
                                    className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                                    aria-label={`View enlarged image: ${ch.image.caption}`}
                                  >
                                    <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]">
                                      <Image
                                        src={ch.image.src}
                                        alt={ch.image.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className="object-cover"
                                      />
                                    </div>
                                  </button>
                                  {ch.image.caption && (
                                    <p
                                      className="mt-3.5 mb-2 text-left w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                                      style={{ fontFamily: "var(--font-serif-body)" }}
                                    >
                                      {ch.image.caption}
                                    </p>
                                  )}
                                </>
                              );
                            })()}
                          </div>
                        )}

                        {/* Horizontal row of individual images with captions directly beneath */}
                        {ch.images && ch.images.length > 0 && (
                          <div
                            className={`my-4 reading-guide-gallery ${
                              ch.images.length === 1
                                ? "grid-cols-1 max-w-md mx-auto"
                                : ch.images.length === 2
                                ? "reading-guide-gallery-2 max-w-3xl"
                                : is4ImageChapter
                                ? "reading-guide-gallery-4"
                                : "reading-guide-gallery-3"
                            }`}
                          >
                            {ch.images.map((im: any, imIdx: number) => {
                              const imgIdx = registerImage(im.src, im.alt, im.caption);
                              // 4-column chapters use portrait aspect ratio ~3/4; 3-column chapters use 4/3
                              const aspectClass = is4ImageChapter ? "aspect-[3/4]" : "aspect-[4/3]";
                              
                              return (
                                <div key={imIdx} className="flex flex-col items-start w-full">
                                  <button
                                    type="button"
                                    onClick={() => onOpenLightbox(allImages, imgIdx)}
                                    className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                                    aria-label={`View enlarged image: ${im.caption}`}
                                  >
                                    <div className={`relative w-full ${aspectClass} overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]`}>
                                      <Image
                                        src={im.src}
                                        alt={im.alt}
                                        fill
                                        sizes={
                                          is4ImageChapter
                                            ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                            : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                        }
                                        className="object-cover"
                                      />
                                    </div>
                                  </button>
                                  <p
                                    className="mt-3.5 mb-2 text-left w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                                    style={{ fontFamily: "var(--font-serif-body)" }}
                                  >
                                    {im.caption}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Special case: Sitara Faiyaz Ali with 3 sub-sections */}
                        {ch.subSections && ch.subSections.length > 0 && (
                          <div className="space-y-10 my-4">
                            {ch.subSections.map((subSec: any, ssIdx: number) => (
                              <div key={ssIdx} className="pt-2">
                                <h5
                                  className="text-[19px] sm:text-[21px] font-semibold text-[#1A1A1A] m-0 mb-3 text-left"
                                  style={{ fontFamily: "var(--font-serif-body)" }}
                                >
                                  <span className="italic">{subSec.title}</span>
                                </h5>
                                {subSec.text && (
                                  <p
                                    className="text-[18px] sm:text-[19px] text-[#2C2C2C] leading-relaxed m-0 mb-6 text-left"
                                    style={{ fontFamily: "var(--font-serif-body)" }}
                                  >
                                    {subSec.text}{" "}
                                    {subSec.link && (
                                      <a
                                        href={subSec.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline underline-offset-2 transition-opacity hover:opacity-80"
                                        style={{ color: "#947D53", textDecoration: "underline", textUnderlineOffset: "3px" }}
                                      >
                                        {subSec.link.label}
                                      </a>
                                    )}
                                  </p>
                                )}
                                {subSec.images && subSec.images.length > 0 && (
                                  <div className="my-4 reading-guide-gallery reading-guide-gallery-3">
                                    {subSec.images.map((im: any, imIdx: number) => {
                                      const imgIdx = registerImage(im.src, im.alt, im.caption);
                                      return (
                                        <div key={imIdx} className="flex flex-col items-start w-full">
                                          <button
                                            type="button"
                                            onClick={() => onOpenLightbox(allImages, imgIdx)}
                                            className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                                            aria-label={`View enlarged image: ${im.caption}`}
                                          >
                                            <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]">
                                              <Image
                                                src={im.src}
                                                alt={im.alt}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                className="object-cover"
                                              />
                                            </div>
                                          </button>
                                          <p
                                            className="mt-3.5 mb-2 text-left w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                                            style={{ fontFamily: "var(--font-serif-body)" }}
                                          >
                                            {im.caption}
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "exhibition") {
            const items = (sub as any).items || [];
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  11. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-8">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                <div className="reading-guide-gallery reading-guide-gallery-2 max-w-3xl mx-auto">
                  {items.map((item: any, iIdx: number) => {
                    const imgIdx = registerImage(item.src, item.alt, item.caption);
                    return (
                      <div key={iIdx} className="flex flex-col items-start w-full">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(allImages, imgIdx)}
                          className="group w-full block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                          aria-label={`View enlarged image: ${item.caption}`}
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                        </button>
                        <p
                          className="mt-3.5 mb-2 w-full text-[15px] sm:text-[16px] text-[#2C2C2C] leading-snug reading-guide-caption"
                          style={{ fontFamily: "var(--font-serif-body)" }}
                        >
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (sub.id === "epilogue") {
            const addRes = (sub as any).additionalResources;
            return (
              <div key={sub.id} className="book-reveal-section pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-[20px] sm:text-[22px] leading-snug uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-5">
                  12. {sub.title}
                </h3>
                
                <div className="space-y-3.5 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] text-left mb-10">
                  {(sub as any).text.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="m-0">{p}</p>
                  ))}
                </div>

                {addRes && (
                  <div className="mt-8 pt-6 border-t border-[#E8E4DF]">
                    <h4 className="text-[15px] sm:text-[16px] uppercase tracking-[0.1em] font-normal text-[#222222] m-0 mb-4 leading-snug">
                      {addRes.title}
                    </h4>
                    <div className="space-y-2 text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums]">
                      {addRes.links.map((linkItem: any, lIdx: number) => (
                        <p key={lIdx} className="m-0">
                          <a
                            href={linkItem.url}
                            target={linkItem.url.startsWith("http") ? "_blank" : undefined}
                            rel={linkItem.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="underline underline-offset-4 transition-opacity hover:opacity-80"
                            style={{ color: "#947D53", textDecoration: "underline", textUnderlineOffset: "4px" }}
                          >
                            {linkItem.label}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}

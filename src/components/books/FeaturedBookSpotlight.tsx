"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/types";
import { FeaturedHomepageSection } from "@/data/featuredBook";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface FeaturedBookSpotlightProps {
  book: Book;
  details?: FeaturedHomepageSection;
}

export default function FeaturedBookSpotlight({
  book,
  details,
}: FeaturedBookSpotlightProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Gentle editorial entrance timeline coordinated with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Image container fade & subtle float reveal
      tl.fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
        }
      );

      // 2. Editorial text elements reveal with quiet stagger
      tl.fromTo(
        ".spotlight-text-reveal",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured-forthcoming-book"
      ref={sectionRef}
      className="relative w-full py-10 sm:py-14 md:py-20 bg-[var(--color-bg-pure)] border-t border-[var(--color-border)] scroll-mt-20"
      aria-labelledby="spotlight-title"
    >
      <div className="editorial-container">
        {/* Balanced Editorial Composition with Balanced Spacing */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left Column: Complete book cover edge-to-edge at its natural aspect ratio without grey background, white frame, padding or shadows */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] will-change-transform"
              style={{ aspectRatio: "7290 / 8581" }}
            >
              <Image
                src={book.coverImage}
                alt={book.coverAlt || `Cover artwork for ${book.title}`}
                fill
                sizes="(max-width: 768px) 80vw, 340px"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Literary Hierarchy & Synopsis */}
          <div
            ref={contentContainerRef}
            className="md:col-span-7 max-w-[520px] flex flex-col justify-center text-left"
          >
            {/* Publication Label */}
            <div className="spotlight-text-reveal mb-2">
              <span className="text-[12px] tracking-[0.15em] text-[var(--color-accent-mustard)] uppercase font-semibold">
                FORTHCOMING IN MAY 2026
              </span>
            </div>

            {/* Book Title */}
            <h2
              id="spotlight-title"
              className="spotlight-text-reveal font-[family-name:var(--font-serif-display)] font-normal text-[22px] sm:text-[24px] leading-snug text-[var(--color-text-primary)] uppercase tracking-wide m-0"
              style={{
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              A HANDFUL OF HOME
            </h2>

            {/* Subtitle - Italicised */}
            <p
              className="spotlight-text-reveal mt-2 mb-4 font-[family-name:var(--font-serif-body)] italic font-normal text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-text-secondary)] tracking-wider uppercase"
            >
              THE PARTITION OF INDIA IN 100 OBJECTS
            </p>

            {/* Exact Client Synopsis */}
            <div className="spotlight-text-reveal space-y-3 text-[var(--color-text-secondary)] font-[family-name:var(--font-serif-body)] text-[18.6px] leading-[24.2px] [font-variant-numeric:oldstyle-nums] mb-6">
              <p className="m-0">
                Containing 100 objects from the Partition of India, oral historian and expert Aanchal Malhotra transforms a complex history into a gentle and accessible introduction for younger readers.
              </p>
              <p className="m-0">
                Vividly brought to life by Bangladeshi-British illustrator Maryam Huq, this book is a testament to the things we keep, the things we remember, and the stories that connect us all — no matter where we call home.
              </p>
            </div>

            {/* Call to Action Link */}
            <div className="spotlight-text-reveal flex items-center">
              <Link
                href={`/books/${book.slug}`}
                className="group inline-flex items-center gap-2 text-[13px] tracking-wider uppercase font-medium border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
              >
                <span>View Book Details</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1 font-sans text-[13px]"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


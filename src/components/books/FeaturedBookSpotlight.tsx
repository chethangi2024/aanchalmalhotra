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
      className="relative w-full py-12 md:py-16 lg:py-20 bg-[var(--color-bg-pure)] border-t border-[var(--color-border)] scroll-mt-20"
      aria-labelledby="spotlight-title"
    >
      <div className="editorial-container">
        {/* Balanced Editorial Composition with Balanced Spacing */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
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
              <span className="text-[13px] sm:text-[14px] tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] uppercase font-semibold">
                FORTHCOMING IN MAY 2026
              </span>
            </div>

            {/* Book Title - Increased for clear legibility, with tightened line height */}
            <h2
              id="spotlight-title"
              className="spotlight-text-reveal font-[family-name:var(--font-cormorant)] font-semibold text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] leading-[1.08] text-[var(--color-text-primary)] uppercase tracking-wide m-0"
              style={{
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              A HANDFUL OF HOME
            </h2>

            {/* Subtitle - Italicised per client instruction */}
            <p
              className="spotlight-text-reveal mt-2 mb-4 font-[family-name:var(--font-cormorant)] italic font-normal text-[15px] sm:text-[16px] md:text-[17px] leading-[1.3] text-[var(--color-text-secondary)] tracking-wider uppercase"
            >
              THE PARTITION OF INDIA IN 100 OBJECTS
            </p>

            {/* Exact Client Synopsis - Comfortable readable serif text */}
            <div className="spotlight-text-reveal space-y-3 text-[var(--color-text-secondary)] font-[family-name:var(--font-cormorant)] text-[17px] sm:text-[18px] leading-[1.55] mb-6">
              <p className="m-0">
                Containing 100 objects from the Partition of India, oral historian and expert Aanchal Malhotra transforms a complex history into a gentle and accessible introduction for younger readers.
              </p>
              <p className="m-0">
                Vividly brought to life by Bangladeshi-British illustrator Maryam Huq, this book is a testament to the things we keep, the things we remember, and the stories that connect us all — no matter where we call home.
              </p>
            </div>

            {/* Call to Action Link - Increased for comfortable readability */}
            <div className="spotlight-text-reveal flex items-center">
              <Link
                href={`/books/${book.slug}`}
                className="group inline-flex items-center gap-2.5 text-[16px] sm:text-[17px] font-[family-name:var(--font-cormorant)] font-medium border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
              >
                <span>View Book Details</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1 font-sans text-[14px]"
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


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

  const tag = details?.tag || "Upcoming Publication";
  const badge = details?.badge || "May 2026";
  const leadParagraph = details?.leadParagraph || book.synopsis[0];
  const descriptionParagraphs =
    details?.fullDescription || book.synopsis.slice(1);
  const illustratorCredit = details?.illustratorCredit;
  const note = details?.note;
  const ctaLink = details?.ctaLink || {
    label: "Explore Book Overview",
    href: `/books/${book.slug}`,
  };

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
          duration: 1.1,
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
        "-=0.9"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured-forthcoming-book"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-[var(--color-bg-pure)] border-t border-[var(--color-border)] scroll-mt-20"
      aria-labelledby="spotlight-title"
    >
      <div className="editorial-container">
        {/* Balanced Editorial Composition with Generous Outer Margins */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left Column: Discreet, Proportional Book Cover (Reduced ~10-12%, Col 1-5) */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] aspect-[2/3] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_10px_28px_rgba(28,27,26,0.06)] will-change-transform rounded-xs"
            >
              <Image
                src={book.coverImage}
                alt={book.coverAlt || `Cover artwork for ${book.title}`}
                fill
                sizes="(max-width: 768px) 70vw, 300px"
                loading="lazy"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>
          </div>

          {/* Right Column: Literary Hierarchy & Synopsis (Col 6-12, subtly narrowed width) */}
          <div
            ref={contentContainerRef}
            className="md:col-span-7 max-w-[480px] flex flex-col justify-center text-left"
          >
            {/* Publication Label */}
            <div className="spotlight-text-reveal mb-2.5">
              <span className="text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] uppercase font-medium">
                FORTHCOMING IN MAY 2026
              </span>
            </div>

            {/* Book Title & Subtitle */}
            <h2
              id="spotlight-title"
              style={{
                fontSize: "clamp(21px, 2vw, 26px)",
                lineHeight: "1.2",
                wordBreak: "normal",
                overflowWrap: "normal",
              }}
              className="spotlight-text-reveal font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] uppercase tracking-wide m-0"
            >
              A HANDFUL OF HOME
            </h2>

            <p
              style={{
                fontSize: "clamp(12.5px, 1.1vw, 14px)",
                lineHeight: "1.3",
              }}
              className="spotlight-text-reveal mt-1.5 mb-4 font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-secondary)] tracking-widest uppercase"
            >
              THE PARTITION OF INDIA IN 100 OBJECTS
            </p>

            {/* Exact Client Synopsis (Discreet paragraph spacing) */}
            <div className="spotlight-text-reveal space-y-2.5 text-[var(--color-text-secondary)] font-[family-name:var(--font-serif-body)] text-[13.5px] sm:text-[14.5px] leading-relaxed mb-5">
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
                className="group inline-flex items-center gap-2 text-[12.5px] font-[family-name:var(--font-serif-display)] border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
              >
                <span className="font-medium">View Book Details</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
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

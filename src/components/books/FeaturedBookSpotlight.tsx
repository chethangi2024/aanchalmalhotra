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

      // 1. Image container curtain/fade reveal
      tl.fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          y: 36,
          clipPath: "inset(8% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3,
          ease: "power3.out",
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
      className="relative w-full py-24 md:py-36 bg-[var(--color-bg-pure)] border-t border-[var(--color-border)] scroll-mt-20"
      aria-labelledby="spotlight-title"
    >
      <div className="editorial-container">
        {/* Editorial 2-Column Split: Image Dominant on Left / Literary Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Prominent Uncropped Book Cover (Col 1-6) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-[2/3] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_20px_50px_rgba(28,27,26,0.08)] will-change-transform rounded-xs"
            >
              <Image
                src={book.coverImage}
                alt={book.coverAlt || `Cover artwork for ${book.title}`}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
                loading="lazy"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />
              {/* Archival hairline frame */}
              <div
                className="absolute inset-0 border border-[var(--color-border)] pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Literary Hierarchy & Content (Col 7-12) */}
          <div
            ref={contentContainerRef}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Tag / Category Badge */}
            <div className="spotlight-text-reveal flex items-center gap-3 mb-4">
              <span
                className="w-6 h-[1px] bg-[var(--color-accent-mustard)]"
                aria-hidden="true"
              />
              <span className="text-[var(--text-xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] uppercase font-medium">
                {tag}
              </span>
              {badge && (
                <span className="text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wider)] text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5 uppercase">
                  {badge}
                </span>
              )}
            </div>

            {/* Book Title */}
            <h2
              id="spotlight-title"
              className="spotlight-text-reveal text-[var(--text-3xl)] sm:text-[var(--text-4xl)] lg:text-[var(--text-5xl)] font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] leading-[1.1] mb-6"
            >
              {book.title}
            </h2>

            {/* Lead Statement */}
            <div className="spotlight-text-reveal mb-6">
              <p className="font-[family-name:var(--font-serif-body)] text-[var(--text-lg)] sm:text-[var(--text-xl)] text-[var(--color-text-primary)] italic leading-relaxed m-0 border-l-2 border-[var(--color-accent-mustard)] pl-4">
                {leadParagraph}
              </p>
            </div>

            {/* Narrative Body Copy (Client supplied text) */}
            <div className="spotlight-text-reveal space-y-4 text-[var(--color-text-secondary)] font-[family-name:var(--font-serif-body)] text-[var(--text-base)] leading-relaxed mb-8">
              {descriptionParagraphs.map((paragraph, idx) => (
                <p key={idx} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Illustrator Attribution Note if applicable */}
            {illustratorCredit && (
              <div className="spotlight-text-reveal pt-4 border-t border-[var(--color-border-subtle)] mb-8">
                <span className="block text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-text-muted)] uppercase mb-1">
                  Art Direction &amp; Illustration
                </span>
                <p className="m-0 text-[var(--text-sm)] font-[family-name:var(--font-serif-body)] italic text-[var(--color-text-secondary)]">
                  {illustratorCredit}
                </p>
              </div>
            )}

            {/* Call to Action Link */}
            <div className="spotlight-text-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={ctaLink.href}
                className="group inline-flex items-center gap-2 text-[var(--text-sm)] font-[family-name:var(--font-serif-display)] border-b border-[var(--color-text-primary)] pb-1 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
              >
                <span className="font-medium">{ctaLink.label}</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Client Context Footnote */}
            {note && (
              <div className="spotlight-text-reveal mt-8 pt-4 border-t border-[var(--color-border-subtle)]">
                <p className="m-0 text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wide)] text-[var(--color-text-muted)]">
                  * {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

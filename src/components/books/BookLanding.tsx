"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Book } from "@/data/types";
import BookCover from "./BookCover";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface BookLandingProps {
  books: Book[];
}

export default function BookLanding({ books }: BookLandingProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial page load reveal: Quiet, confident entry of typography and book covers
      const loadTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      loadTl
        .fromTo(
          heroTextRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.1 }
        )
        .fromTo(
          ".book-landing-item",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.7"
        );

      // 2. ScrollTrigger narrative progression:
      // As the user scrolls downwards, books subtly shift in depth (parallax stagger)
      // without distortion or spinning, preparing for the upcoming section.
      gsap.to(".book-landing-item-0", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".book-landing-item-1", {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".book-landing-item-2", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-var(--header-height))] flex flex-col justify-between pt-10 md:pt-16 pb-20 md:pb-28 overflow-hidden"
      aria-label="Author Introduction and Selected Books"
    >
      <div className="editorial-container w-full">
        {/* Editorial Overline & Identity Header (Quiet, museum-standard) */}
        <div ref={heroTextRef} className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[var(--color-accent-mustard)]" aria-hidden="true" />
            <span className="text-[var(--text-xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] uppercase font-medium">
              Selected Works &amp; Publications
            </span>
          </div>

          <h1 className="text-[var(--text-3xl)] md:text-[var(--text-4xl)] lg:text-[var(--text-5xl)] font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] leading-[var(--leading-tight)]">
            Aanchal Malhotra
          </h1>

          <p className="mt-4 text-[var(--text-base)] md:text-[var(--text-lg)] text-[var(--color-text-secondary)] font-[family-name:var(--font-serif-body)] italic leading-relaxed max-w-2xl">
            Oral historian and author examining memory, material culture, and the generational inheritance of Partition in South Asia.
          </p>
        </div>

        {/* The Three Book Covers Composition */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 items-start"
        >
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`book-landing-item book-landing-item-${index} will-change-transform ${
                index === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <BookCover book={book} index={index} priority={index === 0} />
            </div>
          ))}
        </div>

        {/* Subtle Editorial Scroll Indicator */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wider)] text-[var(--color-text-muted)] uppercase">
          <a
            href="#featured-forthcoming-book"
            className="group flex items-center gap-2 hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
            aria-label="Scroll to Forthcoming Book Section"
          >
            <span>Scroll to explore archive</span>
            <span className="transition-transform duration-300 group-hover:translate-y-1">&darr;</span>
          </a>
          <Link
            href="/books"
            className="hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
          >
            All Publications Archive &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

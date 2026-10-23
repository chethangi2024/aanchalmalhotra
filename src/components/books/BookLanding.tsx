"use client";

import { useEffect, useRef } from "react";
import { Book } from "@/data/types";
import BookCover from "./BookCover";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface BookLandingProps {
  books: Book[];
}

export default function BookLanding({ books }: BookLandingProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Scroll-triggered subtle entry reveal for the landing book covers
      gsap.fromTo(
        ".book-landing-item",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtle parallax/depth drift as visitor scrolls down
      gsap.to(".book-landing-item-0", {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".book-landing-item-1", {
        y: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".book-landing-item-2", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-4 md:pt-6 pb-10 sm:pb-14 md:pb-20 overflow-hidden"
      aria-label="Selected Books"
    >
      <div className="editorial-container w-full">
        {/* The Three Book Covers Composition - Spanning full content width, aligned to left and right boundaries */}
        <div
          ref={cardsContainerRef}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 items-start"
        >
          {books.map((book, index) => {
            const alignmentClass =
              index === 0
                ? "justify-self-center sm:justify-self-start"
                : index === 1
                ? "justify-self-center"
                : "justify-self-center sm:justify-self-end";

            return (
              <div
                key={book.id}
                className={`book-landing-item book-landing-item-${index} w-full max-w-[220px] sm:max-w-[230px] md:max-w-[245px] lg:max-w-[255px] ${alignmentClass} will-change-transform`}
              >
                <BookCover book={book} index={index} priority={index === 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


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
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial page load reveal: Quiet, confident entry of book covers
      gsap.fromTo(
        ".book-landing-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // ScrollTrigger subtle depth shift
      gsap.to(".book-landing-item-0", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".book-landing-item-1", {
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".book-landing-item-2", {
        y: -25,
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
      className="relative w-full pt-6 md:pt-10 pb-16 md:pb-24 overflow-hidden"
      aria-label="Selected Books"
    >
      <div className="editorial-container w-full">
        {/* The Three Book Covers Composition - Concentrated grouping with generous horizontal margins & smaller discreet covers */}
        <div
          ref={cardsContainerRef}
          className="max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 md:gap-6 lg:gap-8 items-start justify-items-center"
        >
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`book-landing-item book-landing-item-${index} w-full max-w-[210px] sm:max-w-[220px] md:max-w-[240px] will-change-transform ${
                index === 1 ? "md:translate-y-4" : ""
              }`}
            >
              <BookCover book={book} index={index} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

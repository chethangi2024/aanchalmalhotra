"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthorHomepageConfig } from "@/data/authorHomepage";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface AuthorWorkspaceSectionProps {
  data: AuthorHomepageConfig;
}

export default function AuthorWorkspaceSection({
  data,
}: AuthorWorkspaceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const workspaceColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const portraitColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Coordinated ScrollTrigger timeline for visual rhythm
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Workspace image reveal (Col 1)
      tl.fromTo(
        workspaceColRef.current,
        {
          opacity: 0,
          y: 35,
          clipPath: "inset(6% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Biography text elements reveal (Col 2)
      tl.fromTo(
        ".bio-text-element",
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

      // Author portrait reveal (Col 3)
      tl.fromTo(
        portraitColRef.current,
        {
          opacity: 0,
          y: 35,
          clipPath: "inset(6% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.9"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
      aria-label="Author and Workspace"
    >
      <div className="editorial-container">
        {/* Asymmetric 3-Column Editorial Composition with Generous Outer Margins & Scaled Down Visuals */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 items-center">
          {/* Column 1: Workspace & Research Pinboard (Col 1-4 on Desktop, reduced 10-15%) */}
          <div
            ref={workspaceColRef}
            className="md:col-span-4 order-2 md:order-1 will-change-transform flex justify-center"
          >
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] md:max-w-[310px] aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_10px_28px_rgba(28,27,26,0.05)] group rounded-xs">
              <Image
                src={data.workspaceImage.src}
                alt={data.workspaceImage.alt}
                fill
                sizes="(max-width: 768px) 80vw, 310px"
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.015]"
              />
            </div>
          </div>

          {/* Column 2: Biography & Editorial Focus (Col 5-8 on Desktop) */}
          <div
            ref={textColRef}
            className="md:col-span-4 order-3 md:order-2 flex flex-col justify-center text-left px-0 md:px-2"
          >
            <p
              id="author-section-title"
              className="bio-text-element text-[14px] sm:text-[15px] font-[family-name:var(--font-serif-body)] text-[var(--color-text-secondary)] leading-relaxed m-0 mb-5"
            >
              {data.leadParagraph}
            </p>

            {/* Link to full About page */}
            <div className="bio-text-element">
              <Link
                href={data.link.href}
                className="group inline-flex items-center gap-2 text-[12.5px] font-[family-name:var(--font-serif-display)] border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
              >
                <span className="font-medium">{data.link.label}</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Column 3: Author Portrait (Col 9-12 on Desktop, reduced 10-15%) */}
          <div
            ref={portraitColRef}
            className="md:col-span-4 order-1 md:order-3 will-change-transform flex justify-center"
          >
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] md:max-w-[310px] aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_10px_28px_rgba(28,27,26,0.05)] group rounded-xs">
              <Image
                src={data.authorPortrait.src}
                alt={data.authorPortrait.alt}
                fill
                sizes="(max-width: 768px) 80vw, 310px"
                loading="lazy"
                unoptimized
                className="object-cover object-top transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>

        {/* Discreet Back to Top Arrow */}
        <div className="mt-14 md:mt-20 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] rounded-xs cursor-pointer"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

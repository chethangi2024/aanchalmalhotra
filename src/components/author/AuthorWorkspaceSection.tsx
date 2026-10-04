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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-[var(--color-bg)] border-t border-[var(--color-border)]"
      aria-labelledby="author-section-title"
    >
      <div className="editorial-container">
        {/* Asymmetric 3-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Column 1: Workspace & Research Pinboard (Col 1-4 on Desktop) */}
          <div
            ref={workspaceColRef}
            className="lg:col-span-4 order-2 lg:order-1 will-change-transform"
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_16px_40px_rgba(28,27,26,0.06)] group rounded-xs">
              <Image
                src={data.workspaceImage.src}
                alt={data.workspaceImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 420px"
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.015]"
              />
              <div
                className="absolute inset-0 border border-[var(--color-border)] pointer-events-none"
                aria-hidden="true"
              />
            </div>
            {data.workspaceImage.caption && (
              <span className="block mt-3 text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-text-muted)] uppercase">
                {data.workspaceImage.caption}
              </span>
            )}
          </div>

          {/* Column 2: Biography & Editorial Focus (Col 5-8 on Desktop) */}
          <div
            ref={textColRef}
            className="lg:col-span-4 order-3 lg:order-2 flex flex-col justify-center text-left px-0 lg:px-4"
          >
            {/* Tag / Role */}
            <div className="bio-text-element flex items-center gap-3 mb-4">
              <span
                className="w-6 h-[1px] bg-[var(--color-accent-mustard)]"
                aria-hidden="true"
              />
              <span className="text-[var(--text-xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] uppercase font-medium">
                {data.tag}
              </span>
            </div>

            <h2
              id="author-section-title"
              className="bio-text-element text-[var(--text-2xl)] md:text-[var(--text-3xl)] lg:text-[var(--text-3xl)] font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] leading-[1.2] mb-6"
            >
              {data.leadParagraph}
            </h2>



            {/* Link to full About page */}
            <div className="bio-text-element pt-2">
              <Link
                href={data.link.href}
                className="group inline-flex items-center gap-2 text-[var(--text-sm)] font-[family-name:var(--font-serif-display)] border-b border-[var(--color-text-primary)] pb-0.5 hover:text-[var(--color-accent-mustard)] hover:border-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
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

          {/* Column 3: Author Portrait (Col 9-12 on Desktop) */}
          <div
            ref={portraitColRef}
            className="lg:col-span-4 order-1 lg:order-3 will-change-transform"
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_16px_40px_rgba(28,27,26,0.06)] group rounded-xs">
              <Image
                src={data.authorPortrait.src}
                alt={data.authorPortrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 420px"
                loading="lazy"
                unoptimized
                className="object-cover object-top transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.015]"
              />
              <div
                className="absolute inset-0 border border-[var(--color-border)] pointer-events-none"
                aria-hidden="true"
              />
            </div>
            {data.authorPortrait.caption && (
              <span className="block mt-3 text-[var(--text-2xs)] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-widest)] text-[var(--color-text-muted)] uppercase">
                {data.authorPortrait.caption}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

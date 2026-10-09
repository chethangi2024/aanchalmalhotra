"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGSAP } from "@/lib/animations";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
  caption?: string;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  aspectRatio = "3/4",
  caption,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !imageWrapperRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        {
          clipPath: "inset(12% 0% 0% 0%)",
          scale: 1.05,
          opacity: 0.7,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <figure ref={containerRef} className={`relative m-0 overflow-hidden ${className}`}>
      <div
        ref={imageWrapperRef}
        className="relative w-full h-full overflow-hidden will-change-transform"
        style={{ aspectRatio: fill ? undefined : aspectRatio }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 600}
            height={height || 800}
            priority={priority}
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[12px] tracking-[var(--tracking-wide)] text-[var(--color-text-muted)] uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

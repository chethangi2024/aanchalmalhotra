"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGSAP } from "@/lib/animations";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  triggerOnScroll?: boolean;
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
  duration = 1.1,
  triggerOnScroll = true,
}: AnimatedRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !elementRef.current) {
      if (elementRef.current) {
        elementRef.current.style.opacity = "1";
        elementRef.current.style.transform = "none";
      }
      return;
    }

    const target = elementRef.current;

    const ctx = gsap.context(() => {
      if (triggerOnScroll) {
        gsap.fromTo(
          target,
          {
            opacity: 0,
            y: yOffset,
          },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        gsap.fromTo(
          target,
          {
            opacity: 0,
            y: yOffset,
          },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [delay, yOffset, duration, triggerOnScroll]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

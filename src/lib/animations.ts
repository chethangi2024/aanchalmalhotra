import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
  return { gsap, ScrollTrigger };
}

/**
 * Editorial subtle reveal helper
 * Fades and gently translates element upwards
 */
export function revealElement(
  target: gsap.DOMTarget,
  vars: gsap.TweenVars = {}
): gsap.core.Tween {
  registerGSAP();
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: 24,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power2.out",
      ...vars,
    }
  );
}

/**
 * Image clip-path curtain reveal (editorial standard)
 */
export function revealImageCurtain(
  target: gsap.DOMTarget,
  vars: gsap.TweenVars = {}
): gsap.core.Tween {
  registerGSAP();
  return gsap.fromTo(
    target,
    {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0.8,
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      duration: 1.3,
      ease: "power3.inOut",
      ...vars,
    }
  );
}

/**
 * Stagger reveal helper for text lines or card lists
 */
export function staggerReveal(
  targets: gsap.DOMTarget,
  staggerTime = 0.15,
  vars: gsap.TweenVars = {}
): gsap.core.Tween {
  registerGSAP();
  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      stagger: staggerTime,
      ease: "power2.out",
      ...vars,
    }
  );
}

export { gsap, ScrollTrigger };

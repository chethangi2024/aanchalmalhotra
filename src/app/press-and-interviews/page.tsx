"use client";

import { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface PressEntry {
  title: string;
  url: string;
  interviewerOrAuthor?: string;
  outlet: string;
}

const interviewEntries: PressEntry[] = [
  {
    title: "Aanchal Malhotra",
    interviewerOrAuthor: "Interviewed by Nikita Biswal",
    outlet: "The Writing Desk",
    url: "https://www.thewritingdesk.net/aanchal-malhotra",
  },
  {
    title: "Interview with Aanchal Malhotra",
    interviewerOrAuthor: "by Abhay Puri",
    outlet: "Hammock Magazine",
    url: "https://hammockmag.com/it-scares-me-how-much-we-accumulate-and-how-little-we-remember-of-that-accumulation",
  },
  {
    title: "On winning the Council for Museum Anthropology (CMA) Book Award 2022",
    interviewerOrAuthor: "– Chintan Girish Modi",
    outlet: "Hindustan Times",
    url: "https://www.hindustantimes.com/books/interview-aanchal-malhotra-author-remnants-of-partition-21-objects-from-a-continent-divided-you-learn-to-take-care-of-the-sadness-of-others-101666963957511.html",
  },
];

const podcastVideoEntries: PressEntry[] = [
  {
    title: "In Conversation with Aanchal Malhotra",
    outlet: "The Himalayan Writing Retreat",
    url: "https://www.youtube.com/watch?v=JT01PxT3rUg",
  },
  {
    title: "Aanchal Malhotra – This Being Human",
    outlet: "Aga Khan Museum",
    url: "https://agakhanmuseum.org/explore-at-home/listen/this-being-human-aanchal-malhotra/?srsltid=AU7gw4WXIw4R0cCJVVSdpbEWZBFE2A7vlbbSQw4paky8kST1S8WG3R_w",
  },
];

const otherEntries: PressEntry[] = [
  {
    title: "Aanchal Malhotra",
    outlet: "The Moment",
    url: "https://the-moment.io/aanchal-malhotra",
  },
  {
    title: "Writers Explore the Long Shadow of Partition in South Asia",
    interviewerOrAuthor: "– Surbhi Gupta",
    outlet: "New Lines Magazine",
    url: "https://newlinesmag.com/review/writers-explore-the-long-shadow-of-partition-in-south-asia/",
  },
  {
    title: "Materials, Memories and Closure – An Evening with Aanchal Malhotra",
    interviewerOrAuthor: "by Arslan Athar",
    outlet: "Aleph Review",
    url: "https://www.thealephreview.com/post/materials-memories-and-closure",
  },
  {
    title: "A Guide to India’s Best Private Libraries",
    outlet: "The Hindu",
    url: "https://www.thehindu.com/books/india-best-private-libraries-magazine-curation-aanchal-malhotra-manoj-kumar-jha-ranjit-hoskote-srilata-raman/article67144884.ece",
  },
];

export default function PressAndInterviewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".press-reveal-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-8 md:pt-14 pb-20 md:pb-28">
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto text-left">
          {/* Main Editorial Page Heading */}
          <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-[family-name:var(--font-serif-display)] font-normal text-[var(--color-text-primary)] leading-tight mb-10 md:mb-12">
            Press &amp; Interviews
          </h1>

          {/* SECTION 1: INTERVIEW */}
          <section className="mb-10 md:mb-12" aria-labelledby="heading-interview">
            <h2
              id="heading-interview"
              className="press-reveal-item !text-[13px] sm:!text-[14px] !font-bold !tracking-[0.08em] !text-[var(--color-text-primary)] !uppercase mb-4"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              INTERVIEW
            </h2>
            <div className="space-y-3.5 text-[16px] sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.6]">
              {interviewEntries.map((item, idx) => (
                <p key={idx} className="press-reveal-item m-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{
                      color: "#947D53",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                      textDecorationColor: "rgba(148, 125, 83, 0.5)"
                    }}
                  >
                    {item.title}
                  </a>
                  {item.interviewerOrAuthor && (
                    <span>, {item.interviewerOrAuthor}</span>
                  )}
                  {item.outlet && (
                    <span>, {item.outlet}</span>
                  )}
                </p>
              ))}
            </div>
          </section>

          {/* SECTION 2: PODCAST & VIDEO */}
          <section className="mb-10 md:mb-12" aria-labelledby="heading-podcast-video">
            <h2
              id="heading-podcast-video"
              className="press-reveal-item !text-[13px] sm:!text-[14px] !font-bold !tracking-[0.08em] !text-[var(--color-text-primary)] !uppercase mb-4"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              PODCAST &amp; VIDEO
            </h2>
            <div className="space-y-3.5 text-[16px] sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.6]">
              {podcastVideoEntries.map((item, idx) => (
                <p key={idx} className="press-reveal-item m-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{
                      color: "#947D53",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                      textDecorationColor: "rgba(148, 125, 83, 0.5)"
                    }}
                  >
                    {item.title}
                  </a>
                  {item.interviewerOrAuthor && (
                    <span>, {item.interviewerOrAuthor}</span>
                  )}
                  {item.outlet && (
                    <span>, {item.outlet}</span>
                  )}
                </p>
              ))}
            </div>
          </section>

          {/* SECTION 3: OTHER */}
          <section className="mb-10 md:mb-12" aria-labelledby="heading-other">
            <h2
              id="heading-other"
              className="press-reveal-item !text-[13px] sm:!text-[14px] !font-bold !tracking-[0.08em] !text-[var(--color-text-primary)] !uppercase mb-4"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              OTHER
            </h2>
            <div className="space-y-3.5 text-[16px] sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.6]">
              {otherEntries.map((item, idx) => (
                <p key={idx} className="press-reveal-item m-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{
                      color: "#947D53",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                      textDecorationColor: "rgba(148, 125, 83, 0.5)"
                    }}
                  >
                    {item.title}
                  </a>
                  {item.interviewerOrAuthor && (
                    <span> {item.interviewerOrAuthor}</span>
                  )}
                  {item.outlet && (
                    <span>, {item.outlet}</span>
                  )}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

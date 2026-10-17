"use client";

import { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/animations";
import { gsap } from "gsap";

interface PressEntry {
  title: string;
  url: string;
  authorOrInterviewer?: string;
  publication: string;
  hasCommaBeforeAuthor?: boolean;
  hasCommaBeforePublication?: boolean;
}

const interviewEntries: PressEntry[] = [
  {
    title: "Aanchal Malhotra",
    url: "https://www.thewritingdesk.net/aanchal-malhotra",
    authorOrInterviewer: "Nikita Biswal",
    publication: "The Writing Desk",
    hasCommaBeforeAuthor: true,
    hasCommaBeforePublication: true,
  },
  {
    title: "Interview with Aanchal Malhotra",
    url: "https://hammockmag.com/it-scares-me-how-much-we-accumulate-and-how-little-we-remember-of-that-accumulation",
    authorOrInterviewer: "Abhay Puri",
    publication: "Hammock Magazine",
    hasCommaBeforeAuthor: true,
    hasCommaBeforePublication: true,
  },
  {
    title: "On winning the Council for Museum Anthropology (CMA) Book Award 2022",
    url: "https://www.hindustantimes.com/books/interview-aanchal-malhotra-author-remnants-of-partition-21-objects-from-a-continent-divided-you-learn-to-take-care-of-the-sadness-of-others-101666963957511.html",
    authorOrInterviewer: "Chintan Girish Modi",
    publication: "Hindustan Times",
    hasCommaBeforeAuthor: true,
    hasCommaBeforePublication: true,
  },
];

const podcastVideoEntries: PressEntry[] = [
  {
    title: "In Conversation with Aanchal Malhotra",
    url: "https://www.youtube.com/watch?v=JT01PxT3rUg",
    publication: "The Himalayan Writing Retreat",
    hasCommaBeforePublication: true,
  },
  {
    title: "Aanchal Malhotra – This Being Human",
    url: "https://agakhanmuseum.org/explore-at-home/listen/this-being-human-aanchal-malhotra/?srsltid=AU7gw4WXIw4R0cCJVVSdpbEWZBFE2A7vlbbSQw4paky8kST1S8WG3R_w",
    publication: "Aga Khan Museum",
    hasCommaBeforePublication: true,
  },
];

const otherEntries: PressEntry[] = [
  {
    // [Aanchal Malhotra](https://the-moment.io/aanchal-malhotra) The Moment
    title: "Aanchal Malhotra",
    url: "https://the-moment.io/aanchal-malhotra",
    publication: "The Moment",
    hasCommaBeforePublication: false,
  },
  {
    // [Writers Explore the Long Shadow of Partition in South Asia](https://newlinesmag.com/review/writers-explore-the-long-shadow-of-partition-in-south-asia/), Surbhi Gupta, New Lines Magazine
    title: "Writers Explore the Long Shadow of Partition in South Asia",
    url: "https://newlinesmag.com/review/writers-explore-the-long-shadow-of-partition-in-south-asia/",
    authorOrInterviewer: "Surbhi Gupta",
    publication: "New Lines Magazine",
    hasCommaBeforeAuthor: true,
    hasCommaBeforePublication: true,
  },
  {
    // [Materials, Memories and Closure – An Evening with Aanchal Malhotra](https://www.thealephreview.com/post/materials-memories-and-closure) Arslan Athar, The Aleph Review
    title: "Materials, Memories and Closure – An Evening with Aanchal Malhotra",
    url: "https://www.thealephreview.com/post/materials-memories-and-closure",
    authorOrInterviewer: "Arslan Athar",
    publication: "The Aleph Review",
    hasCommaBeforeAuthor: false,
    hasCommaBeforePublication: true,
  },
  {
    // [A Guide to India’s Best Private Libraries](https://www.thehindu.com/books/india-best-private-libraries-magazine-curation-aanchal-malhotra-manoj-kumar-jha-ranjit-hoskote-srilata-raman/article67144884.ece) The Hindu
    title: "A Guide to India’s Best Private Libraries",
    url: "https://www.thehindu.com/books/india-best-private-libraries-magazine-curation-aanchal-malhotra-manoj-kumar-jha-ranjit-hoskote-srilata-raman/article67144884.ece",
    publication: "The Hindu",
    hasCommaBeforePublication: false,
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
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderEntry = (item: PressEntry, idx: number) => {
    return (
      <p
        key={idx}
        className="press-reveal-item m-0 font-[family-name:var(--font-cormorant)] text-[18px] sm:text-[19px] md:text-[20px] leading-[1.45] text-[var(--color-text-secondary)]"
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
          style={{
            color: "#947D53",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {item.title}
        </a>
        {item.authorOrInterviewer && (
          <span>
            {item.hasCommaBeforeAuthor ? ", " : " "}
            {item.authorOrInterviewer}
          </span>
        )}
        {item.publication && (
          <span>
            {item.hasCommaBeforePublication ? ", " : " "}
            <em className="italic">{item.publication}</em>
          </span>
        )}
      </p>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]"
    >
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto text-left font-[family-name:var(--font-cormorant)]">
          {/* Main Editorial Page Heading - Consistent with other pages (e.g. ABOUT, CONTACT) */}
          <div className="mb-10 md:mb-12">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal"
            >
              PRESS &amp; INTERVIEWS
            </h1>
          </div>

          {/* SECTION 1: INTERVIEW */}
          <section className="mb-8 md:mb-10" aria-labelledby="heading-interview">
            <h2
              id="heading-interview"
              className="press-reveal-item font-[family-name:var(--font-cormorant)] text-[#222222] text-[18px] sm:text-[19px] md:text-[20px] font-semibold tracking-[0.08em] uppercase m-0 mb-3"
            >
              INTERVIEW
            </h2>
            <div className="space-y-2.5">
              {interviewEntries.map((item, idx) => renderEntry(item, idx))}
            </div>
          </section>

          {/* SECTION 2: PODCAST & VIDEO */}
          <section
            className="mb-8 md:mb-10"
            aria-labelledby="heading-podcast-video"
          >
            <h2
              id="heading-podcast-video"
              className="press-reveal-item font-[family-name:var(--font-cormorant)] text-[#222222] text-[18px] sm:text-[19px] md:text-[20px] font-semibold tracking-[0.08em] uppercase m-0 mb-3"
            >
              PODCAST &amp; VIDEO
            </h2>
            <div className="space-y-2.5">
              {podcastVideoEntries.map((item, idx) => renderEntry(item, idx))}
            </div>
          </section>

          {/* SECTION 3: OTHER */}
          <section className="mb-8 md:mb-10" aria-labelledby="heading-other">
            <h2
              id="heading-other"
              className="press-reveal-item font-[family-name:var(--font-cormorant)] text-[#222222] text-[18px] sm:text-[19px] md:text-[20px] font-semibold tracking-[0.08em] uppercase m-0 mb-3"
            >
              OTHER
            </h2>
            <div className="space-y-2.5">
              {otherEntries.map((item, idx) => renderEntry(item, idx))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

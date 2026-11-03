import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found | Aanchal Malhotra",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-var(--header-height)-180px)] flex items-center justify-center py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full max-w-[560px] mx-auto text-center flex flex-col items-center font-[family-name:var(--font-serif-body)]">
          <p
            className="m-0 mb-4 md:mb-5 font-[family-name:var(--font-serif-display)] font-normal text-[50px] sm:text-[64px] leading-none tracking-[0.08em] text-[#222222] [font-variant-numeric:lining-nums]"
            style={{
              fontSize: "clamp(50px, 6vw, 64px)",
              lineHeight: 1,
              color: "#222222",
            }}
          >
            404
          </p>

          <h1
            className="m-0 mb-3 font-[family-name:var(--font-serif-display)] font-normal text-[#222222] leading-snug"
            style={{
              fontSize: "24px",
              letterSpacing: "0.02em",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            This page could not be found.
          </h1>

          <p className="m-0 mb-8 md:mb-10 font-[family-name:var(--font-serif-body)] text-[17px] leading-[24.2px] font-normal text-[#000000]">
            Perhaps the story you&apos;re looking for has moved.
          </p>

          <Link
            href="/"
            className="content-link inline-block py-1 text-[13px] tracking-[0.14em] uppercase font-normal text-[#222222] hover:text-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
}


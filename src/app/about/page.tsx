import type { Metadata } from "next";
import Image from "next/image";
import { authorProfile } from "@/data/content";

export const metadata: Metadata = {
  title: "About | Aanchal Malhotra",
  description:
    "Biography of Aanchal Malhotra, oral historian and author based in New Delhi, India.",
};

export default function AboutPage() {
  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28">
      <div className="editorial-container">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Centered, Uppercase, Letter-spaced ABOUT Heading matching CONTACT heading */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal"
            >
              ABOUT
            </h1>
          </div>

          {/* Balanced Two-Column Layout: Portrait on Left, Biography on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait at moderate size with original aspect ratio */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_12px_32px_rgba(28,27,26,0.06)] rounded-xs">
              <Image
                src="/images/author-portrait.webp"
                alt="Aanchal Malhotra in a white shirt against a sandstone wall"
                fill
                priority
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 380px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Complete Biography, Left-Aligned with Compact Spacing */}
          <div className="md:col-span-7 flex flex-col justify-start text-left pt-1 md:pt-2">
            <div className="space-y-4 text-[var(--color-text-secondary)] text-[16px] sm:text-[17px] leading-[1.6]">
              {authorProfile.bio.map((paragraph, index) => (
                <p key={index} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

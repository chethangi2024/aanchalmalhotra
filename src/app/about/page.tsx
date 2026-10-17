import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Aanchal Malhotra",
  description:
    "Biography of Aanchal Malhotra, oral historian and author based in New Delhi, India.",
};

export default function AboutPage() {
  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="max-w-4xl lg:max-w-5xl mx-auto font-[family-name:var(--font-cormorant)]">
          {/* Centered, Uppercase, Letter-spaced ABOUT Heading matching CONTACT heading */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-cormorant)]"
            >
              ABOUT
            </h1>
          </div>

          {/* Balanced Two-Column Layout: Portrait on Left, Biography on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
            {/* Left Column: Portrait at moderate size preserving original 3:4 aspect ratio */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] md:max-w-[350px] aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_12px_32px_rgba(28,27,26,0.06)] rounded-xs">
                <Image
                  src="/images/author-portrait.webp"
                  alt="Aanchal Malhotra in a white shirt against a sandstone wall"
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 350px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column: Exact Client Biography with Comfortable Readable Typography */}
            <div className="md:col-span-7 flex flex-col justify-start text-left pt-0.5 md:pt-1 max-w-[540px]">
              <div className="space-y-3.5 text-[18px] sm:text-[19px] md:text-[20px] text-[var(--color-text-secondary)] leading-[1.5] font-[family-name:var(--font-cormorant)] font-normal">
                {/* Paragraph 1 */}
                <p className="m-0">
                  Aanchal Malhotra (b.1990) is an oral historian and writer based in New Delhi, India. She is the co-founder of the{" "}
                  <a
                    href="https://museumofmaterialmemory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    <em>Museum of Material Memory</em>
                  </a>
                  , a crowdsourced digital archive of South Asian material culture and family heirlooms, and Head of Oral History Projects at{" "}
                  <a
                    href="https://southasiaspeaks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    <em>South Asia Speaks</em>
                  </a>
                  .
                </p>

                {/* Paragraph 2 */}
                <p className="m-0">
                  Malhotra is the author of the non-fiction books{" "}
                  <em>Remnants of A Separation: A History of Partition through Material Memory</em> (2017) and{" "}
                  <em>In the Language of Remembering: The Inheritance of Partition</em> (2022), which together trace the long-term, cross-border, generational impact of the 1947 Partition. Her debut novel titled{" "}
                  <em>The Book of Everlasting Things</em> was listed in NPR’s Best Books of 2022.
                </p>

                {/* Paragraph 3 */}
                <p className="m-0">
                  Her work has won the Council for Museum Anthropology Book Award and been shortlisted for the British Academy Book Prize and Sahitya Akademi Yuva Puraskar, among other honours. She is currently working on a children&apos;s book about Partition (forthcoming, May 2026).
                </p>

                {/* Paragraph 4 */}
                <p className="m-0">
                  She is represented by David Godwin Associates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

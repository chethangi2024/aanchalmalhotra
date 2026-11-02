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
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Centered, Uppercase, Letter-spaced ABOUT Heading matching CONTACT heading */}
          <div className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "24px",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              ABOUT
            </h1>
          </div>

          {/* Centred Combined Unit: Portrait on Left, Biography on Right (matching homepage second section) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[960px] flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 lg:gap-12">
              {/* Left Column: Portrait preserved at current size and aspect ratio */}
              <div className="w-full md:w-auto shrink-0 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:w-[305px] aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] shadow-[0_12px_32px_rgba(28,27,26,0.06)] rounded-xs">
                  <Image
                    src="/images/author-portrait.webp"
                    alt="Aanchal Malhotra in a white shirt against a sandstone wall"
                    fill
                    priority
                    sizes="(max-width: 768px) 85vw, 305px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Exact Client Biography with Reference Body Typography */}
              <div className="w-full max-w-[560px] flex flex-col justify-start text-left pt-0">
                <div className="space-y-4 text-[17px] leading-[24.2px] text-[#000000] font-[family-name:var(--font-serif-body)] font-normal [font-variant-numeric:oldstyle-nums] text-left sm:text-justify [text-align-last:left] [hyphens:none] [word-break:normal] [overflow-wrap:normal]">
                  {/* Paragraph 1 */}
                  <p className="m-0">
                    Aanchal Malhotra (b.1990) is an oral historian and writer based in New Delhi, India. She holds degrees in Traditional Printmaking and Art History, and is the co-founder of the{" "}
                    <a
                      href="https://museumofmaterialmemory.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    >
                      <em>Museum of Material Memory</em>
                    </a>
                    , a crowdsourced digital archive of South Asian material culture and family heirlooms, and Head of Oral History Projects at{" "}
                    <a
                      href="https://southasiaspeaks.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-[var(--color-accent-mustard)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
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
                    Her work has won the Council for Museum Anthropology Book Award and been shortlisted for the British Academy Book Prize and Sahitya Akademi Yuva Puraskar, among other honours. She is currently working on a children&apos;s book about Partition (forthcoming, May 2027).
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
    </div>
  );
}

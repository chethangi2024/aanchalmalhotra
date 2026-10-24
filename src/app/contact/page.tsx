import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aanchal Malhotra",
  description:
    "Contact information for interviews, publicity, rights, and signed books for Aanchal Malhotra.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-[calc(100vh-var(--header-height)-180px)] bg-[#FAF8F5] pt-10 md:pt-14 pb-20 md:pb-28">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Centered, Uppercase, Letter-spaced CONTACT Heading matching other pages */}
          <div className="text-center mb-6 md:mb-8">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              CONTACT
            </h1>
          </div>

          {/* Thin Horizontal Divider in exact footer colour (#947D53) */}
          <div
            className="w-full h-[1px] mb-10 md:mb-12"
            style={{ backgroundColor: "#947D53" }}
            aria-hidden="true"
          />

          {/* Three-Column Layout Beneath the Divider - Equal widths, identical top alignment and vertical rhythm */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 items-stretch text-left text-[18.6px] leading-[24.2px] text-[var(--color-text-secondary)] [font-variant-numeric:oldstyle-nums] font-[family-name:var(--font-serif-body)] font-normal">
            
            {/* COLUMN 1: INTERVIEWS, PUBLICITY & SPEAKING */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2
                  style={{
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    minHeight: "2.6em",
                  }}
                  className="italic text-[#222222] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start"
                >
                  INTERVIEWS, PUBLICITY &amp; SPEAKING
                </h2>
                <div className="min-h-[4.5em] mb-4">
                  <p className="m-0 text-[var(--color-text-secondary)] leading-relaxed">
                    For enquiries relating to interviews, publicity and speaking invitations within South Asia, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[var(--color-text-primary)] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#1C1B1A]">Naiyya Singh</span>,{" "}
                    <em className="italic">HarperCollins India</em>
                  </p>
                </div>
                <p className="m-0 text-[var(--color-text-primary)] leading-normal" style={{ margin: 0 }}>
                  <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                  <a
                    href="mailto:naiyya.singh@harpercollins.co.in"
                    className="underline underline-offset-4 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    style={{ textUnderlineOffset: "4px", wordBreak: "break-word" }}
                  >
                    naiyya.singh@harpercollins.co.in
                  </a>
                </p>
              </div>
            </div>

            {/* COLUMN 2: RIGHTS & OTHER ENQUIRIES */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2
                  style={{
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    minHeight: "2.6em",
                  }}
                  className="italic text-[#222222] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start"
                >
                  RIGHTS &amp; OTHER ENQUIRIES
                </h2>
                <div className="min-h-[4.5em] mb-4">
                  <p className="m-0 text-[var(--color-text-secondary)] leading-relaxed">
                    For Rights and all other enquiries, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[var(--color-text-primary)] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#1C1B1A]">David Godwin</span>,{" "}
                    <em className="italic">DGA</em>
                  </p>
                </div>
                <p className="m-0 text-[var(--color-text-primary)] leading-normal" style={{ margin: 0 }}>
                  <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                  <a
                    href="mailto:assistant@davidgodwinassociates.co.uk"
                    className="underline underline-offset-4 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    style={{ textUnderlineOffset: "4px", wordBreak: "break-word" }}
                  >
                    assistant@davidgodwinassociates.co.uk
                  </a>
                </p>
              </div>
            </div>

            {/* COLUMN 3: SIGNED BOOKS */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2
                  style={{
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    minHeight: "2.6em",
                  }}
                  className="italic text-[#222222] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start"
                >
                  SIGNED BOOKS
                </h2>
                <div className="min-h-[4.5em] mb-4">
                  <p className="m-0 text-[var(--color-text-secondary)] leading-relaxed">
                    To order signed/personalized copies of Aanchal&apos;s books, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[var(--color-text-primary)] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#1C1B1A]">Bahrisons Booksellers</span>, New Delhi
                  </p>
                </div>
                <p className="m-0 text-[var(--color-text-primary)] leading-normal" style={{ margin: 0 }}>
                  <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                  <a
                    href="mailto:bahrisons@outlook.com"
                    className="underline underline-offset-4 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                    style={{ textUnderlineOffset: "4px", wordBreak: "break-word" }}
                  >
                    bahrisons@outlook.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

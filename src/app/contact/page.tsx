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
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Centered, Uppercase, Letter-spaced CONTACT Heading (~28px lightweight sans-serif) */}
          <div className="text-center mb-6 md:mb-8">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 300,
              }}
              className="font-[family-name:var(--font-sans-nav)] text-[#222222] uppercase leading-tight m-0"
            >
              CONTACT
            </h1>
          </div>

          {/* Thin Orange Horizontal Divider Spanning Nearly Full Content Width */}
          <div
            className="w-full h-[1px] bg-[#E8734A] mb-10 md:mb-12 opacity-85"
            aria-hidden="true"
          />

          {/* Three-Column Layout Beneath the Divider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 items-start text-left text-[14px] sm:text-[15px] font-[family-name:var(--font-serif-body)] text-[var(--color-text-secondary)] leading-[1.6]">
            {/* LEFT COLUMN: INTERVIEWS, PUBLICITY & SPEAKING */}
            <div className="flex flex-col">
              <h2
                style={{
                  fontSize: "17px",
                  letterSpacing: "normal",
                  fontWeight: 500,
                  lineHeight: "1.4",
                }}
                className="font-[family-name:var(--font-sans-nav)] italic text-[#222222] uppercase mb-3"
              >
                INTERVIEWS, PUBLICITY &amp; SPEAKING
              </h2>
              <p className="m-0 mb-3 text-[var(--color-text-secondary)] leading-[1.6]">
                For enquiries relating to Interviews, Publicity and Speaking Invitations within South Asia, please contact:
              </p>
              <div className="mb-3 text-[var(--color-text-primary)] leading-[1.6]">
                <p className="m-0 font-medium">Naiyya Singh</p>
                <p className="m-0 text-[var(--color-text-secondary)]">HarperCollins India</p>
              </div>
              <p className="m-0 text-[var(--color-text-primary)] leading-[1.6]">
                <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                <a
                  href="mailto:naiyya.singh@harpercollins.co.in"
                  className="underline underline-offset-2 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                >
                  naiyya.singh@harpercollins.co.in
                </a>
              </p>
            </div>

            {/* MIDDLE COLUMN: RIGHTS & OTHER ENQUIRIES */}
            <div className="flex flex-col">
              <h2
                style={{
                  fontSize: "17px",
                  letterSpacing: "normal",
                  fontWeight: 500,
                  lineHeight: "1.4",
                }}
                className="font-[family-name:var(--font-sans-nav)] italic text-[#222222] uppercase mb-3"
              >
                RIGHTS &amp; OTHER ENQUIRIES
              </h2>
              <p className="m-0 mb-3 text-[var(--color-text-secondary)] leading-[1.6]">
                For Rights and all other enquiries, please contact:
              </p>
              <div className="mb-3 text-[var(--color-text-primary)] leading-[1.6]">
                <p className="m-0 font-medium">David Godwin</p>
                <p className="m-0 text-[var(--color-text-secondary)]">DGA</p>
              </div>
              <p className="m-0 text-[var(--color-text-primary)] leading-[1.6]">
                <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                <a
                  href="mailto:assistant@davidgodwinassociates.co.uk"
                  className="underline underline-offset-2 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                >
                  assistant@davidgodwinassociates.co.uk
                </a>
              </p>
            </div>

            {/* RIGHT COLUMN: SIGNED BOOKS */}
            <div className="flex flex-col">
              <h2
                style={{
                  fontSize: "17px",
                  letterSpacing: "normal",
                  fontWeight: 500,
                  lineHeight: "1.4",
                }}
                className="font-[family-name:var(--font-sans-nav)] italic text-[#222222] uppercase mb-3"
              >
                SIGNED BOOKS
              </h2>
              <p className="m-0 mb-3 text-[var(--color-text-secondary)] leading-[1.6]">
                To order signed/personalized copies of Aanchal&apos;s books, please contact:
              </p>
              <div className="mb-3 text-[var(--color-text-primary)] leading-[1.6]">
                <p className="m-0 font-medium">Bahrisons Booksellers</p>
                <p className="m-0 text-[var(--color-text-secondary)]">New Delhi</p>
              </div>
              <p className="m-0 text-[var(--color-text-primary)] leading-[1.6]">
                <span className="text-[var(--color-text-muted)] mr-1">Email:</span>
                <a
                  href="mailto:bahrisons@outlook.com"
                  className="underline underline-offset-2 decoration-[var(--color-border-dark)] hover:text-[var(--color-accent-mustard)] hover:decoration-[var(--color-accent-mustard)] transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)]"
                >
                  bahrisons@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

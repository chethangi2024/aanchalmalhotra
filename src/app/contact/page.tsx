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
                fontSize: "24px",
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

          {/* Three-Column Layout Beneath the Divider - Distributed across full width of the gold divider with consistent spacing */}
          <div className="w-full grid grid-cols-1 min-[1180px]:grid-cols-[1fr_minmax(345px,1.18fr)_1fr] gap-8 min-[1180px]:gap-10 items-stretch text-left text-[17px] leading-[24.2px] text-[#000000] [font-variant-numeric:oldstyle-nums] font-[family-name:var(--font-serif-body)] font-normal">
            
            {/* COLUMN 1: INTERVIEWS, PUBLICITY & SPEAKING */}
            <div className="flex flex-col justify-between h-full min-w-0">
              <div>
                <h2
                  style={{
                    fontSize: "22px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    color: "#000000",
                  }}
                  className="italic text-[#000000] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start min-[1180px]:min-h-[2.6em]"
                >
                  INTERVIEWS, PUBLICITY &amp; SPEAKING
                </h2>
                <div className="min-[1180px]:min-h-[4.5em] mb-4">
                  <p className="m-0 text-[#000000] leading-relaxed">
                    For enquiries relating to interviews, publicity and speaking invitations within South Asia, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[#000000] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal text-[#000000]" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#000000]">Naiyya Singh</span>,{" "}
                    <em className="italic text-[#000000]">HarperCollins India</em>
                  </p>
                </div>
                <p className="m-0 text-[#000000] leading-normal min-[1180px]:whitespace-nowrap [overflow-wrap:anywhere]" style={{ margin: 0 }}>
                  <span className="text-[#000000] mr-1">Email:</span>
                  <a
                    href="mailto:naiyya.singh@harpercollins.co.in"
                    className="no-underline text-[#000000] hover:text-[#000000] transition-colors inline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#000000]"
                  >
                    naiyya.singh@harpercollins.co.in
                  </a>
                </p>
              </div>
            </div>

            {/* COLUMN 2: RIGHTS & OTHER ENQUIRIES */}
            <div className="flex flex-col justify-between h-full min-w-0 min-[1180px]:relative min-[1180px]:left-[28px]">
              <div>
                <h2
                  style={{
                    fontSize: "22px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    color: "#000000",
                  }}
                  className="italic text-[#000000] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start min-[1180px]:min-h-[2.6em]"
                >
                  RIGHTS &amp; OTHER ENQUIRIES
                </h2>
                <div className="min-[1180px]:min-h-[4.5em] mb-4">
                  <p className="m-0 text-[#000000] leading-relaxed">
                    For Rights and all other enquiries, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[#000000] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal text-[#000000]" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#000000]">David Godwin</span>,{" "}
                    <em className="italic text-[#000000]">DGA</em>
                  </p>
                </div>
                <p className="m-0 text-[#000000] leading-normal min-[1180px]:whitespace-nowrap [overflow-wrap:anywhere]" style={{ margin: 0 }}>
                  <span className="text-[#000000] mr-1">Email:</span>
                  <a
                    href="mailto:assistant@davidgodwinassociates.co.uk"
                    className="no-underline text-[#000000] hover:text-[#000000] transition-colors inline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#000000]"
                  >
                    assistant@davidgodwinassociates.co.uk
                  </a>
                </p>
              </div>
            </div>

            {/* COLUMN 3: SIGNED BOOKS */}
            <div className="flex flex-col justify-between h-full min-w-0">
              <div>
                <h2
                  style={{
                    fontSize: "22px",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    color: "#000000",
                  }}
                  className="italic text-[#000000] uppercase m-0 mb-3 font-semibold font-[family-name:var(--font-serif-display)] flex items-start min-[1180px]:min-h-[2.6em]"
                >
                  SIGNED BOOKS
                </h2>
                <div className="min-[1180px]:min-h-[4.5em] mb-4">
                  <p className="m-0 text-[#000000] leading-relaxed">
                    To order signed/personalized copies of Aanchal&apos;s books, contact:
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[#000000] leading-normal" style={{ marginBottom: "2px" }}>
                  <p className="m-0 font-normal text-[#000000]" style={{ margin: 0, marginBottom: 0 }}>
                    <span className="font-medium text-[#000000]">Bahrisons Booksellers</span>, New Delhi
                  </p>
                </div>
                <p className="m-0 text-[#000000] leading-normal min-[1180px]:whitespace-nowrap [overflow-wrap:anywhere]" style={{ margin: 0 }}>
                  <span className="text-[#000000] mr-1">Email:</span>
                  <a
                    href="mailto:bahrisons@outlook.com"
                    className="no-underline text-[#000000] hover:text-[#000000] transition-colors inline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#000000]"
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

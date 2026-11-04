import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Aanchal Malhotra",
  description:
    "Terms of Use and copyright notice for the official website of oral historian and author Aanchal Malhotra.",
};

export default function TermsOfUsePage() {
  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <article className="w-full max-w-[720px] mx-auto font-[family-name:var(--font-serif-body)] text-[17px] leading-[24.2px] text-[#000000] font-normal [font-variant-numeric:oldstyle-nums]">
          {/* Page Header */}
          <header className="text-center mb-10 md:mb-14">
            <h1
              style={{
                fontSize: "24px",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              TERMS OF USE
            </h1>
            <p className="mt-3 mb-0 text-[16px] sm:text-[17px] text-[var(--color-text-muted)] italic">
              Effective Date: 3 November 2026
            </p>
          </header>

          <div
            className="space-y-8 md:space-y-10 text-justify [text-align-last:left] [hyphens:none] [word-break:normal] [overflow-wrap:normal]"
            style={{ textAlign: "justify", textAlignLast: "left" }}
          >
            {/* 1. Acceptance and Use of the Website */}
            <section aria-labelledby="tou-acceptance">
              <h2
                id="tou-acceptance"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                1. Acceptance and Use of the Website
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  Welcome to the official website of Aanchal Malhotra. By accessing or browsing this website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of the website.
                </p>
                <p className="m-0">
                  This website is provided as a literary, artistic, and historical resource presenting information about Aanchal Malhotra&apos;s books, essays, oral history work, visual art, and archival research.
                </p>
              </div>
            </section>

            {/* 2. Copyright and Intellectual Property Ownership */}
            <section aria-labelledby="tou-copyright">
              <h2
                id="tou-copyright"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                2. Copyright and Ownership of Materials
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  <strong>Author&apos;s Original Works:</strong> Unless otherwise credited, all original written content on this website, including book synopses, prologues, excerpts, reading guides, essays, research notes, oral history documentation, original photographs, and visual artworks (such as the printmaking series <em>In Praise of Shadows</em>), is the intellectual property of Aanchal Malhotra and is protected by applicable copyright laws in India and international copyright treaties.
                </p>
                <p className="m-0">
                  <strong>Third-Party, Publisher, and Archival Materials:</strong> Certain materials displayed or referenced on this website, including book cover designs, illustrations (such as cover artwork by Maryam Huq for <em>A Handful of Home</em>), international publisher editions, author portraits, family archive photographs contributed by interviewees, and historical documents or photographs credited to institutions (such as the British Library India Office Records and the National Army Museum) or individual photographers, remain the copyright and property of their respective creators, publishers, contributors, or archival repositories. No claim of ownership by Aanchal Malhotra is made over such third-party materials.
                </p>
              </div>
            </section>

            {/* 3. Personal and Non-Commercial Usage */}
            <section aria-labelledby="tou-personal-use">
              <h2
                id="tou-personal-use"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                3. Personal and Non-Commercial Website Usage
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  You may access, view, and read the materials on this website solely for your personal, private, educational, or non-commercial research use. Brief quotations or references for academic citation, literary review, or journalistic commentary are permitted in accordance with statutory fair dealing provisions under applicable copyright law, provided that full and accurate attribution is given to Aanchal Malhotra and any relevant publisher or copyright holder.
                </p>
              </div>
            </section>

            {/* 4. Restrictions on Use */}
            <section aria-labelledby="tou-restrictions">
              <h2
                id="tou-restrictions"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                4. Restrictions on Copying and Commercial Use
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  Except as expressly permitted above or by applicable law, you may not, without prior written permission from the relevant rights holder:
                </p>
                <ul className="list-disc pl-6 space-y-2 m-0">
                  <li>
                    Copy, reproduce, republish, upload, post, transmit, or distribute any text, book excerpt, photograph, printmaking work, or archival image from this website in any medium.
                  </li>
                  <li>
                    Use any content, images, or creative materials from this website for commercial purposes, merchandise, advertising, or unauthorised publications.
                  </li>
                  <li>
                    Modify, adapt, translate, or create derivative works based upon the written or visual materials presented on this website.
                  </li>
                  <li>
                    Use automated scraping tools, bots, or data-mining processes to systematically extract text, images, or archival materials from this website, including for training machine learning or artificial intelligence models.
                  </li>
                  <li>
                    Attempt to interfere with the proper technical operation or security of the website.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. External Links and Third-Party Websites */}
            <section aria-labelledby="tou-external-links">
              <h2
                id="tou-external-links"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                5. External Links and Third-Party Websites
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  This website provides links to external websites, including book publishers, independent bookshops and retailers, literary magazines, newspapers, podcasts, video platforms, social media profiles, the <em>Museum of Material Memory</em>, and <em>South Asia Speaks</em>, for the convenience of readers.
                </p>
                <p className="m-0">
                  Aanchal Malhotra does not control the technical operation, availability, or terms of third-party websites and is not responsible for the content, accuracy, or practices of external destinations. Accessing any external website is at your own discretion and subject to the terms and policies of that site.
                </p>
              </div>
            </section>

            {/* 6. Website Availability and Limitation of Liability */}
            <section aria-labelledby="tou-liability">
              <h2
                id="tou-liability"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                6. Website Availability and Limitations of Liability
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  While care is taken to ensure that the literary, bibliographical, and archival information on this website is accurate, the website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
                </p>
                <p className="m-0">
                  We do not guarantee that the website will always be uninterrupted, error-free, or free of technical defects. To the fullest extent permitted by applicable law, Aanchal Malhotra and her representatives shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising out of or in connection with your access to, use of, or inability to use this website or any linked external site.
                </p>
              </div>
            </section>

            {/* 7. Contact Information for Copyright and Usage Enquiries */}
            <section aria-labelledby="tou-contact">
              <h2
                id="tou-contact"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                7. Contact Information for Copyright and Usage Enquiries
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  For permissions, publishing rights, translation enquiries, or requests to reproduce any original material by Aanchal Malhotra, please contact her literary representation:
                </p>
                <div className="pl-4 border-l border-[var(--color-border)] py-0.5 mb-4">
                  <p className="m-0" style={{ margin: 0 }}>
                    <span className="font-medium">David Godwin</span>, <em>David Godwin Associates (DGA)</em>
                  </p>
                  <p className="m-0 [overflow-wrap:anywhere]" style={{ margin: 0 }}>
                    Email:{" "}
                    <a
                      href="mailto:assistant@davidgodwinassociates.co.uk"
                      className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53] [overflow-wrap:anywhere]"
                      style={{ color: "#947D53", textDecoration: "none" }}
                    >
                      assistant@davidgodwinassociates.co.uk
                    </a>
                  </p>
                </div>
                <p className="m-0 [overflow-wrap:anywhere]">
                  For interviews, publicity, and speaking enquiries within South Asia, please contact <span className="font-medium">Naiyya Singh</span>, <em>HarperCollins India</em> (
                  <a
                    href="mailto:naiyya.singh@harpercollins.co.in"
                    className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53] [overflow-wrap:anywhere]"
                    style={{ color: "#947D53", textDecoration: "none" }}
                  >
                    naiyya.singh@harpercollins.co.in
                  </a>
                  ), or see the{" "}
                  <Link
                    href="/contact"
                    className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{ color: "#947D53", textDecoration: "none" }}
                  >
                    Contact
                  </Link>{" "}
                  page for full details.
                </p>
              </div>
            </section>

            {/* 8. Applicable Laws and Jurisdiction */}
            <section aria-labelledby="tou-governing-law">
              <h2
                id="tou-governing-law"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                8. Applicable Laws and Jurisdiction
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  These Terms of Use and any dispute or claim arising out of or in connection with the use of this website shall be governed by and construed in accordance with the laws of India. Any legal proceedings arising in relation to this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

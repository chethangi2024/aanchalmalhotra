import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Aanchal Malhotra",
  description:
    "Privacy Policy for the official website of oral historian and author Aanchal Malhotra.",
};

export default function PrivacyPolicyPage() {
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
              PRIVACY POLICY
            </h1>
            <p className="mt-3 mb-0 text-[16px] sm:text-[17px] text-[var(--color-text-muted)] italic">
              Effective Date: 3 November 2026
            </p>
          </header>

          <div
            className="space-y-8 md:space-y-10 text-justify [text-align-last:left] [hyphens:none] [word-break:normal] [overflow-wrap:normal]"
            style={{ textAlign: "justify", textAlignLast: "left" }}
          >
            {/* 1. Introduction and Scope */}
            <section aria-labelledby="pp-introduction">
              <h2
                id="pp-introduction"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                1. Introduction and Scope
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  This Privacy Policy explains how information is handled when you visit the official website of Aanchal Malhotra, oral historian and writer based in New Delhi, India.
                </p>
                <p className="m-0">
                  This website serves as an informational literary and cultural archive presenting published and forthcoming books, essays, interviews, visual art, and archival research. It is designed to respect visitor privacy and operate with minimal data processing, in alignment with India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable rules.
                </p>
              </div>
            </section>

            {/* 2. Information Collected */}
            <section aria-labelledby="pp-information-collected">
              <h2
                id="pp-information-collected"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                2. Personal Data and Technical Information
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  This website does not collect personal data directly through the site. Specifically, the website does not include contact forms, newsletter sign-ups, user registration, login accounts, comment sections, or any other mechanism for user-submitted content.
                </p>
                <p className="m-0">
                  <strong>Standard Technical Request Data:</strong> When you browse the website, the underlying web hosting infrastructure automatically receives standard technical metadata sent by your web browser to deliver the requested pages and images. This may include your Internet Protocol (IP) address, browser type and version, operating system, referring URL, the pages requested, and the date and time of the request.
                </p>
                <p className="m-0">
                  <strong>Voluntary Email Correspondence:</strong> If you choose to send an email to any of the literary, publicity, or bookseller contacts listed on the{" "}
                  <Link
                    href="/contact"
                    className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{ color: "#947D53", textDecoration: "none" }}
                  >
                    Contact
                  </Link>{" "}
                  page, your email address and the contents of your message are transmitted directly through your own email service provider to the respective recipient.
                </p>
              </div>
            </section>

            {/* 3. Purpose of Processing */}
            <section aria-labelledby="pp-purpose">
              <h2
                id="pp-purpose"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                3. Purpose of Processing
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  Any limited technical or correspondence information is processed solely for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Delivering website pages, typography, and archival images to your browser accurately and efficiently.
                  </li>
                  <li>
                    Maintaining the technical stability, performance, and security of the website and protecting against unauthorized access or malicious activity.
                  </li>
                  <li>
                    Responding to enquiries that you voluntarily initiate by email.
                  </li>
                </ul>
                <p className="m-0">
                  Visitor information is never sold, rented, or traded, and is not used for behavioural profiling or targeted advertising.
                </p>
              </div>
            </section>

            {/* 4. Cookies and Analytics */}
            <section aria-labelledby="pp-cookies-analytics">
              <h2
                id="pp-cookies-analytics"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                4. Cookies and Analytics
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  This website does not use Google Analytics or any other visitor analytics, session recording, or traffic-tracking tools.
                </p>
                <p className="m-0">
                  The website does not set tracking cookies, advertising pixels, or cross-site identifiers on your device.
                </p>
              </div>
            </section>

            {/* 5. Third-Party Services and External Links */}
            <section aria-labelledby="pp-third-parties">
              <h2
                id="pp-third-parties"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                5. Third-Party Services and External Links
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  <strong>Web Typography (Google Fonts):</strong> This website uses the <em>Crimson Text</em> typeface served via Google Fonts. When your browser loads a page, it may connect to Google&apos;s font servers to retrieve the required font files, during which your browser transmits standard technical request metadata (such as your IP address and browser information) to Google.
                </p>
                <p className="m-0">
                  <strong>External Links:</strong> This website does not embed third-party social media feeds or video players directly on its pages. However, it contains outbound links to external websites and platforms, including book publishers and retailers, literary journals, news publications, podcasts, YouTube, Instagram, X (formerly Twitter), the <em>Museum of Material Memory</em>, and <em>South Asia Speaks</em>. When you follow an external link and leave this website, any information collected by that external destination is governed by the privacy policy and terms of that third-party service.
                </p>
              </div>
            </section>

            {/* 6. Data Storage, Security and Retention */}
            <section aria-labelledby="pp-storage-security">
              <h2
                id="pp-storage-security"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                6. Data Storage, Security and Retention
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  Because the website does not maintain user accounts or databases of visitor submissions, no personal profiles are stored on the website.
                </p>
                <p className="m-0">
                  Standard server access and error logs generated by the hosting infrastructure are protected by reasonable technical and organizational security safeguards and are retained only for routine operational and security periods before being automatically overwritten or deleted. Emails sent voluntarily to the representatives listed on the{" "}
                  <Link
                    href="/contact"
                    className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{ color: "#947D53", textDecoration: "none" }}
                  >
                    Contact
                  </Link>{" "}
                  page are handled and retained by those respective recipients in accordance with their own professional and legal practices.
                </p>
              </div>
            </section>

            {/* 7. Applicable Privacy Rights */}
            <section aria-labelledby="pp-rights">
              <h2
                id="pp-rights"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                7. Your Privacy Rights
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  Under India&apos;s Digital Personal Data Protection Act, 2023 (and other applicable data protection laws depending on your location), individuals have rights regarding their personal data, where personal data is processed on the basis of consent or voluntary provision. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Right to Access Information:</strong> The right to request confirmation and a summary of personal data being processed and the processing activities undertaken.
                  </li>
                  <li>
                    <strong>Right to Correction and Erasure:</strong> The right to request correction, completion, updating, or erasure of personal data that is no longer necessary for the purpose for which it was provided, subject to applicable legal retention requirements.
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, the right to withdraw consent at any time.
                  </li>
                  <li>
                    <strong>Right to Grievance Redressal and Nomination:</strong> The right to register a grievance regarding data processing and, under the DPDP Act, to nominate another individual to exercise your rights in the event of death or incapacity.
                  </li>
                </ul>
                <p className="m-0">
                  As this website does not maintain visitor accounts or databases, requests relating to any email correspondence you have sent may be directed to the relevant contact recipient listed below.
                </p>
              </div>
            </section>

            {/* 8. Contact Information */}
            <section aria-labelledby="pp-contact">
              <h2
                id="pp-contact"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                8. Contact Information for Privacy Enquiries
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  For any questions, concerns, or requests relating to this Privacy Policy or the handling of information in connection with this website, please contact Aanchal Malhotra&apos;s literary representation for general enquiries:
                </p>
                <div className="pl-4 border-l border-[var(--color-border)] py-0.5 mb-4">
                  <p className="m-0" style={{ margin: 0 }}>
                    <span className="font-medium">David Godwin</span>, <em>David Godwin Associates (DGA)</em>
                  </p>
                  <p className="m-0" style={{ margin: 0 }}>
                    Email:{" "}
                    <a
                      href="mailto:assistant@davidgodwinassociates.co.uk"
                      className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                      style={{ color: "#947D53", textDecoration: "none" }}
                    >
                      assistant@davidgodwinassociates.co.uk
                    </a>
                  </p>
                </div>
                <p className="m-0">
                  For enquiries directed to South Asia publicity (HarperCollins India) or signed book orders (Bahrisons Booksellers, New Delhi), please refer to the respective contact details on the{" "}
                  <Link
                    href="/contact"
                    className="no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#947D53]"
                    style={{ color: "#947D53", textDecoration: "none" }}
                  >
                    Contact
                  </Link>{" "}
                  page.
                </p>
              </div>
            </section>

            {/* 9. Policy Updates */}
            <section aria-labelledby="pp-updates">
              <h2
                id="pp-updates"
                className="font-[family-name:var(--font-serif-display)] font-normal text-[#222222] pb-2.5 mb-4 border-b border-[var(--color-border-subtle)] leading-snug text-left"
                style={{ fontSize: "22px", textAlign: "left" }}
              >
                9. Updates to This Privacy Policy
              </h2>
              <div className="space-y-3.5">
                <p className="m-0">
                  This Privacy Policy may be updated periodically to reflect technical changes to the website or applicable legal requirements. Any updates will be published on this page together with the revised effective date.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

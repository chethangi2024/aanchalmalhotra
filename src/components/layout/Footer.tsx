import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full mt-auto site-footer"
      style={{ backgroundColor: "#947D53", color: "#FFFFFF" }}
      aria-label="Site Footer"
    >
      <style>{`
        .site-footer,
        .site-footer a,
        .site-footer p,
        .site-footer span {
          color: #FFFFFF !important;
        }
        .site-footer a:hover,
        .site-footer a:focus {
          color: #FFFFFF !important;
          opacity: 0.8 !important;
        }
      `}</style>
      <div className="editorial-container py-12 md:py-14">
        <div className="flex flex-col items-start gap-5">
          {/* Social Media Icons (Instagram & X) */}
          <div className="flex items-center gap-4" style={{ color: "#FFFFFF" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/aanch_m/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF]"
              style={{ color: "#FFFFFF" }}
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#FFFFFF", stroke: "#FFFFFF", fill: "none" }}
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#FFFFFF" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#FFFFFF" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#FFFFFF" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/aanchalmalhotra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF]"
              style={{ color: "#FFFFFF" }}
              aria-label="X (formerly Twitter)"
            >
              <svg
                className="w-4.5 h-4.5"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                style={{ color: "#FFFFFF", fill: "#FFFFFF" }}
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Museum of Material Memory Link */}
          <div>
            <a
              href="https://museumofmaterialmemory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans-nav)] tracking-[0.12em] uppercase font-normal block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF]"
              style={{ color: "#FFFFFF" }}
            >
              MUSEUM OF MATERIAL MEMORY
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="pt-2">
            <p
              className="m-0 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans-nav)] tracking-[0.04em] font-light"
              style={{ color: "#FFFFFF" }}
            >
              © 2026 Aanchal Malhotra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

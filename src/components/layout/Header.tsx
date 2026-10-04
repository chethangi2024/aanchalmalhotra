"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems, NavItem } from "@/data/navigation";

export default function Header() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>("books");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Initialize navigation items
  useEffect(() => {
    setNavItems(getNavItems());
  }, []);

  // Handle subtle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdownId(null);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Keyboard accessibility: Escape key closes active menus
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openDropdownId) {
          setOpenDropdownId(null);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    },
    [openDropdownId, isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop hover with gentle delay to avoid accidental flickers
  const handleMouseEnter = (id: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 150);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          : "bg-[var(--color-bg)] py-6 md:py-8 border-b border-transparent"
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Site Identity / Refined Editorial Wordmark - Visually comparable to navigation */}
        <Link
          href="/"
          className="group py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] rounded-xs shrink-0"
          aria-label="AANCHAL MALHOTRA"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="block font-[family-name:var(--font-serif-display)] text-[16px] sm:text-[17px] md:text-[18px] font-normal tracking-[0.01em] text-[var(--color-text-primary)] transition-opacity duration-200 group-hover:opacity-70 leading-none">
            AANCHAL MALHOTRA
          </span>
        </Link>

        {/* Desktop Navigation (Horizontal, quiet, balanced whitespace, unified vertical baseline) */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 text-[11px] lg:text-[12px] font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wider)] uppercase"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isOpen = openDropdownId === item.id;
            const isCurrentActive =
              item.href &&
              (pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)));

            if (hasChildren) {
              return (
                <div
                  key={item.id}
                  className="relative flex items-center h-full"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`group inline-flex items-center py-2 whitespace-nowrap transition-colors cursor-pointer leading-normal uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] rounded-xs ${
                      isCurrentActive
                        ? "text-[var(--color-text-primary)] font-medium"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                    onClick={() =>
                      setOpenDropdownId(isOpen ? null : item.id)
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${item.id}`}
                  >
                    <span className="uppercase">{item.label}</span>
                  </button>

                  {/* Refined Books Dropdown: Right-aligned to BOOKS right edge, opening leftward */}
                  {isOpen && (
                    <div
                      id={`dropdown-${item.id}`}
                      className="absolute top-full right-0 pt-0.5 z-50 animate-in fade-in duration-150"
                      role="menu"
                    >
                      <div className="bg-[#FAF8F5]/90 backdrop-blur-xs border border-[var(--color-border-subtle)]/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] py-3 px-4 rounded-none w-max min-w-[280px]">
                        {/* Compact Vertically Stacked Book Titles - Right-aligned, Editorial Uppercase */}
                        <div className="flex flex-col gap-2 items-end text-right">
                          {item.children?.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.id}
                                href={child.href}
                                className={`block w-full py-0.5 whitespace-nowrap transition-colors text-right font-[family-name:var(--font-sans-nav)] text-[10.5px] leading-tight tracking-[0.07em] uppercase font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] ${
                                  isChildActive
                                    ? "text-[var(--color-text-primary)] font-semibold"
                                    : "text-[var(--color-text-primary)]/85 hover:text-[var(--color-text-primary)] hover:opacity-100 opacity-90"
                                }`}
                                role="menuitem"
                                tabIndex={0}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href || "#"}
                className={`py-2 whitespace-nowrap transition-colors relative leading-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] rounded-xs ${
                  isCurrentActive
                    ? "text-[var(--color-text-primary)] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Compact Menu Trigger */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-mustard)] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-300 ${
                isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-300 ${
                isMobileMenuOpen ? "w-6 -translate-y-1.5 -rotate-45" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Editorial Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileDrawerRef}
          className="md:hidden fixed inset-x-0 bottom-0 top-[65px] bg-[var(--color-bg)] z-40 overflow-y-auto px-[var(--gutter-mobile)] py-8 border-t border-[var(--color-border)] animate-in fade-in duration-300 flex flex-col justify-between"
        >
          <nav className="flex flex-col gap-4 font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wider)] uppercase text-[12px] sm:text-[13px]" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = mobileExpandedId === item.id;
              const isCurrentActive =
                item.href &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));

              if (hasChildren) {
                return (
                  <div key={item.id} className="border-b border-[var(--color-border-subtle)] pb-4">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between text-left py-2 cursor-pointer uppercase font-[family-name:var(--font-sans-nav)] tracking-[var(--tracking-wider)]"
                      onClick={() =>
                        setMobileExpandedId(isExpanded ? null : item.id)
                      }
                      aria-expanded={isExpanded}
                    >
                      <span className={`text-[13px] sm:text-[14px] uppercase ${
                        isCurrentActive
                          ? "text-[var(--color-text-primary)] font-semibold"
                          : "text-[var(--color-text-primary)] font-medium"
                      }`}>
                        {item.label}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="mt-2 pl-3 border-l border-[var(--color-border)] flex flex-col gap-2.5 animate-in fade-in duration-200">
                        {item.children?.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.id}
                              href={child.href}
                              className={`block py-1 font-[family-name:var(--font-sans-nav)] text-[11px] sm:text-[11.5px] tracking-[0.06em] uppercase font-medium leading-snug transition-colors ${
                                isChildActive
                                  ? "text-[var(--color-text-primary)] font-semibold"
                                  : "text-[var(--color-text-primary)]/85 hover:text-[var(--color-text-primary)]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.id} className="border-b border-[var(--color-border-subtle)] pb-4">
                  <Link
                    href={item.href || "#"}
                    className={`block py-2 uppercase font-[family-name:var(--font-sans-nav)] text-[13px] sm:text-[14px] tracking-[var(--tracking-wider)] transition-colors ${
                      isCurrentActive
                        ? "text-[var(--color-text-primary)] font-semibold"
                        : "text-[var(--color-text-primary)] hover:text-[var(--color-accent-mustard)] font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile Footer Colophon inside Drawer */}
          <div className="pt-8 mt-6 border-t border-[var(--color-border)] flex flex-col gap-4 text-[var(--text-xs)] font-[family-name:var(--font-sans-nav)] text-[var(--color-text-muted)]">
            <div className="flex items-center gap-4 text-[#FFFFFF]" style={{ color: "#FFFFFF" }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aanch_m/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF] hover:opacity-80 transition-opacity duration-200"
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
                className="p-0.5 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFFFFF] hover:opacity-80 transition-opacity duration-200"
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
            <p className="m-0 italic font-[family-name:var(--font-serif-body)]">
              Aanchal Malhotra &mdash; New Delhi, India
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

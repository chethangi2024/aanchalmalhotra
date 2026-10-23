import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visualArtProjects } from "@/data/visualArtData";

export const metadata: Metadata = {
  title: "Visual Art & Research | Aanchal Malhotra",
  description:
    "Visual art, printmaking, material memory archives, and research projects by Aanchal Malhotra.",
};

export default function VisualArtAndResearchPage() {
  return (
    <div className="w-full pt-10 md:pt-14 pb-20 md:pb-28 bg-[var(--color-bg)]">
      <div className="editorial-container">
        <div className="w-full font-[family-name:var(--font-serif-body)]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              style={{
                fontSize: "clamp(24px, 2.5vw, 28px)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
              className="text-[#222222] uppercase leading-tight m-0 font-normal font-[family-name:var(--font-serif-display)]"
            >
              VISUAL ART &amp; RESEARCH
            </h1>
            <p className="mt-3 text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] italic leading-relaxed">
              Printmaking, material archives, photographic fieldwork, and oral history research.
            </p>
          </div>

          {/* Understated Image-Led Project Index (Inspired by Edmund de Waal's "Making") */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {visualArtProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group block text-left transition-transform duration-300"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-[0_2px_12px_rgba(28,27,26,0.04)] group-hover:shadow-[0_6px_20px_rgba(28,27,26,0.08)] transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Project Metadata */}
                <div className="mt-4">
                  <h2 className="text-[18px] sm:text-[20px] font-normal text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent-mustard)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-[var(--color-text-secondary)] italic mt-1 leading-normal [font-variant-numeric:oldstyle-nums]">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

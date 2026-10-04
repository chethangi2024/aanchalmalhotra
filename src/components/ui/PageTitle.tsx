import AnimatedReveal from "./AnimatedReveal";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  centered?: boolean;
}

export default function PageTitle({
  title,
  subtitle,
  tag,
  className = "",
  centered = false,
}: PageTitleProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center mx-auto max-w-2xl" : "text-left"
      } ${className}`}
    >
      <AnimatedReveal yOffset={16} triggerOnScroll={false}>
        {tag && (
          <span className="block mb-3 text-[var(--text-xs)] uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-mustard)] font-[family-name:var(--font-sans-nav)] font-medium">
            {tag}
          </span>
        )}
        <h1 className="text-[var(--text-3xl)] md:text-[var(--text-4xl)] lg:text-[var(--text-5xl)] font-[family-name:var(--font-serif-display)] text-[var(--color-text-primary)] leading-[var(--leading-tight)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-[var(--text-md)] md:text-[var(--text-lg)] text-[var(--color-text-secondary)] font-[family-name:var(--font-serif-body)] italic leading-[var(--leading-normal)] max-w-2xl">
            {subtitle}
          </p>
        )}
        <div
          className={`h-[1px] w-16 bg-[var(--color-border)] mt-6 ${
            centered ? "mx-auto" : ""
          }`}
        />
      </AnimatedReveal>
    </div>
  );
}

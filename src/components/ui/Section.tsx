interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  narrow?: boolean;
  prose?: boolean;
}

export default function Section({
  id,
  className = "",
  containerClassName = "",
  children,
  narrow = false,
  prose = false,
}: SectionProps) {
  const maxWidthStyle = prose
    ? "max-w-[var(--container-prose)]"
    : narrow
    ? "max-w-[var(--container-narrow)]"
    : "max-w-[var(--container-max)]";

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div
        className={`w-full mx-auto px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)] ${maxWidthStyle} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

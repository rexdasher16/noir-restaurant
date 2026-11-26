type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow text-xs font-semibold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="muted mt-4 text-base leading-7 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}

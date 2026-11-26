import type { CSSProperties, ReactNode } from "react";
import Container from "./ui/Container";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

type PageHeaderProps = { eyebrow: string; title: string; description: string; children?: ReactNode };

/** Shared top section for the inner pages. */
export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="tone-dark relative overflow-hidden border-b hairline pb-14 pt-16 sm:pb-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-ember/15 blur-[110px]"
      />
      <Container className="relative">
        <p style={delay(0)} className="hero-in eyebrow text-xs font-semibold uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
        <h1 style={delay(100)} className="hero-in mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p style={delay(200)} className="hero-in muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {description}
        </p>
        {children ? (
          <div style={delay(300)} className="hero-in mt-6">
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
};

/** A full-width band. The tone decides background and text colours for everything inside. */
export default function Section({ children, tone = "dark", id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`tone-${tone} py-20 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Flame, Sparkles, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { CTASection } from "@/components/home";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { disclosure } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "The story and values behind NOIR, a fictional premium Nigerian restaurant concept.",
};

const values = [
  { icon: Flame, title: "Cooked over flame", text: "Smoke and char shape the menu, from jollof to grilled seafood." },
  { icon: Sparkles, title: "Care in every plate", text: "Nigerian classics, finished with fine-dining detail." },
  { icon: Users, title: "Made for gathering", text: "Booths, long tables and a bar built for shared evenings." },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="About NOIR" title="A modern home for Nigerian flavour" description={disclosure.full} />
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">The concept</h2>
            <p className="muted mt-5 text-lg leading-8">
              NOIR imagines a premium Nigerian restaurant and lounge where familiar dishes are treated with the same care as any fine-dining menu. Think smoky party jollof, flame-grilled seafood and signature drinks served in a candlelit room.
            </p>
            <p className="muted mt-4 text-lg leading-8">
              The restaurant is fictional. It was created by KOVA Technologies to show what a complete restaurant website can do: a menu people can browse, a way to start an order, a table request flow and a gallery.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/experience-chef.jpg" alt="A chef in a black NOIR jacket garnishing grilled fish on jollof rice with micro herbs." fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>
      <Section tone="dark">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">What we value</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 80}>
              <div className="card h-full rounded-2xl p-7">
                <Icon className="text-gold" size={28} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="muted mt-2 leading-7">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection />
    </main>
  );
}

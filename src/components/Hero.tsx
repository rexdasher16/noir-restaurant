import Image from "next/image";
import type { CSSProperties } from "react";
import { siteConfig } from "@/lib/config";
import LinkButton from "./ui/LinkButton";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section className="tone-dark relative isolate overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="A plate of smoky jollof rice, grilled chicken and fried plantain on a candlelit marble table, with an orange cocktail and the NOIR lounge behind."
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[75%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20 md:bg-gradient-to-r md:from-charcoal md:via-charcoal/75 md:to-transparent" />
      <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:min-h-[640px] md:items-center md:pb-24">
        <div className="max-w-xl">
          <p style={delay(0)} className="hero-in eyebrow text-xs font-semibold uppercase tracking-[0.24em]">
            {siteConfig.descriptor} · Lagos
          </p>
          <h1 style={delay(100)} className="hero-in mt-4 font-display text-4xl font-medium uppercase leading-[1.1] tracking-wide lg:text-[3.4rem]">
            A taste beyond ordinary.
          </h1>
          <p style={delay(200)} className="hero-in mt-5 text-base leading-7 text-cream/85 sm:text-lg sm:leading-8">
            Smoky jollof, flame-grilled seafood and signature cocktails in a candlelit room made for long evenings.
          </p>
          <div style={delay(300)} className="hero-in mt-8 flex flex-wrap gap-3">
            <LinkButton href="/reservations">Reserve a table</LinkButton>
            <LinkButton href="/menu" variant="outline">
              View the menu
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

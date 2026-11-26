import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

/** Slim strip at the very top of every page: this site is a demo, not a real restaurant. */
export default function DemoBanner() {
  return (
    <div className="bg-olive-deep text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2 text-center text-xs sm:px-8">
        <p>
          <span className="font-semibold uppercase tracking-[0.16em]">Demo website</span>
          <span className="hidden sm:inline">
            {" "}
            · NOIR is a fictional restaurant concept built by {siteConfig.kova.name}.
          </span>
        </p>
        <a
          href={siteConfig.kova.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:text-gold"
        >
          About KOVA
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

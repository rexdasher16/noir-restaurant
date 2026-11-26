import Link from "next/link";
import { disclosure, navigation, openingHours, siteConfig } from "@/lib/config";
import Logo from "./Logo";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="tone-dark border-t hairline">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="NOIR Restaurant & Lounge, home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-5 font-display text-lg italic text-gold">{siteConfig.tagline}</p>
            <p className="muted mt-4 max-w-sm text-sm leading-6">{disclosure.full}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Explore</h2>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="muted text-sm transition-colors hover:text-gold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Visit (demo details)</h2>
            <p className="muted mt-4 text-sm leading-6">
              {siteConfig.address.lines[0]}
              <br />
              {siteConfig.address.lines[1]}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {openingHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span className="muted">{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="muted mt-4 text-xs leading-5">Illustrative hours. {disclosure.contact}</p>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="muted">
            © NOIR demo website. {disclosure.images} No real restaurant is represented.
          </p>
          <p className="muted">
            Website demonstration by{" "}
            <a
              href={siteConfig.kova.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cream underline underline-offset-2 hover:text-gold"
            >
              {siteConfig.kova.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

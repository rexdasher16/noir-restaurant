"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/config";
import Logo from "./Logo";
import LinkButton from "./ui/LinkButton";

/** Client component: it needs the current URL (active link) and open/closed state (mobile menu). */
export default function Navbar() {
  const pathname = usePathname();

  // We remember WHICH page the menu was opened on, so it closes by itself after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const isOpen = openOn === pathname;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/90 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <Link href="/" aria-label="NOIR Restaurant & Lounge, home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:text-cream ${
                  isActive(item.href) ? "text-cream after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LinkButton href="/reservations" size="sm">
              Reserve a table
            </LinkButton>
          </div>
          <button
            type="button"
            onClick={() => setOpenOn(isOpen ? null : pathname)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="pop-in border-t border-white/10 bg-charcoal lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block border-b border-white/10 py-4 font-display text-xl ${
                    isActive(item.href) ? "text-gold" : "text-cream"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pb-3 pt-5">
              <LinkButton href="/reservations" className="w-full">
                Reserve a table
              </LinkButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

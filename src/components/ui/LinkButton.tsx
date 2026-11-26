import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

/**
 * Every link-styled button on the site.
 * Internal paths use next/link; https:// links (WhatsApp, maps, KOVA) open in a new tab.
 */
export default function LinkButton({ href, variant = "primary", size = "md", children, className = "" }: LinkButtonProps) {
  const classes = `btn btn-${size} btn-${variant} ${className}`;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

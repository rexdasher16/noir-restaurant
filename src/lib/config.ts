/**
 * One place for every invented detail about NOIR.
 * NOIR is a FICTIONAL restaurant built as a KOVA Technologies demonstration,
 * so each value here is a placeholder. Change it once and it updates everywhere.
 */
export const siteConfig = {
  name: "NOIR",
  descriptor: "Restaurant & Lounge",
  fullName: "NOIR Restaurant & Lounge",
  tagline: "A Taste Beyond Ordinary.",
  description:
    "NOIR is a fictional premium Nigerian restaurant and lounge, created by KOVA Technologies as a website demonstration. Explore the menu, gallery and reservation request flow.",

  /** The agency that built this demo. Update `url` when KOVA's own domain goes live. */
  kova: {
    name: "KOVA Technologies",
    url: "https://kova-agency-beta.vercel.app",
  },

  /**
   * Demo WhatsApp line: this is KOVA's own number, NOT a restaurant.
   * Digits only, international format (used by wa.me links).
   */
  whatsapp: {
    number: "2347059876929",
    display: "+234 705 987 6929",
  },

  address: {
    lines: ["Demonstration address", "Victoria Island, Lagos, Nigeria"],
    /** Search text for the map: an area, not a real business location. */
    mapQuery: "Victoria Island, Lagos, Nigeria",
  },
} as const;

/** Illustrative opening hours. */
export const openingHours = [
  { days: "Monday – Thursday", hours: "12:00 – 23:00" },
  { days: "Friday – Saturday", hours: "12:00 – 00:30" },
  { days: "Sunday", hours: "13:00 – 22:00" },
] as const;

/** Every disclosure the site shows, kept together so the wording stays consistent. */
export const disclosure = {
  banner: "Demo website: NOIR is a fictional restaurant concept built by KOVA Technologies.",
  full: "NOIR is a fictional restaurant concept created for demonstration purposes. Menu, pricing, contact details, location, opening hours, and reviews are illustrative and do not represent a live business.",
  images: "Images are illustrative and AI-generated.",
  order:
    "Demo ordering: this opens WhatsApp with a pre-filled message to a KOVA demo number. No order is placed, no food is prepared and no payment is taken.",
  reservation:
    "This is a booking request, not a confirmed reservation. In this demo it only prepares a WhatsApp message to a KOVA demo number; nothing is booked.",
  contact:
    "Address, phone and WhatsApp number, map pin, opening hours and social links are demonstration placeholders. This is not an active restaurant line.",
  reviews:
    "Illustrative examples written for this demo. They are not real customer reviews.",
  prices: "Menu items and USD prices are illustrative and not available for real purchase.",
} as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
] as const;

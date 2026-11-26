import { siteConfig } from "./config";

/** Whole-dollar prices are shown as "$24". */
export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

/** Opens WhatsApp with a ready-typed message. The visitor still has to press send. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

const DEMO_LINE =
  "[DEMO] NOIR is a fictional restaurant built by KOVA Technologies. This is a demonstration message only.";

export type OrderLine = { name: string; quantity: number; price: number };

export function buildOrderMessage(lines: OrderLine[]): string {
  const total = lines.reduce((sum, line) => sum + line.quantity * line.price, 0);
  return [
    DEMO_LINE,
    "",
    "Hello NOIR, I'd like to try the demo order flow:",
    ...lines.map(
      (line) => `- ${line.quantity} x ${line.name} (${formatUsd(line.price)} each) = ${formatUsd(line.quantity * line.price)}`,
    ),
    "",
    `Illustrative total: ${formatUsd(total)}`,
    "",
    "No food will be prepared and no payment is taken.",
  ].join("\n");
}

export type ReservationDetails = {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeLabel: string;
  guests: string;
  requests: string;
};

export function buildReservationMessage(details: ReservationDetails): string {
  return [
    DEMO_LINE,
    "",
    "Hello NOIR, I'd like to request a table (demo):",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    ...(details.email ? [`Email: ${details.email}`] : []),
    `Date: ${details.date}`,
    `Time: ${details.timeLabel}`,
    `Guests: ${details.guests}`,
    ...(details.requests ? [`Special requests: ${details.requests}`] : []),
    "",
    "This is a request only, not a confirmed booking.",
  ].join("\n");
}

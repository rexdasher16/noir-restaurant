"use client";

import { useState } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { disclosure } from "@/lib/config";
import { buildOrderMessage, formatUsd, whatsappUrl, type OrderLine } from "@/lib/whatsapp";

type OrderBarProps = { lines: OrderLine[]; onClear: () => void };

/** Fixed bar that appears once something is added. Expands to show the list. */
export default function OrderBar({ lines, onClear }: OrderBarProps) {
  const [expanded, setExpanded] = useState(false);
  if (lines.length === 0) return null;

  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce((sum, line) => sum + line.quantity * line.price, 0);

  return (
    <div className="pop-in fixed inset-x-0 bottom-0 z-30 border-t border-gold/40 bg-charcoal-2/95 backdrop-blur-lg">
      <div className="mx-auto max-w-4xl px-5 py-3 sm:px-8">
        {expanded ? (
          <ul id="order-list" className="mb-3 max-h-40 space-y-1.5 overflow-y-auto text-sm">
            {lines.map((line) => (
              <li key={line.name} className="flex justify-between gap-4">
                <span>
                  {line.quantity} × {line.name}
                </span>
                <span className="text-gold">{formatUsd(line.quantity * line.price)}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="order-list"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <ChevronUp size={16} aria-hidden="true" className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
            Demo order · {count} {count === 1 ? "item" : "items"} · {formatUsd(total)}
          </button>
          <div className="flex items-center gap-2">
            <button type="button" onClick={onClear} className="btn btn-sm btn-outline">
              Clear
            </button>
            <a href={whatsappUrl(buildOrderMessage(lines))} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              <MessageCircle size={16} aria-hidden="true" />
              Send on WhatsApp
            </a>
          </div>
        </div>
        <p className="muted mt-2 text-[0.7rem] leading-4">{disclosure.order}</p>
      </div>
    </div>
  );
}

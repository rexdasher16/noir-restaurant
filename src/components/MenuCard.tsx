import { Utensils, Wine, CakeSlice, Soup } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { formatUsd } from "@/lib/whatsapp";
import CroppedImage from "./ui/CroppedImage";

const icons = {
  starters: Soup,
  mains: Utensils,
  "nigerian-favourites": Utensils,
  desserts: CakeSlice,
  drinks: Wine,
} as const;

type MenuCardProps = {
  item: MenuItem;
  /** When provided, an add-to-order control is shown. */
  quantity?: number;
  onChange?: (quantity: number) => void;
};

/** One dish. Photo and icon panel share the same aspect so the grid stays even. */
export default function MenuCard({ item, quantity = 0, onChange }: MenuCardProps) {
  const Icon = icons[item.category];
  return (
    <article className="card flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-3">
        {item.image ? (
          <CroppedImage
            src={item.image.src}
            alt={item.image.alt}
            focus={item.image.focus}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-charcoal-3 to-charcoal-2" aria-hidden="true">
            <Icon size={36} strokeWidth={1.25} className="text-gold" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-medium leading-snug">{item.name}</h3>
          <p className="shrink-0 font-semibold text-gold">{formatUsd(item.price)}</p>
        </div>
        <p className="muted mt-2 text-sm leading-6">{item.description}</p>
        {item.note ? <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-gold">{item.note}</p> : null}
        {onChange ? (
          <div className="mt-auto pt-5">
            {quantity === 0 ? (
              <button type="button" onClick={() => onChange(1)} className="btn btn-sm btn-outline w-full">
                Add to demo order
              </button>
            ) : (
              <div className="flex items-center justify-between rounded-full border border-gold/60 px-2 py-1" role="group" aria-label={`Quantity of ${item.name}`}>
                <button type="button" onClick={() => onChange(quantity - 1)} aria-label={`Remove one ${item.name}`} className="h-9 w-9 rounded-full text-xl leading-none hover:bg-white/10">
                  −
                </button>
                <span aria-live="polite" className="text-sm font-semibold">
                  {quantity}
                </span>
                <button type="button" onClick={() => onChange(Math.min(quantity + 1, 20))} aria-label={`Add one more ${item.name}`} className="h-9 w-9 rounded-full text-xl leading-none hover:bg-white/10">
                  +
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}

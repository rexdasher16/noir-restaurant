"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { disclosure } from "@/lib/config";
import CroppedImage from "./ui/CroppedImage";
import Image from "next/image";

type Filter = "All" | GalleryCategory;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const items = galleryItems.filter((item) => filter === "All" || item.category === filter);
  const current = openIndex === null ? null : items[openIndex];

  const open = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + items.length) % items.length));

  return (
    <div>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as Filter[]).map((name) => (
          <button key={name} type="button" className="pill" aria-pressed={filter === name} onClick={() => setFilter(name)}>
            {name}
          </button>
        ))}
      </div>
      <p className="muted mt-4 text-sm">{disclosure.images}</p>

      <ul className="mt-8 grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={`${filter}-${item.id}`} className={filter === "All" && (index === 0 || index === 7) ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={(event) => open(index, event.currentTarget)}
              aria-label={`Open photo: ${item.caption}`}
              className="group relative block aspect-square h-full w-full overflow-hidden rounded-xl"
            >
              <CroppedImage src={item.src} alt="" focus={item.focus} sizes="(min-width: 1024px) 400px, 50vw" className="transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => {
          setOpenIndex(null);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {current ? (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 sm:p-8">
            <button type="button" onClick={close} aria-label="Close photo viewer" className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:border-gold">
              <X size={20} aria-hidden="true" />
            </button>
            <div className="relative h-[70dvh] w-full max-w-5xl">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="mt-4 text-center text-sm">
              {current.caption} <span className="muted">· {openIndex! + 1} / {items.length}</span>
            </p>
            <p className="muted mt-1 text-center text-xs">{disclosure.images}</p>
            <div className="mt-4 flex gap-3">
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:border-gold">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:border-gold">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

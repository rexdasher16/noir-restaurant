"use client";

import { useMemo, useState } from "react";
import { menuCategories, menuItems, type MenuCategoryId } from "@/data/menu";
import { disclosure } from "@/lib/config";
import MenuCard from "./MenuCard";
import OrderBar from "./OrderBar";

type Filter = "all" | MenuCategoryId;

export default function MenuExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [cart, setCart] = useState<Record<string, number>>({});

  const setQuantity = (id: string, quantity: number) =>
    setCart((current) => {
      const next = { ...current };
      if (quantity <= 0) delete next[id];
      else next[id] = quantity;
      return next;
    });

  const lines = useMemo(
    () =>
      menuItems
        .filter((item) => cart[item.id])
        .map((item) => ({ name: item.name, quantity: cart[item.id], price: item.price })),
    [cart],
  );

  const visibleCategories = menuCategories.filter((c) => filter === "all" || c.id === filter);

  return (
    <div className={lines.length ? "pb-28" : ""}>
      <div role="group" aria-label="Filter menu by category" className="flex flex-wrap gap-2">
        <button type="button" className="pill" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          All
        </button>
        {menuCategories.map((category) => (
          <button key={category.id} type="button" className="pill" aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>
            {category.label}
          </button>
        ))}
      </div>
      <p className="muted mt-4 text-sm">{disclosure.prices}</p>

      {visibleCategories.map((category) => (
        <section key={category.id} aria-labelledby={`cat-${category.id}`} className="mt-12">
          <h2 id={`cat-${category.id}`} className="font-display text-2xl font-medium">
            {category.label}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems
              .filter((item) => item.category === category.id)
              .map((item) => (
                <MenuCard key={item.id} item={item} quantity={cart[item.id] ?? 0} onChange={(q) => setQuantity(item.id, q)} />
              ))}
          </div>
        </section>
      ))}

      <OrderBar lines={lines} onClear={() => setCart({})} />
    </div>
  );
}

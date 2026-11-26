import type { Metadata } from "next";
import MenuExplorer from "@/components/MenuExplorer";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Menu",
  description: "Illustrative NOIR menu: starters, mains, Nigerian favourites, desserts and drinks, with a demo WhatsApp order flow.",
};

export default function MenuPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="The menu"
        title="Fire, smoke and Nigerian soul"
        description="Build a sample order and see how it would reach the restaurant on WhatsApp. This is a demonstration; nothing is sent until you press send, and nothing is prepared."
      />
      <Section tone="dark" className="!pt-10">
        <MenuExplorer />
      </Section>
    </main>
  );
}

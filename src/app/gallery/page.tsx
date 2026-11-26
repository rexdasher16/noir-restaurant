import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Illustrative, AI-generated imagery of the fictional NOIR dining room, dishes, drinks and experiences.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="Gallery" title="Inside NOIR" description="Food, drinks, interiors and moments, all illustrative imagery created for this demonstration." />
      <Section tone="dark" className="!pt-10">
        <GalleryGrid />
      </Section>
    </main>
  );
}

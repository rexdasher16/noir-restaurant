import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredDishIds, getMenuItem } from "@/data/menu";
import { galleryItems } from "@/data/gallery";
import { reviews } from "@/data/reviews";
import { disclosure, openingHours, siteConfig } from "@/lib/config";
import MenuCard from "./MenuCard";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import CroppedImage from "./ui/CroppedImage";
import LinkButton from "./ui/LinkButton";

export function FeaturedDishes() {
  const dishes = featuredDishIds.map((id) => getMenuItem(id)).filter((d) => d !== undefined);
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="Signature dishes" title="Plates guests come back for" description="A few favourites from the illustrative menu." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map((dish, index) => (
          <Reveal key={dish.id} delay={index * 80}>
            <MenuCard item={dish} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <LinkButton href="/menu" variant="outline">
          See the full menu <ArrowRight size={16} aria-hidden="true" />
        </LinkButton>
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section tone="light">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/interior.jpg"
              alt="The NOIR dining room with olive velvet booths, burnt-orange chairs, marble tables and a glowing bar."
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            eyebrow="The experience"
            title="Warm light, deep colour, unhurried evenings"
            description="NOIR imagines a room where Nigerian cooking is treated with fine-dining care: velvet booths, marble tables, a glowing bar and a kitchen that cooks over open flame."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/about">Our story</LinkButton>
            <LinkButton href="/gallery" variant="outline">
              View the gallery
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function ReviewsSection() {
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="Illustrative reviews" title="What an evening could feel like" description={disclosure.reviews} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal key={review.id} delay={index * 80}>
            <figure className="card flex h-full flex-col rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Example · {review.occasion}</p>
              <blockquote className="mt-4 font-display text-lg leading-8">“{review.quote}”</blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function GalleryPreview() {
  const picks = ["dining-room", "toast", "chef", "drinks"].map((id) => galleryItems.find((g) => g.id === id)).filter((g) => g !== undefined);
  return (
    <Section tone="light">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Gallery" title="A glimpse inside" />
        <LinkButton href="/gallery" variant="outline">
          Open the gallery <ArrowRight size={16} aria-hidden="true" />
        </LinkButton>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {picks.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <Link href="/gallery" className="group relative block aspect-[3/4] overflow-hidden rounded-xl">
              <CroppedImage src={item.src} alt={item.alt} focus={item.focus} sizes="(min-width: 1024px) 300px, 50vw" className="transition-transform duration-500 group-hover:scale-105" />
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="muted mt-4 text-xs">{disclosure.images}</p>
    </Section>
  );
}

export function HoursLocation() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Visit us (demo)" title="Opening hours" />
          <ul className="mt-6 max-w-md space-y-3">
            {openingHours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 border-b hairline pb-3">
                <span className="muted">{row.days}</span>
                <span className="font-medium">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card rounded-2xl p-7">
          <h3 className="font-display text-xl">Location</h3>
          <p className="muted mt-3 leading-7">
            {siteConfig.address.lines[0]}
            <br />
            {siteConfig.address.lines[1]}
          </p>
          <p className="muted mt-4 text-xs leading-5">{disclosure.contact}</p>
          <div className="mt-6">
            <LinkButton href="/contact">Contact details</LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CTASection() {
  return (
    <Section tone="light">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Save a table for the evening</h2>
        <p className="muted mt-4 text-lg leading-8">Try the reservation request flow. It prepares a WhatsApp message; nothing is actually booked.</p>
        <div className="mt-8 flex justify-center">
          <LinkButton href="/reservations">Request a table</LinkButton>
        </div>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/ui/Section";
import LinkButton from "@/components/ui/LinkButton";
import { disclosure, openingHours, siteConfig } from "@/lib/config";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Demonstration contact details for the fictional NOIR restaurant.",
};

const q = encodeURIComponent(siteConfig.address.mapQuery);

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="Contact" title="Find NOIR" description={disclosure.contact} />
      <Section tone="dark" className="!pt-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card rounded-2xl p-6">
              <MapPin className="text-gold" size={24} aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl">Address (demo)</h2>
              <p className="muted mt-2 leading-7">{siteConfig.address.lines[0]}<br />{siteConfig.address.lines[1]}</p>
            </div>
            <div className="card rounded-2xl p-6">
              <Clock className="text-gold" size={24} aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl">Opening hours (illustrative)</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {openingHours.map((r) => (
                  <li key={r.days} className="flex justify-between gap-4"><span className="muted">{r.days}</span><span>{r.hours}</span></li>
                ))}
              </ul>
            </div>
            <div className="card rounded-2xl p-6">
              <MessageCircle className="text-gold" size={24} aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl">WhatsApp (KOVA demo line)</h2>
              <p className="muted mt-2 text-sm leading-6">{siteConfig.whatsapp.display}. This is KOVA Technologies&apos; number, used so the demo flow works. It is not a restaurant line.</p>
              <div className="mt-4">
                <LinkButton href={whatsappUrl("[DEMO] Hello, I'm trying the NOIR demo website by KOVA Technologies.")}>Message on WhatsApp</LinkButton>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-[360px] overflow-hidden rounded-2xl border hairline bg-charcoal-3 lg:h-full lg:min-h-[420px]">
              <p className="muted absolute inset-0 flex items-center justify-center p-6 text-center text-sm">Map loading… if it does not appear, use the directions link below.</p>
              <iframe
                title="Map of the Victoria Island, Lagos area (demonstration location)"
                src={`https://www.google.com/maps?q=${q}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative h-full w-full border-0"
              />
            </div>
            <p className="muted mt-3 text-xs">Demonstration location: an area only, not a real venue.</p>
            <div className="mt-3">
              <LinkButton variant="outline" size="sm" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Open in Google Maps</LinkButton>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

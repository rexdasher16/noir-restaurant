import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReservationForm from "@/components/ReservationForm";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Try the NOIR table request flow. This is a demo: it prepares a WhatsApp message and books nothing.",
};

export default function ReservationsPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="Reservations" title="Request a table" description="Fill in the details, review them, then open WhatsApp to send the request. In this demo nothing is booked." />
      <Section tone="dark" className="!pt-10">
        <div className="mx-auto max-w-2xl">
          <ReservationForm />
        </div>
      </Section>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { disclosure } from "@/lib/config";
import {
  emptyReservation, formatLongDate, guestOptions, localToday, reservationLimits, timeSlots, validateReservation,
  type ReservationErrors, type ReservationValues,
} from "@/lib/reservation";
import { buildReservationMessage, whatsappUrl } from "@/lib/whatsapp";

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} {optional ? <span className="muted font-normal">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-[#f08a7a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ReservationForm() {
  const [values, setValues] = useState<ReservationValues>(emptyReservation);
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [confirmed, setConfirmed] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  // The earliest bookable date is "today" in the visitor's own time zone, known only in the browser.
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = localToday();
  }, [confirmed]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const found = validateReservation(values, localToday());
    setErrors(found);
    if (Object.keys(found).length === 0) setConfirmed(true);
    else {
      const first = Object.keys(found)[0];
      document.getElementById(`res-${first}`)?.focus();
    }
  };

  const aria = (name: keyof ReservationValues) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `res-${name}-error` : undefined,
  });

  if (confirmed) {
    const timeLabel = timeSlots.find((slot) => slot.value === values.time)?.label ?? values.time;
    const message = buildReservationMessage({
      name: values.name.trim(), phone: values.phone.trim(), email: values.email.trim(),
      date: formatLongDate(values.date), timeLabel, guests: values.guests, requests: values.requests.trim(),
    });
    const rows: [string, string][] = [
      ["Name", values.name.trim()], ["Phone", values.phone.trim()], ["Email", values.email.trim()],
      ["Date", formatLongDate(values.date)], ["Time", timeLabel], ["Guests", values.guests], ["Requests", values.requests.trim()],
    ];
    return (
      <div className="card pop-in rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">Review your request</h2>
        <p className="mt-3 rounded-xl border border-gold/50 p-4 text-sm leading-6">
          <strong>Not a confirmed booking.</strong> {disclosure.reservation}
        </p>
        <dl className="mt-6 space-y-3">
          {rows.filter(([, v]) => v).map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b hairline pb-3 text-sm">
              <dt className="muted">{k}</dt>
              <dd className="text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary">
            <MessageCircle size={18} aria-hidden="true" /> Open WhatsApp to send request
          </a>
          <button type="button" className="btn btn-md btn-outline" onClick={() => setConfirmed(false)}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card rounded-2xl p-6 sm:p-8">
      <p className="rounded-xl border border-gold/50 p-4 text-sm leading-6">
        <strong>Booking request only.</strong> {disclosure.reservation}
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="res-name" label="Full name" error={errors.name}>
          <input id="res-name" name="name" className="field" autoComplete="name" maxLength={reservationLimits.name} value={values.name} onChange={handleChange} {...aria("name")} />
        </Field>
        <Field id="res-phone" label="Phone number" error={errors.phone}>
          <input id="res-phone" name="phone" type="tel" className="field" autoComplete="tel" placeholder="+234 …" value={values.phone} onChange={handleChange} {...aria("phone")} />
        </Field>
        <div className="sm:col-span-2">
          <Field id="res-email" label="Email" optional error={errors.email}>
            <input id="res-email" name="email" type="email" className="field" autoComplete="email" maxLength={reservationLimits.email} value={values.email} onChange={handleChange} {...aria("email")} />
          </Field>
        </div>
        <Field id="res-date" label="Date" error={errors.date}>
          <input id="res-date" name="date" type="date" ref={dateRef} className="field" value={values.date} onChange={handleChange} {...aria("date")} />
        </Field>
        <Field id="res-time" label="Time" error={errors.time}>
          <select id="res-time" name="time" className="field" value={values.time} onChange={handleChange} {...aria("time")}>
            <option value="">Choose a time</option>
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>{slot.label}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="res-guests" label="Number of guests" error={errors.guests}>
            <select id="res-guests" name="guests" className="field" value={values.guests} onChange={handleChange} {...aria("guests")}>
              <option value="">Choose guests</option>
              {guestOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="res-requests" label="Special requests" optional error={errors.requests}>
            <textarea id="res-requests" name="requests" rows={4} className="field" maxLength={reservationLimits.requests + 50} value={values.requests} onChange={handleChange} {...aria("requests")} />
          </Field>
        </div>
      </div>
      <button type="submit" className="btn btn-md btn-primary mt-8">
        Review request
      </button>
    </form>
  );
}

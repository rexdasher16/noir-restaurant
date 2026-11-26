/** Reservation form options and validation. Pure functions, easy to test. */

function slotLabel(hour: number, minute: number): string {
  const suffix = hour >= 12 ? "PM" : "AM";
  const twelve = hour % 12 === 0 ? 12 : hour % 12;
  return `${twelve}:${String(minute).padStart(2, "0")} ${suffix}`;
}

/** Table slots every 30 minutes, 12:00 to 21:30 (works for every opening day). */
export const timeSlots: { value: string; label: string }[] = [];
for (let hour = 12; hour <= 21; hour += 1) {
  for (const minute of [0, 30]) {
    timeSlots.push({
      value: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
      label: slotLabel(hour, minute),
    });
  }
}

export const guestOptions: string[] = [
  ...Array.from({ length: 12 }, (_, index) => String(index + 1)),
  "13 or more",
];

export type ReservationValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
};

export type ReservationErrors = Partial<Record<keyof ReservationValues, string>>;

export const emptyReservation: ReservationValues = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "",
  requests: "",
};

export const reservationLimits = { name: 80, email: 120, requests: 500 } as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Today's date in the visitor's own time zone, as YYYY-MM-DD. */
export function localToday(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Returns a Date for a YYYY-MM-DD string, or null if it is not a real calendar date. */
function parseDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, year, month, day] = match.map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

export function formatLongDate(value: string): string {
  const date = parseDate(value);
  if (!date) return value;
  return date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

export function validateReservation(values: ReservationValues, today: string): ReservationErrors {
  const errors: ReservationErrors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > reservationLimits.name) errors.name = "That name is too long.";

  if (!phone) errors.phone = "Please enter a phone number we can reach you on.";
  else if (!/^[+\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number, for example +234 705 987 6929.";
  }

  if (email && (!emailPattern.test(email) || email.length > reservationLimits.email)) {
    errors.email = "That email address doesn't look right.";
  }

  const date = parseDate(values.date);
  if (!values.date) errors.date = "Please choose a date.";
  else if (!date) errors.date = "That doesn't look like a valid date.";
  else if (values.date < today) errors.date = "Please choose today or a future date.";

  if (!values.time) errors.time = "Please choose a time.";
  else if (!timeSlots.some((slot) => slot.value === values.time)) errors.time = "Please choose one of the times listed.";
  else if (date && date.getDay() === 0 && values.time < "13:00") {
    errors.time = "On Sundays the demo opens at 1:00 PM. Please choose a later time.";
  }

  if (!values.guests) errors.guests = "Please choose how many guests.";
  else if (!guestOptions.includes(values.guests)) errors.guests = "Please choose one of the options.";

  if (values.requests.trim().length > reservationLimits.requests) {
    errors.requests = `Please keep this under ${reservationLimits.requests} characters.`;
  }

  return errors;
}

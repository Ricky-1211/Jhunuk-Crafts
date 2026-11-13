"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export default function ContactForm({ kind }: { kind: "General enquiry" | "Retailer or distributor enquiry" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const err: Errors = {};
    if (v("name").length < 2) err.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) err.email = "Enter a valid email address, like name@example.com.";
    if (v("phone") && !/^[+\d][\d\s-]{7,14}$/.test(v("phone"))) err.phone = "Enter a valid phone number or leave it blank.";
    if (v("message").length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (!Object.keys(err).length) { setDone(true); e.currentTarget.reset(); }
  }

  if (done) return (
    <div className="rounded-2xl bg-white p-8 text-center" role="status">
      <CheckCircle2 className="mx-auto text-herb" size={40} />
      <h3 className="mt-3 text-2xl">Enquiry sent</h3>
      <p className="mt-2 text-charcoal/75">This is a demo, so nothing was actually submitted. A real team would reply within two working days.</p>
      <button className="btn-outline mt-5" onClick={() => setDone(false)}>Send another enquiry</button>
    </div>
  );

  const field = (id: keyof Errors, label: string, type = "text") => (
    <div>
      <label htmlFor={`${kind}-${id}`} className="mb-1 block text-sm font-medium text-spice">{label}</label>
      {id === "message"
        ? <textarea id={`${kind}-${id}`} name={id} rows={4} className="input" aria-invalid={!!errors[id]} />
        : <input id={`${kind}-${id}`} name={id} type={type} className="input" aria-invalid={!!errors[id]} />}
      {errors[id] && <p className="mt-1 text-sm text-red-700">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl bg-white p-6 sm:p-8">
      <h3 className="text-2xl">{kind}</h3>
      {field("name", "Full name")}
      {field("email", "Email", "email")}
      {field("phone", "Phone (optional)", "tel")}
      {field("message", "Message")}
      <button type="submit" className="btn-primary w-full">Send enquiry</button>
    </form>
  );
}

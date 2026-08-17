"use client";

import { ArrowUpRight, CodeXml as Github, Link as Linkedin, Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { StaggerGroup, StaggerItem } from "./ScrollMotion";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./reactbits/SpotlightCard";

type FormState = { name: string; email: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", subject: "", message: "" };
type Status = { type: "idle" | "error" | "success"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      website: new FormData(event.currentTarget).get("website")?.toString() ?? "",
    };

    if (!submission.name || !submission.email || !submission.subject || !submission.message) {
      setStatus({ type: "error", message: "Please complete all fields before sending your message." });
      return;
    }

    if (!emailPattern.test(submission.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setForm(initial);
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch {
      setStatus({ type: "error", message: "Error sending message. Please try again." });
    } finally {
      setIsSending(false);
    }
  };
  const fields: { key: keyof FormState; label: string; type?: string }[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email", type: "email" },
    { key: "subject", label: "Subject" },
  ];

  return (
    <section id="contact" className="section section-rule bg-[#080808]">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let’s build something useful." description="I’m open to internship opportunities, project conversations, and professional connections." />
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <StaggerItem className="space-y-4">
            {[[Mail, portfolio.email, `mailto:${portfolio.email}`], [Github, "GitHub", portfolio.github], [Linkedin, "LinkedIn", portfolio.linkedin], [MapPin, portfolio.location, "#"]].map(([Icon, text, link]) => {
              const ItemIcon = Icon as typeof Mail;
              return (
                <a className="flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.025] p-4 text-sm text-[#bdbdb7] transition hover:border-[#7fffd4]/30 hover:text-[#7fffd4]" href={link as string} target={(link as string).startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={text as string}>
                  <ItemIcon size={18} />{text as string}
                </a>
              );
            })}
            <a className="button-primary mt-2" href={`mailto:${portfolio.email}`}>Start a conversation <ArrowUpRight size={17} /></a>
          </StaggerItem>

          <StaggerItem>
            <SpotlightCard className="card">
              <form onSubmit={submit} className="grid gap-4 p-6 sm:p-8" noValidate>
                {fields.map(({ key, label, type = "text" }) => (
                  <label className="grid gap-2 text-sm text-[#bdbdb7]" key={key}>
                    {label}
                    <input required maxLength={key === "email" ? 254 : key === "subject" ? 200 : 100} type={type} value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-[#7fffd4]/60" />
                  </label>
                ))}
                <label className="grid gap-2 text-sm text-[#bdbdb7]">
                  Message
                  <textarea required maxLength={5000} rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-[#7fffd4]/60" />
                </label>
                <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <button className="button-primary mt-1 w-fit disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button>
                {status.message && <p role="status" aria-live="polite" className={`text-sm leading-6 ${status.type === "success" ? "text-[#7fffd4]" : "text-[#ff8f8f]"}`}>{status.message}</p>}
              </form>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

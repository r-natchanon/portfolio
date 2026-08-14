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

export function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please complete all fields before sending your message.");
      return;
    }
    setStatus("Thanks for reaching out. Email delivery can be connected to a Next.js API route or Resend when you are ready.");
    setForm(initial);
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
                    <input required type={type} value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-[#7fffd4]/60" />
                  </label>
                ))}
                <label className="grid gap-2 text-sm text-[#bdbdb7]">
                  Message
                  <textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-[#7fffd4]/60" />
                </label>
                <button className="button-primary mt-1 w-fit" type="submit">Send Message</button>
                {status && <p role="status" className="text-sm leading-6 text-[#8f8f89]">{status}</p>}
              </form>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

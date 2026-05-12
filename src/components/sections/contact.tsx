"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2300);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    notify("Email copied to clipboard");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    notify("Message interface primed for integration");
  };

  return (
    <section id="contact" className="section-shell pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect."
        copy="Available for internship opportunities in IT infrastructure, IT support, networking, mobile development, and IoT."
      />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal glass rounded-[30px] p-5 sm:p-7">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
            <Sparkles size={24} />
          </div>
          <h3 className="mt-8 text-2xl font-black text-white sm:text-3xl">Available for internship opportunities.</h3>
          <p className="mt-4 leading-8 text-slate-400">
            Reach me directly by email, phone, or WhatsApp. The WhatsApp button is set up with the
            mobile-friendly Malaysia number format.
          </p>

          <button
            onClick={copyEmail}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 break-all rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-200/20 sm:text-base"
          >
            <Mail size={17} /> {contact.email}
          </button>

          <div className="mt-4 grid gap-3">
            <ContactLink href={`mailto:${contact.email}`} icon={Mail} label="Email" value={contact.email} />
            <ContactLink href={contact.whatsappHref} icon={MessageCircle} label="WhatsApp" value={contact.phoneDisplay} />
            <ContactLink href={contact.phoneHref} icon={Phone} label="Call" value={contact.phoneDisplay} />
            <ContactLink href={contact.resumeHref} icon={Download} label="Resume PDF" value="Open/download resume" />
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300">
              <MapPin size={18} className="shrink-0 text-cyan-100" />
              <span className="text-sm">{contact.location}</span>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="reveal glass rounded-[30px] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="mt-4">
            <Field label="Subject" placeholder="Project, role, or internship" />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
            <textarea
              rows={6}
              placeholder="Tell me about the role or internship opportunity..."
              className="w-full resize-none rounded-3xl border border-white/10 bg-black/24 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/55 focus:shadow-[0_0_32px_rgba(25,242,255,0.12)]"
            />
          </label>
          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-black"
          >
            Send Message <Send size={17} />
          </motion.button>
        </form>
      </div>

      <footer className="mt-16 border-t border-white/10 pt-7 text-center text-sm text-slate-500">
        © 2026 Muhammad Akmal Nazmi Bin Shuhaimi. Designed for Vercel deployment.
      </footer>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="glass fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 py-3 text-sm font-semibold text-white"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">{label}</span>
        <span className="mt-1 block break-words text-sm font-semibold">{value}</span>
      </span>
    </a>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-13 w-full rounded-full border border-white/10 bg-black/24 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/55 focus:shadow-[0_0_32px_rgba(25,242,255,0.12)]"
      />
    </label>
  );
}

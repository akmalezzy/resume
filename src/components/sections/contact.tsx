"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/data/portfolio";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2300);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    notify("Email copied to clipboard");
  };

  const updateField = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) nextErrors.name = "Name is required.";
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending || !validate()) {
      notify("Please complete the required fields.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      notify("EmailJS is not configured yet.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim() || "Portfolio contact form message",
          message: form.message.trim(),
          to_email: contact.email
        },
        { publicKey }
      );

      setForm(initialFormState);
      setErrors({});
      notify("Message sent successfully.");
    } catch {
      notify("Message failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect."
        copy="Available for internship opportunities in IT infrastructure, IT support, networking, mobile development, and IoT."
      />

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal glass mx-auto w-full max-w-xl rounded-[26px] p-5 text-center sm:rounded-[30px] sm:p-7 lg:max-w-none lg:text-left">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100 lg:mx-0">
            <Sparkles size={24} />
          </div>
          <h3 className="mt-7 text-2xl font-black text-white sm:mt-8 sm:text-3xl">Available for internship opportunities.</h3>
          <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400 sm:leading-8 lg:mx-0">
            Reach me directly by email or use the combined contact card for phone and WhatsApp.
          </p>

          <button
            onClick={copyEmail}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 break-all rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-200/20 sm:text-base"
          >
            <Mail size={17} /> {contact.email}
          </button>

          <div className="mt-4 grid gap-3">
            <ContactLink href={`mailto:${contact.email}`} icon={Mail} label="Email" value={contact.email} />
            <ContactCard />
            <ContactLink href={contact.resumeHref} icon={Download} label="Resume PDF" value="Open/download resume" />
            <div className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 lg:justify-start">
              <MapPin size={18} className="shrink-0 text-cyan-100" />
              <span className="text-sm">{contact.location}</span>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="reveal glass mx-auto w-full max-w-xl rounded-[26px] p-5 sm:rounded-[30px] sm:p-7 lg:max-w-none">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              placeholder="Your name"
              value={form.name}
              onChange={updateField("name")}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label="Email"
              placeholder="you@example.com"
              type="email"
              value={form.email}
              onChange={updateField("email")}
              error={errors.email}
              autoComplete="email"
            />
          </div>
          <div className="mt-4">
            <Field
              label="Subject"
              placeholder="Project, role, or internship"
              value={form.subject}
              onChange={updateField("subject")}
            />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
            <textarea
              rows={6}
              value={form.message}
              onChange={updateField("message")}
              placeholder="Tell me about the role or internship opportunity..."
              aria-invalid={Boolean(errors.message)}
              className="w-full resize-none rounded-3xl border border-white/10 bg-black/24 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/55 focus:shadow-[0_0_32px_rgba(25,242,255,0.12)]"
            />
            {errors.message && <span className="mt-2 block text-sm font-semibold text-rose-200">{errors.message}</span>}
          </label>
          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-black transition disabled:cursor-not-allowed disabled:opacity-65"
          >
            {isSending ? "Sending..." : "Send Message"} <Send size={17} />
          </motion.button>
        </form>
      </div>

      <footer className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-slate-500 sm:mt-16">
        &copy; 2026 Muhammad Akmal Nazmi Bin Shuhaimi. Designed for Vercel deployment.
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
      className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white lg:justify-start"
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

function ContactCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">
      <div className="flex items-center justify-center gap-3 text-left lg:justify-start">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
          <Phone size={18} />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">Contact Me</span>
          <span className="mt-1 block text-sm font-semibold">{contact.phoneDisplay}</span>
        </span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          href={contact.phoneHref}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 text-sm font-bold text-white transition hover:bg-white/12"
        >
          <Phone size={16} /> Call
        </a>
        <a
          href={contact.whatsappHref}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-black transition hover:bg-cyan-100"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  autoComplete
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className="h-13 w-full rounded-full border border-white/10 bg-black/24 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/55 focus:shadow-[0_0_32px_rgba(25,242,255,0.12)]"
      />
      {error && <span className="mt-2 block text-sm font-semibold text-rose-200">{error}</span>}
    </label>
  );
}

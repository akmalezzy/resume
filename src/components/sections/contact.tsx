"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatePresence, motion } from "framer-motion";
import { CodeXml, Link, Mail, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2300);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("akmalnazmi@example.com");
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
        title="Let’s build something dependable."
        copy="Open to IT infrastructure, support, mobile, web, and IoT opportunities."
      />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal glass rounded-[30px] p-7">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
            <Sparkles size={24} />
          </div>
          <h3 className="mt-8 text-3xl font-black text-white">Available for the next challenge.</h3>
          <p className="mt-4 leading-8 text-slate-400">
            Send a message for collaborations, internship opportunities, infrastructure support work, or
            project conversations. The contact form is styled and ready for a backend or form provider.
          </p>

          <button
            onClick={copyEmail}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 font-semibold text-cyan-50 transition hover:bg-cyan-200/20"
          >
            <Mail size={17} /> akmalnazmi@example.com
          </button>

          <div className="mt-6 flex gap-3">
            {[
              { icon: CodeXml, label: "GitHub" },
              { icon: Link, label: "LinkedIn" },
              { icon: Mail, label: "Email" }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={submit} className="reveal glass rounded-[30px] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
          </div>
          <div className="mt-4">
            <Field label="Subject" placeholder="Project, role, or collaboration" />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
            <textarea
              rows={6}
              placeholder="Tell me what you would like to build..."
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
        © 2026 Muhammad Akmal Nazmi. Designed for Vercel deployment.
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

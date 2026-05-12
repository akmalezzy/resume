"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Support experience shaped by reliability."
        copy="A professional path rooted in hands-on troubleshooting, user support, and infrastructure awareness."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-200 via-violet-300 to-transparent md:left-1/2" />
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative mb-8 grid gap-5 pl-14 md:grid-cols-2 md:pl-0 ${index % 2 ? "md:[&>article]:col-start-2" : ""}`}
            >
              <div className="absolute left-0 top-8 z-10 grid h-10 w-10 place-items-center rounded-full border border-cyan-200/40 bg-[#071018] text-cyan-100 shadow-[0_0_28px_rgba(25,242,255,0.25)] md:left-1/2 md:-translate-x-1/2">
                <Icon size={18} />
              </div>
              <article className="glass rounded-[28px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/60">{item.period}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.role}</h3>
                <p className="mt-1 font-semibold text-violet-100/80">{item.company}</p>
                <ul className="mt-5 space-y-3 text-slate-400">
                  {item.points.map((point) => (
                    <li key={point} className="leading-7">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

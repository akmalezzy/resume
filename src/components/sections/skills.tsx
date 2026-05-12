"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { marqueeSkills, skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const marquee = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="section-shell overflow-hidden">
      <SectionHeading
        eyebrow="Capabilities"
        title="A stack built for real-world systems."
        copy="Balanced between infrastructure fundamentals, support instincts, and modern app development."
      />

      <div className="reveal glass relative overflow-hidden rounded-[30px] p-5 sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,242,255,0.16),transparent_22rem)]" />
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, scale: 1.015 }}
                className="rounded-3xl border border-white/10 bg-black/24 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
                      <Icon size={20} />
                    </span>
                    <span className="font-bold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-cyan-100/70">{skill.level}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 1.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 shadow-[0_0_22px_rgba(25,242,255,0.34)]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="reveal mt-7 overflow-hidden rounded-full border border-white/10 bg-white/[0.035] py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-3 whitespace-nowrap"
        >
          {marquee.map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-cyan-200/10 bg-cyan-200/5 px-5 py-2 text-sm font-semibold text-cyan-50/80">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

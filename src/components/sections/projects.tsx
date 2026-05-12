"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { contact, projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects & Achievements"
        title="Practical work from the resume."
        copy="Final year project, competitions, and learning milestones aligned with the PDF resume."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="reveal premium-border rounded-[30px] p-px"
            >
              <div className="group relative h-full overflow-hidden rounded-[29px] border border-white/10 bg-[#070b11]/82 p-5 backdrop-blur-2xl">
                <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl transition duration-500 group-hover:opacity-35`} />
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-35`} />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14),transparent_35%,rgba(255,255,255,0.08))]" />
                  <div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-black/45 text-white backdrop-blur">
                    <Icon size={28} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="h-2 w-24 rounded-full bg-white/45" />
                    <div className="mt-3 h-2 w-40 rounded-full bg-white/22" />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-sm font-semibold text-cyan-100/70">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <a href={contact.resumeHref} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-105">
                      <Download size={16} /> Resume
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">
                      <ExternalLink size={16} /> Contact
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

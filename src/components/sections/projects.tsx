"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects & Achievements"
        title="Practical work with technical value."
        copy="Selected projects and achievements that show problem solving, infrastructure awareness, and clear communication."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              whileHover={{
                y: -6,
                rotateX: 1,
                rotateY: index % 2 ? -1 : 1,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="reveal mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#0b0f17] p-6 shadow-sm backdrop-blur-xl md:max-w-none hover:border-white/20 transition"
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 text-white">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-400">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
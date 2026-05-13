"use client";

import { BackgroundScene } from "@/components/ui/background-scene";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { contact } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";

const typingWords = ["IT support workflows.", "network fundamentals.", "endpoint reliability.", "IoT solutions."];
const heroHighlights = ["Infrastructure", "Endpoint Support", "Networking", "Mobile & IoT"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[78svh] place-items-center overflow-hidden px-3 pb-10 pt-24 text-center sm:min-h-screen sm:px-4 sm:pb-12 sm:pt-28"
    >
      <BackgroundScene />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,30%),rgba(25,242,255,0.13),transparent_24rem)]" />
      <div className="ambient-ring left-[8%] top-[20%] hidden h-48 w-48 animate-[float_7s_ease-in-out_infinite] md:block" />
      <div className="ambient-ring bottom-[16%] right-[7%] hidden h-72 w-72 animate-[float_9s_ease-in-out_infinite] md:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
            className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.32em]"
          >
            <Sparkles size={14} />
            Resume Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-balance text-[clamp(2.55rem,14vw,4.75rem)] font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Muhammad Akmal <span className="text-gradient block">Nazmi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.22, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl sm:mt-7"
          >
            <p className="text-base font-semibold leading-7 text-white sm:text-xl">
              IT Infrastructure Student | IT Support | Networking
            </p>
            <div className="mx-auto mt-3 h-7 overflow-hidden text-base text-cyan-100/80 sm:mt-4 sm:h-8 sm:text-xl">
              <motion.div
                animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                {typingWords.map((word) => (
                  <div key={word} className="h-7 sm:h-8">
                    Building practical {word}
                  </div>
                ))}
              </motion.div>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
              Internship-ready IT Infrastructure student with hands-on support experience across
              endpoints, user access, basic networking, system maintenance, and practical IoT development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.42, duration: 0.8 }}
            className="mx-auto mt-7 grid w-full max-w-sm gap-3 sm:mt-9 sm:max-w-none sm:grid-cols-3"
          >
            <MagneticButton href="#projects" className="w-full">
              <span className="flex items-center gap-2">
                View Projects <ArrowDown size={16} />
              </span>
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" className="w-full">
              <span className="flex items-center gap-2">
                Contact Me <Mail size={16} />
              </span>
            </MagneticButton>
            <MagneticButton href={contact.resumeHref} variant="ghost" className="w-full">
              <span className="flex items-center gap-2">
                Resume <Download size={16} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.58, duration: 0.8, ease: "easeOut" }}
          className="glass mt-7 grid w-full max-w-3xl gap-2 rounded-[24px] p-3 text-center sm:mt-10 sm:grid-cols-4 sm:gap-0 sm:rounded-[30px] sm:p-4"
        >
          {heroHighlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 sm:border-0 sm:bg-transparent">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">Focus</p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.8, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.34em] text-white/45 md:flex"
      >
        Scroll
        <span className="h-12 w-px bg-gradient-to-b from-cyan-200 to-transparent" />
      </motion.a>
    </section>
  );
}

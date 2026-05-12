"use client";

import { BackgroundScene } from "@/components/ui/background-scene";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { techOrbit } from "@/data/portfolio";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

const typingWords = ["Infrastructure.", "Mobile Apps.", "IoT Systems.", "Cloud Ideas."];

export function Hero() {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.24), transparent 32%)`;

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    glowX.set(x);
    glowY.set(y);
    rotateY.set((x - 50) * 0.12);
    rotateX.set((50 - y) * 0.12);
  };

  const resetPortrait = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <section id="home" className="relative grid min-h-screen place-items-center overflow-hidden px-4 pb-12 pt-28">
      <BackgroundScene />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,30%),rgba(25,242,255,0.13),transparent_24rem)]" />
      <div className="ambient-ring left-[8%] top-[20%] h-48 w-48 animate-[float_7s_ease-in-out_infinite]" />
      <div className="ambient-ring bottom-[16%] right-[7%] h-72 w-72 animate-[float_9s_ease-in-out_infinite]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100"
          >
            <Sparkles size={14} />
            Portfolio OS online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.9, ease: "easeOut" }}
            className="text-balance text-5xl font-black leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Muhammad Akmal <span className="text-gradient block">Nazmi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.22, duration: 0.8 }}
            className="mt-7 max-w-2xl"
          >
            <p className="text-lg font-semibold text-white sm:text-xl">
              IT Infrastructure Student | Mobile & Web Developer | IoT Enthusiast
            </p>
            <div className="mt-4 h-8 overflow-hidden text-lg text-cyan-100/80 sm:text-xl">
              <motion.div
                animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                {typingWords.map((word) => (
                  <div key={word} className="h-8">
                    Building resilient {word}
                  </div>
                ))}
              </motion.div>
            </div>
            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-300">
              An aspiring IT engineer from UiTM Shah Alam crafting reliable infrastructure, useful apps,
              and connected systems with a sharp eye for modern technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.42, duration: 0.8 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#projects">
              <span className="flex items-center gap-2">
                View Projects <ArrowDown size={16} />
              </span>
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <span className="flex items-center gap-2">
                Contact Me <Mail size={16} />
              </span>
            </MagneticButton>
            <MagneticButton href="#" variant="ghost" className="sm:px-5">
              <span className="flex items-center gap-2">
                Resume <Download size={16} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 12 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 2.14, duration: 1, ease: "easeOut" }}
          className="relative mx-auto mt-6 aspect-square w-full max-w-[430px] sm:max-w-[500px] lg:mt-0 lg:max-w-[540px] lg:translate-x-2"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.58, 0.9, 0.58] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300/30 via-violet-300/24 to-emerald-300/30 blur-3xl"
          />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(25,242,255,0.16),transparent_58%)]" />
          <div className="absolute inset-12 rounded-[42px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,rgba(25,242,255,0.14))] blur-2xl" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="profile-ring absolute inset-3 rounded-full sm:inset-5"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-dashed border-cyan-100/20 sm:inset-14"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 rounded-full border border-violet-200/10 sm:inset-24"
          />

          <motion.div
            onMouseMove={handlePortraitMove}
            onMouseLeave={resetPortrait}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="profile-card scanline glass group absolute inset-9 overflow-hidden rounded-[34px] p-2.5 shadow-[0_34px_120px_rgba(25,242,255,0.18)] sm:inset-14 sm:rounded-[40px] sm:p-3"
          >
            <motion.div style={{ background: spotlight }} className="pointer-events-none absolute inset-0 z-20 opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(25,242,255,0.18),transparent_28%,rgba(156,124,255,0.18)_64%,rgba(105,255,200,0.14))]" />
            <div className="absolute inset-px rounded-[32px] border border-white/18 sm:rounded-[38px]" />
            <div className="absolute left-5 top-5 z-30 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-md">
              IT Engineer
            </div>
            <div className="absolute bottom-5 right-5 z-30 h-20 w-20 rounded-full border border-cyan-200/20 bg-cyan-200/10 blur-xl" />

            <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-[#05080c] sm:rounded-[30px]">
              <Image
                src="/images/akmal.png"
                alt="Muhammad Akmal Nazmi profile portrait"
                width={720}
                height={900}
                priority
                sizes="(max-width: 768px) 78vw, 420px"
                className="h-full w-full object-cover object-center grayscale-[18%] saturate-125 transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030507] via-transparent to-cyan-200/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-2xl border border-white/10 bg-black/36 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/65">Muhammad Akmal Nazmi</p>
                  <p className="mt-1 text-sm font-semibold text-white">Infrastructure | Mobile | IoT</p>
                </div>
              </div>
            </div>
          </motion.div>

          {techOrbit.map((tech, index) => {
            const Icon = tech.icon;
            const angle = (index / techOrbit.length) * Math.PI * 2;
            const x = 44 + Math.cos(angle) * 38;
            const y = 44 + Math.sin(angle) * 38;
            return (
              <motion.div
                key={tech.label}
                animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute grid h-16 w-16 place-items-center rounded-2xl text-cyan-100"
                style={{ left: `${x}%`, top: `${y}%` }}
                title={tech.label}
              >
                <Icon size={24} />
              </motion.div>
            );
          })}
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

"use client";

import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500",
          scrolled ? "glass shadow-2xl" : "border border-white/0 bg-transparent"
        )}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to hero">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-black shadow-[0_0_28px_rgba(25,242,255,0.22)]">
            A
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Akmal Nazmi</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-white/66 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200/20 md:inline-flex"
        >
          Connect
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="glass mx-auto mt-3 w-[calc(100%-16px)] max-w-6xl rounded-[24px] p-3 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => setOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="block rounded-2xl px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary"
}: {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "magnetic group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition-transform duration-300",
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_34px_rgba(25,242,255,0.24)]"
          : "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl",
        className
      )}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-y-0 -left-12 w-12 rotate-12 bg-white/60 blur-md transition-transform duration-700 group-hover:translate-x-64" />
      </span>
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34 });
  const springY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    const enter = (event: Event) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea, [data-cursor='magnetic']")));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", enter);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.85 : 1, opacity: active ? 0.74 : 0.42 }}
      className="pointer-events-none fixed left-0 top-0 z-[115] hidden h-9 w-9 rounded-full border border-cyan-200/70 mix-blend-screen shadow-[0_0_24px_rgba(25,242,255,0.6)] md:block"
    />
  );
}

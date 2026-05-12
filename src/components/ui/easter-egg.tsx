"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function EasterEgg() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sequence = ["a", "k", "m", "a", "l"];
    let index = 0;
    const handler = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === sequence[index]) {
        index += 1;
        if (index === sequence.length) {
          setVisible(true);
          window.setTimeout(() => setVisible(false), 2600);
          index = 0;
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          className="glass fixed bottom-20 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 text-sm text-white"
        >
          <Sparkles size={17} className="text-cyan-200" />
          Akmal mode unlocked: infrastructure with style.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

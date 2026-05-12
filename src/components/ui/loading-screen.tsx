"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[120] grid place-items-center bg-[#030507]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,242,255,0.16),transparent_36rem)]" />
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative h-28 w-28">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyan-300/20 border-t-cyan-300"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-violet-300/20 border-b-violet-300"
              />
              <div className="absolute inset-0 grid place-items-center text-xl font-black tracking-[0.18em] text-white">
                MAN
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.6em] text-cyan-100/70">Initializing portfolio</p>
              <motion.div className="mt-4 h-1 w-64 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.55, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

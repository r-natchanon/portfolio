"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function StaggerGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: false, amount: 0.12, margin: "-5% 0px -5%" }}
      variants={{
        hidden: {},
        visible: {
          transition: reduced ? {} : { staggerChildren: 0.07, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduced ? undefined : {
        hidden: { opacity: 0, y: 20, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.56, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

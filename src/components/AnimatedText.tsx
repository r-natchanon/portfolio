"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedWords({ text, className = "" }: { text: string; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: false, amount: 0.55, margin: "-5% 0px -5%" }}
      variants={{
        hidden: {},
        visible: { transition: reducedMotion ? {} : { staggerChildren: 0.055 } },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          aria-hidden="true"
          className={index === text.split(" ").length - 1 ? "inline-block" : "mr-[0.24em] inline-block"}
          key={`${word}-${index}`}
          variants={reducedMotion ? undefined : {
            hidden: { opacity: 0, y: 16, filter: "blur(7px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.62, ease },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function SoftTextReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={reducedMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.65, margin: "-5% 0px -5%" }}
      transition={{ duration: 0.58, delay: reducedMotion ? 0 : delay, ease }}
    >
      {children}
    </motion.span>
  );
}

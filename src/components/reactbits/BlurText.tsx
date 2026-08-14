"use client";

import { motion, useReducedMotion } from "framer-motion";

type BlurTextProps = { text: string; className?: string; delay?: number };

export function BlurText({ text, className = "", delay = 0.045 }: BlurTextProps) {
  const reducedMotion = useReducedMotion();
  let characterIndex = 0;

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span aria-hidden="true" className="mr-[0.24em] inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character) => {
            const index = characterIndex++;
            return (
              <motion.span
                className="inline-block"
                initial={reducedMotion ? false : { opacity: 0, filter: "blur(9px)", y: 18 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: false, amount: 0.75 }}
                transition={{ duration: 0.56, delay: reducedMotion ? 0 : index * delay, ease: [0.22, 1, 0.36, 1] }}
                key={`${character}-${index}`}
              >
                {character}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

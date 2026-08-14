"use client";

import { ArrowDownRight, CodeXml as Github, Link as Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { AnimatedWords } from "./AnimatedText";
import { BlurText } from "./reactbits/BlurText";
import Particles from "./reactbits/Particles";
import { ShinyText } from "./reactbits/ShinyText";

const heroParticleColors = ["#ffffff", "#7fffd4", "#777772"];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 36]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -28]);

  return (
    <section ref={heroRef} id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <motion.div style={{ y: gridY }} className="hero-grid pointer-events-none absolute -inset-y-12 inset-x-0 will-change-transform" />
      <motion.div style={{ y: glowY }} className="hero-glow pointer-events-none absolute -right-40 top-24 size-[38rem] will-change-transform" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-55" aria-hidden="true">
        <Particles
          particleColors={heroParticleColors}
          particleCount={140}
          particleSpread={11}
          speed={0.07}
          particleBaseSize={72}
          sizeRandomness={0.8}
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="container-page relative z-10 grid w-full items-center gap-14 py-20 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-[.68rem] font-semibold uppercase tracking-[.14em]"
          >
            <span className="size-1.5 rounded-full bg-[#7fffd4] shadow-[0_0_14px_#7fffd4]" />
            <ShinyText text="Available for internship opportunities" />
          </motion.div>

          <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[.9] tracking-[-.075em]">
            <span className="block text-[#777772]"><AnimatedWords text="Hi, I'm" /></span>
            <BlurText text={portfolio.name} className="text-[#f4f4ef]" />
          </h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.58, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg font-medium text-[#7fffd4] sm:text-xl"
          >
            {portfolio.title}
          </motion.p>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.58, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-base text-[#c0c0ba] sm:text-lg"
          >
            {portfolio.role}
          </motion.p>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-[#92928c] sm:text-base"
          >
            {portfolio.bio}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="button-primary">View Projects <ArrowDownRight size={17} /></a>
            <a href={portfolio.resume} download="Natchanon_Ritthisak_Resume.pdf" className="button-secondary">Download Resume</a>
            <a href="#contact" className="button-secondary">Contact Me</a>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.56 }}
            className="mt-10 flex items-center gap-5 text-[#777772]"
          >
            <a aria-label="GitHub" href={portfolio.github} target="_blank" rel="noreferrer" className="transition hover:text-[#7fffd4]"><Github size={20} /></a>
            <a aria-label="LinkedIn" href={portfolio.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[#7fffd4]"><Linkedin size={20} /></a>
            <a aria-label="Email" href={`mailto:${portfolio.email}`} className="transition hover:text-[#7fffd4]"><Mail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[22rem] lg:ml-auto"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#7fffd4]/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#111] p-2">
            <div className="relative h-full overflow-hidden rounded-[1.55rem]">
              <Image
                src="/images/profile.jpg"
                alt={`${portfolio.name} profile photo`}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 80vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{portfolio.name}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[.62rem] uppercase tracking-wider backdrop-blur">Open to work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

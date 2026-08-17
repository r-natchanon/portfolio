"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#202020] bg-[#050505]/95 shadow-[0_10px_40px_rgba(0,0,0,.45)] backdrop-blur-xl">
      <nav className="container-page flex h-[4.5rem] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="group block" aria-label="Go to home">
          <span className="relative block h-10 w-28 overflow-hidden">
            <Image
              src="/images/brand-logo.png"
              alt="Natchanon Ritthisak"
              width={500}
              height={500}
              priority
              className="absolute -left-[15px] -top-[45px] h-32 w-32 max-w-none transition-opacity group-hover:opacity-80"
            />
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link} className="text-xs font-medium text-[#858580] transition hover:text-[#7fffd4]" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <a className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#7fffd4]/35 bg-[#7fffd4]/10 px-4 text-xs font-bold text-[#a8ffe2] transition hover:border-[#7fffd4] hover:bg-[#7fffd4] hover:text-black" href={portfolio.resume} download="Natchanon_Ritthisak_Resume.pdf">
            <Download size={14} /> Resume
          </a>
        </div>

        <button className="grid size-10 place-items-center rounded-full border border-[#292929] bg-[#0b0b0b] text-[#d0d0ca] transition hover:border-[#7fffd4]/50 hover:text-[#7fffd4] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-[#202020] bg-[#050505] px-6 py-5 lg:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-b border-[#181818] py-3 text-sm text-[#b5b5af] transition hover:text-[#7fffd4]">
              {link}
            </a>
          ))}
          <a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#7fffd4]/35 bg-[#7fffd4]/10 px-4 py-3 text-sm font-bold text-[#a8ffe2]" href={portfolio.resume} download="Natchanon_Ritthisak_Resume.pdf">
            <Download size={16} /> Download resume
          </a>
        </div>
      )}
    </header>
  );
}

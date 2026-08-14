import { ArrowUp, CodeXml as Github, Link as Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return <footer className="border-t border-white/[.07] bg-[#080808] py-7"><div className="container-page flex flex-wrap items-center justify-between gap-4 text-xs text-[#686863]"><p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p><div className="flex items-center gap-4"><a aria-label="GitHub" href={portfolio.github} target="_blank" rel="noreferrer" className="transition hover:text-[#7fffd4]"><Github size={18} /></a><a aria-label="LinkedIn" href={portfolio.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[#7fffd4]"><Linkedin size={18} /></a><a href="#home" aria-label="Back to top" className="grid size-9 place-items-center rounded-full border border-white/10 text-[#aaa] transition hover:border-[#7fffd4]/40 hover:text-[#7fffd4]"><ArrowUp size={15} /></a></div></div></footer>;
}

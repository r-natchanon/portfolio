import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function Education() {
  return <section id="education" className="section section-rule"><div className="container-page"><Reveal><SectionHeading eyebrow="Education" title="Academic foundation." /></Reveal><Reveal delay={.1}><SpotlightCard className="card mt-12 flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:p-9"><span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#7fffd4]/20 bg-[#7fffd4]/10 text-[#7fffd4]"><GraduationCap /></span><div className="flex-1"><div className="flex flex-wrap justify-between gap-4"><div><h3 className="text-xl font-semibold">{portfolio.degree}</h3><p className="mt-2 text-[#7fffd4]">{portfolio.major}</p></div><p className="text-sm text-[#777772]">{portfolio.studyPeriod}</p></div><p className="mt-5 text-sm text-[#92928c]">{portfolio.university} · {portfolio.year}</p></div></SpotlightCard></Reveal></div></section>;
}

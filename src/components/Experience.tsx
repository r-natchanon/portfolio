import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { Reveal } from "./Reveal";
import { StaggerGroup, StaggerItem } from "./ScrollMotion";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function Experience() {
  return <section id="experience" className="section section-rule bg-[#080808]"><div className="container-page"><Reveal><SectionHeading eyebrow="Experience" title="Learning through real contribution." description="Use this timeline for internships, part-time roles, freelance work, or university activities." /></Reveal><StaggerGroup className="relative mt-14 space-y-5 before:absolute before:bottom-8 before:left-[1.1rem] before:top-8 before:w-px before:bg-white/10 sm:before:left-[2.1rem]">{experiences.map((item) => <StaggerItem key={`${item.role}-${item.organization}`}><SpotlightCard className="card relative grid gap-6 p-6 pl-16 sm:grid-cols-[auto_1fr] sm:p-8 sm:pl-24"><span className="absolute left-[.28rem] top-7 grid size-9 place-items-center rounded-full border border-[#7fffd4]/30 bg-[#0b1713] text-[#7fffd4] sm:left-[1.28rem]"><Briefcase size={15} /></span><p className="w-32 text-xs font-semibold uppercase tracking-[.1em] text-[#777772]">{item.period}</p><div><div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-semibold">{item.role}</h3><span className="rounded-full border border-white/10 px-2.5 py-1 text-[.6rem] uppercase tracking-wider text-white/45">{item.type}</span></div><p className="mt-2 text-sm text-[#7fffd4]">{item.organization}</p><ul className="mt-5 space-y-2 text-sm leading-6 text-[#8e8e88]">{item.responsibilities.map((responsibility) => <li className="flex gap-3" key={responsibility}><span className="mt-[.6rem] size-1 shrink-0 rounded-full bg-white/40" />{responsibility}</li>)}</ul></div></SpotlightCard></StaggerItem>)}</StaggerGroup></div></section>;
}

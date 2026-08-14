import { GraduationCap, MapPin, Target } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { StaggerGroup, StaggerItem } from "./ScrollMotion";
import { SectionHeading } from "./SectionHeading";
import { CountUp } from "./reactbits/CountUp";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function About() {
  return (
    <section id="about" className="section section-rule">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Building a foundation for meaningful work."
            description="I enjoy turning ideas into thoughtful, reliable digital experiences and continuously expanding my engineering skills."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid items-stretch gap-5 lg:grid-cols-12">
          <StaggerItem className="h-full lg:col-span-7">
            <SpotlightCard className="card flex h-full flex-col p-7 sm:p-9">
              <p className="text-xl leading-8 tracking-[-.025em] text-[#d5d5cf] sm:text-2xl sm:leading-9">
                {portfolio.bio}
              </p>
              <div className="mt-auto grid gap-5 border-t border-white/[.07] pt-7 text-sm sm:mt-10 sm:grid-cols-2">
                <div>
                  <p className="text-[#70706b]">University</p>
                  <p className="mt-1.5 leading-6 text-[#bdbdb7]">{portfolio.university}</p>
                </div>
                <div>
                  <p className="text-[#70706b]">Degree</p>
                  <p className="mt-1.5 leading-6 text-[#bdbdb7]">{portfolio.degree} in {portfolio.major}</p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          <StaggerItem className="h-full lg:col-span-5">
            <SpotlightCard className="card flex h-full flex-col p-7 sm:p-9">
              <span className="grid size-11 place-items-center rounded-xl border border-[#7fffd4]/20 bg-[#7fffd4]/10 text-[#7fffd4]">
                <GraduationCap size={21} />
              </span>
              <p className="mt-7 text-xs uppercase tracking-[.14em] text-[#777772]">Career interests</p>
              <p className="mt-3 text-lg font-semibold leading-7">Frontend, full-stack development, and practical IT systems.</p>
              <div className="mt-7 flex gap-3 border-t border-white/[.07] pt-6">
                <Target className="mt-0.5 shrink-0 text-[#7fffd4]" size={19} />
                <p className="text-sm leading-6 text-[#8f8f89]">Contribute to a collaborative team while learning professional delivery practices.</p>
              </div>
              <div className="mt-auto flex items-center gap-2 pt-7 text-sm text-[#777772]">
                <MapPin size={16} className="text-[#7fffd4]" />
                {portfolio.location}
              </div>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup className="mt-5 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
          {portfolio.stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <SpotlightCard className="card h-full p-6">
                <p className="text-4xl font-semibold tracking-[-.055em] text-[#7fffd4]">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-[#777772]">{stat.label}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

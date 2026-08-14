"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillLogo } from "./SkillLogo";
import { LogoLoop } from "./reactbits/LogoLoop";

const allSkills = skillGroups.flatMap((group) => group.skills);
const categories = skillGroups.map((group) => group.category);

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const visibleSkills = skillGroups.find((group) => group.category === activeCategory)?.skills ?? [];

  return (
    <section id="skills" className="section section-rule overflow-hidden bg-[#080808]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to build and learn."
            description="A growing technical toolkit focused on creating useful, maintainable applications."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 border-y border-white/[.07] py-7 sm:py-8">
            <LogoLoop skills={allSkills} />
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="skills-showcase mt-10">
            <div
              className="skill-filters"
              role="tablist"
              aria-label="Filter skills by category"
            >
              {categories.map((category) => (
                <button
                  className="skill-filter"
                  data-active={activeCategory === category}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  type="button"
                  aria-controls="skills-grid"
                  aria-selected={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div
              className="skills-grid"
              id="skills-grid"
              key={activeCategory}
              role="tabpanel"
              aria-label={`${activeCategory} skills`}
            >
              {visibleSkills.map((skill, index) => (
                <div
                  className="skill-card-entry"
                  key={skill}
                  style={{ "--skill-index": index } as React.CSSProperties}
                >
                  <SkillLogo skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

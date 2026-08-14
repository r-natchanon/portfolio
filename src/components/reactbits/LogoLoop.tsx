"use client";

import { SkillLogo } from "../SkillLogo";

export function LogoLoop({ skills }: { skills: string[] }) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="logo-loop" aria-label="Technology logos">
      <div className="logo-loop-track">
        {repeatedSkills.map((skill, index) => (
          <span aria-hidden={index >= skills.length} key={`${skill}-${index}`}>
            <SkillLogo skill={skill} logoOnly />
          </span>
        ))}
      </div>
    </div>
  );
}

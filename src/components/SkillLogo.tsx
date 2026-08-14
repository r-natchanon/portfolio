import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

type LogoDefinition = {
  icon: IconType;
  color: string;
  background: string;
};

const logos: Record<string, LogoDefinition> = {
  HTML: { icon: SiHtml5, color: "#e34f26", background: "rgba(227,79,38,.12)" },
  CSS: { icon: SiCss, color: "#663399", background: "rgba(102,51,153,.14)" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e", background: "rgba(247,223,30,.11)" },
  TypeScript: { icon: SiTypescript, color: "#3178c6", background: "rgba(49,120,198,.14)" },
  React: { icon: SiReact, color: "#61dafb", background: "rgba(97,218,251,.11)" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff", background: "rgba(255,255,255,.08)" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4", background: "rgba(6,182,212,.12)" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e", background: "rgba(95,160,78,.13)" },
  "Express.js": { icon: SiExpress, color: "#deded8", background: "rgba(255,255,255,.07)" },
  PHP: { icon: SiPhp, color: "#777bb4", background: "rgba(119,123,180,.14)" },
  "REST APIs": { icon: TbApi, color: "#7fffd4", background: "rgba(127,255,212,.1)" },
  JWT: { icon: SiJsonwebtokens, color: "#d8d8d3", background: "rgba(255,255,255,.07)" },
  MySQL: { icon: SiMysql, color: "#4479a1", background: "rgba(68,121,161,.14)" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e", background: "rgba(62,207,142,.11)" },
  Git: { icon: SiGit, color: "#f05032", background: "rgba(240,80,50,.12)" },
  GitHub: { icon: SiGithub, color: "#ffffff", background: "rgba(255,255,255,.08)" },
  "VS Code": { icon: VscCode, color: "#007acc", background: "rgba(0,122,204,.14)" },
  Flutter: { icon: SiFlutter, color: "#54c5f8", background: "rgba(84,197,248,.12)" },
};

export function SkillLogo({ skill, logoOnly = false }: { skill: string; logoOnly?: boolean }) {
  const definition = logos[skill] ?? logos["REST APIs"];
  const Icon = definition.icon;

  return (
    <span
      className={`skill-logo ${logoOnly ? "skill-logo-only" : ""}`}
      style={{ "--skill-color": definition.color, "--skill-background": definition.background } as React.CSSProperties}
      aria-label={logoOnly ? skill : undefined}
      role={logoOnly ? "img" : undefined}
    >
      <span className="skill-logo-icon" aria-hidden="true"><Icon /></span>
      {!logoOnly && <span className="skill-logo-name">{skill}</span>}
    </span>
  );
}

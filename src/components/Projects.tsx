import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { StaggerGroup, StaggerItem } from "./ScrollMotion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return <section id="projects" className="section section-rule"><div className="container-page"><Reveal><SectionHeading eyebrow="Selected work" title="Projects that solve practical problems." description="Each project represents an opportunity to apply engineering fundamentals to a real user need." /></Reveal><StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">{projects.map((project, index) => <StaggerItem key={project.title} className="h-full"><ProjectCard project={project} index={index} /></StaggerItem>)}</StaggerGroup></div></section>;
}

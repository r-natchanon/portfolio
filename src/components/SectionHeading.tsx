import { AnimatedWords, SoftTextReveal } from "./AnimatedText";

type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow"><SoftTextReveal>{eyebrow}</SoftTextReveal></p>
      <h2 className={`section-title ${align === "center" ? "mx-auto" : ""}`}>
        <AnimatedWords text={title} />
      </h2>
      {description && <p className={`section-copy ${align === "center" ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}

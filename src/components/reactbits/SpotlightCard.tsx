"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type SpotlightCardProps = { children: ReactNode; className?: string; spotlightColor?: string };
type SpotlightStyle = CSSProperties & { "--spotlight-x": string; "--spotlight-y": string; "--spotlight-color": string };

export function SpotlightCard({ children, className = "", spotlightColor = "rgba(127, 255, 212, 0.1)" }: SpotlightCardProps) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };
  const style: SpotlightStyle = { "--spotlight-x": "50%", "--spotlight-y": "50%", "--spotlight-color": spotlightColor };
  return <article className={`spotlight-card ${className}`} onMouseMove={handleMove} style={style}>{children}</article>;
}

"use client";

import type { ReactNode } from "react";
import ClickSpark from "./ClickSpark";

export function ClickSparkProvider({ children }: { children: ReactNode }) {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}

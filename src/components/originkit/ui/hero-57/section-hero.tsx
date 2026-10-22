 
// @ts-nocheck
"use client";
import type { ReactNode } from "react";
import Content from "@/components/originkit/ui/hero-57/hero-57-content";

export function SectionHero({ children }: { children?: ReactNode }) {
  return (
    <div className="hero-57">
      <Content>{children}</Content>
    </div>
  );
}

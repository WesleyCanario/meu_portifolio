"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

// Adiciona um fade/slide sutil quando o elemento entra na viewport, sem dependências externas.
export function RevealOnScroll({ children, className = "", delayMs = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delayMs}ms`;
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

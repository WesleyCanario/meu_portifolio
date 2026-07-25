"use client";

import { useEffect, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { getParticleCountForWidth, getParticlesOptions } from "@/data/particlesConfig";

// Precisa ser uma referência estável (definida fora do componente) —
// o ParticlesProvider lança erro se o callback `init` mudar entre renders.
async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

export function ParticlesBackground() {
  // null = ainda não decidiu; 0 = desativado (reduced motion); >0 = quantidade de partículas.
  const [particleCount, setParticleCount] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setParticleCount(0);
      return;
    }

    const updateCount = () => setParticleCount(getParticleCountForWidth(window.innerWidth));
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  if (!particleCount) return null;

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="tsparticles-bg"
        className="pointer-events-none fixed inset-0 -z-10"
        options={getParticlesOptions(particleCount)}
      />
    </ParticlesProvider>
  );
}

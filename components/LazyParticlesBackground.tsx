"use client";

import dynamic from "next/dynamic";

// Code-split: o bundle do tsparticles só é baixado depois do primeiro render
// da página, e nunca no servidor (evita custo de SSR para uma API de canvas).
const ParticlesBackground = dynamic(
  () => import("./ParticlesBackground").then((mod) => mod.ParticlesBackground),
  { ssr: false }
);

export { ParticlesBackground as LazyParticlesBackground };

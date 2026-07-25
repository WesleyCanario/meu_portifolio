import type { ISourceOptions } from "@tsparticles/engine";

// Cores do fundo de partículas — ajuste aqui para mudar a identidade visual.
// Mantém a mesma paleta do site: amarelo (Power BI) e azul (dados/SQL).
const PARTICLE_COLORS = ["#F2C811", "#3B82F6"];
const LINK_COLOR = "#64748B"; // cinza-azulado neutro, para não competir com o texto.

// Densidade de partículas por faixa de largura de tela — ajuste aqui a performance/densidade.
export const PARTICLE_COUNT_BY_BREAKPOINT = {
  mobile: 22, // < 768px
  tablet: 42, // < 1280px
  desktop: 65, // >= 1280px
};

export function getParticleCountForWidth(width: number): number {
  if (width < 768) return PARTICLE_COUNT_BY_BREAKPOINT.mobile;
  if (width < 1280) return PARTICLE_COUNT_BY_BREAKPOINT.tablet;
  return PARTICLE_COUNT_BY_BREAKPOINT.desktop;
}

// Gera as opções do tsparticles para uma dada quantidade de partículas.
// Nota: nesta versão do tsparticles (v4 / @tsparticles/engine 4.x), a cor do
// preenchimento das partículas fica em `particles.paint.color`, não em
// `particles.color` como em versões antigas da documentação.
export function getParticlesOptions(count: number): ISourceOptions {
  return {
    fpsLimit: 60,
    detectRetina: true,
    fullScreen: { enable: false },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    particles: {
      number: {
        value: count,
        density: { enable: false },
      },
      paint: {
        color: { value: PARTICLE_COLORS },
      },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.12, max: 0.35 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 140,
        color: LINK_COLOR,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
  };
}

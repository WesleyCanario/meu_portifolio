import { ArrowRight, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { Container } from "./Container";
import { RevealOnScroll } from "./RevealOnScroll";

// Iniciais usadas como avatar placeholder até que uma foto real seja adicionada.
const initials = personal.name
  .split(" ")
  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
  .map((word) => word[0])
  .join("");

export function Hero() {
  return (
    <section id="top" className="relative flex items-center pb-16 pt-28 sm:pb-24 sm:pt-36">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          {personal.availableForWork && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-xs font-medium text-secondary-dark dark:border-secondary/30 dark:bg-secondary/10 dark:text-secondary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Disponível para novos projetos
            </div>
          )}

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            {personal.name}
          </h1>

          <p className="mt-4 text-lg font-medium text-zinc-500 sm:text-xl dark:text-zinc-400">
            {personal.role}
          </p>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {personal.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            {personal.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-accent-dark"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-secondary hover:text-secondary-dark dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-secondary dark:hover:text-secondary-light"
            >
              Fale comigo
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={150} className="flex justify-center lg:justify-end">
          {/* TODO: trocar por <Image src="/avatar.jpg" .../> quando houver uma foto real. */}
          <div className="rounded-full bg-gradient-to-br from-accent/60 via-secondary/40 to-accent/60 p-[3px]">
            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-zinc-100 text-5xl font-semibold text-zinc-400 sm:h-72 sm:w-72 lg:h-[374px] lg:w-[374px] dark:bg-zinc-950 dark:text-zinc-600">
              {initials}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

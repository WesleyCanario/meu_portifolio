import { ArrowRight, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { RevealOnScroll } from "./RevealOnScroll";

// Iniciais usadas como avatar placeholder até que uma foto real seja adicionada.
const initials = personal.name
  .split(" ")
  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
  .map((word) => word[0])
  .join("");

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto grid w-full max-w-content items-center gap-12 px-6 sm:px-8 md:grid-cols-[1.3fr_0.7fr] md:gap-8">
        <RevealOnScroll>
          {personal.availableForWork && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Disponível para novos projetos
            </div>
          )}

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
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
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
            >
              Fale comigo
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={150} className="flex justify-center md:justify-end">
          {/* TODO: trocar por <Image src="/avatar.jpg" .../> quando houver uma foto real. */}
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-3xl font-semibold text-zinc-400 sm:h-52 sm:w-52 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600">
            {initials}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-zinc-100 py-24 sm:py-32 dark:border-zinc-900">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos"
            subtitle="Em breve, meus primeiros cases de análise de dados."
          />
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* O grid é gerado a partir de data/projects.ts — adicionar um projeto novo é só incluir um item no array. */}
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title + index} delayMs={index * 80}>
              <div className="flex h-full flex-col rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
                  <FolderGit2 className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.inProgress && (
                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-accent">
                    Projeto em andamento
                  </p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

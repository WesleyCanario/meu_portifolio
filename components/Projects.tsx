import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "./Container";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-zinc-200/60 py-20 sm:py-28 dark:border-zinc-800/60">
      <Container>
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
              <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white/60 p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_28px_-10px_rgba(242,200,17,0.5)] dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FolderGit2 className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 text-base font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs text-secondary-dark dark:text-secondary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.inProgress && (
                  <p className="mt-5 inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-900">
                    Em andamento
                  </p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

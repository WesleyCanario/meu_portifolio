import { certifications, education, experience } from "@/data/experience";
import { Container } from "./Container";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-zinc-200/60 py-20 sm:py-28 dark:border-zinc-800/60">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Trajetória"
            title="Experiência"
            subtitle="Uma linha do tempo das empresas e projetos por onde passei."
          />
        </RevealOnScroll>

        <ol className="relative max-w-3xl border-l border-secondary/25 pl-8 dark:border-secondary/25">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.3rem] top-1.5 h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_0_rgba(59,130,246,0.6)]" />
              <RevealOnScroll delayMs={index * 60}>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.role} · {item.company}
                </h3>
                {item.location && (
                  <p className="mt-0.5 text-sm text-zinc-400 dark:text-zinc-500">{item.location}</p>
                )}
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        <RevealOnScroll>
          <div className="mt-16 grid max-w-3xl gap-10 border-t border-zinc-100 pt-12 sm:grid-cols-2 dark:border-zinc-900">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Formação acadêmica
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{item.degree}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.institution} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Certificações
              </h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
